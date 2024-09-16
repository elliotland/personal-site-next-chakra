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
  Center,
  Circle,
  Image,
  Stack,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";

const scaleUp = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
`;

const ProjectGallery = () => {
  const [activeProject, setActiveProject] = useState(0);

  const handleProjectClick = (index) => {
    setActiveProject(index === activeProject ? 0 : index);
  };

  const activeBgColor = useColorModeValue(
    "customLightMode.orange",
    "customDarkMode.primary"
  );
  const inactiveBgColor = useColorModeValue("white", "darkprimary");
  const borderColor = useColorModeValue(
    "customLightMode.orange",
    "customDarkMode.primary"
  );
  const textColor = useColorModeValue("black", "white");

  return (
    <>
      <Heading textAlign="center" as="h2" size="3xl" noOfLines={1} pb={".5em"}>
        Project History
      </Heading>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-around"}
        m={"0 auto"}
        alignItems={"center"}
        w={"50%"}
        pt={"1em"}
      >
        {projects.map((project, index) => (
          <Circle
            key={index}
            onClick={() => handleProjectClick(index)}
            cursor="pointer"
            mb={"2em"}
            p={"2em"}
            size={"130px"}
            as={"button"}
            bgColor={activeProject === index ? activeBgColor : inactiveBgColor}
            color={textColor}
            borderColor={borderColor}
            borderWidth="2px"
            _hover={{
              bgColor: activeBgColor,
              animation: `${scaleUp} 0.2s ease-in-out forwards`,
            }}
            transition="all 0.2s"
            transform={activeProject === index ? "scale(1.05)" : "scale(1)"}
            overflow={"visible"}
          >
            <Heading textAlign={"center"} fontSize="sm">
              {project.title}
            </Heading>
          </Circle>
        ))}
      </Flex>
      <Flex
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"container.lg"}
        margin={"0 auto"}
      >
        <Card
          minH={"300px"}
          mt={"2em"}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          
          borderColor={borderColor}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src={projects[activeProject].image}
            alt="Caffe Latte"
          />
          <Stack>
            <CardHeader>
              <Heading textAlign={"center"}>
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
  );
};

export default ProjectGallery;
