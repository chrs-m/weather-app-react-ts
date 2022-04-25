import React from "react";
import WeatherDataObject from "../../Types/WeatherDataObject";
import WeatherDataPoint from "../WeatherDataPoint/WeatherDataPoint";
import styles from "../../styles/Scss/TodaysWeather.module.scss";

interface props {
  weatherData: WeatherDataObject;
}

const TodaysWeather = ({ weatherData }: props) => {
  const weatherIcon = `https://www.metaweather.com/static/img/weather/${weatherData.consolidated_weather[0].weather_state_abbr}.svg`;

  const airPressure = `${weatherData.consolidated_weather[0].air_pressure} mbar`;
  const humidity = `${weatherData.consolidated_weather[0].humidity}%`;
  const wind = `${Math.floor(
    weatherData.consolidated_weather[0].wind_speed * 1.6
  )} km/h | ${weatherData.consolidated_weather[0].wind_direction_compass}`;
  const weatherState = `${weatherData.consolidated_weather[0].weather_state_name}`;

  return (
    <div className={styles.container}>
      <div className={styles.cityContainer}>
        <p className={styles.cityName}>{weatherData.title}</p>
        <img
          src={weatherIcon}
          width="30"
          alt="Todays weather"
          className={styles.weatherIcon}
        />
      </div>
      <div className={styles.tempAndData}>
        <div className={styles.todaysTemp}>
          <p>
            Todays temprature is{" "}
            {Math.floor(weatherData.consolidated_weather[0].the_temp)} {" °C"}
          </p>
          <p>
            Todays lowest temprature is{" "}
            {Math.floor(weatherData.consolidated_weather[0].min_temp)} {" °C"}
          </p>
          <p>
            Todays highest temprature is{" "}
            {Math.floor(weatherData.consolidated_weather[0].max_temp)} {" °C"}
          </p>
        </div>

        <div className={styles.extraWeatherDataContainer}>
          <WeatherDataPoint
            dataPoint="Weather state"
            dataPointValue={weatherState}
          />
          <WeatherDataPoint
            dataPoint="Air Pressure"
            dataPointValue={airPressure}
          />
          <WeatherDataPoint dataPoint="Humidity" dataPointValue={humidity} />
          <WeatherDataPoint dataPoint="Wind" dataPointValue={wind} />
        </div>
      </div>
    </div>
  );
};

export default TodaysWeather;
