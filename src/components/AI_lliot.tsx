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
    <Flex
      direction={"column"}
      justifyContent={"space-between"}
      maxW={"container.lg"}
      textAlign={"center"}
    >
      <Flex direction={'column'}>
        <Heading
          size={"3xl"}
          as={"h2"}
          alignSelf={"center"}
          width={"max-content"}
          _dark={{
            color: "white",
          }}
          _light={{
            color: "black",
          }}
          display={"flex"}
        >
          Get to Know Me
        </Heading>
        <Heading
          size={"lg"}
          as={"h3"}
          alignSelf={"center"}
          _dark={{
            color: "white",
          }}
          _light={{
            color: "black",
          }}
          display={"flex"}
          mt={'.5em'}
        >
          Ask My AI Assistant About Me
        </Heading>
      </Flex>

      <Flex
        direction={"row"}
        width={"100%"}
        maxWidth={"container.md"}
        alignSelf={"center"}
        mt={"2em"}
      >
        <Input
          placeholder="Is Elliot good at..."
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          _dark={{
            color: "white",
            bgColor: "#2D3748",
            borderColor: "mindaro",
          }}
          _light={{
            color: "black",
            bgColor: "white",
            borderColor: "blueMunsell",
          }}
        />
        <Button
          ml={"1em"}
          width={"auto"}
          textAlign={"center"}
          leftIcon={<ChatIcon />}
          onClick={sendChat}
          pl={"2.5em"}
          pr={"2.5em"}
          isLoading={isLoading}
          _dark={{
            color: "black",
            bgColor: "customDarkMode.green",
          }}
          _light={{
            color: "",
            bgColor: "customLightMode.primary",
          }}
        >
          Ask AI-lliot
        </Button>
        {aiText === "" ? (
          <></>
        ) : (
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
            Clear
          </Button>
        )}
      </Flex>
      <Flex
        direction={"column"}
        width={"100%"}
        alignItems={"center"}
        mt={"2em"}
        textAlign={"left"}
      >
        <Card width={"container.lg"}>
          <CardBody display={"flex"} flexDir={"column"} justifyContent={"end"}>
            <Box>
              {isLoading ? (
                <SkeletonText noOfLines={4} spacing="4" skeletonHeight="2" />
              ) : aiText === "" ? (
                <p className="text-gray-500 opacity-35">
                  Elliot is great at designing products.
                </p>
              ) : (
                <>{aiText}</>
              )}
            </Box>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
}

export default AI_lliot;
