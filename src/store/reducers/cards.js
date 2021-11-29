import {
  START_DATA,
  GET_ERROR,
  SHOW_LOADER,
} from "../actionTypes/actionTypesNames";

const initialState = {
  cardList: [],
  loader: false,
  getError: null,
};

function loadCards(state = initialState, action) {
  switch (action.type) {
    case START_DATA:
      return {
        ...state,
        cardList: action.cardList,
      };
    case SHOW_LOADER:
      return {
        ...state,
        loader: action.loader,
      };
    case GET_ERROR:
      return {
        ...state,
        getError: action,
      };
    default:
      return state;
  }
}
export default loadCards;
