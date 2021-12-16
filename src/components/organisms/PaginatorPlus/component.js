import React from "react";
import * as styles from "./styles.module.scss";
import Paginator from "../../../components/organisms/Paginator";
import ForPaginator from "../../../components/molecules/ForPaginator";

function PaginatorPlus({
  pages,
  currentPage,
  currentTriad,
  displayPageNumber,
  displayPageDots,
  select,
  goPrevPage,
  previousPage,
  prevTriad,
  goNextPage,
  followingPage,
  nextTriad,
  loader,
  perPage,
  amounts,
  changeLimitPages,
}) {
  return (
    <div className={styles.container} style={loader ? { display: "none" } : {}}>
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
      <ForPaginator
        loader={loader}
        perPage={perPage}
        amounts={amounts}
        changeLimitPages={changeLimitPages}
      />
    </div>
  );
}

export default PaginatorPlus;
