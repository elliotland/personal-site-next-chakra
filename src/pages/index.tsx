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
        w={"100%"}
        m={"0px"}
        _light={{
          color: "black",
          bgColor: "customLightMode.white",
        }}
        _dark={{
          color: "white",
          bgColor: "customDarkMode.darkBackground",
        }}
        transition="all 0.15s ease-out"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        height={isExpanded ? '' : '100vh'}
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
          minH={'400px'}
          _light={{
            bgColor: "customLightMode.orange",
          }}
          _dark={{
            bgColor: "customDarkMode.primary",
          }}
          pt={"2em"}
          pb={"2em"}
          alignItems={"center"}
        >
          <Collapse in={isOpen} animateOpacity>
            <AI_lliot />
          </Collapse>
        </Flex>
        <Flex
          hidden={!isExpanded}
          w={"100%"}
          direction={"column"}
          pt={"2em"}
          h={'100%'}
          minH={'600px'}
        >
          <Collapse in={isOpen} animateOpacity>
            <CircularCarousel />
          </Collapse>
        </Flex>        
        <Flex
          hidden={!isExpanded}
          w={"100%"}
          direction={"column"}
          pt={"2em"}
          h={'100%'}
          minH={'600px'}
        >
          <Collapse in={isOpen} animateOpacity>
          </Collapse>
        </Flex>
      </Box>
    </>
  );
};

export default Index;
