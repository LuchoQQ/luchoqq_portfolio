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
        autoFlow={['row', 'column']}
      >
        
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap="5rem">
         
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
