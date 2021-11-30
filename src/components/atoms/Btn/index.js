import React from "react";
import * as styles from "./styles.module.scss";
//import logo from "../../../assets/images/logo.png";

function Btn({ location }) {
  return (
    <button
      className={styles.toCatalog}
      style={location !== "/catalog" ? { background: "none" } : {}}
    >
      <span className={styles.burger}>
        <span className={styles.dash}></span>
        <span className={styles.dash}></span>
        <span className={styles.dash}></span>
      </span>
      <span className={styles.linkText}>Catalog</span>
    </button>
  );
}

export default Btn;
