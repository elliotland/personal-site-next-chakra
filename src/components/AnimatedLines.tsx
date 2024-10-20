import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface AnimatedLinesProps {
  isLoading: boolean;
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.5, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: i * 0.5, duration: 0.01 },
    },
  }),
};

const AnimatedLines: React.FC<AnimatedLinesProps> = ({ isLoading }) => {
  isLoading = true;

  return (
    <Box
      position="absolute"
      inset={0}
      pointerEvents="none"
    >
      <motion.svg
        width="100%"
        height="100%"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M 100 50 Q 200 25 450 75 Q 600 90 700 50"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M 200 250 Q 200 500 400 350 Q 550 150 700 350 "
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={draw}
          custom={2}
        />
        <motion.path
          d="M 100 450 Q 200 150 400 350 Q 550 150 700 200 "
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={draw}
          custom={2}
        />
      </motion.svg>
    </Box>
  );
};

export default AnimatedLines;
