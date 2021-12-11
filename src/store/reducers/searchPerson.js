import { SEARCH_NAME, SEARCH_DATA } from "../actionTypes/actionTypesNames";

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
    //case CLEAR_PERSON_DATA:
    //  return {
    //    ...state,
    //    personData: "",
    //  };
    //case PERSON_LOADER:
    //  return {
    //    ...state,
    //    loader: action.loader,
    //  };
    //case PERSON_ERROR:
    //  return {
    //    ...state,
    //    getError: action,
    //  };
    default:
      return state;
  }
}
export default searchPerson;
