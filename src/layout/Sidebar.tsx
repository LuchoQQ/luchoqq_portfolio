import React, { useState } from "react";
import {
  Grid,
  Box,
  Flex,
  Image,
  Text,
  useTheme,
  Icon,
  Link,
} from "@chakra-ui/react";
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

const Sidebar = () => {
  const [nav, setNav] = useState();
  console.log(nav);
  const theme = useTheme();
  return (
    <>
      <Box
        w="25vw"
        minH="100vh"
        display={["none", "none", "none", "flex", "flex"]}
      />

      <Flex
        w="25vw"
        h="100vh"
        bg="#161616"
        alignContent="space-between"
        flexDir="column"
        position="fixed"
        zIndex="99999999"
        display={["none", "none", "none", "flex", "flex"]}
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
                fontSize={["xl", "xl", "xl", "xl", "xl", "2xl"]}
                fontFamily={theme.fonts.primary}
                textAlign="end"
              >
                Luciano Sanchez
              </Text>
              <Text
                color="#737272"
                fontSize={["sm", "sm", "sm", "sn", "sm", "lg"]}
                fontFamily={theme.fonts.primary}
                textAlign="end"
              >
                Fullstack Developer
              </Text>
            </Box>
          </Flex>
        </Grid>
        <Grid>
          <NavItem
            icon={IoHome}
            name="Inicio"
            path="/"
            setNav={setNav}
            nav={nav}
          />
          <NavItem
            icon={FaUserAlt}
            name="Sobre mi"
            path="about"
            setNav={setNav}
            nav={nav}
          />
          <NavItem
            icon={BsFillBriefcaseFill}
            name="Proyectos"
            path="portfolio"
            setNav={setNav}
            nav={nav}
          />
          <NavItem
            icon={AiFillMail}
            name="Contacto"
            path="contact"
            setNav={setNav}
            nav={nav}
          />
        </Grid>

        <Grid h="15vh" mt="auto" justifyContent="center" alignContent="center">
          <Flex gap="3rem">
            <Link href="https://linkedin.com/in/luchoqq" isExternal={true}>
              <Icon
                as={AiFillLinkedin}
                fill="#737272"
                fontSize={["2xl", "2xl", "2xl", "2xl", "2xl", "3xl"]}
              />
            </Link>
            <Link href="https://github.com/LuchoQQ" isExternal={true}>
              <Icon
                as={AiFillGithub}
                fill="#737272"
                fontSize={["2xl", "2xl", "2xl", "2xl", "2xl", "3xl"]}
              />
            </Link>
            <Link href="https://walink.co/15a3f4" isExternal={true}>
              <Icon
                as={AiOutlineWhatsApp}
                fill="#737272"
                fontSize={["2xl", "2xl", "2xl", "2xl", "2xl", "3xl"]}
              />
            </Link>
            <Link href="mailto:luchoqq25@gmail.com" isExternal={true}>
              <Icon
                as={AiFillMail}
                fill="#737272"
                fontSize={["2xl", "2xl", "2xl", "2xl", "2xl", "3xl"]}
              />
            </Link>
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default Sidebar;
