import styled from "styled-components";

const { default: theme } = require("../../utils/theme");

export const Container = styled.div`
  background-color: ${theme.dashboard.backgroundColor};
  overflow-x: scroll;
  padding: 40px;
  flex: 1;
  padding-left: 340px;
  box-sizing: border-box;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const DashboardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const DashboardSectionHeader = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 24px;
`;

export const InfoCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 240px;
  grid-auto-rows: 240px;
  grid-gap: 16px;
  margin-top: 16px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const GaugeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const GaugeText = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 32px;
`;
