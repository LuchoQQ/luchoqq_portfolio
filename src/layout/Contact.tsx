import { Grid } from "@chakra-ui/react";
import React from "react";

function Contact() {
  return (
    <>
      <Grid
        w={["100vh", "100vw", "75vw", "75vw", "75vw"]}
        minH="100vh"
        position="relative"
        zIndex="10"
        justifyContent="center"
        alignContent="center"
        bg="yellow"
        id="contact"
      ></Grid>
    </>
  );
}

export default Contact;
