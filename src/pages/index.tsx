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
} from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ClassNames } from "@emotion/react";

const Index = () => (
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
      <Container
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
         height={"100vh"}
         maxW={'container.lg'}
         mt={"2em"}
      >
        
        <Card w={'100%'} h={'50vh'} border={'1px solid tomato'}>
        <CardHeader pos={'absolute'} top={'0'} left={'0'}><Heading>TL;DR</Heading></CardHeader>
          <CardBody>
            <Text>Some text</Text>
          </CardBody>
        </Card>
        <Button
          w={"10%"}
          padding={"2em 2em 2em 2em"}
          maxWidth={"50%"}
          minWidth={"fit-content"}
          size={"lg"}
          className={"animate-bounce"}
          display={"flex"}
          flexDirection={"column"}
          alignSelf={'center'}
          colorScheme={'blue'}
        >
          <ChevronDownIcon boxSize={"10"} />
        </Button>

      </Container>
    </Box>
  </>
);

export default Index;
