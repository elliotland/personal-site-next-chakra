import { Box, Collapse, Flex, Stack, StackItem, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import AI_lliot from "../components/AI_lliot";
import CircularCarousel from "../components/ProjectCarousal";
import ButtonStack from "../components/ButtonMenu";
import Signature from "../components/Signature";
import Hero from "../components/Hero";

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
              pl={"2em"}
              pr={"2em"}
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
          <Box pt={"2em"} pb={"2em"} height={"100vh"} minH={"fit-content"}>
            <ButtonStack
              isExpanded={false}
              showContactButton={false}
              showExpandButton={false}
            />
            <Signature smallMode={isExpanded} size="3xl" />
            <Hero toggleExpansion={toggleExpansion} />
          </Box>
        )}
        <Collapse in={isOpen} animateOpacity className="w-full">
          {/* <Box
            w="100%"
            h="100vh"
            bg="blue"
            bgAttachment="fixed"
            bgPos="50% 100%"
            pos="relative"
          >
          </Box> */}

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
            className="hero-background"
          >
            <AI_lliot />
          </Flex>
          <Flex
            hidden={!isExpanded}
            w={"100%"}
            direction={"column"}
            pt={"2em"}
            h={"100%"}
            minH={"600px"}
            pb={"2em"}
            _light={{
              className: "light-stars",
            }}
            _dark={{
              className: "dark-stars",
            }}
          >
            <CircularCarousel />
          </Flex>
        </Collapse>
      </Box>
    </>
  );
};

export default Index;
