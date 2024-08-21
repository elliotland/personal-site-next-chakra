import React, { useState } from "react";
import { projects } from "./projects";
import { Box, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

const CircularCarousel = () => {
  const [order, setOrder] = useState([
    "far-left",
    "left",
    "center",
    "right",
    "far-right",
  ]);

  const rotate = (index) => {
    if (order[index] === "left") {
      setOrder((prevOrder) => [...prevOrder.slice(1), prevOrder[0]]);
    } else if (order[index] === "right") {
      setOrder((prevOrder) => [
        prevOrder[prevOrder.length - 1],
        ...prevOrder.slice(0, -1),
      ]);
    }
  };

  return (
    <Box className="circular-carousel" w={'container.lg'}>
      {projects.map((project, index) => (
        <Card
          key={index}
          className={`circular-carousel--image ${order[index]}`}
          onClick={() => rotate(index)}
          overflow={'hidden'}
        >
          <CardHeader>
            <Heading textAlign={'center'}>{project.title}</Heading>
          </CardHeader>
          <CardBody>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
};
export default CircularCarousel;
