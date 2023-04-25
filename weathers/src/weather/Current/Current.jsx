import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Currentcomp } from "./Currentcomp";
import { Icons } from "../../iconData";

export const Current = () => {
  const [data, setData] = React.useState(null);
  // const [src, setImage] = React.useState(null);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      if (lat !== undefined && lon !== undefined) {
        handlerequest(lat, lon);
      }
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
        // handleimg(ans.weather[0].icon)
        console.log("ans", ans);
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
        marginLeft={{base:"35px",md:"500px"}}
        backgroundColor="cyan"
        color="teal"
      >
        {/* Get current Longitude and Latitude 🌍 */}
        वर्तमान देशांतर और अक्षांश प्राप्त करें 🌍
      </Button>
      {data && <Currentcomp data={data} src={Icons[data.weather[0].icon]} />}
    </Box>
  );
};
