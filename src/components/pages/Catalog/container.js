import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSearchName } from "src/store/actions/personSearch";
import Catalog from "./component";

function CatalogContainer() {
  const dispatch = useDispatch();
  const createName = (arg) => {
    if (arg !== "" && arg.length > 1) dispatch(createSearchName(arg));
  };
  const characterName = useSelector((state) => state.searchPerson.searchName);

  return <Catalog createName={createName} characterName={characterName} />;
}

export const container = CatalogContainer;
