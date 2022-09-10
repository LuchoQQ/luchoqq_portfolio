import { Box, Button, Flex, Grid, Text, useTheme } from "@chakra-ui/react";
import ParticlesBackground from "../components/ParticlesBackground";
import particles from "../utils/particles.json";
import particles2 from "../utils/particles2.json";

const Main = () => {
  const theme = useTheme();

  return (
    <>
      <Box w="75vw" h="100vh">
        <ParticlesBackground particles={particles2} />
        <Grid
          w="75vw"
          h="90vh"
          position="relative"
          zIndex="10"
          ml="25vw"
          justifyContent="center"
          alignContent="center"
        >
          <Text
            fontSize="6xl"
            fontFamily={theme.fonts.quart}
            textAlign="center"
          >
            Hi!, I'm Luciano Sanchez
          </Text>
          <Text
            fontSize="3xl"
            fontFamily={theme.fonts.quart}
            textAlign="center"
          >
            I'm a 21 years old web developer
          </Text>
          <Flex justifyContent="center" gap="2rem" mt="2rem">
            <Box
              role="group"
              transition='all 1s ease'
              transform='skewX(10deg)'
              position="relative"
              _hover={{ top: '-5px'}}
            >
              <Box
                p="1rem"
                border="1px solid blue"
                boxShadow="10px 10px 0px 0px #204b6a"
                rounded="0px"
                transition='all 2s ease'
                
              >
                <Text fontFamily={theme.fonts.secondary} fontSize="xl">
                  Download CV
                </Text>
              </Box>
            </Box>
          </Flex>
        </Grid>
        <Grid h="200vh"></Grid>
      </Box>
    </>
  );
};

export default Main;
