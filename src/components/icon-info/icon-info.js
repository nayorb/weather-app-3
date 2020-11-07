import React from "react";
import COLORS from "../../constants/colors";

const { Container, Text } = require("./icon-info.styles");

const IconInfo = ({ iconColor = COLORS.BLACK, iconSize = 24, Icon, text }) => {
  return (
    <Container>
      <Icon size={iconSize} color={iconColor} />
      <Text>{text}</Text>
    </Container>
  );
};

export default IconInfo;
