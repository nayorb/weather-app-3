import styled from "styled-components";
import theme from "../../utils/theme";

export const Container = styled.div`
  display: flex;
`;

export const Item = styled.div`
  color: ${theme.durationTabs.item.color};

  ${({ selected }) =>
    selected
      ? `
  color: black;
  border-bottom: 1px solid black;
  padding-bottom: 2px;`
      : null}

  margin-right: 10px;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }
`;
