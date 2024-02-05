// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from "./Testimonials.module.css";

import testimonials from "../data/testimonials.json";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  return (
    <section className={styles.container} id="testimonials">
      <h2 className={styles.title}>Testimonials</h2>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonials}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial}/>
            ))}
          </div>
        </div>
    </section>
  );
};

