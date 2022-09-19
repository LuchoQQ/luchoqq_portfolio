import { Box, Button, Flex, Grid, Text, useTheme } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
const Main = () => {
  const theme = useTheme();

  return (
    <>
      <Grid
        w={["100vh", "100vw", "75vw", "75vw", "75vw"]}
        minH="90vh"
        position="relative"
        zIndex="10"
        justifyContent="center"
        alignContent="center"
        id="/"
      >
        <Text fontSize="6xl" fontFamily={theme.fonts.quart} textAlign="center">
          Hi!, I'm Luciano Sanchez
        </Text>
        <Text fontSize="3xl" fontFamily={theme.fonts.quart} textAlign="center">
          I'm a 21 years old web developer
        </Text>
        <Grid justifyContent="center" gap="2rem" mt="2rem" autoFlow="column">
          <Box
            //transform="skewX(10deg)"
            as={motion.div}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition="0.2s linear"
            padding="1rem"
            border="1px solid #204b6a"
            _hover={{
              boxShadow: "10px 10px 0px 0px #204b6a",
            }}
          >
            <Text fontFamily={theme.fonts.secondary} fontSize="xl">
              Download CV
            </Text>
          </Box>
          <Box
            as={motion.div}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition="0.2s linear"
            padding="1rem"
            border="1px solid #204b6a"
            _hover={{
              boxShadow: "10px 10px 0px 0px #204b6a",
            }}
          >
            <Text fontFamily={theme.fonts.secondary} fontSize="xl">
              Go to Contact
            </Text>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
