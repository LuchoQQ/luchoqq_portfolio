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
        <Tabs w="auto" h="500px" variant="line" size="lg">
          <TabList fontFamily={theme.fonts.secondary}>
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
            <TabPanel>
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
                w="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                mt="2rem"
                fontSize="xl"
              >
                I am 20 years old I am from Corrientes, Argentina.
              </Text>
              <Text
                w="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                mt="1rem"
                fontSize="xl"
              >
                More than a year ago I discovered programming and began to study
                as a self-taught, today it is my main activity of the day.
              </Text>
              <Text
                w="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                fontSize="xl"
                mt="1rem"
              >
                Technology, science and video games are some of my interests,
                including the creation of web applications.
              </Text>
            </TabPanel>
            <TabPanel>
              <Text
                w="500px"
                color="#303030"
                fontFamily={theme.fonts.primary}
                fontSize="2xl"
                mt="1rem"
              >
                Some technologies I use:
              </Text>
              <Text
                w="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                fontSize="xl"
                mt="1rem"
              >
                Frontend: ReactJS, NextJS, TypeScript, Redux, ChakraUI,
                Tailwind, Bootstrap, react-particles, framer-motion,
                styled-components...
              </Text>
              <Text
                w="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                fontSize="xl"
                mt="1rem"
              >
                Backend: NodeJS, Express, Mongoose, Sequelize...
              </Text>
              <Text
                w="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                fontSize="xl"
                mt="1rem"
              >
                Databases: MongoDB, MySQL, PostgreSQL, jest, express-validator,
              </Text>
              <Text
                w="500px"
                color="#505050"
                fontFamily={theme.fonts.primary}
                fontSize="xl"
                mt="1rem"
              >
                General Skills: Jira, Trello, GitHub, Git
              </Text>
            </TabPanel>
            <TabPanel>
              <Box fontFamily={theme.fonts.primary}>
                <Text fontSize="xl" color="#303030" mt="1rem">
                  Responsive Web Design
                </Text>
                <Text color="#ababab">-at FreeCodeCamp (July, 2021)</Text>
              </Box>
              <Box fontFamily={theme.fonts.primary}>
                <Text fontSize="xl" color="#505050" mt="1rem">
                  Javascript Algorithms and Data Structure
                </Text>
                <Text color="#ababab">-at FreeCodeCamp (November, 2021)</Text>
              </Box>
              <Box fontFamily={theme.fonts.primary}>
                <Text fontSize="xl" color="#505050" mt="1rem">
                  Front End Web Development Ultimate Course 2021
                </Text>
                <Text color="#ababab">-at Udemy (March, 2022)</Text>
              </Box>
              <Box fontFamily={theme.fonts.primary}>
                <Text fontSize="xl" color="#505050" mt="1rem">
                  Escuela de Javascript
                </Text>
                <Text color="#ababab">-at Platzi (May, 2022)</Text>
              </Box>
              <Box fontFamily={theme.fonts.primary}>
                <Text fontSize="xl" color="#505050" mt="1rem">
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
