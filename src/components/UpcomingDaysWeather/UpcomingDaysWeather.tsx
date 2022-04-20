import React from "react";
import WeatherDataObject from "../../Types/WeatherDataObject";

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
      {weatherData.consolidated_weather
        .slice(1)
        .map((data: WeatherDataObject, index: number) => {
          const date = new Date(data.applicable_date);

          return (
            <div key={index}>
              <p>{data.applicable_date}</p>
              <p>{daysOfWeek[date.getDay()]}</p>
              <p>{Math.floor(data.the_temp)} °C</p>
              <img
                src={`https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`}
                width="30px"
                alt={data.weather_state_name}
              ></img>
            </div>
          );
        })}
    </div>
  );
};

export default UpcomingDaysWeather;
