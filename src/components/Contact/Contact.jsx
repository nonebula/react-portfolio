// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'


export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Contact me today!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
          <a href="mailto:joe.higgs@live.com">joe.higgs@live.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon"/>
          <a href="https://www.linkedin.com/joelloydhiggs">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon"/>
          <a href="https://www.github.com/no_nebula">Github</a>
        </li>
      </ul>
    </footer>
  )
}
