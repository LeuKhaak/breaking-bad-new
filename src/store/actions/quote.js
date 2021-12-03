import {
  QUOTE_DATA,
  QUOTE_ERROR,
  QUOTE_LOADER,
} from "../actionTypes/actionTypesNames";
import Repository from "../../repository";

export function quoteLoader(value) {
  return { type: QUOTE_LOADER, quoteLoader: value };
}

export function quoteError(value) {
  return { type: QUOTE_ERROR, value };
}

export function quoteData(value) {
  return { type: QUOTE_DATA, randomQuote: value };
}

export const getQuoteData = (name, surname) => async (dispatch) => {
  dispatch(quoteLoader(true));
  const { value, error } = await Repository.APIgetQuote.getRandomQuote(
    name,
    surname
  );
  if (error || !value) {
    dispatch(quoteError(true));
    dispatch(quoteLoader(false));
  }
  dispatch(quoteData(value));
  dispatch(quoteLoader(false));
};
