import React from "react";
import { useWindowWidth } from "@react-hook/window-size";

import NumberIndex, {
  INDEX_POSITION
} from "../../components/number-index/number-index";
import WeatherIcon from "../../components/weather-icon/weather-icon";
import { UNIT_CAPTION } from "../../constants";
import useWeatherData from "../../hooks/useWeatherData";

import CitySearch from "../city-search/city-search";
const {
  Container,
  WeekDay,
  Time,
  TimeInfo,
  Location
} = require("./summary.styles");

const Summary = () => {
  const {
    temperature,
    icon,
    selectedUnit,
    location,
    loadingWeatherData
  } = useWeatherData();

  const windowWidth = useWindowWidth();

  if (loadingWeatherData) return <></>;

  return (
    <Container>
      <CitySearch />
      <WeatherIcon icon={icon} size={windowWidth > 768 ? 240 : 64} />
      <NumberIndex
        index={UNIT_CAPTION[selectedUnit]}
        indexPosition={INDEX_POSITION.RIGHT_TOP}
        size={windowWidth > 768 ? 84 : 36}
      >
        {temperature}
      </NumberIndex>
      <TimeInfo>
        <WeekDay>Monday,</WeekDay>
        <Time>{new Date().getHours()}:00</Time>
      </TimeInfo>

      <Location>{location}</Location>
    </Container>
  );
};

export default Summary;
