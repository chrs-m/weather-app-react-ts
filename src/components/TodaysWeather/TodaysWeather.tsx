import React from "react";
import WeatherDataObject from "../../Types/WeatherDataObject";
import styles from "./TodaysWeather.module.css";

interface props {
  weatherData: WeatherDataObject;
}

const TodaysWeather = ({ weatherData }: props) => {
  const weatherIcon = `https://www.metaweather.com/static/img/weather/${weatherData.consolidated_weather[0].weather_state_abbr}.svg`;

  return (
    <div className={styles.container}>
      <div className={styles.cityContainer}>
        <p className={styles.cityName}>{weatherData.title}</p>
        <img src={weatherIcon} width="30" alt="Todays weather" />
      </div>

      <p>
        Todays temprature is{" "}
        {Math.floor(weatherData.consolidated_weather[0].the_temp)}{" "}
        {" °C, and a weather state of "}
        {weatherData.consolidated_weather[0].weather_state_name.toLowerCase()}.
      </p>
      <p>
        Todays lowest temprature is:{" "}
        {Math.floor(weatherData.consolidated_weather[0].min_temp)} {" °C"}
      </p>
      <p>
        Todays highest temprature is:{" "}
        {Math.floor(weatherData.consolidated_weather[0].max_temp)} {" °C"}
      </p>
    </div>
  );
};

export default TodaysWeather;
