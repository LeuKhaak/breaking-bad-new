import {
  START_DATA,
  GET_ERROR,
  SHOW_LOADER,
  CHANGE_STYLE,
} from "../actionTypes/actionTypesNames";
import Repository from "../../repository";

export function showLoader(value) {
  return { type: SHOW_LOADER, loader: value };
}

export function getError(value) {
  return { type: GET_ERROR, value };
}

export function startData(value) {
  return { type: START_DATA, cardList: value };
}

export function changeStyle(value) {
  return { type: CHANGE_STYLE, tiles: value };
}

export const getStartData = () => async (dispatch) => {
  dispatch(showLoader(true));
  const { value, error } = await Repository.APIstartData.getPersons();
  if (error || !value) {
    dispatch(getError(true));
    dispatch(showLoader(false));
  }
  dispatch(startData(value));
  dispatch(showLoader(false));
};
