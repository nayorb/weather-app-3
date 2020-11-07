import styled from "styled-components";

export const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
