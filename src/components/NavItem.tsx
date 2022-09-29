import React from "react";
import {
  Flex,
  Icon,
  Text,
  useTheme,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { IconType } from "react-icons";
interface Props {
  icon: IconType;
  name: string;
  path: string;
  setNav: any;
  nav: any;
}

const NavItem = ({ icon, name, path, setNav, nav }: Props) => {
  const theme = useTheme();
  return (
    <>
      <ChakraLink
        as={Link}
        to={path}
        spy={true}
        smooth="true"
        offset={0}
        onSetActive={(e: any) => setNav(e)}
        style={{
          textDecoration: "none",
        }}
      >
        <Flex
          w="25vw"
          py="1.5rem"
          justifyContent="space-between"
          bg={nav === path ? "#202020" : ""}
          transition="all .5s ease"
          cursor="pointer"
          pl="3rem"
          pr="3rem"
        >
          <Icon
            as={icon}
            fontSize={["xl", "xl", "xl", "xl", "xl", "3xl"]}
            fill={nav === path ? "#6a3fb5" : "#727272"}
            alignSelf="center"
          />
          <Text
            color={nav === path ? "#6a3fb5" : "#727272"}
            fontSize={["sm", "sm", "sm", "sm", "lg", "xl"]}
            fontFamily={theme.fonts.primary}
          >
            {name}
          </Text>
        </Flex>
      </ChakraLink>
    </>
  );
};

export default NavItem;
