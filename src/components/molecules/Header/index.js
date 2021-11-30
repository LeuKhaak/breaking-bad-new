import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as styles from "./styles.module.scss";
import logo from "../../../assets/images/logo.png";
import Btn from "src/components/atoms/Btn/index";

function Header() {
  const location = useLocation().pathname;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <img src={logo} alt="#" />
        </Link>
        <Link to="/catalog" className={styles.link}>
          <Btn location={location} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
