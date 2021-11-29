import { combineReducers } from "redux";
import cards from "./cards";
import personPage from "./personPage";

const reducers = combineReducers({
  cards,
  personPage,
});
export default reducers;
