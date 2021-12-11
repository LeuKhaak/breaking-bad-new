import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSearchName } from "src/store/actions/personSearch";
import { getSearchData } from "src/store/actions/personSearch";
import Catalog from "./component";

function CatalogContainer() {
  const dispatch = useDispatch();
  const createName = (arg) => {
    if (arg !== "" && arg.length > 1) dispatch(createSearchName(arg));
  };
  const characterName = useSelector((state) => state.searchPerson.searchName);
  const characterData = useSelector((state) => state.searchPerson.searchData);

  const getData = () => {
    dispatch(getSearchData(characterName));
  };

  console.log(characterData);

  return <Catalog createName={createName} getData={getData} />;
}

export const container = CatalogContainer;
