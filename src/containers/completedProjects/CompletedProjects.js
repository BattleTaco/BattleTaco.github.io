import React, {useContext} from "react";
import "./CompletedProjects.scss";
import {completedProjects} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function CompletedProjects() {
  const {isDark} = useContext(StyleContext);

  if (!completedProjects.display) {
    return null;
  }

  return (
    <div id="projects">
      <Fade direction="up" duration={1000} triggerOnce>
        <div className="projects-main">
          <div>
            <h1
              className={
                isDark ? "dark-mode projects-heading" : "projects-heading"
              }
            >
              {completedProjects.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle projects-subtitle"
                  : "subTitle projects-subtitle"
              }
            >
              {completedProjects.subtitle}
            </p>

            <div className="projects-cards-div">
              {completedProjects.projects.map((project, i) => (
                <Fade
                  key={i}
                  direction="up"
                  duration={800}
                  delay={i * 150}
                  triggerOnce
                >
                  <div
                    className={isDark ? "project-card-dark" : "project-card"}
                  >
                    <span className="project-status-badge completed-badge">
                      Completed
                    </span>
                    <div className="project-card-header">
                      {project.icon && (
                        <div className="project-card-icon">
                          <i className={project.icon}></i>
                        </div>
                      )}
                      <div className="project-card-title-area">
                        <h3 className="project-card-title">{project.title}</h3>
                        <div className="project-card-meta">
                          <span className="project-card-date">
                            {project.date}
                          </span>
                          {project.association && (
                            <span className="project-card-association">
                              {project.association}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="project-card-desc">{project.description}</p>
                    {project.tags && (
                      <div className="project-card-tags">
                        {project.tags.map((tag, j) => (
                          <span
                            key={j}
                            className={
                              isDark
                                ? "project-tag project-tag-dark"
                                : "project-tag"
                            }
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
