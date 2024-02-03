// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from "./ProjectsCore.module.css";

import projects from "../data/projects.json";
import { ProjectRow } from "./ProjectRow";

const ProjectsCore = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project}/>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCore;