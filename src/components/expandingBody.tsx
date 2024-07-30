import { Box, useDisclosure } from "@chakra-ui/react";

export const FadeInBox = ({ isOpen }) => {
  return (
    <Box opacity={isOpen ? 1 : 0} transition="opacity 0.5s ease-in-out">
      <p>test</p>
    </Box>
  );
};
