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
} from "@chakra-ui/react";
import BadgesAndContactForm from "./BadgesAndContactForm";
import Hero from "./Hero";
import ContactMeButton from "./ContactMeButton";


function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
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
      <Box
        className="wavy-line-background"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        height={expandedSiteView ? "6em" : "9em"}
        bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
        maxW={'100%'}
      />
      <Flex direction={"row"} justifyContent={"space-around"} mt={"1.5em"}>
        <Hero title="Elliot Land" size={"lg"} smallMode={expandedSiteView} />
        <BadgesAndContactForm />
        <ContactMeButton expandedSiteView={expandedSiteView} />
      </Flex>
    </>
  ) : (
    <Card
      w={"100%"}
      h={"auto"}
      boxShadow={"dark-lg"}
      _light={{}}
      border={"1px solid #1B9AAA"}
      colorScheme={"white"}
      transition={"all 0.3s ease-in-out"}
      {...props}
    >
      <CardBody>
        <VStack spacing={0} w={"100%"}>
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
          ></Box>
          <Box w={"100%"} mt={expandedSiteView ? "2em" : "5em"}>
            <Heading
              colorScheme={"blue"}
              textAlign={"center"}
              size={"lg"}
              pb={"1em"}
            >
              {expandedSiteView ? shortTitle : fullTitle}
            </Heading>
            <HStack
              spacing={4}
              w="100%"
              alignItems="stretch"
              textAlign={"center"}
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
            </HStack>
          </Box>
          <Box w={"100%"} mt={"2em"}>
            <BadgesAndContactForm />
          </Box>
        </VStack>
      </CardBody>
      <CardFooter p={0}>
        <ContactMeButton expandedSiteView={expandedSiteView} />
      </CardFooter>
    </Card>
  );
};

export default BusinessCard;
