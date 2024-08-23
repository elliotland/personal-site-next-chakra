import React, { useState } from "react";
import { projects } from "./projects";
import { Box, Card, CardBody, CardHeader, Heading, Grid, Flex, Center } from "@chakra-ui/react";

const ProjectGallery = () => {
  const [activeProject, setActiveProject] = useState(0);

  const handleProjectClick = (index) => {
    setActiveProject(index === activeProject ? 0 : index);
  };

  return (
    <Center flexDirection={'row'} justifyContent={'space-between'} w={'container.lg'} h={'400px'} m={'0 auto'}>
        {projects.map((project, index) => (
          <Card
            key={index}
            onClick={() => handleProjectClick(index)}
            overflow={'hidden'}
            cursor="pointer"
            className={activeProject === index ? 'activeProject' : 'inactiveProject'}
          >
            <CardHeader>
              <Heading textAlign={'center'} fontSize="lg">{project.title}</Heading>
            </CardHeader>
            <CardBody>
              <img src={project.image} alt={project.title} style={{width: '100%', height: 'auto'}} />
              {activeProject === index && (
                <Box mt={4}>
                  <p>{project.description}</p>
                </Box>
              )}
            </CardBody>
          </Card>
        ))}
    </Center>
  );
};

export default ProjectGallery;