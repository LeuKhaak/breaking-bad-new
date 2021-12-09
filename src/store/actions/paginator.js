import { SELECT_PAGE } from "../actionTypes/actionTypesNames";

export function selectPage(value) {
  return { type: SELECT_PAGE, currentPage: value };
}
