import React from "react";
import { Grid, Box, Flex, Image, Text, useTheme, Icon } from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillMail,
} from "react-icons/ai";
import NavItem from "../components/NavItem";
import { ReactNode } from "react";

const icons: { icon: ReactNode, url: string }[] = [
  {
    icon: <IoHome />,
    url: "./",
  },
];

const Sidebar = () => {
  const theme = useTheme();
  return (
    <>
      <Flex
        w="25vw"
        h="100vh"
        bg="#202020"
        alignContent="space-between"
        flexDir="column"
      >
        <Grid h="20vh" justifyContent="center" alignContent="center">
          <Flex w="25vw" p="3rem" justifyContent="space-between">
            <Box w="70px" h="70px">
              <Image
                src="https://res.cloudinary.com/diylksocz/image/upload/v1658451055/378a270e775265622393da8c0527417e_phnp4l.jpg"
                w="100%"
                h="100%"
              />
            </Box>
            <Box>
              <Text
                color="#dedede"
                fontSize="2xl"
                fontFamily={theme.fonts.primary}
                textAlign="center"
              >
                LuchoQQ
              </Text>
              <Text
                color="#ababab"
                fontSize="xl"
                fontFamily={theme.fonts.primary}
                textAlign="center"
              >
                Fullstack Dev
              </Text>
            </Box>
          </Flex>
        </Grid>
        <Grid>
          <NavItem icon={icons[0]} name="home" />
        </Grid>

        <Grid h="15vh" mt="auto" justifyContent="center" alignContent="center">
          <Flex gap="1rem">
            <Icon as={AiFillLinkedin} fill="#808080" fontSize="3xl" />
            <Icon as={AiFillGithub} fill="#808080" fontSize="3xl" />
            <Icon as={AiOutlineWhatsApp} fill="#808080" fontSize="3xl" />
            <Icon as={AiFillMail} fill="#808080" fontSize="3xl" />
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default Sidebar;
