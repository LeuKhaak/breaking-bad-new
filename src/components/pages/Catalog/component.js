import React from "react";
import * as styles from "./styles.module.scss";
import TitleAndToggle from "src/components/organisms/TitleAndToggle";
import Search from "src/components/molecules/Search";
import CardList from "src/components/organisms/CardList";
import PaginatorPlus from "src/components/organisms/PaginatorPlus";

function Catalog({ createName, characterName, searchCharacter, loup }) {
  return (
    <section className={styles.catalog}>
      <Search
        createName={createName}
        characterName={characterName}
        searchCharacter={searchCharacter}
      />
      <TitleAndToggle />
      <CardList />
      <PaginatorPlus />
    </section>
  );
}

export default Catalog;
