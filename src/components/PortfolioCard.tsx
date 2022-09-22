import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
  useTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function PortfolioCard({
  title,
  description,
  src,
  briefDescription,
  type,
  stack,
}: any) {
  const theme = useTheme();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              fontSize="4xl"
              fontFamily={theme.fonts.secondary}
            >{`${title} Project`}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid h='auto'>
              <Text fontSize="xl" fontFamily={theme.fonts.primary}>
                {description}
              </Text>
              <Text fontSize="xl" fontFamily={theme.fonts.primary} mt='2rem'>
                {stack}
              </Text>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Grid
        w="20vw"
        justifySelf="center"
        position="relative"
        boxShadow="1px 1px 5px 5px #dedede"
      >
        <Flex gap="1rem" bg="#fff" flexDir="column">
          <Image src={src} w="400px" />
          <Grid p="1rem" gap="1rem">
            <Box>
              <Text
                fontFamily={theme.fonts.secondary}
                textAlign="center"
                fontSize="2xl"
                color="#505050"
              >
                {title}
              </Text>
              <Text
                fontSize="xl"
                textAlign="center"
                fontFamily={theme.fonts.primary}
                color="#707070"
              >
                {type}
              </Text>
            </Box>
            <Text
              textAlign="center"
              fontFamily={theme.fonts.primary}
              color="#505050"
              fontSize="xl"
            >
              {briefDescription}
            </Text>
          </Grid>
          <Button mt="auto" onClick={onOpen}>
            <Text fontSize="xl" fontFamily={theme.fonts.primary}>
              Ver mas
            </Text>
          </Button>
        </Flex>
      </Grid>
    </>
  );
}

export default PortfolioCard;
