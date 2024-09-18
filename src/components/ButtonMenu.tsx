import { color, Stack } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import ExpansionButton from "./ExpansionButton";
import ContactMeButton from "./ContactMeButton";

const ButtonStack = ({ isExpanded, toggleExpansion }) => {
  return (
    <Stack direction="row" spacing={4} position={isExpanded ? 'inherit' : 'fixed'} top={5} right={4} zIndex={5000} >
      <ExpansionButton
        isExpanded={isExpanded}
        toggleExpansion={toggleExpansion}
        darkSettings={{ bgColor: "customDarkMode.yellow", color:'black' }}
        lightSettings={{ bgColor: "customLightMode.primary", color:'white' }}
      />
      <ContactMeButton
        darkSettings={{ bgColor: "customDarkMode.primary" }}
        lightSettings={{ bgColor: "customLightMode.orange", color:'white' }} />
      <DarkModeSwitch
        darkSettings={{ bgColor: "customDarkMode.white", color: "black" }}
        lightSettings={{ bgColor: "customLightMode.backgroundBlue", color: "white" }} />
    </Stack>
  );
};

export default ButtonStack;
