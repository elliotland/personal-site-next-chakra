// a component that returns a flex box withe evenly justified boxes, and the boxes return my images from the public folder and one more which is a contact form
import { Box, Circle, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";

const BadgesAndContactForm = () => {
  return (
    <Flex justifyContent="space-evenly" alignItems="center">
      <Tooltip label="I'm a certified scrum product owner.">
        <Box>
          <Image src="cspoBadge.webp" alt="cspo badge" boxSize="50px" />
        </Box>
      </Tooltip>
      <Tooltip label="I'm a certified GenAI Professional.">
        <Box>
          <Image
            src="genaiBadge.png"
            alt="genAI badge"
            boxSize="50px"
            width={"100px"}
          />
        </Box>
      </Tooltip>
      <Tooltip label="I lean on the quality of TypeScript for my code.">
        <Box>
          <Image
            src="typescript-icon.256x256.png"
            alt="typescript badge"
            boxSize="50px"
            borderRadius={"8px"}
          />
        </Box>
      </Tooltip>
      <Tooltip label="I use JavaScript for its flexibility and power in web apps.">
        <Box ml={'1.5em'}>
          <Image
            src="javascript-js.256x256.png"
            alt="javascript badge"
            boxSize="50px"
            borderRadius={"8px"}
          />
        </Box>
      </Tooltip>  
    </Flex>
  );
};
export default BadgesAndContactForm;
