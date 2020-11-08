import moment from "moment";

export const parseWeatherData = (data) => {
  const temperature = Math.floor(data.current.temp);
  const icon = data.current.weather[0].icon;

  const visibility = (data.current.visibility / 1000).toFixed(1);
  const sunrise = data.current.sunrise;
  const sunset = data.current.sunset;
  const location = data.location;
  const humidity = data.current.humidity;
  const windSpeed = data.current.wind_speed.toFixed(2);
  const windAngle = data.current.wind_deg;
  const windDirection = getCardinalDirection(data.current.wind_deg);
  const uv = data.current.uvi;

  const daily = data.daily.map((day) => ({
    weekday: moment(day.dt * 1000).format("ddd"),
    date: moment(day.dt * 1000).format("DD.MMM"),
    icon: day.weather[0].icon,
    min: Math.floor(day.temp.min),
    max: Math.ceil(day.temp.max)
  }));

  const hourly = data.hourly.map((hour) => ({
    time: moment(hour.dt * 1000).format("HH:mm"),
    icon: hour.weather[0].icon,
    temp: Math.floor(hour.temp)
  }));

  return {
    temperature,
    icon,
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

export function getCardinalDirection(angle) {
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
