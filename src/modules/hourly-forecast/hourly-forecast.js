import React from "react";
import { RiTempHotFill } from "react-icons/ri";

import {
  InfoCard,
  InfoCardContent,
  InfoCardFooter,
  InfoCardTitle
} from "../../components";
import IconInfo from "../../components/icon-info/icon-info";

import WeatherIcon from "../../components/weather-icon/weather-icon";
import COLORS from "../../constants/colors";

import useWeatherData from "../../hooks/useWeatherData";
const { Container, FooterGridContainer } = require("./hourly-forecast.styles");

const HourlyForecast = () => {
  const { hourly, loadingWeatherData } = useWeatherData();

  if (loadingWeatherData) return <></>;

  return (
    <Container onWheel={(e) => console.log(e)}>
      {hourly.map((hour) => (
        <InfoCard>
          <InfoCardTitle
            style={{
              justifyContent: "center"
            }}
          >
            <span>{hour.time}</span>
          </InfoCardTitle>
          <InfoCardContent>
            <WeatherIcon icon={hour.icon} />
          </InfoCardContent>
          <InfoCardFooter>
            <FooterGridContainer>
              <IconInfo
                iconSize={20}
                Icon={RiTempHotFill}
                text={`${hour.temp}°`}
              />
            </FooterGridContainer>
          </InfoCardFooter>
        </InfoCard>
      ))}
    </Container>
  );
};

export default HourlyForecast;
