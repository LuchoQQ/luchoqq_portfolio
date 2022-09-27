import { Flex, Grid, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import TabAbout from "../components/TabAbout";
function About() {
  const theme = useTheme();
  return (
    <>
      <Grid
        mt="1rem"
        minH="100vh"
        position="relative"
        zIndex="10"
        justifyContent="center"
        gap="2rem"
        alignContent="center"
        bg="#FDFDFD"
        id="about"
        boxShadow="10px 10px 10px 5px black"
      >
        <Text
          fontSize={["4xl", "6xl"]}
          fontFamily={theme.fonts.secondary}
          textAlign="center"
        >
          ABOUT ME
        </Text>
        <Flex
          alignSelf="center"
          flexDir={["column", "column", "column", "column", "row"]}
          justifyContent="space-around"
          gap="2rem"
        >
          <TabAbout />
          <Flex justifyContent="center" alignContent="center">
            <Image
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663859544/undraw_programming_re_kg9v_m1tcvj.svg"
              w="400px"
              alignSelf="center"
            />
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}

export default About;
