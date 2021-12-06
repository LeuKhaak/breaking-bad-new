import React from "react";
import * as styles from "./styles.module.scss";
import cn from "classnames";

function CardMini({ birthday, name, status, img, tiles }) {
  const classCardMini = cn(styles.card, !tiles && styles.cardLine);
  return (
    <div className={classCardMini}>
      <div className={styles.person}>
        <div className={styles.imageTile}>
          <img className={styles.img} src={img} alt="#" />
        </div>
        <div className={styles.inf}>
          <span className={status === "Alive" ? styles.alive : styles.deceased}>
            {status.toLowerCase()}
          </span>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.birthday}>{birthday}</span>
        </div>
      </div>
    </div>
  );
}

export default CardMini;
