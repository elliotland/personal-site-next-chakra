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
} from "@chakra-ui/react";
import { micromark } from "micromark";
import { marked } from "marked";
import AnimatedLines from "./AnimatedLines";

const markdownStyles = {
  h1: {
    fontSize: "2em",
    color: "#000",
    fontWeight: "bold",
  },
  h2: {
    fontSize: "1.6em",
    color: "#111",
    fontWeight: "bold",
  },
  h3: {
    fontSize: "1.2em",
    color: "#222",
    fontWeight: "bold",
  },
  p: {
    margin: "15px 0",
  },
  blockquote: {
    borderLeft: "4px solid #DDD",
    padding: "0 15px",
    color: "#777",
    margin: "15px 0",
  },
  a: {
    color: "#dd0000",
    textDecoration: "none",
    _hover: {
      color: "#333333",
      textDecoration: "underline",
    },
  },
  ul: {
    paddingLeft: "30px",
    margin: "15px 0",
  },
  ol: {
    paddingLeft: "30px",
    margin: "15px 0",
  },
  code: {
    fontSize: "12px",
    fontFamily: 'Consolas, "Liberation Mono", Courier, monospace',
    backgroundColor: "#f8f8f8",
    border: "1px solid #eaeaea",
    borderRadius: "3px",
    padding: "2px 4px",
  },
  pre: {
    backgroundColor: "#f8f8f8",
    padding: "10px 15px",
    borderRadius: "3px",
    fontSize: "13px",
    lineHeight: "19px",
    overflow: "auto",
  },
  table: {
    width: "100%",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#e5e5e5",
    marginBottom: "1em",
  },
  th: {
    padding: "6px 13px",
    backgroundColor: "#fdfdfd",
    color: "#666",
  },
  td: {
    padding: "6px 13px",
  },
  img: {
    maxWidth: "100%",
  },
};

function AI_lliot() {
  const [userText, setUserText] = useState<string>("");
  const [aiText, setAIText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiImageSrc, setAiImageSrc] = useState<string>("");
  const toast = useToast();

  const sendChat = async () => {
    clearMessages();
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
      w={'100%'}
        _light={{
          bgColor: "customLightMode.white",
          borderColor: "customLightMode.pink",
        }}
        _dark={{
          bgColor: "customDarkMode.darkBackground",
          borderColor: "customDarkMode.green",
        }}
        border={'1px solid'}
      >
        <CardHeader>
          <Heading
            size={["xl", "2xl", "3xl"]}
            shadow={"dark"}
            textAlign={"center"}
          >
            Don't scroll, just talk to my AI!
          </Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={[1, 3]} borderRadius={"md"} w={"100%"}>
            <Box>
              <Box h={"100%"} w={'100%'} padding={"1em"}>
                <Input
                  placeholder="Is Elliot good at..."
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
                  minH={['50px',"100px"]}
                  colorScheme={"blue"}
                  borderWidth={"2px"}
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
              />
            </Box>
            <Box padding={"1em"}>
              <Image
                src={aiImageSrc}
                borderRadius={"xl"}
                alignSelf={"center"}
                display={"flex"}
                fallbackSrc="waiting.jpg"
                boxSize={["200px", "auto", "250px"]}
                objectFit={"cover"}
                margin={["0 auto", null, null]}
                zIndex={"100"}
              />
            </Box>
            <Box>
              <Box  h={"100%"} w={'100%'} padding={"1em"}>
                {isLoading ? (
                  <SkeletonText noOfLines={5} spacing="4" skeletonHeight="2"
                    mt={'25%'} />
                ) : aiText === "" ? (
                  <Text
                    color="gray.500"
                    opacity={0.8}
                    align={"center"}
                    fontSize={"xl"}
                    mt={'25%'}
                  >
                    AI-lliot is ready to answer your questions.
                  </Text>
                ) : (
                  <Box>{aiText}</Box>
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
