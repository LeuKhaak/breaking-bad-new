import {
  SELECT_PAGE,
  PREV_PAGE,
  NEXT_PAGE,
  CHANGE_LIMIT,
} from "../actionTypes/actionTypesNames";

export function selectPage(val1, val2) {
  return { type: SELECT_PAGE, currentPage: val1, currentTriad: val2 };
}

export function prevPage(val1, val2) {
  return { type: PREV_PAGE, currentPage: val1, currentTriad: val2 };
}

export function nextPage(val1, val2) {
  return { type: NEXT_PAGE, currentPage: val1, currentTriad: val2 };
}

export function changeLimit(value) {
  return { type: CHANGE_LIMIT, perPage: value };
}
