import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Icon,
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
        w={["100vh", "100vw", "100vw", "75vw", "75vw"]}
        minH="100vh"
        position="relative"
        zIndex="10"
        justifyContent="center"
        alignContent="center"
        bg="#fff"
        id="contact"
        autoFlow={["row", "row", "row", "column", "column"]}
        boxShadow="10px 10px 10px 5px black"
        py="4rem"
      >
        <Flex gap="5rem" flexWrap="wrap" justifyContent="center">
          <Flex
            minW={["320px"]}
            flexDir="column"
            p="2rem"
            fontFamily={theme.fonts.primary}
            gap="3rem"
            rounded="20px"
            boxShadow="1px 1px 10px 1px #606060"
            justifyContent="center"
          >
            <Text fontSize="3xl" fontFamily={theme.fonts.secondary} mb="auto">
              Contactame!
            </Text>
            <Flex gap="1rem">
              <Icon as={BsLinkedin} fontSize="4xl" />
              <Text
                alignSelf="center"
                fontSize="xl"
                fontFamily={theme.fonts.primary}
              >
                linkedin/in/luchoqq
              </Text>
            </Flex>
            <Flex gap="1rem">
              <Icon as={AiOutlineGithub} fontSize="4xl" />
              <Text
                alignSelf="center"
                fontSize="xl"
                fontFamily={theme.fonts.primary}
              >
                github.com/luchoqq
              </Text>
            </Flex>
            <Flex gap="1rem">
              <Icon as={AiFillMail} fontSize="4xl" />
              <Text
                alignSelf="center"
                fontSize="xl"
                fontFamily={theme.fonts.primary}
              >
                luchoqq25@gmail.com
              </Text>
            </Flex>
            <Flex gap="1rem" mb="auto">
              <Icon as={IoLogoWhatsapp} fontSize="4xl" />
              <Text
                alignSelf="center"
                fontSize="xl"
                fontFamily={theme.fonts.primary}
              >
                +54 3794 913997
              </Text>
            </Flex>
          </Flex>
          <Flex
            w={["40vw", "40vw", "40vw", "25vw", "25vw"]}
            maxH="auto"
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
        </Flex>
      </Grid>
    </>
  );
}

export default Contact;
