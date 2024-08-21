import {
  Box,
  Collapse,
  Container,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { useState } from "react";
import AI_lliot from "../components/AI_lliot";
import BusinessCard from "../components/BusinessCard";
import ExpansionButton from "../components/ExpansionButton";
import MovingTaskRole from "../components/MovingRow";
import CircularCarousel from "../components/ProjectCarousal";
import { projects } from "../components/projects";

const Index = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
    onToggle();
  };

  return (
    <>
      <Box
        maxW={"100%"}
        m={"0px"}
        color="black"
        _dark={{
          color: "white",
        }}
        transition="all 0.15s ease-out"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <DarkModeSwitch />

        <ExpansionButton isExpanded={isExpanded} onClick={toggleExpansion} />

        <Container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          w={"container.lg"}
          mt={isExpanded ? "3em" : "0em"}
          maxW={"100%"}
        >
          <BusinessCard expandedSiteView={isExpanded} />
        </Container>
        <Flex
          hidden={!isExpanded}
          w={"100%"}
          direction={"column"}
          mt={"1em"}
          bgColor={"cornflowerblue"}
          pt={"2em"}
          h={"calc(100vh - 100px)"}
          minH={"800px"}
        >
          <Collapse in={isOpen} animateOpacity>
            <AI_lliot />
          </Collapse>
        </Flex>
        <Flex
          hidden={!isExpanded}
          w={"100%"}
          direction={"column"}
          bgColor={"thistle"}
          pt={"2em"}
          h={"calc(100vh - 160px)"}
          minH={"800px"}
        >
          <Collapse in={isOpen} animateOpacity>
            <CircularCarousel projects={projects} />
          </Collapse>
        </Flex>
      </Box>
    </>
  );
};

export default Index;
