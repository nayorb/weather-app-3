import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

import COLORS from "../../constants/colors";
const { default: theme } = require("../../utils/theme");

export const Container = styled(ScrollContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 240px;
  grid-gap: 16px;
  margin-top: 16px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ForecastCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FooterGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;
