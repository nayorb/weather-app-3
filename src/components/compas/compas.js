import React from "react";
import { Container } from "./compas.styles";
import { MdPlace } from "react-icons/md";
import COLORS from "../../constants/colors";

const Compas = ({ angle }) => {
  return (
    <div style={{ transform: `rotate(${angle + 180}deg)` }}>
      <Container>
        <MdPlace color={COLORS.BLUE_MAIN} />
      </Container>
    </div>
  );
};

export default Compas;
