import React from "react";
import * as styles from "./styles.module.scss";
import Btn from "src/components/atoms/Btn";
import loup from "src/assets/icons/loupe.svg";

function Search({ createName, getData }) {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          name="search-card"
          placeholder="search"
          onChange={(event) => createName(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") getData();
          }}
        />
        <Btn
          btnText="Find"
          icon={loup}
          //btnStyle={}
          onClick={getData}
        />
      </div>
    </div>
  );
}

export default Search;
