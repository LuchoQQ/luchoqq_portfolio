import React from "react";
import { Flex, Icon, Text, useTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  name: string;
}

const NavItem = ({ icon, name }: Props) => {
  const theme = useTheme();
  return (
    <>
      <Flex
        bg="#202020"
        w="25vw"
        py="1.5rem"
        px="2rem"
        justifyContent="space-between"
        _hover={{ bg: "#151515" }}
        transition="all .2s ease"
      >
        <Icon as={icon} fontSize="3xl" fill="#808080" alignSelf="center" />
        <Text color="#808080" fontSize="2xl" fontFamily={theme.fonts.secondary}>
          Home
        </Text>
      </Flex>
    </>
  );
};

export default NavItem;
