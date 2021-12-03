import startData from "./startData";
import getPersonById from "./getPersonById";
import getQuote from "./getQuote/index";

class Reposirory {
  APIstartData = startData;
  APIgetPersonById = getPersonById;
  APIgetQuote = getQuote;
}

export default new Reposirory();
