import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import { getPersonData } from "../../../store/actions/personDetails";
import { getQuoteData } from "src/store/actions/quote";
import CardList from "./component";
import { useLocation } from "react-router-dom";

function CardContainer() {
  const dispatch = useDispatch();
  const location = useLocation().pathname.slice(8);

  const personData = useSelector((state) => state.personPage.personData[0]);
  const getError = useSelector((state) => state.personPage.getError);
  const loader = useSelector((state) => state.personPage.loader);

  const quoteData = useSelector((state) => state.quote.randomQuote);
  const quoteError = useSelector((state) => state.quote.quoteError);
  const quoteLoader = useSelector((state) => state.quote.quoteLoader);

  const quoteName =
    personData && personData.name ? personData.name.split(" ")[0] : "";
  const quoteSurname =
    personData && personData.name ? personData.name.split(" ")[1] : "";

  useEffect(() => {
    dispatch(getPersonData(location));
  }, [dispatch, location]);

  useEffect(() => {
    if (personData !== "") {
      dispatch(getQuoteData(quoteName, quoteSurname));
    }
  }, [dispatch, personData, quoteName, quoteSurname]);

  return (
    <CardList
      quoteData={quoteData}
      quoteLoader={quoteLoader}
      quoteError={quoteError}
      personData={personData}
      getError={getError}
      loader={loader}
    />
  );
}

export const container = CardContainer;
