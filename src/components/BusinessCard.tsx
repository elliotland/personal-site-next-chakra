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
    return (
      <Card
        w={"100%"}
        h={expanded ? "50vh" : "10vh"}
        boxShadow={"dark-lg"}
        _light={{}}
        border={"1px solid #1B9AAA"}
        colorScheme={"white"}
        {...props}
      >
        <CardBody>
          <SimpleGrid columns={2} spacing={10}>
            {expanded && (
              <>
                <Box position={"relative"}>
                  <Heading
                    colorScheme={"blue"}
                    textAlign={"center"}
                    transform={"translate(-50%, -50%)"}
                    top={"50%"}
                    left={"50%"}
                    position={"absolute"}
                  >
                    Get to
                    <br />
                    Know Me
                  </Heading>
                </Box>
                <Box>
                  <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                      <Heading size="md" textTransform="uppercase">
                        Summary
                      </Heading>
                      <Text pt="2" fontSize="md">
                        View a summary of all your clients over the last month.
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="md" textTransform="uppercase">
                        Overview
                      </Heading>
                      <Text pt="2" fontSize="md">
                        Check out the overview of your clients.
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="md" textTransform="uppercase">
                        Analysis
                      </Heading>
                      <Text pt="2" fontSize="md">
                        See a detailed analysis of all your business clients.
                      </Text>
                    </Box>
                  </Stack>
                </Box>
            <GridItem colSpan={2}>
              <Divider colorScheme={"blue"} />
            </GridItem>
              </>
            )}
          </SimpleGrid>
        </CardBody>
      </Card>
    );
  };
export default BusinessCard;
