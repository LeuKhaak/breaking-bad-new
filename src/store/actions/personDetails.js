import {
  PERSON_DATA,
  PERSON_ERROR,
  PERSON_LOADER,
} from "../actionTypes/actionTypesNames";
import Repository from "../../repository";

export function personLoader(value) {
  return { type: PERSON_LOADER, loader: value };
}

export function personError(value) {
  return { type: PERSON_ERROR, value };
}

export function personData(value) {
  return { type: PERSON_DATA, personData: value };
}

export const getPersonData = (id) => async (dispatch) => {
  dispatch(personLoader(true));
  const { value, error } = await Repository.APIgetPersonById.getPerson(id);
  if (error || !value) {
    dispatch(personError(true));
    dispatch(personLoader(false));
  }
  dispatch(personData(value));
  dispatch(personLoader(false));
};
