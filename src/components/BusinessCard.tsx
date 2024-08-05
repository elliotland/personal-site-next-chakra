import {
  Card,
  CardBody,
  SimpleGrid,
  Box,
  Heading,
  Stack,
  StackDivider,
  GridItem,
  Divider,
  CardProps,
  Text,
  Flex,
  VStack,
  HStack,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import BadgesAndContactForm from "./BadgesAndContactForm";
import { EmailIcon } from "@chakra-ui/icons";

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
  expanded?: boolean;
};

const BusinessCard: React.FC<BusinessCardProps> = ({
  title,
  description,
  image,
  link,
  expanded = true,
  ...props
}) => {
  const shortTitle = "Product Innovator";
  const fullTitle = title || "Innovating Products through user-focused designs";

  return (
    <Card
      w={"100%"}
      h={expanded ? "auto" : "auto"}
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
            height={"9em"}
            bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
          >
            <Heading
              colorScheme={"blue"}
              textAlign={"center"}
              size={"lg"}
              pt={"10px"}
            >
              {expanded ? fullTitle : shortTitle}
            </Heading>
          </Box>
          <Box w={"100%"} mt={"7em"}>
            {expanded ? (
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
            ) : (
              <>
                <Box>
                  <BadgesAndContactForm />
                </Box>
              </>
            )}
          </Box>
          {expanded ? (
            <Box w={"100%"} mt={"2em"}>
              <BadgesAndContactForm />
            </Box>
          ) : (
            <></>
          )}
        </VStack>
      </CardBody>
      <CardFooter p={0}>
        <Button w={"100%"} 
          colorScheme={"blue"}
          borderTopRadius={0}
          leftIcon={<EmailIcon />}
          >
            Contact Me
          </Button>
      </CardFooter>
    </Card>
  );
};
export default BusinessCard;
