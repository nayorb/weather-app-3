import React, { useContext } from "react";
import DurationTabs, { DURATION_TABS } from "../duration-tabs/duration-tabs";

import { AppContext } from "../../App";
import UnitTabs from "../unit-tabs/unit-tabs";
import {
  InfoCard,
  InfoCardContent,
  InfoCardFooter,
  InfoCardTitle
} from "../../components";
import NumberIndex, {
  INDEX_POSITION
} from "../../components/number-index/number-index";
import useWeatherData from "../../hooks/useWeatherData";
import Compas from "../../components/compas/compas";
import SunInfo from "../../components/sun-info/sun-info";
import VerticalInfoMeter from "../../components/vertical-info-meter/vertical-info-meter";
import { BsFillDropletFill } from "react-icons/bs";
import COLORS from "../../constants/colors";
import { MdVisibility } from "react-icons/md";
import { GiHotSurface } from "react-icons/gi";
import WeekForecast from "../week-forecast/week-forecast";
import HourlyForecast from "../hourly-forecast/hourly-forecast";
import GaugeChart from "react-gauge-chart";

const {
  Container,
  DashboardHeader,
  InfoCardsContainer,
  DashboardSectionHeader,
  GaugeText,
  GaugeContainer
} = require("./dashboard.styles");

const Dashboard = () => {
  const {
    selectedDurationTab,
    selectDurationTab,
    selectedUnit,
    selectUnit
  } = useContext(AppContext);

  const {
    humidity,
    windSpeed,
    windDirection,
    windAngle,
    sunrise,
    sunset,
    visibility,
    loadingWeatherData,
    uv
  } = useWeatherData();

  if (loadingWeatherData) return <></>;

  return (
    <Container>
      <DashboardHeader>
        <DurationTabs
          selected={selectedDurationTab}
          onSelect={selectDurationTab}
        />
        <UnitTabs selected={selectedUnit} onSelect={selectUnit} />
      </DashboardHeader>
      {selectedDurationTab === "TODAY_DURATION_TAB" ? (
        <HourlyForecast />
      ) : (
        <WeekForecast />
      )}
      <DashboardSectionHeader>Today's Highlights</DashboardSectionHeader>
      <InfoCardsContainer>
        <InfoCard>
          <InfoCardTitle>UV Index</InfoCardTitle>
          <InfoCardContent>
            <GaugeContainer>
              <GaugeChart
                id="uv-gauge-chart"
                nrOfLevels={2}
                arcsLength={[uv / 20, (20 - uv) / 20]}
                colors={[COLORS.ORANGE, "#efefef"]}
                percent={uv / 20}
                arcPadding={0.02}
                cornerRadius={0}
                needleColor="transparent"
                needleBaseColor="transparent"
                hideText
              />
              <GaugeText>{uv}</GaugeText>
            </GaugeContainer>
          </InfoCardContent>
        </InfoCard>
        <InfoCard>
          <InfoCardTitle>Wind Status</InfoCardTitle>
          <InfoCardContent>
            <NumberIndex
              index="km/h"
              size={48}
              indexPosition={INDEX_POSITION.RIGHT_BOTTOM}
            >
              {windSpeed}
            </NumberIndex>
          </InfoCardContent>
          <InfoCardFooter>
            <Compas angle={windAngle} />
            <div style={{ marginLeft: 10 }}>{windDirection}</div>
          </InfoCardFooter>
        </InfoCard>
        <InfoCard>
          <InfoCardTitle>Sunrise & Sunset</InfoCardTitle>
          <div>
            <SunInfo time={sunrise} />
            <SunInfo time={sunset} />
          </div>
          <InfoCardFooter />
        </InfoCard>
        <InfoCard>
          <InfoCardTitle>Humidity</InfoCardTitle>
          <InfoCardContent>
            <NumberIndex index="%" size={48}>
              {humidity}
            </NumberIndex>
            <VerticalInfoMeter value={humidity} />
          </InfoCardContent>
          <InfoCardFooter>
            <BsFillDropletFill color={COLORS.GREY_FONT} size={28} />
          </InfoCardFooter>
        </InfoCard>
        <InfoCard>
          <InfoCardTitle>Visisbility</InfoCardTitle>
          <InfoCardContent>
            <NumberIndex
              index="km"
              size={48}
              indexPosition={INDEX_POSITION.RIGHT_BOTTOM}
            >
              {visibility}
            </NumberIndex>
          </InfoCardContent>

          <InfoCardFooter>
            <MdVisibility color={COLORS.GREY_FONT} size={28} />
          </InfoCardFooter>
        </InfoCard>
        <InfoCard>
          <InfoCardTitle>Air Quality</InfoCardTitle>
          <InfoCardContent>
            <NumberIndex size={48}>{105}</NumberIndex>
            <VerticalInfoMeter value={85} />
          </InfoCardContent>

          <InfoCardFooter>
            <GiHotSurface color={COLORS.GREY_FONT} size={28} />
          </InfoCardFooter>
        </InfoCard>
      </InfoCardsContainer>
    </Container>
  );
};

export default Dashboard;
