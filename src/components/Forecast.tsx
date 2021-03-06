import React from "react";
import TodaysWeather from "./TodaysWeather";
import UpcomingDaysWeather from "./UpcomingDaysWeather";
import WeatherDataObject from "../Types/WeatherDataObject";
import styles from "../styles/Scss/Forecast.module.scss";

interface props {
  weatherData: WeatherDataObject;
}

const Forecast = ({ weatherData }: props) => {
  return (
    <div className={styles.container}>
      <TodaysWeather weatherData={weatherData} />
      <UpcomingDaysWeather weatherData={weatherData} />
    </div>
  );
};

export default Forecast;
