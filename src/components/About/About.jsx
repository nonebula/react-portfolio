import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <p className={styles.content}>Insert text here</p>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img
            src={getImageUrl("about/frontendIcon.png")}
            alt="Frontend Dev Icon"
          />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>I'm a frontend Developer</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img
            src={getImageUrl("about/wordpressIcon.png")}
            alt="Wordpress Icon"
          />
          <div className={styles.aboutItemText}>
            <h3>Wordpress Developer</h3>
            <p>I'm a wordpress Developer</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img
            src={getImageUrl("about/teacherIcon.png")}
            alt="Teacher Icon"
          />
          <div className={styles.aboutItemText}>
            <h3>Former Teacher</h3>
            <p>I'm a former teacher</p>
          </div>
        </li>
      </ul>
    </section>
  );
};
