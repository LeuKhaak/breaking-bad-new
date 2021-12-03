import { combineReducers } from "redux";
import cards from "./cards";
import personPage from "./personPage";
import quote from "./quote";

const reducers = combineReducers({
  cards,
  personPage,
  quote,
});
export default reducers;
