import React from "react";
import * as styles from "./styles.module.scss";
import Btn from "src/components/atoms/Btn";

function ForPaginator({ perPage, amounts, changeLimitPages }) {
  return (
    <div className={styles.amount}>
      <span className={styles.show}>Show cards:</span>
      {amounts &&
        amounts.map((el) => (
          <div key={el} className={styles.pages}>
            <Btn
              btnText={el}
              btnStyle={el === perPage ? "pageNumberChecked" : "pageNumber"}
              onClick={changeLimitPages}
              arg={el}
            />
          </div>
        ))}
    </div>
  );
}

export default ForPaginator;
