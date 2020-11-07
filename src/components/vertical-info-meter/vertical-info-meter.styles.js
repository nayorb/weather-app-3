import styled from "styled-components";
import COLORS from "../../constants/colors";

export const Container = styled.div`
  width: 40px;
  height: 140px;
  border: 1px solid ${COLORS.GREY_FONT};
  border-radius: 999px;
  display: flex;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  padding: 6px;
`;
export const Dot = styled.div`
  position: absolute;
  bottom: 0px;
`;
