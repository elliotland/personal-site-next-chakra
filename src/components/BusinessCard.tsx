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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Grid,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import BadgesAndContactForm from "./BadgesAndContactForm";
import { EmailIcon } from "@chakra-ui/icons";
import EmailComponent from "./emailMessage";

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
  const toast = useToast();
  const shortTitle = "Product Innovator";
  const fullTitle = title || "Innovating Products through user-focused designs";

  const handleCloseWithSuccess = () => {
    onClose();
    toast({
      title: "Message Sent",
      description: "I'll reach out soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

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
            height={expanded ? "9em" : "7em"}
            bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
          ></Box>
          <Box w={"100%"} mt={expanded ? "5em" : "2em"}>
            {expanded ? (
              <>
                <Heading
                  colorScheme={"blue"}
                  textAlign={"center"}
                  size={"lg"}
                  pb={"1em"}
                >
                  {expanded ? fullTitle : shortTitle}
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
              </>
            ) : (
              <>
                <Flex w={"100%"} mt={"2em"} justifyContent={"space-around"} h={"3em"}>
                  <Heading
                    colorScheme={"blue"}
                    textAlign={"center"}
                    size={"lg"}
                    pb={"1em"}
                  >
                    {expanded ? fullTitle : shortTitle}
                  </Heading>
                  <BadgesAndContactForm />
                </Flex>
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
        <Button
          w={"100%"}
          colorScheme={"blue"}
          borderTopRadius={0}
          leftIcon={<EmailIcon />}
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
        >
          Contact Me
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Hey Elliot</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <EmailComponent onClose={onClose} onSuccessClose={handleCloseWithSuccess} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </CardFooter>
    </Card>
  );
};
export default BusinessCard;
