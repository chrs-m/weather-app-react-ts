// Due to some cross domains die, I have a small list of different ones.
// const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
// const CROSS_DOMAIN = "http://ip-api.com/json";
// const CROSS_DOMAIN = "https://cors-anywhere.herokuapp.com";
const CROSS_DOMAIN = "https://thingproxy.freeboard.io/fetch";

const BASE_URL = "https://www.metaweather.com/api/location";

const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const Forecast = async (location: String, setLoading: any) => {
  try {
    setLoading(true);
    const response = await fetch(`${REQUEST_URL}/search/?query=${location}`);
    const data = await response.json();

    if (data.length < 1) {
      console.log("City not found");

      return null;
    }

    const weather = await fetch(`${REQUEST_URL}/${data[0].woeid}/`);
    const weatherData = await weather.json();

    if (weatherData.detail === "Not found.") {
      console.log("Something went wrong");
      return null;
    }

    return weatherData;
  } catch (error) {
    return error;
  } finally {
    setLoading(false);
  }
};

export default Forecast;
