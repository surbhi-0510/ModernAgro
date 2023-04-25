import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
import { MdAgriculture } from "react-icons/md";
import { TipsComponent } from "../components/TipsComponent";
import SimpleSidebars from "../components/Try";

export const Home = () => {
  return (
    <>
      <Box
        display="flex"
        // justifyContent="center"
        justifyContent={"flex-end"}
        color={"snow"}
        backgroundColor={"green"}
      >
        <Icon as={MdAgriculture} fontSize="5rem" />
        <Text
          fontWeight={"bolder"}
          p={2}
          fontFamily={("Lucida Console", "Courier New", "monospace")}
          fontSize={"3xl"}
        >
          {/* Modern Agronomics */}
          आधुनिक कृषि विज्ञान
        </Text>
        <Box
          paddingTop={3}
          fontSize={19}
          display="flex"
          flexDirection={"column"}
          alignItems={"flex-end"}
          // border="1px solid red"
          w={{ base: 600, md: 250 }}
          marginLeft={{ base: 50, md: 200 }}
          paddingRight={5}
        >
          <Text>किसान कॉल सेंटर 📞</Text>
          <Text>1800-180-1551</Text>
        </Box>
      </Box>
      <Box display={"flex"}>
        <SimpleSidebars />
        <TipsComponent />
      </Box>
    </>
  );
};
