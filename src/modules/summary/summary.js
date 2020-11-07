import React, { useContext, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";

import NumberIndex, {
  INDEX_POSITION
} from "../../components/number-index/number-index";
import WeatherIcon from "../../components/weather-icon/weather-icon";
import { UNIT_CAPTION } from "../../constants";
import useWeatherData from "../../hooks/useWeatherData";
import { BiSearch } from "react-icons/bi";
import { MdLocationSearching } from "react-icons/md";
import { AppContext } from "../../App";
import CitySearch from "../city-search/city-search";
const {
  Container,
  WeekDay,
  Time,
  TimeInfo,
  Location,
  LocationInputContainer,
  LocationInput,
  LocationInputIcon,
  LocationInputLocateButton
} = require("./summary.styles");

const Summary = () => {
  const {
    temperature,
    icon,
    selectedUnit,
    location,
    loadingWeatherData
  } = useWeatherData();

  const [query, setQuery] = useState("");

  const windowWidth = useWindowWidth();

  const { changeLocation } = useContext(AppContext);

  if (loadingWeatherData) return <></>;

  const onSearch = () => {
    changeLocation(query);
    setQuery("");
  };

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
