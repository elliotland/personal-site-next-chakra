import {
  ButtonGroup,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import ExpansionButton from "./ExpansionButton";
import ContactMeButton from "./ContactMeButton";
import { HamburgerIcon } from "@chakra-ui/icons";

const ButtonStack = ({ isExpanded, toggleExpansion }) => {
  return (
    <>
      <Menu>
        <MenuButton>
          <IconButton
            variant={"outline"}
            icon={<HamburgerIcon />}
            aria-label="Menu"
            mr={"1em"}
            display={
              isExpanded ? ["flex", "none", "none"] : ["none", "none", "none"]
            }
          />
        </MenuButton>
        <MenuList>
          <ContactMeButton
            darkSettings={{ bgColor: "customDarkMode.primary" }}
            lightSettings={{
              bgColor: "customLightMode.orange",
              color: "white",
            }}
          />
          <DarkModeSwitch
            darkSettings={{ bgColor: "customDarkMode.white", color: "black" }}
            lightSettings={{
              bgColor: "customLightMode.backgroundBlue",
              color: "white",
            }}
          />
          <ExpansionButton
            darkSettings={{ bgColor: "customDarkMode.primary" }}
            lightSettings={{
              bgColor: "customLightMode.orange",
              color: "white",
            }}
            isExpanded={true}
            toggleExpansion={toggleExpansion}
          />
        </MenuList>
      </Menu>
      <ButtonGroup
        spacing={4}
        position={"fixed"}
        top={5}
        right={4}
        zIndex={8000}
        display={
          isExpanded ? ["none", "flex", "flex"] : ["flex", "flex", "flex"]
        }
      >
        {isExpanded ? (
          <ExpansionButton
            darkSettings={{ bgColor: "customDarkMode.primary" }}
            lightSettings={{
              bgColor: "customLightMode.orange",
              color: "white",
            }}
            isExpanded={true}
            toggleExpansion={toggleExpansion}
          />
        ) : (
            <></>
        )}
        <ContactMeButton
          darkSettings={{ bgColor: "customDarkMode.primary" }}
          lightSettings={{ bgColor: "customLightMode.orange", color: "white" }}
        />
        <DarkModeSwitch
          darkSettings={{ bgColor: "customDarkMode.white", color: "black" }}
          lightSettings={{
            bgColor: "customLightMode.backgroundBlue",
            color: "white",
          }}
        />
      </ButtonGroup>
    </>
  );
};

export default ButtonStack;
