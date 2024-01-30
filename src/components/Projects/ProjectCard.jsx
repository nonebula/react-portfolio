import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project: { id, title, imageSrc, description, skills, link, repo } }) => {
    return (
        <div className={styles.cardContainer}>
            <img src={getImageUrl(imageSrc)} alt={title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
            <ul className={styles.cardSkills}>
                {skills.map((skill, index) => (
                    <li key={`${id}-${index}`} className={styles.cardSkill}>
                        {skill}
                    </li>
                ))}
            </ul>
            <div className={styles.cardLinks}>
                <a href={link} className={styles.cardLink}>
                    link
                </a>
                <a href={repo} className={styles.cardLink}>
                    repo
                </a>
            </div>
        </div>
    );
};
