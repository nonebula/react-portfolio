import React from 'react'

import { getImageUrl } from '../../utils';
import styles from "./Projects.module.css";

export const ProjectCard = (props) => {
    const project = props.project (title, imageSrc, description, skills, link, repo)
    return (
        <div className={styles.cardContainer}>
        <img src={getImageUrl(project.imageSrc)} alt={project.alt} className={styles.cardImage}/>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <ul className={styles.cardSkills}>
          {project.skills.map((skill, id) => (
            <li key={id} className={styles.cardSkill}>{skill}</li>
          ))}
        </ul>
        <div className={styles.cardLinks}>
          <a href={project.link} className={styles.cardLink}>link</a>
          <a href={project.repo} className={styles.cardLink}>repo</a>
        </div>
      </div>
    );
          };