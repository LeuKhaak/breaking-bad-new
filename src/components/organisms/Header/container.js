import React from "react";
import Header from "./component";
import { useLocation } from "react-router-dom";

function HeaderContainer() {
  const location = useLocation().pathname;

  return <Header location={location} />;
}

export const container = HeaderContainer;
