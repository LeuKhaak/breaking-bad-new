import React from "react";
import * as styles from "./styles.module.scss";
import loader from "../../../assets/images/loader.gif";

function Loader() {
  return (
    <div className={styles.loader}>
      <img className={styles.gif} src={loader} alt="#" />
    </div>
  );
}

export default Loader;
