import {
  SELECT_PAGE,
  PREV_PAGE,
  NEXT_PAGE,
  CHANGE_LIMIT,
} from "../actionTypes/actionTypesNames";

const initialState = {
  currentPage: 1,
  currentTriad: 1,
  perPage: 10,
};

function selectPage(state = initialState, action) {
  switch (action.type) {
    case SELECT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
        currentTriad: action.currentTriad,
      };
    case PREV_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
        currentTriad: action.currentTriad,
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
        currentTriad: action.currentTriad,
      };
    case CHANGE_LIMIT:
      return {
        ...state,
        perPage: action.perPage,
      };
    default:
      return state;
  }
}
export default selectPage;
