import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./TestimonialCard.module.css";

export const TestimonialCard = ({
  testimonial: { id, name, review, project},
}) => {
    return (
        <div className={styles.cardContainer}>
            <h3 className={styles.cardTitle}>{name}</h3>
            <div className={styles.cardDescription}>{review}</div>
            <div className={styles.cardDescription}>{project}</div>
            <div className={styles.cardLinks}>
            </div>
          </div>
      );
    };
