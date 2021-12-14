import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as styles from "./styles.module.scss";
import { ReactComponent as Logo } from "src/assets/images/logo.svg";
import burger from "src/assets/icons/burger.svg";
import Btn from "src/components/atoms/Btn";

function Header() {
  const location = useLocation().pathname;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <Logo />
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
