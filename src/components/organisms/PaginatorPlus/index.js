import React from "react";
import * as styles from "./styles.module.scss";
import Paginator from "src/components/organisms/Paginator";
import ForPaginator from "src/components/organisms/ForPaginator";

function PaginatorPlus() {
  return (
    <div className={styles.container}>
      <Paginator />
      <ForPaginator />
    </div>
  );
}

export default PaginatorPlus;
