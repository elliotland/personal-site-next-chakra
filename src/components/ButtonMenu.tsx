import { Stack } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import ExpansionButton from "./ExpansionButton";
import ContactMeButton from "./ContactMeButton";

const ButtonStack = ({ isExpanded, toggleExpansion }) => {
  // Using 'onClick' here
  return (
    <Stack direction="row" spacing={4} position="fixed" top={5} right={4} zIndex={5000}>
      <ExpansionButton
        isExpanded={isExpanded}
        toggleExpansion={toggleExpansion}
        darkSettings={{ bgColor: "customDarkMode.green" }}
        lightSettings={{ bgColor: "customLightMode.pink" }}
      />
      <ContactMeButton
        darkSettings={{ bgColor: "customDarkMode.green" }}
        lightSettings={{ bgColor: "customLightMode.pink" }} />
      <DarkModeSwitch />
    </Stack>
  );
};

export default ButtonStack;
