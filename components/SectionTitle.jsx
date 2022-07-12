import React from "react";
import styles from "../styles/components/SectionTitle.module.scss";

function SectionTitle({ src, title }) {
  return (
    <h2 className={styles.sectionTitle}>
      <img src={src} alt="Ícone de sessão" />
      {title}
    </h2>
  );
}

export default SectionTitle;
