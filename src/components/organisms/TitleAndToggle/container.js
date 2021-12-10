import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStyle } from "src/store/actions/person";
import TitleAndToggle from "./component";

function TitleAndToggleContainer() {
  const dispatch = useDispatch();
  const tile = useSelector((state) => state.cards.tiles);
  const changeStyles = (arg) => {
    dispatch(changeStyle(arg));
  };
  return <TitleAndToggle tile={tile} changeStyles={changeStyles} />;
}

export const container = TitleAndToggleContainer;
