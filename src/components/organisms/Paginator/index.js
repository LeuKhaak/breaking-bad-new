import React from "react";
import * as styles from "./styles.module.scss";
import Btn from "../../../components/atoms/Btn";
import arrow from "src/assets/icons/arrow.svg";

function Paginator({
  pages,
  currentPage,
  displayPageNumber,
  displayPageDots,
  select,
  goPrevPage,
  previousPage,
  prevTriad,
  goNextPage,
  followingPage,
  nextTriad,
}) {
  return (
    <div className={styles.numbers}>
      <div className={styles.pages}>
        {pages &&
          pages.map((el) => (
            <div key={el[0]} className={styles.pageLabel}>
              <Btn
                btnText={el[0]}
                btnStyle={
                  el[0] === currentPage ? "pageNumberChecked" : "pageNumber"
                }
                disp={displayPageNumber(el)}
                onClick={select}
                arg={el[0]}
                arg2={el[1]}
              />
              <Btn
                btnText="..."
                btnStyle="pageNumber"
                disp={displayPageDots(el)}
                onClick={select}
                arg={el[0]}
                arg2={el[1]}
              />
            </div>
          ))}
      </div>
      <Btn
        icon={arrow}
        btnStyle="pageNumber"
        onClick={goPrevPage}
        arg={previousPage}
        arg2={prevTriad}
      />
      <Btn
        icon={arrow}
        btnStyle="buttonNext"
        onClick={goNextPage}
        arg={followingPage}
        arg2={nextTriad}
      />
    </div>
  );
}

export default Paginator;
