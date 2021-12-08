import { combineReducers } from "redux";
import cards from "./cards";
import personPage from "./personPage";
import quote from "./quote";
import paginator from "./paginator";

const reducers = combineReducers({
  cards,
  personPage,
  quote,
  paginator,
});
export default reducers;
