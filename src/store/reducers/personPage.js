import {
  PERSON_DATA,
  PERSON_ERROR,
  PERSON_LOADER,
  CLEAR_PERSON_DATA,
} from "../actionTypes/actionTypesNames";

const initialState = {
  personData: "",
  loader: false,
  getError: null,
};

function loadPerson(state = initialState, action) {
  switch (action.type) {
    case PERSON_DATA:
      return {
        ...state,
        personData: action.personData,
      };
    case CLEAR_PERSON_DATA:
      return {
        ...state,
        personData: "",
      };
    case PERSON_LOADER:
      return {
        ...state,
        loader: action.loader,
      };
    case PERSON_ERROR:
      return {
        ...state,
        getError: action,
      };
    default:
      return state;
  }
}
export default loadPerson;
