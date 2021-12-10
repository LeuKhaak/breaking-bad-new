import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPage, prevPage, nextPage } from "src/store/actions/paginator";
import Paginator from "./component";

function PaginatorContainer() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.paginator.currentPage);
  const currentTriad = useSelector((state) => state.paginator.currentTriad);
  const perPage = useSelector((state) => state.paginator.perPage);

  const pageBtnAmount = Math.ceil(62 / perPage);
  const pages = [];
  let triad = 1;
  let dotBtn = false;
  for (let i = 1; i <= pageBtnAmount; i++) {
    pages.push([i, triad, dotBtn]);
    if (i % 3 === 0) triad++;
    if (i === 1 || i % 3 === 0) dotBtn = true;
    else dotBtn = false;
  }

  const displayPageNumber = (elem) => {
    let disp = "";
    switch (true) {
      case elem[0] === 1:
        disp = "flex";
        break;
      case elem[0] === pageBtnAmount:
        disp = "flex";
        break;
      case elem[1] === currentTriad:
        disp = "flex";
        break;
      case currentPage === pageBtnAmount &&
        (elem[0] === pageBtnAmount - 1 || elem[0] === pageBtnAmount - 2):
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
        elem[0] !== pageBtnAmount:
        disp = "flex";
        break;
      default:
        disp = "none";
    }
    return disp;
  };

  const select = (val1, val2) => {
    dispatch(selectPage(val1, val2));
  };

  const goPrevPage = (val1, val2) => {
    dispatch(prevPage(val1, val2));
  };
  const previousPage = currentPage > 1 ? currentPage - 1 : currentPage;
  const prevTriad =
    currentPage > 3 && (currentPage - 1) % 3 === 0
      ? currentTriad - 1
      : currentTriad;

  const goNextPage = (val1, val2) => {
    dispatch(nextPage(val1, val2));
  };
  const followingPage =
    currentPage < pageBtnAmount ? currentPage + 1 : currentPage;
  const nextTriad =
    currentPage < pageBtnAmount && currentPage % 3 === 0
      ? currentTriad + 1
      : currentTriad;

  return (
    <Paginator
      pages={pages}
      currentPage={currentPage}
      currentTriad={currentTriad}
      displayPageNumber={displayPageNumber}
      displayPageDots={displayPageDots}
      select={select}
      goPrevPage={goPrevPage}
      previousPage={previousPage}
      prevTriad={prevTriad}
      goNextPage={goNextPage}
      followingPage={followingPage}
      nextTriad={nextTriad}
    />
  );
}

export const container = PaginatorContainer;
