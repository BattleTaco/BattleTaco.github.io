import React, {useState, useRef, useCallback} from "react";
import "./ExperienceCard.scss";
// colorthief 3 dropped the default-exported class for named functions, and
// returns a Color object rather than a bare [r, g, b] tuple. `array()` gives
// back the tuple this card has always used.
import {getColorSync} from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = useRef();

  const getColorArrays = useCallback(() => {
    if (!imgRef.current) {
      return;
    }
    // Returns null when the image cannot be sampled (a tainted canvas, say).
    const color = getColorSync(imgRef.current);
    setColorArrays(color ? color.array() : []);
  }, []);

  function rgb(values) {
    // Before the logo loads this is [], which would render "rgb()" — not a
    // valid color — so fall through to no banner tint instead.
    return Array.isArray(values) && values.length === 3
      ? "rgb(" + values.join(", ") + ")"
      : null;
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
