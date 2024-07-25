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
} from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { ChevronDownIcon } from "@chakra-ui/icons";

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

      <Container centerContent marginTop={"4em"}></Container>

      <DarkModeSwitch />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
         height={"100vh"}
      >
        <Text display={'flex'}>test</Text>
        <Button
          w={"10%"}
          padding={"2em 2em 3em 2em"}
          maxWidth={"50%"}
          minWidth={"fit-content"}
          size={"lg"}
          className="animate-bounce"
          display={"flex"}
          flexDirection={"column"}
          _light={{
            bgColor: "blue",
            color: "white",
            _hover: {
              bgColor: "blue.400",
            },
          }}
        >
          <ChevronDownIcon boxSize={"10"} />
          Learn More
        </Button>
      </Box>
    </Box>
  </>
);

export default Index;
