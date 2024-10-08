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
import ReactMarkdown from "react-markdown";

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
              <ReactMarkdown>{aiText}</ReactMarkdown>
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
