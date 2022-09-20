import { Box, Button, Flex, Grid, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";

function PortfolioCard({ title, description, src }: any) {
  const theme = useTheme();

  return (
    <>
      <Grid w="20vw" justifySelf="center" position="relative" boxShadow="1px 1px 10px 1px #dedede">
        <Flex gap="1rem" bg="#fff" flexDir="column" >
          <Image src={src} w="400px" />
          <Grid p="1rem" gap="1rem">
            <Text
              fontFamily={theme.fonts.secondary}
              textAlign="center"
              fontSize="2xl"
              color="#505050"
            >
              {title}
            </Text>
            <Text
              textAlign="center"
              fontFamily={theme.fonts.primary}
              color="#505050"
              fontSize="xl"
            >
              {description}
            </Text>
          </Grid>
          <Button mt='auto'>
            <Text fontSize='xl' fontFamily={theme.fonts.primary}>Ver mas</Text>
          </Button>
        </Flex>
      </Grid>
    </>
  );
}

export default PortfolioCard;
