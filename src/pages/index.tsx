import {
  Box,
  Collapse,
  Container,
  Flex,
  useDisclosure,
  useBreakpointValue,
  Stack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { useEffect, useState } from "react";
import AI_lliot from "../components/AI_lliot";
import BusinessCard from "../components/BusinessCard";
import CircularCarousel from "../components/ProjectCarousal";
import ButtonStack from "../components/ButtonMenu";
import Hero from "../components/Hero";

const Index = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isOpen, onToggle, onOpen } = useDisclosure();

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
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        height={isExpanded ? "" : "100vh"}
      >
        {isExpanded ? (
          <>
            <Flex
              dir="row"
              alignItems="center"
              position="sticky"
              top={0}
              h={"80px"}
              w={"100%"}
              _light={{
                bgColor: "customLightMode.secondary",
              }}
              _dark={{
                bgColor: "customDarkMode.darkBackground",
              }}
              justifyContent={"space-around"}
              zIndex={6000}
            >
              <Hero smallMode={true} />
              <ButtonStack
                isExpanded={isExpanded}
                toggleExpansion={toggleExpansion}
              />
            </Flex>
          </>
        ) : (
          <Container
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            w={"container.lg"}
            mt={isExpanded ? "3em" : "0em"}
            maxW={"100%"}
            pb={"2em"}
          >
            <ButtonStack
              isExpanded={isExpanded}
              toggleExpansion={toggleExpansion}
            />
            <BusinessCard expandedSiteView={isExpanded} />
          </Container>
        )}
        <Flex
          hidden={!isExpanded}
          w={"100%"}
          direction={"column"}
          minH={"400px"}
          _light={{
            bgColor: "customLightMode.pink",
          }}
          _dark={{
            bgColor: "customDarkMode.green",
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
          h={"100%"}
          minH={"600px"}
          pb={"2em"}
        >
          <Collapse in={isOpen} animateOpacity>
            <CircularCarousel />
          </Collapse>
        </Flex>
      </Box>
    </>
  );
};

export default Index;
