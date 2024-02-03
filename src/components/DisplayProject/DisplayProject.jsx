import React from 'react'
import styles from "./DisplayProject.module.css"
import { getImageUrl } from '../../utils'


// truncate?

export const displayProject = ( project: { id, title, imageSrc, description, skills, link, repo } }) => {
  return (
    <section className={styles.container}>
      <div className={styles.displayContents}>
        <img src={getImageUrl(imageSrc)} alt={title} className={styles.displayImage} />
        <h3 className={styles.displayTitle}>{title}</h3>
        <p className={styles.displayDescription}>{description}</p>
        <ul className={styles.cardSkills}>
                {skills.map((skill, index) => (
                    <li key={`${id}-${index}`} className={styles.cardSkill}>
                        {skill}
                    </li>
                ))}
            </ul>
        <div className={styles.displaybuttons}>
          <button className={styles.projectBtn}>View Project</button>
          <button className={styles.repoBtn}>View Repo</button>
        </div>
      </div>
    </section>
  )
}
