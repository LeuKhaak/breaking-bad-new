import {
  SEARCH_NAME,
  SEARCH_DATA,
  CLEAR_SEARCH_DATA,
  SEARCH_LOADER,
  SEARCH_ERROR,
} from "../actionTypes/actionTypesNames";

const initialState = {
  searchName: "",
  searchData: "",
  searchLoader: false,
  searchError: null,
};

function searchPerson(state = initialState, action) {
  switch (action.type) {
    case SEARCH_NAME:
      return {
        ...state,
        searchName: action.searchName,
      };
    case SEARCH_DATA:
      return {
        ...state,
        searchData: action.searchData,
      };
    case CLEAR_SEARCH_DATA:
      return {
        ...state,
        searchData: "",
      };
    case SEARCH_LOADER:
      return {
        ...state,
        searchLoader: action.searchLoader,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        searchError: action,
      };
    default:
      return state;
  }
}
export default searchPerson;
