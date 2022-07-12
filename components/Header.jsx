import React from "react";
import styles from "../styles/components/Header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      {/* FILLER */}
      <div></div>
      <nav>
        {/* LOGO */}
        <div className={styles.logo}>
          {/* NAV LINK LIST */}
          <Link href={"/"}>
            <a>
              <img src="/img/logos/full-logo.svg" alt="logo" />
            </a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href={"/"}>
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href={"/galeria"}>
              <a>Galeria</a>
            </Link>
          </li>
          <li>
            <Link href={"/area-do-cliente"}>
              <a>Área do Cliente</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.arrows}>
        <img src="/img/icons/arrows.svg" />
        <img src="/img/icons/arrows.svg" />
        <img src="/img/icons/arrows.svg" />
        <img src="/img/icons/arrows.svg" />
      </div>
    </header>
  );
}

export default Header;
