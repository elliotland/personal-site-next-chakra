import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Heading,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ReactRotatingText from "react-rotating-text";
import { heroPhrases } from "./HeroPhrases";
import TechKeywords from "./HeroKeywords";
import BadgesAndContactForm from "./Badges";
import ExpansionButton from "./ExpansionButton";
import useRandomThemeColor from './ColorPicker';
import ContactMeButton from "./ContactMeButton";

interface HeroProps {
  toggleExpansion?: () => void;
}

const Hero: React.FC<HeroProps> = ({toggleExpansion}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const getRandomColor = useRandomThemeColor([
    'green',
  ]);

  const rotatePhrase = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % heroPhrases.length);
    setIsTypingComplete(false);
  }, []);

  useEffect(() => {
    if (isTypingComplete) {
      const timer = setTimeout(rotatePhrase, 8000); // Wait 8 seconds after typing completes
      return () => clearTimeout(timer);
    }
  }, [isTypingComplete, rotatePhrase]);

  const handleTypingEnd = useCallback(() => {
    setIsTypingComplete(true);
  }, []);

  const MotionBox = motion(Box);

  return (
    <Container maxW={"5xl"}>
      <Box width="100%">
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          pt={'2em'}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            is a<br />
            <Text as={"span"}>
              <ReactRotatingText
                items={[heroPhrases[activeIndex].IAM]}
                onTypingStart={handleTypingEnd}
                pause={8000}
                typingInterval={20}
                deletingInterval={20}
                color={getRandomColor()}
                emptyPause={1000}
              />
            </Text>
          </Heading>

          {/* Animated Description */}
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Text color={"gray.500"} maxW={"3xl"} fontSize={"xl"}>
              {heroPhrases[activeIndex].Description}
            </Text>
          </MotionBox>

          {/* Animated Tech Keywords */}
          <MotionBox
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            mt={'2em'}
          >
            <Stack direction={["column", "row"]} spacing={4}>
              <TechKeywords keywords={heroPhrases[activeIndex].Tech} />
            </Stack>
          </MotionBox>

          <BadgesAndContactForm />

          <Stack spacing={6} direction={"row"}>
            <ContactMeButton 
              darkSettings={{ bgColor: "customDarkMode.primary", color:'black' }}
              lightSettings={{ bgColor: "customLightMode.primary", color:'white' }}
            />
            <ExpansionButton 
              darkSettings={{ bgColor: "customDarkMode.yellow", color:'black' }}
              lightSettings={{ bgColor: "customLightMode.primary", color:'white' }}
              isExpanded={false}
              toggleExpansion={toggleExpansion} 
            />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default Hero;