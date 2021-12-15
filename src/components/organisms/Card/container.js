import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import {
  getPersonData,
  clearPersonData,
} from "src/store/actions/personDetails";
import { getSearchData } from "src/store/actions/personSearch";
import { getQuoteData, clearQuoteData } from "src/store/actions/quote";
import CardList from "./component";
import { useLocation } from "react-router-dom";

function CardContainer() {
  const dispatch = useDispatch();
  const location = useLocation().pathname.slice(8);
  const indicator = Number.isInteger(+location);

  const personData = useSelector((state) => state.personPage.personData[0]);
  const getError = useSelector((state) => state.personPage.getError);
  const loader = useSelector((state) => state.personPage.loader);

  const characterData = useSelector((state) => state.searchPerson.searchData);
  const searchError = useSelector((state) => state.searchPerson.searchError);
  const searchLoader = useSelector((state) => state.searchPerson.searchLoader);

  const quoteData = useSelector((state) => state.quote.randomQuote);
  const quoteError = useSelector((state) => state.quote.quoteError);
  const quoteLoader = useSelector((state) => state.quote.quoteLoader);

  const quote = personData && personData.name ? quoteData : "";
  const searchQuote =
    characterData && characterData[0] && characterData[0].name ? quoteData : "";

  useEffect(() => {
    if (indicator) dispatch(getPersonData(location));
    else dispatch(getSearchData(location));
    return () => {
      dispatch(clearPersonData());
      dispatch(clearQuoteData());
    };
  }, [dispatch, location, indicator]);

  useEffect(() => {
    if (personData && personData.name) {
      dispatch(getQuoteData(personData.name));
    } else if (characterData && characterData[0] && characterData[0].name) {
      dispatch(getQuoteData(characterData[0].name));
    }
  }, [dispatch, personData, characterData]);

  return (
    <CardList
      quoteData={indicator ? quote : searchQuote}
      quoteLoader={quoteLoader}
      quoteError={quoteError}
      personData={indicator ? personData : characterData && characterData[0]}
      getError={indicator ? getError : searchError}
      loader={indicator ? loader : searchLoader}
      indicator={indicator}
    />
  );
}

export const container = CardContainer;
