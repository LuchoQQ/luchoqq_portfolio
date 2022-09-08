import React from "react";
import { Flex, Icon, Text, useTheme } from "@chakra-ui/react";
import { IconType } from 'react-icons'
interface Props {
  icon: IconType;
  name: string;
}

const NavItem = ({ icon, name }: Props) => {
  const theme = useTheme();
  return (
    <>
      <Flex
        w="25vw"
        py="1.5rem"
        justifyContent="space-between"
        //_hover={{ bg: "#151515" }}
        transition="all .2s ease"
        cursor='pointer'
        px='3rem'
      >
        <Icon as={icon} fontSize="3xl" fill="#737272" alignSelf="center" />
        <Text color="#737272" fontSize="2xl" fontFamily={theme.fonts.primary}>
          {name}
        </Text>
      </Flex>
    </>
  );
};

export default NavItem;
