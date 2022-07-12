import React from "react";
import styles from "../styles/components/ListItem.module.scss";

function ListItem({ src, title }) {
  return (
    <p className={styles.container}>
      <img src={src} alt="Ícone" />
      {title}
    </p>
  );
}

export default ListItem;
