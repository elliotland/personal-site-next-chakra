import React from "react";
import {
  Card,
  CardBody,
  Box,
  Heading,
  CardProps,
  Text,
  Flex,
  VStack,
  HStack,
  CardFooter,
  Stack,
} from "@chakra-ui/react";
import BadgesAndContactForm from "./Badges";
import Hero from "./Hero";
import ContactMeButton from "./ContactMeButton";

function Feature({ title, desc, ...rest }) {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      {...rest}
      _light={{
        color: "black",
        bgColor: "customLightMode.secondary",
      }}
      _dark={{
        color: "black",
        bgColor: "customDarkMode.white",
      }}
    >
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

type BusinessCardProps = CardProps & {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  expandedSiteView?: boolean;
};

const BusinessCard: React.FC<BusinessCardProps> = ({
  title,
  description,
  image,
  link,
  expandedSiteView = false,
  ...props
}) => {
  const shortTitle = "Product Innovator";
  const fullTitle = title || "Innovating Products through user-focused designs";

  return expandedSiteView ? (
    <>
        <Hero title="Elliot Land" size="lg" smallMode={expandedSiteView} />
    </>
  ) : (
    <>
      <Hero title="Elliot Land" size="lg" smallMode={expandedSiteView} />
      <Card
        w="100%"
        h="auto"
        mt={["1em", "2em"]}
        boxShadow="dark-lg"
        border="1px solid #1B9AAA"
        _light={{
          color: "black",
          bgColor: "customDarkMode.white",
        }}
        _dark={{
          color: "black",
          bgColor: "customDarkMode.primary",
        }}
        transition="all 0.3s ease-in-out"
        {...props}
      >
        <CardBody>
          <VStack spacing={0} w="100%">
            <Box
              className="wavy-line-background"
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              zIndex="0"
              height={expandedSiteView ? "7em" : "9em"}
              bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
            />
            <Box w="100%" mt={expandedSiteView ? "2em" : "5em"}>
              <Heading
                colorScheme="blue"
                textAlign="center"
                size="lg"
                pb="1em"
              >
                {expandedSiteView ? shortTitle : fullTitle}
              </Heading>
              <Stack
                spacing={4}
                w="100%"
                alignItems="stretch"
                textAlign="center"
                direction={["column", "row"]} // Stack vertically on mobile
              >
                <Feature
                  title="Designer"
                  desc="I take a user-focused approach to building products."
                  flex={1}
                />
                <Feature
                  title="Developer"
                  desc="Full-stack capable with a focus on frontend user experience."
                  flex={1}
                />
                <Feature
                  title="Leader"
                  desc="I bring people together to tackle the big problems."
                  flex={1}
                />
              </Stack>
            </Box>
            <Box w="100%" mt="2em">
              <BadgesAndContactForm />
            </Box>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default BusinessCard;
