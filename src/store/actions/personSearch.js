import { SEARCH_NAME, SEARCH_DATA } from "../actionTypes/actionTypesNames";
import Repository from "../../repository";

export function createSearchName(value) {
  return { type: SEARCH_NAME, searchName: value };
}

//export function personError(value) {
//  return { type: PERSON_ERROR, value };
//}

export function searchPersonData(value) {
  return { type: SEARCH_DATA, searchData: value };
}

//export function clearPersonData() {
//  return { type: CLEAR_PERSON_DATA, personData: "" };
//}

export const getSearchData = (name) => async (dispatch) => {
  //dispatch(personLoader(true));
  const { value, error } = await Repository.APIgetPersonById.getPerson(name);
  //if (error || !value) {
  //  dispatch(personError(true));
  //  dispatch(personLoader(false));
  //}
  dispatch(searchPersonData(value));
  //dispatch(personLoader(false));
};
