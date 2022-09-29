import {
  Box,
  Flex,
  Grid,
  Icon,
  Text,
  useTheme,
  Image,
  position,
} from "@chakra-ui/react";
import Button from "../components/Button";
import TechsIcon from "../components/TechsIcon";
import { Link } from "react-scroll";

const Main = () => {
  const theme = useTheme();

  return (
    <>
      <Flex
        minH="100vh"
        position="relative"
        zIndex="10"
        id="/"
        px={["5rem", "5rem"]}
        gap={["3rem", "0rem"]}
        flexDir="column"
        alignContent="center"
        justifyContent="center"
      >
        <Flex
          mt={["5vh"]}
          justifyContent="center"
          alignContent="center"
          flexDir={["column", "column", "column", "row", "row", "row"]}
          gap="4rem"
        >
          <Flex flexDir="column" alignSelf="center">
            <Text
              fontSize={["2xl", "2xl", "2xl", "2xl", "2xl", "4xl"]}
              fontFamily={theme.fonts.primary}
              position="relative"
              _before={{
                content: `""`,
                width: ["70px", "70px", "70px", "70px", "70px", "80px"],
                height: "2px",
                bg: "#202020",
                position: "absolute",
                top: "50%",
                left: ["130px", "130px", "130px", "130px", "130px", "190px"],
              }}
              color="#202020"
            >
              ¡Hola!, soy
            </Text>
            <Text
              fontSize={["2xl", "2xl", "2xl", "2xl", "4xl", "4xl"]}
              fontFamily={theme.fonts.secondary}
              color="#000"
              textAlign="center"
            >
              Luciano Sanchez
            </Text>
            <Text
              fontSize={["2xl", "2xl", "2xl", "2xl", "2xl", "3xl"]}
              fontFamily={theme.fonts.primary}
              position="relative"
              textAlign="end"
              mr="1rem"
              _before={{
                content: `""`,
                width: ["70px", "70px", "70px", "70px", "80px", "80px"],
                height: "2px",
                bg: "#000",
                position: "absolute",
                top: "50%",
                left: ["70px", "60px", "60px", "60px", "60px", "20px"],
              }}
            >
              Fullstack Developer
            </Text>
            <Flex flexWrap="wrap" w="400px">
              <Text
                fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]}
                fontFamily={theme.fonts.primary}
                color="#505050"
                position="relative"
                mt="2rem"
              >
                Muchas gracias por visitar mi portfolio!, en este sitio podrás
                ver algunos de los proyectos en los que hé trabajado, sobre mí y
                como contactarme.
              </Text>
            </Flex>
          </Flex>

          <Image
            src="https://res.cloudinary.com/diylksocz/image/upload/v1664344093/Coding__Flatline_yi54yu.png"
            fit="cover"
            h="400px"
            w="auto"
            position="relative"
          />
        </Flex>

        <Flex justifyContent="center" gap="2rem" my="3rem" alignSelf="center">
          <a
            href="https://drive.google.com/file/d/1V6rY9qsVnZGASS8ZHwgyVaigaOMOXCRE/view"
            download
            target="_blank"
            rel="noreferrer"
          >
            <Button content="Download CV" />
          </a>
          <Link to="contact" spy={true} smooth="true" offset={0}>
            <Button content="To Contact" />
          </Link>
        </Flex>
        <Flex
          w="100%"
          justifyContent="space-around"
          mb="1rem"
          flexDir="column"
          gap="2rem"
          mt="auto"
        >
          <Grid>
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
