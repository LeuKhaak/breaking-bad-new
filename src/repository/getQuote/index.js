import axios from "axios";

class getQuote {
  getRandomQuote = async (name) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/quote/random?author=${name}`
      );
      result.value = response.data.length
        ? response.data[0].quote
        : "No quote from the hero";
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
}

export default new getQuote();
