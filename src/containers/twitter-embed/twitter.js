import React, {Suspense, useContext, useState, useEffect} from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const renderLoader = () => <Loading />;

export default function Twitter() {
  const {isDark} = useContext(StyleContext);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (!twitterDetails.display || !twitterDetails.userName) return;
    const timer = setTimeout(() => {
      const el = document.getElementById("twitter");
      if (el && !el.querySelector("iframe")) {
        setLoadFailed(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
    return null;
  }

  if (loadFailed) {
    return (
      <div className="tw-main-div" id="twitter">
        <div className="centerContent">
          <h2>Can&apos;t load? Check privacy protection settings</h2>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={renderLoader()}>
      <div className="tw-main-div" id="twitter">
        <div className="centerContent">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={twitterDetails.userName}
            options={{height: 400, width: window.screen.width}}
            placeholder={renderLoader()}
            autoHeight={false}
            borderColor="#fff"
            key={isDark ? "1" : "2"}
            theme={isDark ? "dark" : "light"}
            noFooter={true}
          />
        </div>
      </div>
    </Suspense>
  );
}
