import React from "react";
import * as styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerText}>{new Date().getFullYear()}</div>
        <div className={styles.footerText}>@autor</div>
      </div>
    </footer>
  );
}

export default Footer;
