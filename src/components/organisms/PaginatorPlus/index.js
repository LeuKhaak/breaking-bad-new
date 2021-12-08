import React from "react";
import * as styles from "./styles.module.scss";
import Paginator from "src/components/molecules/Paginator";
import ForPaginator from "src/components/molecules/ForPaginator";

function PaginatorPlus() {
  return (
    <div className={styles.container}>
      <Paginator />
      <ForPaginator />
    </div>
  );
}

export default PaginatorPlus;
