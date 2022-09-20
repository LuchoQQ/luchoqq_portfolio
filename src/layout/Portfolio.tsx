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
            En esta sección hé recopilado algunos de los proyectos en los que
            trabaje!
          </Text>
        </Box>
        <Flex gap="3rem" flexWrap="wrap" py="2rem" justifyContent="center">
          <PortfolioCard
            title="Sporty"
            description="Sporty es un E-commerce de ropa deportiva donde puedes buscar productos o filtrarlo según su precio, categoria, o marca. Los recursos de los productos se almacenan en la nube de AWS S3. Tambien posee backoffice para agregar/editar/eliminar el contenido"
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663620686/Captura_de_pantalla_2022-09-19_175038_pze0gr.png"
          />
          <PortfolioCard
            title="Somos MAS"
            description="Somos MÁS es el foro de una ONG en donde se puede consultar las actividades, noticias, participantes, testimonios y contacto de dicha ONG. Posee un CMS donde un administrador puede agregar o editar nuevo contenido"
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663620068/Captura_de_pantalla_2022-09-19_174056_ljui82.png"
          />
          <PortfolioCard
            title="Movieverse"
            description="Movieverse es una colección de series y películas donde puedes ver los detalles de tu filmación preferida."
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663619922/Captura_de_pantalla_2022-09-19_173744_gwryo6.png"
          />
        </Flex>
      </Grid>
    </>
  );
}

export default Portfolio;
