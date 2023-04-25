import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Currentcomp } from "./Currentcomp";

export const Current = () => {
  const [data, setData] = React.useState(null);
  const [src, setImage] = React.useState(null);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      handlerequest(lat, lon);
    });
  };
  const handleimg = (tag) => {
    const url = ` http://openweathermap.org/img/wn/${tag}@2x.png`;
    let res = fetch(url);
    res
      .then((r) => {
        setImage(r.url)
        // console.log(r.url)
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const handlerequest = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f&units=metric`;
    let res = fetch(url);
    res
      .then((r) => {
        return r.json();
      })
      .then((ans) => {
        setData(ans);
        // console.log("icon",ans.weather[0].icon)
        handleimg(ans.weather[0].icon)
        console.log("ans",data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box>
      <br></br>
      <Button
        onClick={() => getLocation()}
        marginBottom="20px"
        backgroundColor="cyan"
        color="teal"
      >
        Get current Longitude and Latitude
      </Button>
      {data && <Currentcomp data={data} src={src}/>}
    </Box>
  );
};
