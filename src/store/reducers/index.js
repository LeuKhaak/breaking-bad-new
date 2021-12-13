import { combineReducers } from "redux";
import cards from "./cards";
import personPage from "./personPage";
import quote from "./quote";
import paginator from "./paginator";
import searchPerson from "./searchPerson";

const reducers = combineReducers({
  cards,
  personPage,
  quote,
  paginator,
  searchPerson,
});
export default reducers;
