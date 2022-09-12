import React from "react";
import {
  Box,
  Flex,
  Grid,
  UnorderedList,
  ListIcon,
  Button,
  Icon,
} from "@chakra-ui/react";
import { DiCss3 } from "react-icons/di";
import RadialMenuItem from "./RadialMenuItem";
import { CgMathPlus } from "react-icons/cg";
import { useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

const RadialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Box
        p={"12rem"}
        position={"relative"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          bg={`${isOpen ? "#6a3fb5" : "#131313"}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          position={"absolute"}
          zIndex={"100"}
          p={"50px"}
          borderRadius={"50%"}
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow={"0px 0px 10px #6a3fb5"}
          transition={"all 0.5s ease-in-out"}
        >
          <Icon
            as={CgMathPlus}
            position={"absolute"}
            w={"3rem"}
            h={"3rem"}
            transition={"all 0.5s ease-in-out"}
            transform={`rotate(${isOpen ? "45deg" : "0deg"})`}
            color="#dedede"
          />
        </Flex>

        <RadialMenuItem
          icon={AiFillHtml5}
          translateX={"-170"}
          translateY={"0"}
          display={isOpen}
        />
        <RadialMenuItem
          icon={DiCss3}
          translateX={"-140"}
          translateY={"-80"}
          display={isOpen}
        />
        <RadialMenuItem
          icon={RiReactjsLine}
          translateX={"-70"}
          translateY={"-140"}
          display={isOpen}
        />
        <RadialMenuItem
          icon={FaNodeJs}
          translateX={"20"}
          translateY={"-155"}
          display={isOpen}
        />
        <RadialMenuItem
          icon={SiMongodb}
          translateX={"100"}
          translateY={"-120"}
          display={isOpen}
        />
        <RadialMenuItem
          icon={SiNextdotjs}
          translateX={"160"}
          translateY={"-50"}
          display={isOpen}
        />
        <RadialMenuItem
          icon={SiTypescript}
          translateX={"165"}
          translateY={"50"}
          display={isOpen}
        />
        <RadialMenuItem
          icon={SiPostgresql}
          translateX={"100"}
          translateY={"155"}
          display={isOpen}
        />
        <RadialMenuItem
          icon={GrMysql}
          translateX={"10"}
          translateY={"175"}
          display={isOpen}
        />
      </Box>
    </Box>
  );
};

export default RadialMenu;
