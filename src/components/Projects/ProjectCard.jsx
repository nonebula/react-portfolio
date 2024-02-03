import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { id, title, imageSrc, description, skills, link, repo },
}) => {
    return (
        <div className={styles.cardContainer}>
          <img
            src={getImageUrl(imageSrc)}
            alt={title}
            className={styles.cardImage}
          />
          <div className={styles.overlay}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.cardDescription}>{description}</div>
            <div className={styles.cardSkills}>
              <p><b>Skills:</b> {skills}</p>
            </div>
            <div className={styles.cardLinks}>
              <a href={link} className={styles.cardLink}>
                Visit Page
              </a>
              <a href={repo} className={styles.cardLink}>
                Visit Repo
              </a>
            </div>
          </div>
        </div>
      );
    };
