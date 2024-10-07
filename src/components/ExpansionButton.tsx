import React from "react";
import { Button, ButtonProps, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

interface ExpansionButtonProps extends ButtonProps {
  isExpanded: boolean;
  toggleExpansion?: () => void;
  lightSettings?: {},
  darkSettings?: {}
}

const ExpansionButton: React.FC<ExpansionButtonProps> = ({
  isExpanded,
  toggleExpansion,
  lightSettings,
  darkSettings,
  ...props
}) => {

  return (
    <Button
      onClick={toggleExpansion}
      rightIcon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      aria-label="Expand Site"
      variant={'outline'}
      colorScheme={'blue'}
      rounded={'full'}      
      // _dark={darkSettings}
      // _light={lightSettings}
      size={[
        "md", // base
        "md", // sm
        "md", // md
      ]}
      {...props}
    >{isExpanded ? 'See Less': 'See More'}</Button>
  );
};

export default ExpansionButton;
