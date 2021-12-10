import React from "react";
import * as styles from "./styles.module.scss";
import TitleAndToggle from "src/components/organisms/TitleAndToggle";
import CardList from "src/components/organisms/CardList";
import PaginatorPlus from "src/components/organisms/PaginatorPlus";

function Catalog() {
  return (
    <section className={styles.catalog}>
      <TitleAndToggle />
      <CardList />
      <PaginatorPlus />
    </section>
  );
}

export default Catalog;
