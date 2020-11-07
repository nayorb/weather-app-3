import React from "react";
import { RiTempColdLine, RiTempHotLine } from "react-icons/ri";
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
const { Container, FooterGridContainer } = require("./week-forecast.styles");

const WeekForecast = () => {
  const { daily, loadingWeatherData } = useWeatherData();

  if (loadingWeatherData) return <></>;

  return (
    <Container>
      {daily.map((day) => (
        <InfoCard key={day.dt}>
          <InfoCardTitle
            style={{
              justifyContent: "space-between"
            }}
          >
            <span>{day.weekday}</span>
            <span>{day.date}</span>
          </InfoCardTitle>
          <InfoCardContent>
            <WeatherIcon icon={day.icon} />
          </InfoCardContent>
          <InfoCardFooter>
            <FooterGridContainer>
              <IconInfo
                iconColor={COLORS.ORANGE_DARK}
                iconSize={20}
                Icon={RiTempHotLine}
                text={`${day.max}°`}
              />
              <IconInfo
                iconColor={COLORS.BLUE_LIGHT}
                iconSize={20}
                Icon={RiTempColdLine}
                text={`${day.min}°`}
              />
            </FooterGridContainer>
          </InfoCardFooter>
        </InfoCard>
      ))}
    </Container>
  );
};

export default WeekForecast;
