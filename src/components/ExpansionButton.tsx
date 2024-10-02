import React from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

interface ExpansionButtonProps {
  isExpanded: boolean;
  toggleExpansion?: () => void;
  lightSettings?: {},
  darkSettings?: {}
}

const ExpansionButton: React.FC<ExpansionButtonProps> = ({
  isExpanded,
  toggleExpansion,
  lightSettings,
  darkSettings
}) => {

  return (
    <Button
      onClick={toggleExpansion}
      rightIcon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      aria-label="Expand Site"
      variant={'outline'}
      colorScheme={'grey'}
      rounded={'full'}      
      _dark={darkSettings}
      _light={lightSettings}
      size={[
        "md", // base
        "md", // sm
        "md", // md
      ]}
    >{isExpanded ? 'See Less': 'See More'}</Button>
  );
};

export default ExpansionButton;
