import {
  SEARCH_NAME,
  SEARCH_DATA,
  CLEAR_SEARCH_DATA,
  SEARCH_LOADER,
  SEARCH_ERROR,
} from "../actionTypes/actionTypesNames";
import Repository from "../../repository";

export function createSearchName(value) {
  return { type: SEARCH_NAME, searchName: value };
}

export function searchLoader(value) {
  return { type: SEARCH_LOADER, searchLoader: value };
}

export function searchError(value) {
  return { type: SEARCH_ERROR, value };
}

export function searchPersonData(value) {
  return { type: SEARCH_DATA, searchData: value };
}

export function clearSearchData() {
  return { type: CLEAR_SEARCH_DATA, searchData: "" };
}

export const getSearchData = (name) => async (dispatch) => {
  dispatch(searchLoader(true));
  const { value, error } = await Repository.APIgetPersonByName.searchPerson(
    name
  );
  if (error || !value) {
    dispatch(searchError(true));
    dispatch(searchLoader(false));
  }
  dispatch(searchPersonData(value));
  dispatch(searchLoader(false));
};
