import styled from "styled-components";
import COLORS from "../constants/colors";

export const Card = styled.div``;

export const InfoCard = styled(Card)`
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: stretch;
  box-sizing: border-box;
`;
export const InfoCardTitle = styled.div`
  color: ${COLORS.GREY_FONT};
  position: absolute;
  top: 16px;
  display: flex;
  position: absolute;
  width: 100%;
  left: 0;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const InfoCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InfoCardFooter = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 16px;
  width: 100%;
  left: 0;
  padding: 0 16px;
  box-sizing: border-box;
`;
