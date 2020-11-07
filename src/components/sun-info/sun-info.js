import React from "react";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import COLORS from "../../constants/colors";
import { Container, InfoContainer, SunIcon } from "./sun-info.styles";

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedTime = hours + ":" + minutes + " ";
  return { formattedTime, ampm };
}

const SunInfo = ({ time }) => {
  const { formattedTime, ampm } = formatAMPM(new Date(time * 1000));
  const Arrow = ampm === "AM" ? BiUpArrowAlt : BiDownArrowAlt;

  return (
    <Container>
      <SunIcon>
        <Arrow size={24} color={COLORS.WHITE} />
      </SunIcon>
      <InfoContainer>
        {formattedTime} {ampm}
      </InfoContainer>
    </Container>
  );
};

export default SunInfo;
