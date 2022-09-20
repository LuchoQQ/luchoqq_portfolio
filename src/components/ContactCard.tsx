import { Flex, Icon, Text, useTheme, Link } from "@chakra-ui/react";
import React from "react";

function ContactCard({ icon, content, color, path }: any) {
  const theme = useTheme();
  return (
    <>
      <Link href={path} isExternal={true}>
        <Flex
          minH="20vh"
          flexDir="column"
          alignItems="center"
          justifyContent="space-around"
          rounded="15px"
          boxShadow="1px 1px 10px 1px #606060"
          role="group"
          _hover={{
            transform: "scale(1.1)",
          }}
          transition="all .2s ease"
          cursor="pointer"
        >
          <Icon
            as={icon}
            fontSize="8xl"
            _groupHover={{ fill: color }}
            transition="all .2s ease"
          />
          <Text fontSize="lg" fontFamily={theme.fonts.secondary}>
            {content}
          </Text>
        </Flex>
      </Link>
    </>
  );
}

export default ContactCard;
