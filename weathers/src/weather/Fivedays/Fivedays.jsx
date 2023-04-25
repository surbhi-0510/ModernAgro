import { Box, Button, Input, Stack } from "@chakra-ui/react";
import React from "react";
import Showfivedaysdata from "./Showfivedaysdata";

export const Fivedays = () => {
  const [value, setValue] = React.useState();
  const [data, setData] = React.useState([]);
  const handleform = (e) => {
    e.preventDefault();
    // console.log(value)
    fetchData(value);
  };
  const seeip = (e) => {
    setValue(e.target.value);
  };
  const fetchData = (city) => {
    // console.log("**",city)
    city = city.charAt(0).toUpperCase() + city.slice(1);
    // console.log("*",city)
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f&units=metric`;
    const ans = fetch(url);
    ans
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        if (r.list) {
          setData(r.list);
        } else {
          setData("NO");
        }
        console.log("ans", r);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <Box>
      <form onSubmit={(e) => handleform(e)}>
        <Stack
          display="flex"
          direction="row"
          width={{ base: "70%", md: "30%" }}
          margin="auto"
          marginTop="50px"
        >
          <Input
            // placeholder="✍️Enter name of city..."
            placeholder="✍️ शहर का नाम दर्ज करें..."
            value={value}
            autoComplete="off"
            name="city"
            onChange={(e) => seeip(e)}
          />
          <Button color="teal.400" backgroundColor="cyan.200" type="submit">
            {/* Search✔️ */}
            खोजें✔️
          </Button>
        </Stack>
      </form>
      {
        // data.length &&
        data === "NO" ? (
          <Box
          marginLeft={{base:65}}
          >
            <br></br>
            <h1>NO SUCH CITY FOUND 😢!!</h1>
          </Box>
        ) : (
          data.map((el, i) => {
            if (i % 5 === 0) {
              return <Showfivedaysdata el={el} />;
            } else {
              return <></>;
            }
          })
        )
      }
    </Box>
  );
};
