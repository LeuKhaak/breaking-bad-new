import {
  QUOTE_DATA,
  QUOTE_ERROR,
  QUOTE_LOADER,
  CLEAR_QUOTE_DATA,
} from "../actionTypes/actionTypesNames";

const initialState = {
  randomQuote: "",
  quoteLoader: false,
  quoteError: null,
};

function loadQuote(state = initialState, action) {
  switch (action.type) {
    case QUOTE_DATA:
      return {
        ...state,
        randomQuote: action.randomQuote,
      };
    case CLEAR_QUOTE_DATA:
      return {
        ...state,
        randomQuote: action.randomQuote,
      };
    case QUOTE_LOADER:
      return {
        ...state,
        quoteLoader: action.quoteLoader,
      };
    case QUOTE_ERROR:
      return {
        ...state,
        quoteError: action,
      };
    default:
      return state;
  }
}
export default loadQuote;
