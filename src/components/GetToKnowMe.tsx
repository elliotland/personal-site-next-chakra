import { ChatIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { useState } from "react";

type GetToKnowMeProps = {};

type ChatResponse = {
  score: number;
  response: string;
};

function GetToKnowMe() {
  const [userText, setUserText] = useState<string>("");
  const [aiText, setAIText] = useState<string>("");

  const sendChat = async () => {
    const body = {
      text: userText,
    };

    try {
      const response = await fetch("/api/AI-lliot", {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data: ChatResponse = await response.json();
        setAIText(data.response);
        setUserText("");
      } else {
        console.log("Error with AI Chat:", response.statusText);
        setAIText("Sorry, there was an error processing your request.");
      }
    } catch (error) {
      console.error("Error sending chat:", error);
    }
  };

  return (
    <>
      <Container maxW={"lg"} display={"flex"} flexDirection={"column"}>
        <Heading size={"2xl"} textAlign={"center"} variant={"Menlo"}>
          Skip the Scrolling
        </Heading>
        <Heading size={"md"} textAlign={"center"} variant={'Menlo'}>
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
          />
          <Button
            ml={"1em"}
            colorScheme="blue"
            width={"auto"}
            textAlign={"center"}
            leftIcon={<ChatIcon />}
            onClick={sendChat}
            pl={"2em"}
            pr={"2em"}
          >
            Ask AI-lliot
          </Button>
        </Flex>
      </Container>
      <Flex
        direction={"column"}
        width={"100%"}
        alignItems={"center"}
        mt={"2em"}
      >
        <Flex>
          <Card width={"container.lg"} h={"20vh"}>
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
              {aiText === "" ? (
                <>
                  <Flex direction={"row"} justifyContent={"center"}>
                    <SkeletonCircle size="2" />
                    <SkeletonCircle ml={"2px"} size="2" />
                    <SkeletonCircle ml={"2px"} size="2" />
                  </Flex>
                </>
              ) : (
                aiText
              )}
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </>
  );
}

export default GetToKnowMe;
