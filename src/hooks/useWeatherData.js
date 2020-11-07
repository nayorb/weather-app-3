import { useCallback, useContext } from "react";
import moment from "moment";

import { AppContext } from "../App";
import { UNIT } from "../constants";

function getCardinalDirection(angle) {
  if (typeof angle === "string") angle = parseInt(angle);
  if (angle <= 0 || angle > 360 || typeof angle === "undefined") return "☈";
  const arrows = {
    north: "N",
    north_east: "NE",
    east: "E",
    south_east: "SE",
    south: "S",
    south_west: "SW",
    west: "W",
    north_west: "NW"
  };
  const directions = Object.keys(arrows);
  const degree = 360 / directions.length;
  angle = angle + degree / 2;
  for (let i = 0; i < directions.length; i++) {
    if (angle >= i * degree && angle < (i + 1) * degree)
      return arrows[directions[i]];
  }
  return arrows["north"];
}

const useWeatherData = () => {
  const { selectedUnit, summaryData } = useContext(AppContext);

  const calculateDegrees = useCallback(
    (number) => {
      if (selectedUnit === UNIT.CELSIUS) return number;

      return number * 1.8 + 32;
    },
    [selectedUnit]
  );

  if (!summaryData) return { loadingWeatherData: true };

  const temperature = Math.floor(calculateDegrees(summaryData.current.temp));
  const icon = summaryData.current.weather[0].icon;

  const visibility = (summaryData.current.visibility / 1000).toFixed(1);
  const sunrise = summaryData.current.sunrise;
  const sunset = summaryData.current.sunset;
  const location = summaryData.location;
  const humidity = summaryData.current.humidity;
  const windSpeed = summaryData.current.wind_speed.toFixed(2);
  const windAngle = summaryData.current.wind_deg;
  const windDirection = getCardinalDirection(summaryData.current.wind_deg);
  const uv = summaryData.current.uvi;

  const daily = summaryData.daily.map((day) => ({
    weekday: moment(day.dt * 1000).format("ddd"),
    date: moment(day.dt * 1000).format("DD.MMM"),
    icon: day.weather[0].icon,
    min: Math.floor(calculateDegrees(day.temp.min)),
    max: Math.ceil(calculateDegrees(day.temp.max))
  }));

  const hourly = summaryData.hourly.map((hour) => ({
    time: moment(hour.dt * 1000).format("HH:mm"),
    icon: hour.weather[0].icon,
    temp: Math.floor(calculateDegrees(hour.temp))
  }));

  return {
    temperature,
    icon,
    selectedUnit,
    location,
    humidity,
    windSpeed,
    windDirection,
    windAngle,
    sunrise,
    sunset,
    visibility,
    daily,
    hourly,
    uv
  };
};

export default useWeatherData;
