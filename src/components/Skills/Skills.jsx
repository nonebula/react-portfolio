// eslint-disable-next-line no-unused-vars
import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Skills.module.css';
import skills from '../data/skills.json';

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills & Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.alt} />
              </div>
              <p>{skill.title}</p>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};