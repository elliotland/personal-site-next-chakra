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
} from "@chakra-ui/react";

const ProjectGallery = () => {
  const [activeProject, setActiveProject] = useState(0);

  const handleProjectClick = (index) => {
    setActiveProject(index === activeProject ? 0 : index);
  };

  return (
    <Center m={"0 auto"} mt={'1em'} h={'100%'} justifyContent={'space-around'} flexDir={'row'}>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        w={"25%"}
        h={"800px"}
        m={"0 auto"}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            onClick={() => handleProjectClick(index)}
            overflow={"hidden"}
            cursor="pointer"
            className={
              activeProject === index ? "activeProject" : "inactiveProject"
            }
          >
            <CardHeader>
              <Heading textAlign={"center"} fontSize="lg">
                {project.title}
              </Heading>
            </CardHeader>
            <CardBody>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", height: "auto" }}
              />
            </CardBody>
          </Card>
        ))}
      </Flex>
      <Flex>
        <Card>
          <CardBody>
            <Heading>{projects[activeProject].header}</Heading>
            <img src={projects[activeProject].image} alt="" />
            <p>{projects[activeProject].description}</p>
          </CardBody>
        </Card>
      </Flex>
    </Center>
  );
};

export default ProjectGallery;
