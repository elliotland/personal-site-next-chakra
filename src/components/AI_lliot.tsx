import React, { useState } from "react";
import { ArrowRightIcon, ChatIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  Button,
  Heading,
  Card,
  CardBody,
  SkeletonText,
  InputGroup,
  InputRightElement,
  IconButton,
  Text,
  VStack,
  Image,
  useToast,
  Icon,
  Stack,
  StackItem,
  SimpleGrid,
  CardHeader,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import Markdown from "react-markdown";
import AnimatedLines from "./AnimatedLines";

function AI_lliot() {
  const [userText, setUserText] = useState<string>("");
  const [aiText, setAIText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiImageSrc, setAiImageSrc] = useState<string>("");
  const toast = useToast();
  const [isBadQuestion, setIsBadQuestion] = useState<boolean>(false);

  const sendChat = async () => {
    clearMessages();
    setIsBadQuestion(false);
    if (!userText.trim()) {
      toast({
        title: "Empty question",
        description: "Please enter a question before asking.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
    setAiImageSrc("thinking.jpg");

    try {
      const response = await fetch("/api/AI-lliot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: userText }),
      });

      if (response.ok) {
        const { questionJudgement, aiComment } = await response.json();
        if (questionJudgement === "bad") setIsBadQuestion(true);

        setAiImageSrc(
          questionJudgement === "bad" ? "badQuestion.jpg" : "goodQuestion.jpg"
        );

        setAIText(aiComment);

        if (response.status === 500) {
          toast({
            title: "Server Error",
            description: "Try again later.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }

        setUserText("");
      } else {
        setAIText("Sorry, there was an error processing your request.");
      }
    } catch (error) {
      console.error("Error sending chat:", error);
      setAIText("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessages = () => {
    setUserText("");
    setAIText("");
    setAiImageSrc("waiting.jpg");
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      mx="auto"
      p={[4, 6, 8]}
      w={["container.xs", "container.md", "8xl"]}
      maxW={"100%"}
    >
      <Card
        w={"100%"}
        _light={{
          bgColor: "customLightMode.white",
          borderColor: "customLightMode.pink",
        }}
        _dark={{
          bgColor: "customDarkMode.darkBackground",
          borderColor: "customDarkMode.green",
        }}
        border={"1px solid"}
      >
        <CardHeader>
          <Heading
            size={["xl", "2xl", "3xl"]}
            shadow={"dark"}
            textAlign={"center"}
            zIndex={300}
          >
            Why Scroll?
            <br />
            <span className="font-light">Talk to My AI</span>
          </Heading>
        </CardHeader>
        <CardBody pt={10} pb={10}>
          <AnimatedLines
            width={100}
            height={50}
            verticalRange={13}
            lineSpacing={6}
            maxLines={8}
            lineInterval={500}
            lineDuration={4000}
          />
          <SimpleGrid columns={[1, 5]} borderRadius={"md"} w={"100%"}>
            <Box h="314px">
              <Box h={"100%"} w={"100%"}>
                <Textarea
                  placeholder="Is Elliot good at..."
                  alignContent={"space-evenly"}
                  value={userText}
                  onChange={(e) => setUserText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendChat();
                    }
                  }}
                  alignSelf={"center"}
                  position={"relative"}
                  height={"100%"}
                  colorScheme={"blue"}
                  borderWidth={"2px"}
                  _light={{
                    bgColor: "customLightMode.white",
                    borderColor: "customLightMode.primary",
                  }}
                  _dark={{
                    bgColor: "customDarkMode.darkBackground",
                    borderColor: "customDarkMode.primary",
                  }}
                  zIndex={200}
                  resize="none" // Prevents manual resizing
                  overflowY="auto"
                />
              </Box>
              <IconButton
                onClick={sendChat}
                isLoading={isLoading}
                icon={<ChatIcon />}
                colorScheme="blue"
                aria-label={"Ask AI-lliot"}
                zIndex={"200"}
                margin={"0 auto"}
                position={"relative"}
                left={["46%", "42%"]}
                bottom={[12, 12]}
                className="z-[300]"
              />
            </Box>
            <Spacer />
            <Box padding={"2em"} zIndex={300}>
              <Image
                src={aiImageSrc}
                borderRadius={"xl"}
                alignSelf={"center"}
                display={"flex"}
                fallbackSrc="waiting.jpg"
                boxSize={["200px", "auto", "250px"]}
                objectFit={"cover"}
                margin={["0 auto", null, null]}
              />
            </Box>
            <Spacer />
            <Box zIndex={300} h="314px">
              <Box
                h={"100%"}
                w={"100%"}
                zIndex={301}
                _light={{
                  bgColor: "customLightMode.white",
                  borderColor: "customLightMode.primary",
                }}
                _dark={{
                  bgColor: "customDarkMode.darkBackground",
                  borderColor: "customDarkMode.primary",
                }}
                padding={"1em"}
                borderWidth={"2px"}
                borderRadius={"md"}
                overflowY="auto"
                maxH={"300px"}
                css={{
                  "&::-webkit-scrollbar": {
                    width: "8px",
                    height: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "rgba(0, 0, 0, 0.1)",
                    borderRadius: "4px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "rgba(0, 0, 0, 0.2)",
                    borderRadius: "4px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    background: "rgba(0, 0, 0, 0.3)",
                  },
                  '[data-theme="dark"] &::-webkit-scrollbar-track': {
                    background: "rgba(255, 255, 255, 0.1)",
                  },
                  '[data-theme="dark"] &::-webkit-scrollbar-thumb': {
                    background: "rgba(255, 255, 255, 0.2)",
                  },
                  '[data-theme="dark"] &::-webkit-scrollbar-thumb:hover': {
                    background: "rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                {isLoading ? (
                  <SkeletonText
                    noOfLines={5}
                    spacing="4"
                    skeletonHeight="2"
                    mt={"25%"}
                  />
                ) : aiText === "" ? (
                  <Text
                    color="gray.500"
                    opacity={0.8}
                    align={"center"}
                    fontSize={"xl"}
                    minH={["100px", "100px"]}
                  >
                    AI-lliot here!
                    <br />
                    <br />
                    I'm ready to answer your questions.
                  </Text>
                ) : (
                  <Box>
                    <Markdown className="prose">{aiText}</Markdown>
                  </Box>
                )}
              </Box>
              {aiText !== "" && (
                <IconButton
                  icon={<DeleteIcon />}
                  onClick={clearMessages}
                  aria-label="Clear Messages"
                  position="relative"
                  left={["46%", "42%"]}
                  bottom={[12, 12]}
                  colorScheme="red"
                />
              )}
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default AI_lliot;
