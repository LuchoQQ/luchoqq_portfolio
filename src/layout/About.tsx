import { Flex, Grid, useTheme } from "@chakra-ui/react";
import React from "react";
import RadialMenu from "../components/RadialMenu";
import TabAbout from "../components/TabAbout";
function About() {
  const theme = useTheme();
  return (
    <>
      <Grid
        minH="100vh"
        position="relative"
        zIndex="10"
        justifyContent="center"
        alignContent="center"
        bg="#FDFDFD"
        id="about"
      >
        <Flex
          alignSelf="center"
          flexDir={["column", "column", "column", "column", "row"]}
          w={["100vw", "100vw", "100vw", "75vw", "65vw"]}
          justifyContent="space-around"
        >
          <TabAbout />
          <Flex justifyContent="center" alignContent="center">
            <RadialMenu />
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}

export default About;
