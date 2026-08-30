// Some of the URLs rendered here come from data we do not control (the GitHub
// API, and the Medium feed by way of rss2json). `javascript:` and `data:` URLs
// passed to window.open execute in this page's origin, so only allow the two
// schemes that can never do that.
export const isSafeExternalUrl = url => {
  if (typeof url !== "string") {
    return false;
  }
  try {
    const {protocol} = new URL(url, window.location.origin);
    return protocol === "https:" || protocol === "http:";
  } catch {
    return false;
  }
};

// Opens a link in a new tab without handing the destination a reference back to
// this page. Without "noopener" the opened document can reach us through
// window.opener and redirect this tab (reverse tabnabbing).
export const openUrlInNewTab = (url, name) => {
  if (!url) {
    console.log(`URL in ${name} is undefined`);
    return;
  }
  if (!isSafeExternalUrl(url)) {
    console.warn(`Refusing to open unsafe URL in ${name}`);
    return;
  }
  // Returns null when a popup blocker intervenes, so never dereference it.
  window.open(url, "_blank", "noopener,noreferrer");
};

export const formatFileSizeDisplay = value => {
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};
