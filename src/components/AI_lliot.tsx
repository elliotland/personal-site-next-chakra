import { ChatIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  useSteps,
  Box,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  Progress,
  StepDescription,
  StepNumber,
  StepSeparator,
  StepTitle,
  Flex,
  Icon,
  Container,
  Input,
  Button,
  Heading,
  Card,
  CardBody,
  CardHeader,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { useState } from "react";

function AI_lliot() {
  const [userText, setUserText] = useState<string>("");
  const [aiText, setAIText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendChat = async () => {
    setIsLoading(true);
    clearMessages();
    const body = {
      text: userText,
    };

    try {
      const response = await fetch("/api/AI-lliot", {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("response data ----" + data);
        setIsLoading(false);
        setAIText(data);
        setUserText("");
      } else {
        console.log("Error with AI Chat:", response.statusText);
        setIsLoading(false);
        setAIText("Sorry, there was an error processing your request.");
      }
    } catch (error) {
      console.error("Error sending chat:", error);
      setIsLoading(false);
    }
  };

  const clearMessages = () => {
    setUserText("");
    setAIText("");
  };

  return (
    <>
      <Container maxW={"lg"} display={"flex"} flexDirection={"column"}>
        <Heading size={"2xl"} textAlign={"center"} variant={"Menlo"}>
          Skip the Scrolling
        </Heading>
        <Heading size={"md"} textAlign={"center"} variant={"Menlo"}>
          Ask an AI About Me
        </Heading>

        <Flex
          direction={"row"}
          width={"100%"}
          maxWidth={"100%"}
          justifyContent={"space-around"}
          mt={"1em"}
        >
          <Input
            placeholder="Is Elliot good at..."
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            colorScheme={"white"}
          />
          <Button
            ml={"1em"}
            colorScheme="blue"
            width={"auto"}
            textAlign={"center"}
            leftIcon={<ChatIcon />}
            onClick={sendChat}
            pl={"2.5em"}
            pr={"2.5em"}
            isLoading={isLoading}
          >
            Ask AI-lliot
          </Button>
          {aiText === '' ? (<></>) : (
          <Button
            ml={"1em"}
            colorScheme="red"
            width={"auto"}
            textAlign={"center"}
            leftIcon={<DeleteIcon />}
            onClick={clearMessages}
            pl={"2.5em"}
            pr={"2.5em"}
            isLoading={isLoading}
          >
            Clears
          </Button>)
          }
        </Flex>
      </Container>
      <Flex
        direction={"column"}
        width={"100%"}
        alignItems={"center"}
        mt={"2em"}
      >
        <Flex>
          <Card width={"container.lg"} >
            <CardHeader>
              <Heading size={"lg"} textAlign={"center"} variant={"Menlo"}>
                AI Response
              </Heading>
            </CardHeader>
            <CardBody
              display={"flex"}
              flexDir={"column"}
              justifyContent={"end"}
            >
              <Box mt={4}>
                {isLoading ? (
                  <SkeletonText noOfLines={4} spacing="4" skeletonHeight="2" />
                ) : aiText === "" ? (
                    <Flex direction={"row"} justifyContent={"center"}>
                      <SkeletonCircle size="2" />
                      <SkeletonCircle ml={"2px"} size="2" />
                      <SkeletonCircle ml={"2px"} size="2" />
                    </Flex>
                ) : (
                  <>{aiText}</>
                )}
              </Box>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </>
  );
}

export default AI_lliot;
