import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles.module.scss";

function Main() {
  return (
    <section>
      <Link to="/catalog" className={styles.link}>
        MAIN. Go to catalog
      </Link>
    </section>
  );
}

export default Main;
