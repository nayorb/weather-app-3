import React from "react";
import COLORS from "../../constants/colors";

const { Container, Text } = require("./icon-info.styles");

const IconInfo = ({ iconColor = COLORS.BLACK, iconSize = 24, Icon, text }) => {
  return (
    <Container>
      <Icon data-testid="icon" size={iconSize} color={iconColor} />
      <Text data-testid="text">{text}</Text>
    </Container>
  );
};

export default IconInfo;
