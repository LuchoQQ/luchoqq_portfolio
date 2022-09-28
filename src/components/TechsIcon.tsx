import { Image } from "@chakra-ui/react";
import React from "react";

function TechsIcon({ src }: any) {
  return (
    <>
      <Image
        src={src}
        height={["30", "30", "30", "30", "30", "50px"]}
        fit="cover"
        transition="all .2s ease"
        _hover={{ transform: "scale(1.1)" }}
      />
    </>
  );
}

export default TechsIcon;
