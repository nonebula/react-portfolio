import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'


export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Joe</h1>
            <p className={styles.description}>Frontend Web Developer</p>
            <a href="mailto:joe.higgs@live.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Profile Image" className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
