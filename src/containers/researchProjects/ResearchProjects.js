import React, {useContext} from "react";
import "./ResearchProjects.scss";
import {researchProjects} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ResearchProjects() {
  const {isDark} = useContext(StyleContext);

  if (!researchProjects.display) {
    return null;
  }

  return (
    <div id="research">
      <Fade direction="up" duration={1000} triggerOnce>
        <div className="research-main">
          <div>
            <h1
              className={
                isDark ? "dark-mode research-heading" : "research-heading"
              }
            >
              {researchProjects.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle research-subtitle"
                  : "subTitle research-subtitle"
              }
            >
              {researchProjects.subtitle}
            </p>

            <div className="research-cards-div">
              {researchProjects.projects.map((project, i) => (
                <Fade
                  key={i}
                  direction="up"
                  duration={800}
                  delay={i * 150}
                  triggerOnce
                >
                  <div
                    className={
                      isDark
                        ? "research-card-featured-dark"
                        : "research-card-featured"
                    }
                  >
                    <span className="research-status-badge in-progress-badge">
                      <span className="pulse-dot"></span>
                      {project.status || "Active Research"}
                    </span>
                    <div className="research-card-header">
                      {project.icon && (
                        <div className="research-card-icon-featured">
                          <i className={project.icon}></i>
                        </div>
                      )}
                      <div className="research-card-title-area">
                        <h2 className="research-card-title-featured">
                          {project.title}
                        </h2>
                        <div className="research-card-meta">
                          <span className="research-card-date">
                            {project.date}
                          </span>
                          {project.association && (
                            <span className="research-card-association">
                              {project.association}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Overview */}
                    <p className="research-card-desc-featured">
                      {project.overview}
                    </p>

                    {/* Research Phases */}
                    {project.phases && project.phases.length > 0 && (
                      <div className="research-phases">
                        <h3
                          className={
                            isDark
                              ? "research-section-label dark-label"
                              : "research-section-label"
                          }
                        >
                          Research Phases
                        </h3>
                        <div className="research-phases-grid">
                          {project.phases.map((phase, j) => (
                            <div
                              key={j}
                              className={
                                isDark
                                  ? "research-phase-card research-phase-card-dark"
                                  : "research-phase-card"
                              }
                            >
                              <div className="research-phase-number">
                                Phase {j + 1}
                              </div>
                              <h4 className="research-phase-title">
                                {phase.title}
                              </h4>
                              <p className="research-phase-desc">
                                {phase.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Research Questions */}
                    {project.researchQuestions &&
                      project.researchQuestions.length > 0 && (
                        <div className="research-questions">
                          <h3
                            className={
                              isDark
                                ? "research-section-label dark-label"
                                : "research-section-label"
                            }
                          >
                            Core Research Questions
                          </h3>
                          <ul className="research-questions-list">
                            {project.researchQuestions.map((q, j) => (
                              <li
                                key={j}
                                className={
                                  isDark
                                    ? "research-question-item dark-question"
                                    : "research-question-item"
                                }
                              >
                                {q}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {/* Tags */}
                    {project.tags && (
                      <div className="research-card-tags">
                        {project.tags.map((tag, j) => (
                          <span
                            key={j}
                            className={
                              isDark
                                ? "research-tag research-tag-dark"
                                : "research-tag"
                            }
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Motivation */}
                    {project.motivation && (
                      <div
                        className={
                          isDark
                            ? "research-motivation research-motivation-dark"
                            : "research-motivation"
                        }
                      >
                        <i className="fas fa-heart research-motivation-icon"></i>
                        <p className="research-motivation-text">
                          {project.motivation}
                        </p>
                      </div>
                    )}

                    {/* GitHub Link */}
                    <div className="research-card-actions">
                      {project.githubLink ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            isDark
                              ? "research-github-btn research-github-btn-dark"
                              : "research-github-btn"
                          }
                        >
                          <i className="fab fa-github"></i> View on GitHub
                        </a>
                      ) : (
                        <span
                          className={
                            isDark
                              ? "research-github-btn research-github-btn-disabled research-github-btn-dark"
                              : "research-github-btn research-github-btn-disabled"
                          }
                        >
                          <i className="fab fa-github"></i> GitHub - Coming
                          Soon
                        </span>
                      )}
                    </div>
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
