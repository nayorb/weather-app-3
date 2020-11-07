import styled from "styled-components";
import COLORS from "../../constants/colors";

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
`;
export const LocationInputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 64px;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;
export const LocationInput = styled.input`
  height: 24px;
  flex: 1;
  margin: 0 5px;
  line-height: 24px;
  border: 0;

  &:focus {
    border: 0;
  }
`;
export const LocationInputIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const LocationInputLocateButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 999px;
  &:hover {
    background-color: ${COLORS.GREY_FONT};
  }
`;
export const SelectMenu = styled.div`
  position: absolute;
  top: 28px;
  background-color: ${COLORS.WHITE};
  width: 100%;
  overflow-y: scroll;
  max-height: 240px;

  box-shadow: ${({ isOpen }) =>
    isOpen ? `0 6px 10px 10px ${COLORS.GREY_LIGHT}` : ""};
`;
export const SelectMenuItem = styled.div`
  cursor: pointer;
  padding: 10px;
  background-color: ${COLORS.WHITE};
`;
