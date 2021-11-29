import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as styles from "./styles.module.scss";
import logo from "../../../assets/images/logo.png";

function Header() {
  const location = useLocation().pathname;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <img src={logo} alt="#" />
        </Link>
        <Link to="/catalog" className={styles.link}>
          <div
            className={styles.toCatalog}
            style={location !== "/catalog" ? { background: "none" } : {}}
          >
            <span className={styles.burger}>
              <span className={styles.dash}></span>
              <span className={styles.dash}></span>
              <span className={styles.dash}></span>
            </span>
            <span className={styles.linkText}>Catalog</span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
