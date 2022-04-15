import React from "react";
import WeatherDataObject from "../../Types/WeatherDataObject";

interface props {
  weatherData: WeatherDataObject;
}

const UpcomingDaysWeather = ({ weatherData }: props) => {
  return (
    <div>
      <h2>Upcoming days</h2>
    </div>
  );
};

export default UpcomingDaysWeather;
