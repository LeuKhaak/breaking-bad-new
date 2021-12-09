import { SELECT_PAGE } from "../actionTypes/actionTypesNames";

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
      };

    default:
      return state;
  }
}
export default selectPage;
