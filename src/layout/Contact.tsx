import {
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
  useToast,
} from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub, AiFillMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import * as yup from "yup";

let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

function Contact() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_przmmqv",
        "template_gcjvl3a",
        e.target,
        process.env.NEXT_PUBLIC_API_PUBLIC_KEY
      )
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          toast({
            title: "Enviado exitosamente!.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((res) => console.log(res));
  };

  const theme = useTheme();
  const toast = useToast();
  return (
    <>
      <Grid
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
            minW={["90vw", "70vw", "40vw", "25vw", "25vw"]}
            flexDir="column"
            p="2rem"
            fontFamily={theme.fonts.primary}
            gap="3rem"
            rounded="20px"
            boxShadow="1px 1px 10px 1px #606060"
            justifyContent="center"
            h="500px"
          >
            <Text fontSize="3xl" fontFamily={theme.fonts.secondary} mb="auto">
              Contactame
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
            h="500px"
            w={["90vw", "70vw", "40vw", "25vw", "25vw"]}
            maxH="auto"
            flexDir="column"
            p="2rem"
            fontFamily={theme.fonts.primary}
            gap="1rem"
            rounded="20px"
            boxShadow="1px 1px 10px 1px #606060"
          >
            <Text
              fontSize={["2xl", "2xl", "2xl", "2xl", "2xl", "3xl"]}
              fontFamily={theme.fonts.secondary}
              mb="2rem"
            >
              Enviame tu opinión
            </Text>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel fontSize={["xl", "xl", "xl", "xl", "xl", "2xl"]}>
                  Nombre
                </FormLabel>
                <Input type="text" name="from_name" />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={["xl", "xl", "xl", "xl", "xl", "2xl"]}>
                  E-mail
                </FormLabel>
                <Input type="email" name="from_email" />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={["xl", "xl", "xl", "xl", "xl", "2xl"]}>
                  Deja un mensaje
                </FormLabel>
                <Textarea name="message" id="" />
              </FormControl>
              <Button type="submit">Enviar</Button>
            </form>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}

export default Contact;
