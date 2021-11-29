import React from "react";
import * as styles from "./styles.module.scss";

function CardMini({ birthday, name, status, img }) {
  return (
    <div className={styles.card}>
      <div className={styles.person}>
        <div className={styles.imageTile}>
          <img className={styles.img} src={img} alt="#" />
        </div>
        <div className={styles.inf}>
          <span
            className={status === "Deceased" ? styles.deceased : styles.alive}
          >
            {status.toLowerCase()}
          </span>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.birthday}>{birthday}</span>
        </div>
      </div>
      <span className={styles.noLine}></span>
    </div>
  );
}

export default CardMini;
