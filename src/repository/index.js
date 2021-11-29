import startData from "./startData";
import getPersonById from "./getPersonById";

class Reposirory {
  APIstartData = startData;
  APIgetPersonById = getPersonById;
}

export default new Reposirory();
