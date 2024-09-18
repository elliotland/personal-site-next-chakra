import React, { useState } from "react";
import { projects } from "./projects";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Grid,
  Flex,
  Circle,
  Image,
  Stack,
  keyframes,
  useColorModeValue,
  useBreakpointValue, // Import for responsive condition handling
} from "@chakra-ui/react";

const scaleUp = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.2); }
`;

const ProjectGallery = () => {
  const [activeProject, setActiveProject] = useState(0);

  // Determine if the screen is small or large based on breakpoint
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleProjectClick = (index) => {
    setActiveProject(index === activeProject ? 0 : index);
  };

  const activeBgColor = useColorModeValue(
    "customLightMode.pink",
    "customDarkMode.green"
  );
  const inactiveBgColor = useColorModeValue("white", "darkprimary");
  const borderColor = useColorModeValue(
    "customLightMode.pink",
    "customDarkMode.green"
  );
  const textColor = useColorModeValue("black", "white");

  return (
    <>
      {/* Heading with responsive adjustments */}
      <Heading
        textAlign="center"
        as="h2"
        size={["xl", "2xl", "3xl"]} // Responsive font size
        noOfLines={1}
        pb={[".5em", ".7em", "1em"]}
      >
        Project History
      </Heading>

      {isMobile ? (
        // List of cards for mobile view
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="100%"
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              w="90%"
              m="1em 0"
              borderColor={borderColor}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                w="100%"
                src={project.image}
                alt={project.title}
              />
              <Stack>
                <CardHeader>
                  <Heading textAlign="center" fontSize="lg">
                    {project.header}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <p>{project.description}</p>
                </CardBody>
              </Stack>
            </Card>
          ))}
        </Flex>
      ) : (
        <>
          {/* Circle Selector for larger screens */}
          <Flex
            flexDirection={"row"}
            justifyContent={"space-around"}
            m={"0 auto"}
            alignItems={"center"}
            w={["100%", "90%", "60%"]}
            pt={"1em"}
          >
            {projects.map((project, index) => (
              <Circle
                key={index}
                onClick={() => handleProjectClick(index)}
                cursor="pointer"
                mb={"2em"}
                p={"2em"}
                size={["90px", "100px", "130px"]}
                as={"button"}
                bgColor={
                  activeProject === index ? activeBgColor : inactiveBgColor
                }
                color={activeProject === index ? "white" : textColor} // White text for active circle

                borderColor={borderColor}
                borderWidth="2px"
                _hover={{
                  bgColor: activeBgColor,
                  animation: `${scaleUp} 0.2s ease-in-out forwards`,
                  color: 'white'
                }}
                transition="all 0.2s"
                transform={activeProject === index ? "scale(1.20)" : "scale(1)"}
                overflow={"visible"}
              >
                <Heading textAlign={"center"} fontSize={["xs", "sm", "md"]}>
                  {project.title}
                </Heading>
              </Circle>
            ))}
          </Flex>

          {/* Project Details Section for larger screens */}
          <Flex
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            w={["100%", "90%", "container.lg"]}
            margin={"0 auto"}
          >
            <Card
              minH={"300px"}
              mt={"2em"}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              borderColor={borderColor}
              w={["100%", "90%", "container.md"]}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "300px" }}
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
              />
              <Stack>
                <CardHeader>
                  <Heading textAlign={"center"} fontSize={["lg", "xl"]}>
                    {projects[activeProject].header}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <p>{projects[activeProject].description}</p>
                </CardBody>
              </Stack>
            </Card>
          </Flex>
        </>
      )}
    </>
  );
};

export default ProjectGallery;
