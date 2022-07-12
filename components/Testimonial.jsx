import React from "react";
import styles from "../styles/components/Testimonial.module.scss";

function Testimonial({ src, name, message }) {
  return (
    <li className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={src} alt="Imagem do usuário" />
        </div>
        <p>{name}</p>
      </div>
      <div className={styles.message}>{message}</div>
    </li>
  );
}

export default Testimonial;
