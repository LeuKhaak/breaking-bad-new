import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles.module.scss";
import logo from "../../../assets/images/logo.svg";
import burger from "../../../assets/icons/burger.svg";
import Btn from "../../../components/atoms/Btn";

function Header({ location }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <img src={logo} alt="#" />
        </Link>
        <Link to="/catalog" className={styles.link}>
          <Btn
            location={location}
            btnText="Catalog"
            btnStyle="toCatalog"
            icon={burger}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
