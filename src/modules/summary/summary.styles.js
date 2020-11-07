import styled from "styled-components";
import COLORS from "../../constants/colors";

const { default: theme } = require("../../utils/theme");

export const Container = styled.div`
  background-color: white;
  width: 300px;
  padding: 24px;
  box-sizing: border-box;
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    height: 60px;
    padding: 10px;
    width: 100%;
    position: relative;
    flex-direction: row;
  }
`;

export const TimeInfo = styled.div`
  display: flex;
  padding: 40px 0;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const WeekDay = styled.div`
  text-align: left;
  font-size: 16px;
`;

export const Time = styled.div`
  color: ${COLORS.GREY_FONT};
  margin-left: 5px;
  font-size: 16px;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  background-color: grey;
  border-radius: 16px;
  font-size: 24px;
  color: white;
  font-weight: 300;
  margin-top: auto;

  @media (max-width: 768px) {
    height: 24px;
    font-size: 16px;
    border-radius: 8px;
    padding: 5px 15px;
    margin-top: 0;
    margin-left: auto;
  }
`;
