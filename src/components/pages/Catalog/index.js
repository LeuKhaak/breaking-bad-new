import React from "react";
import * as styles from "./styles.module.scss";
import TitleAndToggle from "src/components/organisms/TitleAndToggle";
import CardList from "src/components/organisms/CardList";

function Catalog() {
  return (
    <section className={styles.catalog}>
      <TitleAndToggle />
      <CardList />
    </section>
  );
}

export default Catalog;
