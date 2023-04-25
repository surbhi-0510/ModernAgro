import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";

import { BsStopwatch } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiGoat } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { BiNotepad, BiTransfer } from "react-icons/bi";
import { FcTodoList, FcCalculator } from "react-icons/fc";
const LinkItems = [
  {
    // name: "Govt. Subsidy",
    name: "सरकारी सब्सिडी",
    icon: BiNotepad,
    linking: "https://govsubsidy-farmers.netlify.app/",
  },
  {
    // name: "Crop Details",
    name: "फसल विवरण",
    icon: GiFruitTree,
    linking: "https://cropdetail-farmers.netlify.app/",
  },
  {
    // name: "Todo List",
    name: "करने के लिए सूची",
    icon: FcTodoList,
    linking: "https://todolist-farmers.netlify.app/",
  },
  {
    // name: "Calculations",
    name: "कैलक्यूलेटर",
    icon: FcCalculator,
    linking: "https://calculator-farmers.netlify.app/",
  },
  //   { name: "Unit Converter", icon: SiConvertio, linking: "https://" },
  {
    // name: "Stopwatch",
    name: "स्टॉपवॉच",
    icon: BsStopwatch,
    linking: "https://stopwatch-for-farmers.netlify.com",
  },
  //   { name: "Profit-Loss", icon: FcMoneyTransfer, linking: "https://" },
  {
    // name: "Translator",
    name: "अनुवादक",
    icon: BiTransfer,
    linking: "https://translators-farmers.netlify.app/",
  },
  {
    // name: "Weather Forecast",
    name: "मौसम पूर्वानुमान",
    icon: TiWeatherPartlySunny,
    linking: "https://weatherforecast-farmers.netlify.app/",
  },
  {
    // name: "Animal Husbandry",
    name: "पशुपालन",
    icon: GiGoat,
    linking: "https://animalhusbandry-farmers.netlify.app/",
  },
];

const HandleClick = (links, name) => {
  console.log("name:", name, links);
  // window.location.replace(links);
  window.open(links, "_blank");
};

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }
// const LinkItems: Array<LinkItemProps> = [
//   { name: 'Home', icon: FiHome },
//   { name: 'Trending', icon: FiTrendingUp },
//   { name: 'Explore', icon: FiCompass },
//   { name: 'Favourites', icon: FiStar },
//   { name: 'Settings', icon: FiSettings },
// ];

export default function SimpleSidebars({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      // minH="100vh"
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="10" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          विशेषताएँ
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => HandleClick(link.linking, link.name)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text> */}
    </Flex>
  );
};
