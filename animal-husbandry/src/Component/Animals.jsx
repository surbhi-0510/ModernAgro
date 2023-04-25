import React from "react";
import { Box, Link } from "@chakra-ui/react";
// import LinearGradient from "react-native-linear-gradient";

export const Animals = ({ name, link }) => {
  return (
    <Box p={5} lineHeight={"40px"} rounded={"10px"} className="App">
      <Box fontSize={"20px"} fontWeight="mediumnpm">
        {name}
      </Box>
      <Link href={link} target="_blank">
        {/* Click Here */}
        यहाँ क्लिक करें
      </Link>
    </Box>
  );
};
