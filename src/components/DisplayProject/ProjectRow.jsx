import React from 'react'
import styles from "./ProjectRow.module.css"
import { getImageUrl } from '../../utils'


export function ProjectRow({ project: { id, title, imageSrc, description, skills, link, repo } }) {
    return (
      <div className={styles.row}>
          <div className={styles.poster}>
              <img src={getImageUrl(imageSrc)} alt={title} className={styles.posterImage} />
              <h3 className={styles.cardTitle}>{title}</h3>
              <button className={styles.selectProject}>Select Project</button>
          </div>
      </div>
    );
  }

