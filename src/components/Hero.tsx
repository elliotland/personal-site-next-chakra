import React, { useState, useCallback } from "react";
import {
  Container,
  Heading,
  Stack,
  Text,
  Box,
  SlideFade,
  Flex,
} from "@chakra-ui/react";
import ReactRotatingText from "react-rotating-text";
import { heroPhrases } from "./HeroPhrases";
import TechKeywords from "./HeroKeywords";
import BadgesAndContactForm from "./Badges";
import ExpansionButton from "./ExpansionButton";
import useRandomThemeColor from "./ColorPicker";
import ContactMeButton from "./ContactMeButton";

interface HeroProps {
  toggleExpansion?: () => void;
}

const Hero: React.FC<HeroProps> = ({ toggleExpansion }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);


  const handleTypingStart = useCallback(() => {
    setIsTypingComplete(false);
  }, []);

  const handleTypingEnd = useCallback(() => {
    setIsTypingComplete(true);
  }, []);

  const handleDeletingEnd = useCallback(() => {
    setIsTypingComplete(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % heroPhrases.length);
  }, []);

  return (
    <Container maxW={"5xl"}>
      <Box width="100%">
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          pt={['2em', '2em',"4em"]}
        >
          <Heading
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
            variant={'Archivo'}
          >
            <Text as={"span"}>
              <ReactRotatingText
                items={heroPhrases.map((phrase) => phrase.IAM)}
                onTypingStart={handleTypingStart}
                onTypingEnd={handleTypingEnd}
                onDeletingEnd={handleDeletingEnd}
                pause={5000}
                typingInterval={60}
                deletingInterval={15}
                className="font-thin"
              />
            </Text>
          </Heading>
          <SlideFade in={isTypingComplete} offsetX={-50} offsetY={0}>
            <Box>
              <Text color={"gray.500"} maxW={"3xl"} fontSize={"lg"}>
                {heroPhrases[activeIndex].Description}
              </Text>
              <Stack direction={["column", "row"]} spacing={4} mt={"1em"}>
              <Flex
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                gap={2}
              >
                <TechKeywords keywords={heroPhrases[activeIndex].Tech} size={'md'}/>
              </Flex>
              </Stack>
            </Box>
          </SlideFade>

          <BadgesAndContactForm />

          <Stack spacing={6} direction={"row"}>
            <ContactMeButton
              isExpanded={false}
              darkSettings={{
                bgColor: "customDarkMode.primary",
                color: "black",
              }}
              lightSettings={{
                bgColor: "customLightMode.primary",
                color: "white",
              }}
            />
            <ExpansionButton
              isExpanded={false}
              toggleExpansion={toggleExpansion}
            />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Hero;
