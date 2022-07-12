import React from "react";
import styles from "../styles/components/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.container}>
      <img src="img/logos/logo.svg" alt="logo" />
      <p>Desenvolvido por Luciano Ribeiro</p>
    </footer>
  );
}

export default Footer;
