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
    >
      <Hero title="Elliot Land" />

      <Container centerContent marginTop={"4em"}>
        <Button size={"lg"} className="animate-bounce ">
          <ChevronDownIcon boxSize={"10"} />
        </Button>
      </Container>

      <DarkModeSwitch />
    </Box>
  </>
);

export default Index;
