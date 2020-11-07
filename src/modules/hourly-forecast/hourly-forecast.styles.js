import styled from "styled-components";
import COLORS from "../../constants/colors";
import ScrollContainer from "react-indiana-drag-scroll";

const { default: theme } = require("../../utils/theme");

export const Container = styled(ScrollContainer)`
  display: grid;
  grid-auto-columns: 160px;
  grid-auto-rows: 240px;
  grid-gap: 16px;
  margin-top: 16px;
  overflow-x: scroll;
  grid-auto-flow: column;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ForecastCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Day = styled.div``;
export const DayMin = styled(Day)`
  margin-left: 10px;
  color: ${COLORS.GREY_FONT};
`;
export const DayMax = styled(Day)``;

export const FooterGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
