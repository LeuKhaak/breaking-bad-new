import axios from "axios";

class getPersonByName {
  searchPerson = async (name) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${name}`
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
}

export default new getPersonByName();
