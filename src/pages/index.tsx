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

import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { LargeContainer } from "../components/LargeContainer";
import GetToKnowMe from "../components/GetToKnowMe";
import BusinessCard from "../components/BusinessCard";

const Index = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const handleClick = () => {
    setIsContentVisible((prev) => !prev);
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
        height={"100vh"}
      >
        <Hero title="Elliot Land" />

        <DarkModeSwitch />
        <IconButton
          position="fixed"
          top={4}
          right={20}
          icon={<ChevronUpIcon />}
          aria-label="Toggle Site Content"
          colorScheme="blue"
          hidden={!isContentVisible}
          onClick={() => handleClick()}
        />

        <Container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"100vh"}
          maxW={"container.lg"}
          mt={"2em"}
        >
          <BusinessCard expanded={!isContentVisible} />
          <Button
            w={"10%"}
            padding={"2em 2em 2em 2em"}
            maxWidth={"50%"}
            minWidth={"fit-content"}
            size={"lg"}
            className={"animate-bounce"}
            hidden={isContentVisible}
            flexDirection={"column"}
            alignSelf={"center"}
            colorScheme={"blue"}
            onClick={handleClick}
          >
            <ChevronDownIcon boxSize={"10"} />
          </Button>
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
