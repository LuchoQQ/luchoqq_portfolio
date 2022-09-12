import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { CgMathPlus } from "react-icons/cg";

const RadialButton = (isOpen, setIsOpen) => {
  return (
    <>
      <Flex
        bg={`${isOpen ? "#ad1d71" : "#131313"}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        position={"absolute"}
        zIndex={"100"}
        p={"50px"}
        borderRadius={"50%"}
        justifyContent={"center"}
        alignItems={"center"}
        transition={"all 0.5s ease-in-out"}
      >
        <Icon
          as={CgMathPlus}
          position={"absolute"}
          w={"3rem"}
          h={"3rem"}
          transition={"all 0.5s ease-in-out"}
          transform={`rotate(${isOpen ? "45deg" : "0deg"})`}
        />
      </Flex>
    </>
  );
};

export default RadialButton;
