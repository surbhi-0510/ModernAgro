import { Box, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Showfivedaysdata = (props) => {
  const [img, setImage] = React.useState("");
  console.log("list", props);
  let { dt_txt, main, weather } = props.el;
  if (weather[0].icon) {
    findicon(weather[0].icon,setImage);
    // console.log(img)
  }
  return (
    <Box
      // border={"1px solid red"}
      boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
      rounded="lg"
      width={"fit-content"}
      margin="auto"
      marginTop="40px"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Image
            rounded={"lg"}
            height={200}
            width={200}
            objectFit={"contain"}
            src={img}
          />
        <Box width="300px">
          <Stack p={4}>
            <Heading
              as="h3"
              size="lg"
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow={"ellipsis"}
            >
              {weather[0].description.toUpperCase()}
            </Heading>
            <Box overflow={"hidden"} whiteSpace="nowrap">
              <Text fontSize={"lg"}>Date:{dt_txt.split(" ")[0]}</Text>
              <Text fontSize={"lg"}>Time:{dt_txt.split(" ")[1]}</Text>
            </Box>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              Temperature:{main.feels_like}°C
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
function findicon(tag,setImage) {
  const url = ` http://openweathermap.org/img/wn/${tag}@2x.png`;
  const res = fetch(url);
  res
    .then((r) => {
      setImage(r.url);
      // console.log(r.url)
    })
    .catch((err) => {
      console.log("err", err);
    });
}
export default Showfivedaysdata;
