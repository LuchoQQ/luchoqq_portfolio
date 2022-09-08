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
            fontFamily={theme.fonts.secondary}
            textAlign="center"
          >
            Hi!, I'm Luciano Sanchez
          </Text>
          <Text
            fontSize="4xl"
            fontFamily={theme.fonts.primary}
            textAlign="center"
          >
            I'm a 21 years old web developer, i have experience in frontend and
            backend
          </Text>
          <Flex justifyContent='center' gap='2rem' mt='2rem'>
            <Button size='lg'>Curriculum</Button>
            <Button size='lg'>Curriculum</Button>
          </Flex>
        </Grid>
        <Grid h="200vh"></Grid>
      </Box>
    </>
  );
};

export default Main;
