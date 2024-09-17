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
        setIsLoading(false);
        setAIText(data);
        setUserText("");
      } else {
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
      p={["1em", "2em", "4em"]} // Responsive padding
    >
      <Flex direction={"column"} mb={["1em", "2em"]}>
        <Heading
          size={"2xl"}
          as={"h3"}
          alignSelf={"center"}
          _dark={{
            color: "white",
          }}
          _light={{
            color: "black",
          }}
          mb={[".5em", "1em"]} // Responsive margin-bottom
        >
          Quiz My AI
        </Heading>
        <Heading
          size={"md"}
          as={"h4"}
          alignSelf={"center"}
          _dark={{
            color: "white",
          }}
          _light={{
            color: "black",
          }}
        >
          Ask My AI Assistant About Me
        </Heading>
      </Flex>

      {/* Chat Input Section */}
      <Flex
        direction={["column", "row"]} // Stacks vertically on mobile, horizontally on larger screens
        width={"100%"}
        maxWidth={"container.md"}
        alignSelf={"center"}
        mt={"2em"}
        alignItems={["stretch", "center"]} // Align input and buttons on larger screens
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
          mb={["1em", 0]} // Adds bottom margin on mobile to separate input from buttons
        />
        <Flex direction={["column", "row"]} ml={[0, "1em"]}>
          <Button
            mb={["1em", 0]} // Adds bottom margin on mobile for better spacing
            width={["100%", "auto"]} // Full-width button on mobile
            textAlign={"center"}
            leftIcon={<ChatIcon />}
            onClick={sendChat}
            isLoading={isLoading}
            pl={"2.5em"}
            pr={"2.5em"}
            _dark={{
              bgColor: "customDarkMode.green",
            }}
            _light={{
              bgColor: "customLightMode.primary",
              color: "white",
            }}
          >
            Ask AI-lliot
          </Button>
          {aiText !== "" && (
            <Button
              colorScheme="red"
              width={["100%", "auto"]} // Full-width button on mobile
              textAlign={"center"}
              leftIcon={<DeleteIcon />}
              onClick={clearMessages}
              pl={"2.5em"}
              pr={"2.5em"}
              ml={[0, "1em"]} // No margin on mobile, margin-left on larger screens
            >
              Clear
            </Button>
          )}
        </Flex>
      </Flex>

      {/* Response Section */}
      <Flex
        direction={"column"}
        width={"100%"}
        alignItems={"center"}
        mt={"2em"}
        textAlign={"left"}
      >
        <Card width={["100%", "container.md", "container.lg"]}>
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
