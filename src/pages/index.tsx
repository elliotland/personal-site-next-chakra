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
import GetToKnowMe from "../components/GetToKnowMe";
import BusinessCard from "../components/BusinessCard";
import ExpansionButton from "../components/ExpansionButton";

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
        {isExpanded ? (
          <></>
        ) : (
          <>
            <Hero title="Elliot Land" smallMode={isExpanded} />
          </>
        )}

        <DarkModeSwitch />

        <ExpansionButton isExpanded={isExpanded} onClick={toggleExpansion} />

        <Container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          w={"container.lg"}
          mt={"2em"}
          maxW={"100%"}
        >
          <BusinessCard expandedSiteView={isExpanded} />
        </Container>
        <Flex
          hidden={!isExpanded}
          w={"100%"}
          direction={"column"}
          mt={"2em"}
          bgColor={"cornflowerblue"}
          pt={"2em"}
          pb={"2em"}
        >
          <Collapse in={isOpen} animateOpacity>
            <GetToKnowMe />
          </Collapse>
        </Flex>
      </Box>
    </>
  );
};

export default Index;
