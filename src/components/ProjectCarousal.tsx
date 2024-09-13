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
} from "@chakra-ui/react";

const ProjectGallery = () => {
  const [activeProject, setActiveProject] = useState(0);

  const handleProjectClick = (index) => {
    setActiveProject(index === activeProject ? 0 : index);
  };

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
            className={
              activeProject === index ? "activeProject" : "inactiveProject"
            }
            _light={{
              bgColor: "customLightMode.orange",
              color: "white",
            }}
            _dark={{
              bgColor: "customDarkMode.primary",
            }}
            overflow={"show"}
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
