import {
  START_DATA,
  GET_ERROR,
  SHOW_LOADER,
  CHANGE_STYLE,
} from "../actionTypes/actionTypesNames";

const initialState = {
  cardList: [],
  tiles: true,
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
    case CHANGE_STYLE:
      return {
        ...state,
        tiles: action.tiles,
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
