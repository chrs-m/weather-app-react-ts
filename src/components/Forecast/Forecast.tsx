import React from "react";
import PropTypes from "prop-types";
import TodaysWeather from "../TodaysWeather/TodaysWeather";
import UpcomingDaysWeather from "../UpcomingDaysWeather/UpcomingDaysWeather";
import WeatherDataObject from "../../Types/WeatherDataObject";

interface props {
  weatherData: WeatherDataObject;
}

const Forecast = ({ weatherData }: props) => {
  return (
    <div>
      <TodaysWeather weatherData={weatherData} />
      <UpcomingDaysWeather />
    </div>
  );
};

export default Forecast;
