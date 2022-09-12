import { Grid } from "@chakra-ui/react";
import React from "react";

function Portfolio() {
  return (
    <>
      <Grid
        w={["100vh", "100vw", "75vw", "75vw", "75vw"]}
        h="90vh"
        position="relative"
        zIndex="10"
        justifyContent="center"
        alignContent="center"
        bg="blue"
      ></Grid>
    </>
  );
}

export default Portfolio;
