import {
  Box,
  Collapse,
  Container,
  Flex,
  useDisclosure,
  useBreakpointValue, 
} from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { useEffect, useState } from "react";
import AI_lliot from "../components/AI_lliot";
import BusinessCard from "../components/BusinessCard";
import ExpansionButton from "../components/ExpansionButton";
import CircularCarousel from "../components/ProjectCarousal";

const Index = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isOpen, onToggle, onOpen } = useDisclosure();

  // Use Chakra's useBreakpointValue to detect screen size and set isExpanded based on the screen size
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Effect to automatically expand when on mobile or small screens
  useEffect(() => {
    if (isMobile) {
      setIsExpanded(true);
      onOpen(); // Ensure that Collapse content is also opened on mobile view
    } else {
      setIsExpanded(false);
      // If you want to collapse it when going to desktop, you can optionally call onToggle here
    }
  }, [isMobile, onOpen]);

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
    onToggle(); // Manually toggle the collapse when the expansion button is clicked
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
            bgColor: "customLightMode.pink",
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
