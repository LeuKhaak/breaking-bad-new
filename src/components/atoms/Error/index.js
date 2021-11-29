import React from "react";
import * as styles from "./styles.module.scss";

function Error({ notice }) {
  return <div className={styles.error}>{notice}</div>;
}

export default Error;
