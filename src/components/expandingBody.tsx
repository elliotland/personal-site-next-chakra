import { Box } from "@chakra-ui/react";
import GetToKnowMe from "./GetToKnowMe";

type Props = {
  isOpen: boolean;
  children?: React.ReactNode;
};

export const FadeInBox = ({ isOpen }: Props) => {
  return (
    <Box
      opacity={isOpen ? 1 : 0}
      transition="opacity 0.5s ease-in-out"
      width={'100%'}
    >
        <GetToKnowMe/>
    </Box>
  );
};
