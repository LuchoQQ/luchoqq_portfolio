import {
  Box,
  Flex,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import RadialMenu from "../components/RadialMenu";
import TabAbout from "../components/TabAbout";
function About() {
  const theme = useTheme();
  return (
    <>
      <Grid
        h="90vh"
        position="relative"
        zIndex="10"
        justifyContent="center"
        alignContent="center"
        bg="#FDFDFD"
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
