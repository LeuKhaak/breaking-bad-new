import React from "react";
import * as styles from "./styles.module.scss";
import Btn from "../../../components/atoms/Btn";
import loup from "src/assets/icons/loupe.svg";
import { Link } from "react-router-dom";

function Search({ createName, characterName, searchCharacter }) {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          name="search-card"
          placeholder="search"
          onChange={(event) => createName(event.target.value)}
          onKeyPress={(event) => searchCharacter(event)}
        />
        <Link to={`/person/${characterName}`} className={styles.link}>
          <Btn btnText="Find" icon={loup} />
        </Link>
      </div>
    </div>
  );
}

export default Search;
