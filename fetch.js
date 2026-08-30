const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

// Validate username contains only safe characters (alphanumeric, hyphens,
// underscores). Medium handles allow underscores; dots stay disallowed so a
// username can never introduce path traversal into the request URL.
function isValidUsername(username) {
  return /^[a-zA-Z0-9_-]+$/.test(username);
}

// GitHub's GraphQL API returns HTTP 200 with a partial payload when a field is
// not readable by the caller: the offending field's whole parent node comes back
// as null alongside an `errors` array. Writing that raw payload used to hand the
// UI `{node: null}` entries, which crashed rendering. Drop the unusable pieces
// here so the site only ever sees complete records.
function sanitizeProfileResponse(rawBody) {
  let parsed;
  try {
    parsed = JSON.parse(rawBody);
  } catch (error) {
    console.warn(
      `GitHub profile response was not valid JSON: ${error.message}`
    );
    return null;
  }

  if (Array.isArray(parsed.errors)) {
    parsed.errors.forEach(error => {
      console.warn(
        `GitHub GraphQL ${error.type || "error"} at ${(error.path || []).join(".")}: ${error.message}`
      );
    });
  }

  const user = parsed.data && parsed.data.user;
  if (!user) {
    console.warn("GitHub GraphQL response contained no user data.");
    return null;
  }

  if (user.pinnedItems && Array.isArray(user.pinnedItems.edges)) {
    const usable = user.pinnedItems.edges.filter(
      edge => edge && edge.node && edge.node.id
    );
    const dropped = user.pinnedItems.edges.length - usable.length;
    if (dropped > 0) {
      console.warn(
        `Dropped ${dropped} pinned repository record(s) that came back incomplete.`
      );
    }
    user.pinnedItems.edges = usable;
    user.pinnedItems.totalCount = usable.length;
  }

  // The app only ever reads `data`; keeping `errors` around just invites the
  // next consumer to trip over a partial payload.
  return JSON.stringify({data: parsed.data});
}

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};
if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  if (!isValidUsername(GITHUB_USERNAME)) {
    throw new Error(
      "GitHub username contains invalid characters. Only alphanumeric characters and hyphens are allowed."
    );
  }

  if (!GITHUB_TOKEN) {
    console.warn(
      "REACT_APP_GITHUB_TOKEN is not set; skipping GitHub profile fetch."
    );
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazerCount
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });
  const default_options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(default_options, res => {
    let data = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.warn(ERR.requestFailed);
      res.resume();
      return;
    }

    res.on("data", d => {
      data += d;
    });
    res.on("end", () => {
      const sanitized = sanitizeProfileResponse(data);
      if (!sanitized) {
        console.warn(
          "GitHub profile data was unusable; leaving public/profile.json untouched."
        );
        return;
      }
      fs.writeFile("./public/profile.json", sanitized, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/profile.json");
      });
    });
  });

  req.on("error", error => {
    console.warn(`GitHub fetch skipped: ${error.message}`);
  });

  req.write(data);
  req.end();
}

if (MEDIUM_USERNAME !== undefined && MEDIUM_USERNAME !== "") {
  if (!isValidUsername(MEDIUM_USERNAME)) {
    throw new Error(
      "Medium username contains invalid characters. Only alphanumeric characters and hyphens are allowed."
    );
  }

  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.warn(ERR.requestFailedMedium);
      res.resume();
      return;
    }

    res.on("data", d => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    console.warn(`Medium fetch skipped: ${error.message}`);
  });

  req.end();
}
