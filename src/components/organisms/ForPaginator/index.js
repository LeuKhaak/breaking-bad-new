import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as styles from "./styles.module.scss";
import Btn from "src/components/atoms/Btn";

function ForPaginator() {
  const perPage = useSelector((state) => state.paginator.perPage);
  const amounts = [5, 10, 15, 20];
  return (
    <div className={styles.amount}>
      <span className={styles.show}>Show cards:</span>
      {amounts &&
        amounts.map((el) => (
          <div key={el} className={styles.pages}>
            <Btn
              btnText={el}
              btnStyle={el === perPage ? "pageNumberChecked" : "pageNumber"}
            />
          </div>
        ))}
    </div>
  );
}

export default ForPaginator;
