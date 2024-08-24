import React from 'react';
import { Button, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

interface MotionButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

const ExpansionButton: React.FC<MotionButtonProps> = ({ isExpanded, onClick }) => {
  const MotionButtonBase = motion(isExpanded ? IconButton : Button);

  return (
    <MotionButtonBase
      position="fixed"
      top={isExpanded ? "4" : "auto"}
      bottom={isExpanded ? "auto" : "4"}
      right={isExpanded ? "4.5em" : "auto"}
      zIndex={5}
      aria-label="Toggle Site Content"
      colorScheme="blue"
      onClick={onClick}
      initial={false}
      animate={{
        top: isExpanded ? "16px" : "auto",
        bottom: isExpanded ? "auto" : "16px",
        right: isExpanded ? "4.5em" : "auto",
        x: isExpanded ? 0 : "-50%",
        rotate: isExpanded ? 180 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 10,
        damping: 20,
        duration: 2,
      }}
      {...(!isExpanded && {
        w: "10%",
        padding: "2em",
        maxWidth: "50%",
        minWidth: "fit-content",
        size: "lg",
        flexDirection: "column",
        alignSelf: "center",
        className: "animate-bounce",
      })}
    >
      {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon boxSize="10" />}
    </MotionButtonBase>
  );
};

export default ExpansionButton;