import styled from "styled-components";
import theme from "../../utils/theme";

export const Container = styled.div`
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2px;
  height: 36px;
  width: 36px;
  border-radius: 999px;
  background-color: ${theme.unitTabs.item.backgroundColor};
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;

  ${({ selected }) =>
    selected
      ? `
    background-color: black;
    color: white;
    `
      : null}

  margin-right: 10px;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }
`;
