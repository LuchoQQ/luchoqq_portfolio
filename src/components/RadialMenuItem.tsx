import React from "react";
import { ListIcon, Box, Icon } from "@chakra-ui/react";

const RadialMenuItem = ({ icon, translateY, translateX, display }) => {
  return (
    <>
      <Box
        justifyContent={"center"}
        position={"absolute"}
        transform={`${
          display
            ? "translate(" + translateX + "px, " + translateY + "px)"
            : "translate(0, 0)"
        }`}
        transition={"all .7s ease-in-out"}
      >
        <Icon
          as={icon}
          fill="#17222a"
          fontSize={"6xl"}
          p="5px"
          _hover={{ fill: "#6a3fb5", transform: "scale(1.2)" }}
          transition={"all 0.2s ease-in-out"}
        />
      </Box>
    </>
  );
};

export default RadialMenuItem;
