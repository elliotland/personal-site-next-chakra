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

      <DarkModeSwitch />
      <Container
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"100vh"}
        maxW={"container.lg"}
        mt={"2em"}
      >
        <Card
          w={"100%"}
          h={"50vh"}
          boxShadow={"dark-lg"}
          _light={{}}
          border={"1px solid #1B9AAA"}
          colorScheme={"white"}
        >
          <CardBody>
            <SimpleGrid columns={2} spacing={10}>
              <Box position={'relative'}>
                <Heading
                  colorScheme={"blue"}
                  textAlign={"center"}
                  transform={"translate(-50%, -50%)"}
                  top={"50%"}
                  left={"50%"} 
                  position={"absolute"}
                >
                  Get to
                  <br />
                  Know Me
                </Heading>
              </Box>
              <Box>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="md" textTransform="uppercase">
                      Summary
                    </Heading>
                    <Text pt="2" fontSize="md">
                      View a summary of all your clients over the last month.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="md" textTransform="uppercase">
                      Overview
                    </Heading>
                    <Text pt="2" fontSize="md">
                      Check out the overview of your clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="md" textTransform="uppercase">
                      Analysis
                    </Heading>
                    <Text pt="2" fontSize="md">
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <GridItem colSpan={2}>
                <Divider colorScheme={'blue'}/>
              </GridItem>
            </SimpleGrid>
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
          alignSelf={"center"}
          colorScheme={"blue"}
        >
          <ChevronDownIcon boxSize={"10"} />
        </Button>
      </Container>
    </Box>
  </>
);

export default Index;
