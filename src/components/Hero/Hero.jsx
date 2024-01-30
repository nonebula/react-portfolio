// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'


export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Welcome to my Portfolio Page!</h1>
            <p className={styles.description}>Looking for out of this world Web Design? Click below to download my resume.</p>
            <a href="../../assets/downloads/cv.pdf" download role="button" className={styles.contactBtn}>Download Resume</a>
        </div>
        <img src={getImageUrl("hero/heroIcon.png")} alt="Profile Image" className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
