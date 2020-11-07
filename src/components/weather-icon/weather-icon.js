import React from "react";

const { Container, Image } = require("./weather-icon.styles");

const WeatherIcon = ({ icon, size = 120 }) => {
  const imgUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <Container>
      {icon ? (
        <Image
          src={imgUrl}
          style={{
            width: size,
            height: size
          }}
        />
      ) : null}
    </Container>
  );
};

export default WeatherIcon;
