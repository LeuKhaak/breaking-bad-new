import React from "react";
import * as styles from "./styles.module.scss";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerText}>{year}</div>
        <div className={styles.footerText}>@autor</div>
      </div>
    </footer>
  );
}

export default Footer;
