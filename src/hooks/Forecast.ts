import { useEffect, useState } from "react";

const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const Forecast = async (location: String, setLoading: any) => {
  try {
    setLoading(true);
    const response = await fetch(`${REQUEST_URL}/search/?query=${location}`);
    const data = await response.json();

    console.log(data);

    const weather = await fetch(`${REQUEST_URL}/${data[0].woeid}/`);
    const weatherData = await weather.json();
    console.log(weatherData);

    return data;
  } catch (error) {
    return error;
  } finally {
    setLoading(false);
  }
};

export default Forecast;
