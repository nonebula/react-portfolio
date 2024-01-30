import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <p className={styles.content}>
        Fuelled by a passion for creating engaging and user-friendly interfaces,
        I recently completed a comprehensive frontend web development bootcamp,
        equipping me with a solid foundation in HTML, CSS, and JavaScript. I am
        excited to embark on a career in frontend development, where I can
        combine my technical skills with my creative problem-solving abilities
        to deliver exceptional user experiences. I am proficient in utilizing
        HTML and CSS to craft responsive and visually appealing web pages, and I
        am adept at employing JavaScript to implement interactive elements and
        enhance user engagement. I am also familiar with popular frameworks such
        as React and Angular, and I am eager to expand my knowledge in these
        areas. My background in teaching has instilled in me strong
        communication and collaboration skills, enabling me to effectively work
        with designers, backend developers, and project managers to achieve
        common goals. I am a quick learner and a self-motivated individual,
        always seeking opportunities to expand my skillset and stay abreast of
        the latest trends in frontend development. I am actively seeking an
        entry-level frontend web development position where I can contribute my
        skills and enthusiasm to a team of passionate developers. I am confident
        in my ability to learn quickly, adapt to new technologies, and deliver
        high-quality work that meets the demands of a fast-paced environment.
      </p>
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
          <img src={getImageUrl("about/teacherIcon.png")} alt="Teacher Icon" />
          <div className={styles.aboutItemText}>
            <h3>Former Teacher</h3>
            <p>I'm a former teacher</p>
          </div>
        </li>
      </ul>
    </section>
  );
};
