import React from "react";
import * as styles from "./styles.module.scss";
import Btn from "src/components/atoms/Btn";
import arrow from "../../../assets/icons/arrow.svg";

function Paginator() {
  const amountOnPage = 10;
  const p = Math.ceil(62 / amountOnPage);
  const pages = [];
  for (let i = 1; i <= p; i++) {
    pages.push(i);
  }

  const displayPageNumber = (elem) => {
    let disp = "";
    switch (true) {
      case elem === 1:
        disp = "flex";
        break;
      case elem === p:
        disp = "flex";
        break;
      case elem > 3 && elem < p:
        disp = "none";
        break;
      default:
        disp = "flex";
    }
    return disp;
  };

  const displayPageDots = (elem) => {
    let disp = "";
    switch (true) {
      case elem === 5:
        disp = "flex";
        break;
      default:
        disp = "none";
    }
    return disp;
  };

  return (
    <div className={styles.numbers}>
      <div className={styles.pages}>
        {pages &&
          pages.map((el) => (
            <div key={el} className={styles.pageLabel}>
              <Btn
                btnText={el}
                btnStyle={el === 1 ? "pageNumberChecked" : "pageNumber"}
                disp={displayPageNumber(el)}
              />
              <Btn
                btnText="..."
                btnStyle="pageNumber"
                disp={displayPageDots(el)}
              />
            </div>
          ))}
      </div>
      <Btn icon={arrow} btnStyle="pageNumber" />
      <Btn icon={arrow} btnStyle="buttonNext" />
    </div>
  );
}

export default Paginator;