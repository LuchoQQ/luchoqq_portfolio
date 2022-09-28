import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Box,
  useTheme,
} from "@chakra-ui/react";
import React from "react";

function TabAbout() {
  const theme = useTheme();
  return (
    <>
      <Flex justifyContent="center">
        <Tabs w="auto" h="auto" variant="line" size="lg">
          <TabList fontFamily={theme.fonts.secondary} justifyContent="center">
            <Tab
              fontSize={["xl", "xl", "xl", "xl", "xl", "2xl"]}
              _selected={{ color: "#6a3fb5" }}
            >
              About Me
            </Tab>
            <Tab
              fontSize={["xl", "xl", "xl", "xl", "xl", "2xl"]}
              _selected={{ color: "#6a3fb5" }}
            >
              Skills
            </Tab>
            <Tab
              fontSize={["xl", "xl", "xl", "xl", "xl", "2xl"]}
              _selected={{ color: "#6a3fb5" }}
            >
              Certifications
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel px="4rem">
              <Flex gap="1vw" flexWrap="wrap">
                <Text color="#303030" fontSize="4xl">
                  Luciano Sánchez{" | "}
                </Text>
                <Text
                  color="#303030"
                  fontSize="2xl"
                  alignSelf={"center"}
                  fontFamily={theme.fonts.primary}
                >
                  Fullstack Dev
                </Text>
              </Flex>
              <Text
                maxW="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                mt="2rem"
                fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]}
              >
                Tengo 21 años, soy de Corrientes Argentina
              </Text>
              <Text
                maxW="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                mt="1rem"
                fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]}
              >
                Hace más de un año que descubrí la programación, desde entonces
                tanto programar como aprender son mi principal y favorita
                actividad del día.
              </Text>
              <Text
                maxW="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]}
                mt="1rem"
              >
                Tengo experiencia realizando E-Commerces, portales,
                landing-pages, aplicaciones webs. Tanto del lado del Frontend
                como del Backend.
              </Text>
              <Text
                maxW="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]}
                mt="1rem"
              >
                La tecnología, la ciencia y los videojuegos me fascinan, siempre
                estoy dispuesto a conversar sobre estos tópicos!.
              </Text>
            </TabPanel>
            <TabPanel px="4rem">
              <Text
                maxW="500px"
                color="#303030"
                fontFamily={theme.fonts.primary}
                fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]}
                mt="1rem"
              >
                Algunas de las tecnologías que utilizo son:
              </Text>
              <Text
                maxW="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]}
                mt="1rem"
              >
                Frontend: ReactJS, NextJS, TypeScript, Redux, ChakraUI,
                Tailwind, Bootstrap, react-particles, framer-motion,
                styled-components...
              </Text>
              <Text
                maxW="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]}
                mt="1rem"
              >
                Backend: NodeJS, Express, Mongoose, Sequelize, Jest,
                express-validator,...
              </Text>
              <Text
                maxW="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]}
                mt="1rem"
              >
                Databases: MongoDB, MySQL, PostgreSQL
              </Text>
              <Text
                maxW="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]}
                mt="1rem"
              >
                General Skills: Jira, Trello, GitHub, Git
              </Text>
            </TabPanel>
            <TabPanel px="4rem">
              <Box fontFamily={theme.fonts.primary}>
                <Text fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]} color="#303030" mt="1rem">
                  Responsive Web Design
                </Text>
                <Text color="#ababab">-at FreeCodeCamp (July, 2021)</Text>
              </Box>
              <Box fontFamily={theme.fonts.primary}>
                <Text fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]} color="#505050" mt="1rem">
                  Javascript Algorithms and Data Structure
                </Text>
                <Text color="#ababab">-at FreeCodeCamp (November, 2021)</Text>
              </Box>
              <Box fontFamily={theme.fonts.primary}>
                <Text fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]} color="#505050" mt="1rem">
                  Front End Web Development Ultimate Course 2021
                </Text>
                <Text color="#ababab">-at Udemy (March, 2022)</Text>
              </Box>
              <Box fontFamily={theme.fonts.primary}>
                <Text fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]} color="#505050" mt="1rem">
                  Escuela de Javascript
                </Text>
                <Text color="#ababab">-at Platzi (May, 2022)</Text>
              </Box>
              <Box fontFamily={theme.fonts.primary}>
                <Text fontSize={["lg", "lg", "lg", "lg", "lg", "xl"]} color="#505050" mt="1rem">
                  Aceleracion Fullstack
                </Text>
                <Text color="#ababab">-at Alkemy (July, 2022)</Text>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default TabAbout;
