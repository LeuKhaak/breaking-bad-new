import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import {
  getPersonData,
  clearPersonData,
} from "../../../store/actions/personDetails";
import { getQuoteData, clearQuoteData } from "src/store/actions/quote";
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

  const quote = personData && personData.name ? quoteData : "";

  useEffect(() => {
    dispatch(getPersonData(location));
    return () => {
      dispatch(clearPersonData());
      dispatch(clearQuoteData());
    };
  }, [dispatch, location]);

  useEffect(() => {
    if (personData && personData.name) {
      dispatch(getQuoteData(personData.name));
    }
  }, [dispatch, personData]);

  return (
    <CardList
      quoteData={quote}
      quoteLoader={quoteLoader}
      quoteError={quoteError}
      personData={personData}
      getError={getError}
      loader={loader}
    />
  );
}

export const container = CardContainer;
