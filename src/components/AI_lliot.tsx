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
  InputRightAddon,
  InputGroup,
  InputRightElement,
  IconButton,
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
      textAlign={"center"}
      p={["1em", "2em", "4em"]} // Responsive padding
      w={'90vw'}
    >
      <Flex direction={"column"} mb={["1em", "2em"]}>
        <Heading
          size={"3xl"}
          as={"h2"}
          alignSelf={"center"}
          _dark={{
            color: "white",
          }}
          _light={{
            color: "black",
          }}
          mb={".5em"}
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
        direction={["row", "row"]} // Stacks vertically on mobile, horizontally on larger screens
        width={"100%"}
        maxWidth={"container.md"}
        alignSelf={"center"}
        mt={"2em"}
        alignItems={["stretch", "center"]} // Align input and buttons on larger screens
      >
        <InputGroup>
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
        <InputRightElement w='fit-content'>
          <Button
            textAlign={"center"}
            leftIcon={<ChatIcon />}
            onClick={sendChat}
            isLoading={isLoading}
            _dark={{
              bgColor: "customDarkMode.primary",
            }}
            _light={{
              bgColor: "customLightMode.orange",
              color: "white",
            }}
          >
            Ask AI-lliot
          </Button>
        </InputRightElement>
        </InputGroup>
        <Flex direction={["column", "row"]} ml={[0, "1em"]}>
        </Flex>
      </Flex>
      <Flex
        direction={"column"}
        width={"100%"}
        alignItems={"center"}
        mt={"2em"}
        textAlign={"left"}
      >
        <Card width={["100%", "container.md", "container.lg"]}>
          <CardBody display={"flex"} flexDir={"column"} justifyContent={"end"} pb={'2em'}>
            <Box>
              
          {aiText !== "" && (
            <IconButton
              colorScheme="red"
              textAlign={"center"}
              icon={<DeleteIcon />}
              onClick={clearMessages}
              aria-label="Clear Messages"
              pl={"1em"}
              pr={"1em"}
              position={"absolute"}
              right={'10'}
              bottom={'2'} />
          )}
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
