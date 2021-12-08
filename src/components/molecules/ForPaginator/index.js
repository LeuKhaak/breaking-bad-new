import React from "react";
import * as styles from "./styles.module.scss";

function ForPaginator() {
  return (
    <div className={styles.amount}>
      <span className={styles.show}>Show cards:</span>
      <div className={styles.pages}>
        <label className={styles.pageLabel}>
          <input
            className={styles.pageInput}
            type="radio"
            name="cards"
            defaultChecked
          />
          <span className={styles.pageNumber}>5</span>
        </label>
        <label className={styles.pageLabel}>
          <input className={styles.pageInput} type="radio" name="cards" />
          <span className={styles.pageNumber}>10</span>
        </label>
        <label className={styles.pageLabel}>
          <input className={styles.pageInput} type="radio" name="cards" />
          <span className={styles.pageNumber}>15</span>
        </label>
        <label className={styles.pageLabel}>
          <input className={styles.pageInput} type="radio" name="cards" />
          <span className={styles.pageNumber}>20</span>
        </label>
      </div>
    </div>
  );
}

export default ForPaginator;
