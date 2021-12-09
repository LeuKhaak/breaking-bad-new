import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as styles from "./styles.module.scss";
import Btn from "src/components/atoms/Btn";
import arrow from "../../../assets/icons/arrow.svg";
import selectPage from "src/store/reducers/paginator";

function Paginator() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.paginator.currentPage);
  const currentTriad = useSelector((state) => state.paginator.currentTriad);
  const perPage = useSelector((state) => state.paginator.perPage);

  //console.log(currentPage);
  const p = Math.ceil(62 / perPage);
  const pages = [];
  let t = 1;
  let d = false;
  for (let i = 1; i <= p; i++) {
    pages.push([i, t, d]);
    if (i % 3 === 0) t++;
    if (i === 1 || i % 3 === 0) d = true;
    else d = false;
  }

  //console.log(pages);

  const displayPageNumber = (elem) => {
    let disp = "";
    switch (true) {
      case elem[0] === 1:
        disp = "flex";
        break;
      case elem[0] === p:
        disp = "flex";
        break;
      case elem[1] === currentTriad:
        disp = "flex";
        break;
      case currentPage === p && (elem[0] === p - 1 || elem[0] === p - 2):
        disp = "flex";
        break;
      default:
        disp = "none";
    }
    return disp;
  };

  const displayPageDots = (elem) => {
    let disp = "";
    switch (true) {
      case (elem[1] === currentTriad + 1 || elem[1] === currentTriad - 1) &&
        elem[2] &&
        elem[0] !== p:
        disp = "flex";
        break;
      default:
        disp = "none";
    }
    return disp;
  };

  const select = (val) => {
    dispatch(selectPage(val));
  };

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
      <Btn icon={arrow} btnStyle="pageNumber" />
      <Btn icon={arrow} btnStyle="buttonNext" />
    </div>
  );
}

export default Paginator;
