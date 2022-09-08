import React from "react";
import { Grid, Box, Flex, Image, Text, useTheme, Icon } from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillMail,
} from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import NavItem from "../components/NavItem";
import { ReactNode } from "react";

interface ReactIcon {
  icon: JSX.Element;
  url: string;
}

const icons: ReactIcon[] = [
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
        bg="#252525"
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
                rounded="5px"
              />
            </Box>
            <Box>
              <Text
                color="#dedede"
                fontSize="2xl"
                fontFamily={theme.fonts.secondary}
                textAlign="end"
              >
                Luciano Sánchez
              </Text>
              <Text
                color="#737272"
                fontSize="lg"
                fontFamily={theme.fonts.secondary}
                textAlign="end"
              >
                Fullstack Developer
              </Text>
            </Box>
          </Flex>
        </Grid>
        <Grid>
          <NavItem icon={IoHome} name="Inicio" />
          <NavItem icon={FaUserAlt} name="About me" />
          <NavItem icon={BsFillBriefcaseFill} name="Portfolio" />
          <NavItem icon={AiFillMail} name="Contact" />
        </Grid>

        <Grid h="15vh" mt="auto" justifyContent="center" alignContent="center">
          <Flex gap="2rem">
            <Icon as={AiFillLinkedin} fill="#737272" fontSize="3xl" />
            <Icon as={AiFillGithub} fill="#737272" fontSize="3xl" />
            <Icon as={AiOutlineWhatsApp} fill="#737272" fontSize="3xl" />
            <Icon as={AiFillMail} fill="#737272" fontSize="3xl" />
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default Sidebar;