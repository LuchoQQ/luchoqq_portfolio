import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
  Textarea,
  useTheme,
} from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub, AiFillMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import React from "react";
import ContactCard from "../components/ContactCard";

function Contact() {
  const theme = useTheme();
  return (
    <>
      <Grid
        w={["100vh", "100vw", "75vw", "75vw", "75vw"]}
        minH="100vh"
        position="relative"
        zIndex="10"
        justifyContent="center"
        alignContent="center"
        bg="#fff"
        id="contact"
      >
        <Text
          fontSize="6xl"
          fontFamily={theme.fonts.secondary}
          textAlign="center"
          mb="4rem"
        >
          Contactame
        </Text>
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap="5rem">
          <Box w="25vw" h="auto">
            <Text fontSize="3xl" fontFamily={theme.fonts.secondary} p="2rem">
              Buscame en mis redes!
            </Text>
            <Grid templateColumns="repeat(2,1fr)" gap="2rem" p="1rem">
              <ContactCard
                icon={BsLinkedin}
                path="https://www.linkedin.com/in/luchoqq"
                content="linkedin.com/in/luchoqq"
                color="#0a66c2"
              />
              <ContactCard
                icon={AiOutlineGithub}
                path="https://www.github.com/luchoqq"
                content="github.com/LuchoQQ"
                color="#000"
              />
              <ContactCard
                icon={IoLogoWhatsapp}
                path="https://wa.link/9fziuq"
                content="+543794913997"
                color="#34bb47"
              />
              <ContactCard
                icon={AiFillMail}
                path="mailto:luchoqq25@gmail.com"
                content="luchoqq25@gmail.com"
                color="#ea4335"
              />
            </Grid>
          </Box>
          <Flex
            w="25vw"
            h="auto"
            flexDir="column"
            p="2rem"
            fontFamily={theme.fonts.primary}
            gap="1rem"
            rounded="20px"
            boxShadow="1px 1px 10px 1px #606060"
          >
            <Text fontSize="3xl" fontFamily={theme.fonts.secondary} mb="2rem">
              Enviame tu opinión!
            </Text>
            <FormControl>
              <FormLabel fontSize="2xl">Nombre</FormLabel>
              <Input></Input>
            </FormControl>
            <FormControl>
              <FormLabel fontSize="2xl">E-mail</FormLabel>
              <Input></Input>
            </FormControl>
            <FormControl>
              <FormLabel fontSize="2xl">Deja un mensaje</FormLabel>
              <Textarea></Textarea>
            </FormControl>
            <Button>Enviar</Button>
          </Flex>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact;
