import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

import pytorchIcon from "../../logos/pytorch.svg";
import tensorflowIcon from "../../logos/tensorflow.svg";
import CplusplusIcon from "../../logos/cplusplus.svg";
import pandasIcon from "../../logos/pandas.svg";
import mysqlIcon from "../../logos/mysql.svg";
import postgresqlIcon from "../../logos/postgresql.svg";



export default function SoftwareSkill() {
  const customIcons = {
    pytorch: pytorchIcon,
    tensorflow: tensorflowIcon,
    Cplusplus: CplusplusIcon,
    pandas: pandasIcon,
    mySQL: mysqlIcon,
    postgreSQL: postgresqlIcon
  };


  

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                {/* Check if the skill has a custom icon, otherwise use FontAwesome */}
                {customIcons[skills.skillName] ? (
                  <img
                    src={customIcons[skills.skillName]}
                    alt={skills.skillName}
                    className="custom-icon"
                  />
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
