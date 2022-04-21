import React from "react";
import WeatherDataObject from "../../types/WeatherDataObject";
import styles from "../../styles/Scss/UpcomingDaysWeather.module.scss";

interface props {
  weatherData: WeatherDataObject;
}

const UpcomingDaysWeather = ({ weatherData }: props) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      <h2>Upcoming days</h2>
      <div className={styles.wrapper}>
        {weatherData.consolidated_weather
          .slice(1)
          .map((data: WeatherDataObject, index: number) => {
            const date = new Date(data.applicable_date);

            return (
              <div key={index} className={styles.container}>
                <p className={styles.day}>{daysOfWeek[date.getDay()]}</p>
                <div className={styles.tempImg}>
                  <p className={styles.temp}>{Math.floor(data.the_temp)} °C</p>
                  <img
                    src={`https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`}
                    width="30px"
                    alt={data.weather_state_name}
                    className={styles.img}
                  ></img>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UpcomingDaysWeather;
