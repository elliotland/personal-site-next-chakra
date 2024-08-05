import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  Box,
  ListIcon,
  ListItem,
  Flex,
  Card,
  Grid,
  GridItem,
  Container,
  Button,
  Center,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Divider,
  IconButton,
  ScaleFade,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";

import Hero from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { LargeContainer } from "../components/LargeContainer";
import GetToKnowMe from "../components/GetToKnowMe";
import BusinessCard from "../components/BusinessCard";
import { motion } from "framer-motion";

const Index = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const handleClick = () => {
    setIsContentVisible((prev) => !prev);
    onToggle();
  };



  const MotionButton = motion(isContentVisible ? IconButton : Button);

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
        <Hero
          title="Elliot Land"
          smallMode={!isContentVisible}
        />

        <DarkModeSwitch />

        <MotionButton
          position="fixed"
          top={isContentVisible ? "4" : "auto"}
          bottom={isContentVisible ? "auto" : "4"}
          transform={isContentVisible ? "none" : "translateX(-50%)"}
          icon={isContentVisible ? <ChevronUpIcon /> : <ChevronDownIcon boxSize="10" />}
          className="animate-pulse"
          zIndex={2}
          aria-label="Toggle Site Content"
          colorScheme="blue"
          onClick={handleClick}
          initial={false}
          
          animate={{
            top: isContentVisible ? "16px" : "auto",
            bottom: isContentVisible ? "auto" : "16px",
            right: isContentVisible ? "4.5em" : "auto",
            x: isContentVisible ? 0 : "-50%",
            rotate: isContentVisible ? 180 : 0,
          }}          
          transition={{
            type: "spring",
            stiffness: 10,
            damping: 20,
            duration: 2
          }}
          {...(!isContentVisible && {
            w: "10%",
            padding: "2em 2em 2em 2em",
            maxWidth: "50%",
            minWidth: "fit-content",
            size: "lg",
            flexDirection: "column",
            alignSelf: "center",
            className: "animate-bounce",
          })}
        >
          {!isContentVisible && <ChevronDownIcon boxSize="10" />}
        </MotionButton>

        <Container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          maxW={"container.lg"}
          mt={"2em"}
        >
          <BusinessCard expanded={!isContentVisible} />
        </Container>
        <LargeContainer hidden={!isContentVisible}>
          <Collapse in={isOpen} animateOpacity>
            <GetToKnowMe />
          </Collapse>
        </LargeContainer>
      </Box>
    </>
  );
};

export default Index;
