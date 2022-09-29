import { Box, Flex, Grid, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  const theme = useTheme();
  return (
    <>
      <Grid
        minH="100vh"
        position="relative"
        zIndex="10"
        alignContent="center"
        bg="#F1F6F6"
        id="portfolio"
        gap="1rem"
        boxShadow="10px 10px 10px 5px black"
      >
        <Box p="2rem">
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
            title="Portfolio"
            type="Landing Page"
            briefDescription="Este mismo :)"
            description=""
            src="https://res.cloudinary.com/diylksocz/image/upload/v1664203664/Captura_de_pantalla_2022-09-26_114732_rkt2hp.png"
            stack="ReactJS, ChakraUI, NodeJS, MongoDB, Mongoose, AWS S3"
            github="https://github.com/LuchoQQ/sporty"
            web=""
          />
          <PortfolioCard
            title="Ibiza"
            type="Landing Page"
            briefDescription="Ibiza es una landing para un nightclub donde puedes realizar reservas"
            description="Ibiza es una landing donde puedes ver los servicios que ofrece "
            src="https://res.cloudinary.com/diylksocz/image/upload/v1664202579/Captura_de_pantalla_2022-09-26_111130_cvr7ky.png"
            stack="ReactJS, ChakraUI, NodeJS, MongoDB, Mongoose, AWS S3"
            github="https://github.com/LuchoQQ/sporty"
            web=""
          />
          <PortfolioCard
            title="Sporty"
            type="E-Commerce"
            briefDescription="Sporty es una tienda virtual de ropa deportiva"
            description="Sporty es un E-commerce de ropa deportiva donde puedes buscar productos o filtrarlo según su precio, categoria, o marca. Los recursos de los productos se almacenan en la nube de AWS S3. Tambien posee backoffice para agregar/editar/eliminar el contenido"
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663620686/Captura_de_pantalla_2022-09-19_175038_pze0gr.png"
            stack="ReactJS, ChakraUI, NodeJS, MongoDB, Mongoose, AWS S3"
            github="https://github.com/LuchoQQ/sporty"
            web=""
          />
          <PortfolioCard
            title="Somos MAS"
            type="Portal"
            briefDescription="Somos MÁS es el portal de una ONG donde puedes seguir sus actividades y noticias"
            description="Somos MÁS es el foro de una ONG en donde se puede consultar las actividades, noticias, participantes, testimonios y contacto de dicha ONG. Posee un CMS donde un administrador puede agregar o editar nuevo contenido"
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663620068/Captura_de_pantalla_2022-09-19_174056_ljui82.png"
            stack="ReacjJS, ChakraUI, NodeJS, MySQL, Sequelize, AWS S3"
            github="https://github.com/alkemyTech/OT222-client"
            github2="https://github.com/alkemyTech/OT222-server"
          />
          <PortfolioCard
            title="Movieverse"
            type="Multimedia"
            description="Movieverse es una colección de series y películas donde puedes ver los detalles de tu filmación preferida."
            briefDescription="Movieverse es una colección de series y películas donde puedes ver los detalles de tu filmación preferida."
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663619922/Captura_de_pantalla_2022-09-19_173744_gwryo6.png"
            stack="NextJS, Tailwind"
            github="https://github.com/LuchoQQ/movieverse"
            web="https://github.com/LuchoQQ/movieverse"
          />
        </Flex>
      </Grid>
    </>
  );
}

export default Portfolio;
