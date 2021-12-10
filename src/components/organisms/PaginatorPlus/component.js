import React from "react";
import * as styles from "./styles.module.scss";
import Paginator from "src/components/organisms/Paginator";
import ForPaginator from "src/components/molecules/ForPaginator";

function PaginatorPlus({ loader, perPage, amounts, changeL }) {
  return (
    <div className={styles.container} style={loader ? { display: "none" } : {}}>
      <Paginator />
      <ForPaginator
        loader={loader}
        perPage={perPage}
        amounts={amounts}
        changeL={changeL}
      />
    </div>
  );
}

export default PaginatorPlus;
