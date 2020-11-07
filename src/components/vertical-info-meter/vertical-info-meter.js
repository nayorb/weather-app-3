import React from "react";
import { Container, Dot } from "./vertical-info-meter.styles";
import { BsCircleFill } from "react-icons/bs";
import COLORS from "../../constants/colors";

const VerticalInfoMeter = ({ value }) => {
  return (
    <Container>
      <Dot
        style={{
          bottom: value
        }}
      >
        <BsCircleFill color={COLORS.BLUE_MAIN} size={28} />
      </Dot>
    </Container>
  );
};

export default VerticalInfoMeter;
