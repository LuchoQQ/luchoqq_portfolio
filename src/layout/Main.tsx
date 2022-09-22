import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  useTheme,
  Image,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import TechsIcon from "../components/TechsIcon";
import { Link } from "react-scroll";

const Main = () => {
  const theme = useTheme();

  return (
    <>
      <Flex
        w={["100vh", "100vw", "100vw", "75vw", "75vw"]}
        minH="100vh"
        position="relative"
        zIndex="10"
        id="/"
        px={["0", "5rem"]}
        flexDir="column"
        alignContent="center"
      >
        <Flex flexDir="column" mt="auto">
          <Text
            fontSize={["2xl", "6xl"]}
            fontFamily={theme.fonts.secondary}
            textAlign="center"
          >
            Hola!, soy Luciano Sanchez
          </Text>
          <Text
            fontSize={["xl", "2xl"]}
            fontFamily={theme.fonts.primary}
            textAlign="center"
            color="#505050"
          >
            Muchas gracias por visitar mi portfolio!, soy desarrollador
            Fullstack y en este sitio podrás ver algunos de los proyectos en los
            que hé trabajado, sobre mí y como contactarme.
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
              <Link to="contact" spy={true} smooth="true" offset={0}>
                <Text fontFamily={theme.fonts.secondary} fontSize="xl">
                  Go to Contact
                </Text>
              </Link>
            </Box>
          </Grid>
        </Flex>
        <Flex
          mt="auto"
          w="100%"
          justifyContent="space-around"
          mb="1rem"
          flexDir="column"
          gap="2rem"
        >
          <Grid>
            {/* <Text
              textAlign="center"
              fontSize="xl"
              fontFamily={theme.fonts.secondary}
              mb='1rem'
            >
              Frontend
            </Text> */}
            <Flex justifyContent="center" gap="1rem" flexWrap="wrap">
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663856274/html_hjlzsl.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663856738/CSS-Logo_nugbhg.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663856817/JavaScript-logo_sxiss8.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663856844/1200px-React.svg_aewkox.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857068/rzylUjaf_400x400-removebg-preview_r2o3jt.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857113/Tailwind_CSS_Logo.svg_lpcn16.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663856892/5848309bcef1014c0b5e4a9a_fbvhg7.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663858300/Typescript_logo_2020.svg_hobvh4.png" />
            </Flex>
          </Grid>
          <Grid>
            {/* <Text
              textAlign="center"
              fontSize="xl"
              fontFamily={theme.fonts.secondary}
            >
              Backend
            </Text> */}
            <Flex justifyContent="center" gap="2rem" flexWrap="wrap">
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857396/1200px-Node.js_logo.svg_ep0yw5.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857488/Expressjs_zhwchj.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857517/MongoDB_Logo.svg_bqal2y.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857592/1280px-Amazon_Web_Services_Logo.svg_rocnso.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857594/MySQL-logo_jz68gg.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857597/Postgresql_elephant.svg_p0dyht.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857949/Screen_Shot_2019-06-10_at_8.40.12_PM_aceu9w.png" />
              <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857950/58482ee4cef1014c0b5e4a75_ibdwso.png" />
            </Flex>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default Main;
