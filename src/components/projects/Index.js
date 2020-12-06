import React from "react";
import projectList from "./iframes";
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";
import "./style.css";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const titleList = [
    "It's On Us",
    "My Portfolio",
    "Movie-Project",
    "Madlibs",
  ];

  const textList = [
    t("projects.texts.text0"),
    t("projects.texts.text1"),
    t("projects.texts.text2"),
    t("projects.texts.text3"),
    t("projects.texts.text4"),
  ];

  const repoList = [
    "https://github.com/ReCoded-Org/capstone-istanbul-feed_the_needy",
    "https://github.com/gizemcdeniz/gizem_portfolio",
    "https://github.com/gizemcdeniz/movie_project.github.io",
    "https://github.com/gizemcdeniz/mad-libs",
  ];

  const linkList = [
    "https:/feed-the-needy.netlify.app/",
    "https://gizemportfolio.netlify.app/",
    "https://movieprojectr.netlify.app/",
    "https://madlibsrecoded.netlify.app"
  ];

  const techList = [
    "React, Firebase; Cloud Firestore, JavaScript, Netlify, Ant Design, i8next",
    "React, Firebase; Cloud Firestore, JavaScript, Netlify, Bootstrap, i8next",
    "JavaScript, MovieDB API, Bootstrap, HTML and CSS",
    "JavaScript, HTML, CSS, Bootstrap"
  ];

  const projectObjList = [];

  for (let i = 0; i < projectList.length; i++) {
    projectObjList.push({
      website: projectList[i],
      title: titleList[i],
      text: textList[i],
      repo: repoList[i],
      link: linkList[i],
      tech: techList[i],
    });
  }


  return (
    <div className="projects">
    <div className="projectsSection">
      <h1 className="title">{t("projects.titles.title0")}</h1>
      {projectObjList.map((project) => (
        <div className="project-wrapper">
          <h1>{project.title}</h1>
          <h3>
          <div className="iconProject">
            <a
              className="github-icon"
              target="_blank"
              rel="noreferrer"
              title={t("projects.links.link0")}
              href={project.repo}
            >
              <GoMarkGithub />
            </a>
            {project.link ? (
              <a
                className="external-icon"
                target="_blank"
                rel="noreferrer"
                title={t("projects.links.link1")}
                href={project.link}
              >
                <GoLinkExternal />
              </a>

            ) : null}
            </div>
          </h3>
          <div className="project-iframe">{project.website}</div>
          <h4 className="projects-bolds">{t("projects.bolds.bold1")}</h4>
          <p className="project-text">{project.text}</p>
          <div className="projects-bolds">
            <p className="project-text">
              <b>{t("projects.bolds.bold0")}</b>
              {project.tech}
            </p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Projects;