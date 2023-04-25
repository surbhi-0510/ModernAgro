import React from "react";
import {
  Box,
  Flex,
  Avatar,
  //   Link,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        backgroundColor={colorMode === "light" ? "cyan" : "teal"}
        color={colorMode === "dark" ? "cyan" : "teal"}
        paddingTop={{ base: 10, md: 1 }}
        paddingBottom={{ base: 35, md: 1 }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box width={{ base: "50%", md: "40%" }} textAlign={"center"}>
            <Stack
              direction={{ base: "column", md: "row" }}
              justifyContent="space-evenly"
              cursor={"pointer"}
            >
              <Box border="1px dashed white" p={3}>
                {/* <Link to="/current">Get Current Weather 🔆</Link> */}
                <Link to="/current">वर्तमान मौसम प्राप्त करें 🔆</Link>
              </Box>
              <Box border="1px dashed white" p={3}>
                {/* <Link to="/fivedays"> Get 5️⃣ Days Weather</Link> */}
                <Link to="/fivedays">5️ दिन का मौसम प्राप्त करें</Link>
              </Box>
            </Stack>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    {/* <p>Username</p> */}
                    <p>उपयोगकर्ता नाम</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  {/* <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem> */}
                  <MenuItem>अकाउंट सेटिंग</MenuItem>
                  <MenuItem>लॉग आउट</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
        {/* <Box boxSize="100%" className="active">
          <Image
            src="https://images.theconversation.com/files/442675/original/file-20220126-17-1i0g402.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
            alt="Weather pic"
          />
        </Box> */}
      </Box>
      {/* <Box id="active" className="activated"
        height={"550px"}
        // opacity={"0.5"}
          backgroundImage={
            "https://npr.brightspotcdn.com/dims4/default/e59d568/2147483647/strip/true/crop/3888x2395+0+99/resize/880x542!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwuwm%2Ffiles%2F202001%2FAdobeStock_84598705.jpeg"
          }
        ></Box> */}
    </>
  );
};

export default Navbar;
