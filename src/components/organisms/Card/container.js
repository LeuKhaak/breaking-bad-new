import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import { getPersonData } from "../../../store/actions/personDetails";
import CardList from "./component";
import { useLocation } from "react-router-dom";

function CardContainer() {
  const dispatch = useDispatch();
  const location = useLocation().pathname.slice(-2);

  const personData = useSelector((state) =>
    state.personPage.personData ? state.personPage.personData[0] : ""
  );
  const getError = useSelector((state) => state.personPage.getError);
  const loader = useSelector((state) => state.personPage.loader);

  useEffect(() => {
    dispatch(getPersonData(location));
  }, [dispatch, location]);

  return (
    <CardList personData={personData} getError={getError} loader={loader} />
  );
}

export const container = CardContainer;
