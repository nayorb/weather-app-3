import styled from "styled-components";
import COLORS from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const InfoContainer = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;

export const SunIcon = styled.div`
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${COLORS.YELLOW};
  box-shadow: 0 0 12px 6px #ffbf4e inset;
`;
