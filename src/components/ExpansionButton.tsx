import React from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

interface ExpansionButtonProps {
  isExpanded: boolean;
  toggleExpansion?: () => void;
  lightSettings: {},
  darkSettings: {}
}

const ExpansionButton: React.FC<ExpansionButtonProps> = ({
  isExpanded,
  toggleExpansion,
  lightSettings,
  darkSettings
}) => {

  return (
    <IconButton
      onClick={toggleExpansion}
      icon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      aria-label="Expand Site"
      className={isExpanded? "" : "animate-pulse"}
      _light={lightSettings}
      _dark={darkSettings}
      size={[
        "sm", // base
        "md", // sm
        "md", // md
      ]}
      mt={isExpanded ? '0' : '2em'}
    />
  );
};

export default ExpansionButton;
