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
} from "@chakra-ui/react";
import React from "react";
import BadgesAndContactForm from "./BadgesAndContactForm";

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
  const fullTitle = title || "I innovate products through user-focused designs";

  return (
    <Card
      w={"100%"}
      h={expanded ? "50vh" : "10vh"}
      boxShadow={"dark-lg"}
      _light={{}}
      border={"1px solid #1B9AAA"}
      colorScheme={"white"}
      transition={"all 0.3s ease-in-out"}
      {...props}
    >
      <CardBody>
        <SimpleGrid columns={2} spacing={10}>
          <Box position={"relative"}>
            <Heading
              colorScheme={"blue"}
              textAlign={"center"}
              position={"absolute"}
              size={"lg"}
              top={expanded ? "25%" : "0"}
              textTransform={"capitalize"}
              w={"100%"}
            >
              {expanded ? fullTitle : shortTitle}
            </Heading>
          </Box>
          <Box>
            {expanded ? (
              <Stack divider={<StackDivider />} spacing="4">
                <Box >
                  <Heading size="md" textTransform="uppercase">
                    Designer
                  </Heading>
                  <Text pt="2" fontSize="md">
                    I take a user-focused approach to building products.
                  </Text>
                </Box>
                <Box>
                  <Heading size="md" textTransform="uppercase">
                    Developer
                  </Heading>
                  <Text pt="2" fontSize="md">
                    Full-stack capable with a focus on frontend user experience.
                  </Text>
                </Box>
                <Box>
                  <Heading size="md" textTransform="uppercase">
                    Leader
                  </Heading>
                  <Text pt="2" fontSize="md">
                    I bring people together to tackle the big problems.
                  </Text>
                </Box>
              </Stack>
            ) : (
              <BadgesAndContactForm />
            )}
          </Box>
          {expanded ? (
            <>
            <GridItem colSpan={2}>
              <Divider colorScheme={"blue"} />
            </GridItem>
            <GridItem colSpan={2}>
              <BadgesAndContactForm />
            </GridItem>
            </>
          ) : (
            <></>
          )}
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};
export default BusinessCard;
