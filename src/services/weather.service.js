import { APP_ID } from "../constants";

const API_URL = "https://api.openweathermap.org/data/2.5/";

const getCurrentApiUrl = ({ query = "Bratislava" } = {}) => {
  return `${API_URL}weather?q=${query}&appid=${APP_ID}&units=metric`;
};

const getOneCallApiUrl = ({
  lat = "48.15",
  lon = "17.11",
  exclude = "minutely"
} = {}) => {
  return `${API_URL}onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${APP_ID}&units=metric`;
};

const getCurrentData = async (location) => {
  try {
    const response = await fetch(getCurrentApiUrl({ query: location }));
    const data = await response.json();
    if (data.cod === 200) {
      data.dt = Math.floor(new Date().getTime() / 1000);
      console.log(data);

      const oneCallResponse = await fetch(getOneCallApiUrl(data.coord));
      const oneCallData = await oneCallResponse.json();
      if (oneCallData) {
        console.log("oneCallData", oneCallData);
      }
      return {
        ...oneCallData,
        location: data.name
      };
    }
  } catch (err) {
    console.warn(err);
  }
};

const WeatherService = {
  getCurrentData
};

export default WeatherService;
