import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createSearchName } from "../../../store/actions/personSearch";
import Catalog from "./component";

function CatalogContainer() {
  const dispatch = useDispatch();
  const createName = (arg) => {
    if (arg !== "" && arg.length > 1) dispatch(createSearchName(arg));
  };
  const characterName = useSelector((state) => state.searchPerson.searchName);

  let history = useHistory();
  const searchCharacter = (event) => {
    if (event.key === "Enter")
      history.push({
        pathname: `/person/${characterName}`,
      });
  };

  return (
    <Catalog
      createName={createName}
      characterName={characterName}
      searchCharacter={searchCharacter}
    />
  );
}

export const container = CatalogContainer;
