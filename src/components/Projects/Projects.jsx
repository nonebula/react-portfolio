// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from "./Projects.module.css";

import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectsContainer}>
          <div className={styles.projects}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project}/>
            ))}
          </div>
        </div>
    </section>
  );
};

