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
} from "@chakra-ui/react";
import { useState } from "react";
import { render } from "react-dom";

type GetToKnowMeProps = {};

function GetToKnowMe() {
  const [text, setText] = useState<string>("");

  const sendChat = async () => {
    const body = {
      text: text,
    };

    const res = await fetch("/api/AI-lliot", {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (res.ok) {
    } else {
      console.log("Error with AI Chat");
    }  
  };

  return (
    <>
      <Container maxW={"md"} display={"flex"} flexDirection={"column"}>
        <Heading size={"md"} textAlign={"center"} >
          Skip the Scrolling
        </Heading>
        <Heading size={"md"} textAlign={"center"} >
          Ask an AI About Me
        </Heading>

        <Input placeholder="Is Elliot good at..." 
        value={text}
        onChange={(e) => setText(e.target.value)}/>
        <Flex
          direction={"row"}
          width={"100%"}
          maxWidth={"100%"}
          justifyContent={"space-around"}
          mt={'1em'}
        >
          <Button colorScheme="blue" width={"fit-content"} textAlign={"center"} leftIcon={<ChatIcon />} onClick={sendChat} >
            Ask AI-lliot
          </Button>
        </Flex>
      </Container>
      <Flex direction={"column"} width={"100%"} maxWidth={"100%"}></Flex>
    </>
  );
}

export default GetToKnowMe;
