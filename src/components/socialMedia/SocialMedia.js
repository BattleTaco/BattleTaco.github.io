import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  const links = [
    {
      key: "github",
      className: "github",
      icon: "fab fa-github",
      label: "GitHub"
    },
    {
      key: "linkedin",
      className: "linkedin",
      icon: "fab fa-linkedin-in",
      label: "LinkedIn"
    },
    {
      key: "gmail",
      className: "google",
      icon: "fas fa-envelope",
      label: "Email",
      href: `mailto:${socialMediaLinks.gmail}`
    },
    {
      key: "gitlab",
      className: "gitlab",
      icon: "fab fa-gitlab",
      label: "GitLab"
    },
    {
      key: "facebook",
      className: "facebook",
      icon: "fab fa-facebook-f",
      label: "Facebook"
    },
    {
      key: "instagram",
      className: "instagram",
      icon: "fab fa-instagram",
      label: "Instagram"
    },
    {
      key: "twitter",
      className: "twitter",
      icon: "fab fa-twitter",
      label: "Twitter"
    },
    {
      key: "medium",
      className: "medium",
      icon: "fab fa-medium",
      label: "Medium"
    },
    {
      key: "stackoverflow",
      className: "stack-overflow",
      icon: "fab fa-stack-overflow",
      label: "Stack Overflow"
    },
    {key: "kaggle", className: "kaggle", icon: "fab fa-kaggle", label: "Kaggle"}
  ];

  return (
    <div className="social-media-div">
      {links.map(link => {
        const url = socialMediaLinks[link.key];
        if (!url) return null;
        return (
          <a
            key={link.key}
            href={link.href || url}
            className={`icon-button ${link.className}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <i className={link.icon}></i>
          </a>
        );
      })}
    </div>
  );
}
