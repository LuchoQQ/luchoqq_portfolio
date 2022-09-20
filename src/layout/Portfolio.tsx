import { Box, Flex, Grid, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  const theme = useTheme();
  return (
    <>
      <Grid
        w={["100vh", "100vw", "100vw", "75vw", "75vw"]}
        minH="100vh"
        position="relative"
        zIndex="10"
        alignContent="center"
        bg="#F1F6F6"
        id="portfolio"
        gap="1rem"
      >
        <Box p="4rem">
          <Text
            fontSize="6xl"
            fontFamily={theme.fonts.secondary}
            textAlign="center"
          >
            PORTFOLIO
          </Text>
          <Text
            fontSize="2xl"
            fontFamily={theme.fonts.primary}
            color="#505050"
            textAlign="center"
            px="2rem"
          >
            En esta sección hé recopilado algunos de los proyectos que trabaje
            en los que trabajé!.
          </Text>
        </Box>
        <Flex gap="3rem" flexWrap='wrap' py="2rem" justifyContent='center'>
          <PortfolioCard
            title="Sporty"
            description="Deserunt irure ullamco culpa cillum. Aliqua ad id in reprehenderit voluptate fugiat. Nulla id laboris"
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663620686/Captura_de_pantalla_2022-09-19_175038_pze0gr.png"
          />
          <PortfolioCard
            title="ONG: SOMOS MAS"
            description="Deserunt irure ullamco culpa cillum. Aliqua ad id in reprehenderit voluptate fugiat. Nulla id laboris"
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663620068/Captura_de_pantalla_2022-09-19_174056_ljui82.png"
          />
          <PortfolioCard
            title="Movieverse"
            description="Enim qui mollit deserunt duis nisi sint. Est ad enim consectetur  deserunt duis nisi sint. Est ad enim consectetur  deserunt duis nisi sint. Est ad enim consectetur ad occaecat pariatur fugiat eu magna."
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663619922/Captura_de_pantalla_2022-09-19_173744_gwryo6.png"
          />{" "}
          <PortfolioCard
            title="Movieverse"
            description="Enim qui mollit deserunt duis nisi sint. Est ad enim consectetur  deserunt duis nisi sint. Est ad enim consectetur  deserunt duis nisi sint. Est ad enim consectetur ad occaecat pariatur fugiat eu magna."
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663619922/Captura_de_pantalla_2022-09-19_173744_gwryo6.png"
          />{" "}
          <PortfolioCard
            title="Movieverse"
            description="Enim qui mollit deserunt duis nisi sint. Est ad enim consectetur  deserunt duis nisi sint. Est ad enim consectetur  deserunt duis nisi sint. Est ad enim consectetur ad occaecat pariatur fugiat eu magna."
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663619922/Captura_de_pantalla_2022-09-19_173744_gwryo6.png"
          />
        </Flex>
      </Grid>
    </>
  );
}

export default Portfolio;
