import React, { useState } from "react";
import { ChatIcon, DeleteIcon } from "@chakra-ui/icons";
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
  useToast,
} from "@chakra-ui/react";
import { micromark } from "micromark";
import { marked } from "marked";

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
  const toast = useToast();

  const sendChat = async () => {
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
    clearMessages();

    try {
      const response = await fetch("/api/AI-lliot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: userText }),
      });

      if (response.ok) {
        const data = await response.json();
        setAIText(data);
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
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      width="100%"
      maxWidth="container.xl"
      mx="auto"
      p={[4, 6, 8]}
      w={["container.xs", "container.md", "container.lg"]}
    >
      <VStack spacing={4} width="100%" mb={8}>
        <Heading size={["xl", "2xl", "3xl"]}>Quiz My AI</Heading>
      </VStack>

      <Card
        width="100%"
        mb={8}
        _light={{
          bgColor: "customLightMode.white",
        }}
        _dark={{
          bgColor: "customDarkMode.darkBackground",
        }}
        variant={"elevated"}
      >
        <CardBody>
          <InputGroup
            size="lg"
            _light={{
              borderColor: "customLightMode.primary",
            }}
            _dark={{}}
          >
            <Input
              pr="8rem"
              placeholder="Is Elliot good at..."
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
            />
            <InputRightElement width="8rem">
              <Button
                h="2rem"
                size="sm"
                onClick={sendChat}
                isLoading={isLoading}
                leftIcon={<ChatIcon />}
                colorScheme="blue"
              >
                Ask AI-lliot
              </Button>
            </InputRightElement>
          </InputGroup>
        </CardBody>
      </Card>

      <Card
        width="100%"
        _light={{
          bgColor: "customLightMode.white",
        }}
        _dark={{
          bgColor: "customDarkMode.darkBackground",
        }}
        variant={"elevated"}
      >
        <CardBody position="relative" minHeight="150px">
          {isLoading ? (
            <SkeletonText noOfLines={4} spacing="4" skeletonHeight="2" />
          ) : aiText === "" ? (
            <Text
              color="gray.500"
              opacity={0.8}
              align={"center"}
              fontSize={"xl"}
            >
              AI-lliot is ready to answer your questions about Elliot.
            </Text>
          ) : (
            <Box overflow="auto" maxHeight="400px" pr={"1em"}>
              <Box sx={markdownStyles} dangerouslySetInnerHTML={{__html: marked.parse(aiText)}}></Box>
            </Box>
          )}
          {aiText !== "" && (
            <IconButton
              icon={<DeleteIcon />}
              onClick={clearMessages}
              aria-label="Clear Messages"
              position="absolute"
              bottom={4}
              right={4}
              colorScheme="red"
              size="sm"
            />
          )}
        </CardBody>
      </Card>
    </Flex>
  );
}

export default AI_lliot;
