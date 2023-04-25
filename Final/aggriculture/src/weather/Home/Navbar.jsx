import React from "react";
import {
  Box,
  Flex,
  Avatar,
  //   Link,
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
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            width="40%"
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              justifyContent="space-evenly"
              cursor={"pointer"}
            >
              <Box border="1px dashed white" p={2}>
                <Link to="/current">Get Current Weather</Link>
              </Box>
              <Box border="1px dashed white" p={2}>
               <Link to="/fivedays"> Get 5 Days Weather</Link>
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
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
