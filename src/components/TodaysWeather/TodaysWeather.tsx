import React from "react";
import PropTypes from "prop-types";
import WeatherDataObject from "../../Types/WeatherDataObject";

interface props {
  weatherData: WeatherDataObject;
}

const TodaysWeather = ({ weatherData }: props) => {
  const weatherIcon = `https://www.metaweather.com/static/img/weather/${weatherData.consolidated_weather[0].weather_state_abbr}.svg`;

  return (
    <div>
      <p>{weatherData.title}</p>
      <p>
        Todays temprature is: {weatherData.consolidated_weather[0].the_temp}
      </p>
      <img src={weatherIcon} width="30" />
    </div>
  );
};

export default TodaysWeather;
