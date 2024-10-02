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
import { useEffect, useState } from "react";
import AI_lliot from "../components/AI_lliot";
import BusinessCard from "../components/BusinessCard";
import CircularCarousel from "../components/ProjectCarousal";
import ButtonStack from "../components/ButtonMenu";
import ExpansionButton from "../components/ExpansionButton";
import Signature from "../components/Signature";
import Hero from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isOpen, onToggle, onOpen } = useDisclosure();

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);

    onToggle();
    window.scrollTo(0, 0);
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
      >
        {isExpanded ? (
          <>
            <Flex
              position="sticky"
              top={0}
              h={"80px"}
              w={"100%"}
              _light={{
                bgColor: "customLightMode.white",
              }}
              _dark={{
                bgColor: "customDarkMode.darkBackground",
              }}
              zIndex={3}
              alignItems={"center"}
              pl={'2em'}
              pr={'2em'}
            >
              <ButtonStack
                isExpanded={isExpanded}
                toggleExpansion={toggleExpansion}
                showContactButton={true}
                showExpandButton={true}
              />
              <Signature smallMode={true} />
            </Flex>
          </>
        ) : (
          <Box pt={'2em'} pb={'2em'} height={'100vh'} minH={'fit-content'}>
          <ButtonStack isExpanded={false} showContactButton={false} showExpandButton={false}/>
          <Signature smallMode={isExpanded} />
          <Hero toggleExpansion={toggleExpansion}/>
          </Box>
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
          <Collapse in={isOpen} animateOpacity >
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
