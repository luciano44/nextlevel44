import React from "react";
import styles from "../styles/components/PageTitle.module.scss";

function pageTitle({ title }) {
  return <h1 className={styles.container}>{title}</h1>;
}

export default pageTitle;
