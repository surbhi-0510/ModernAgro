import { Box, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Currentcomp = (props) => {
    // console.log(props)
  return (
    <Box>
      <Stack
        p={5}
        display="flex"
        direction="column"
        // border="1px solid blue"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        width="fit-content"
        margin="auto"
      >
        <Heading>{props.data.name.toUpperCase()}</Heading>
        <h1>Current Temperature: {props.data.main.feels_like}°C </h1>
        <Image src={props.src} style={{height:"100px",width:"100px",margin:"auto"}}/>
        <Heading>{props.data.weather[0].description.toUpperCase()}</Heading>
        <h2>Maximum Temp: {props.data.main.temp_max}°C</h2>
        <h2>Minimum Temp: {props.data.main.temp_min}°C</h2>
      </Stack>
    </Box>
  );
};

