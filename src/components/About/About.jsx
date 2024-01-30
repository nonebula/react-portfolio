import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <p className={styles.contentBio}>
            Fuelled by a passion for creating engaging and user-friendly
            interfaces, I recently completed a comprehensive frontend web
            development bootcamp, equipping me with a solid foundation in HTML,
            CSS, and JavaScript. I am excited to embark on a career in frontend
            development, where I can combine my technical skills with my
            creative problem-solving abilities to deliver exceptional user
            experiences. 

            My background in teaching has instilled in me strong
            communication and collaboration skills, enabling me to effectively
            work with designers, backend developers, and project managers to
            achieve common goals. I am a quick learner and a self-motivated
            individual, always seeking opportunities to expand my skillset and
            stay abreast of the latest trends in frontend development.
          </p>
        </div>
    </section>
  );
};
