import startData from "./startData";
import getPersonById from "./getPersonById";
import getPersonByName from "./getPersonByName";
import getQuote from "./getQuote/index";

class Reposirory {
  APIstartData = startData;
  APIgetPersonById = getPersonById;
  APIgetPersonByName = getPersonByName;
  APIgetQuote = getQuote;
}

export default new Reposirory();
