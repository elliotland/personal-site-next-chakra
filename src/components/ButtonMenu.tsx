import React from "react";
import {
  ButtonGroup,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { DarkModeSwitch } from "./DarkModeSwitch";
import ExpansionButton from "./ExpansionButton";
import ContactMeButton from "./ContactMeButton";

type ButtonStackProps = {
  isExpanded: boolean;
  toggleExpansion?: () => void;
  showContactButton: boolean;
  showExpandButton: boolean;
};

const ButtonStack: React.FC<ButtonStackProps> = ({
  isExpanded,
  toggleExpansion,
  showContactButton,
  showExpandButton,
}) => {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          aria-label="Menu"
          variant={"outline"}
          colorScheme={'grey'}
          mr={'2em'}
          display={
            isExpanded ? ["flex", "none", "none"] : "none"
          }
        />
        <MenuList>
          {showContactButton && (
          <MenuItem>
          <ContactMeButton
            darkSettings={{
              bgColor: "customDarkMode.primary",
              color: "black",
            }}
            isExpanded={isExpanded}
            lightSettings={{
              bgColor: "customLightMode.orange",
              color: "white",
            }}
          />
          </MenuItem>
          )}
          {showExpandButton && (
            <MenuItem>
            <ExpansionButton
              isExpanded={true}
              toggleExpansion={toggleExpansion}
            />
            </MenuItem>
          )}
          <MenuItem>
          <DarkModeSwitch
            darkSettings={{ bgColor: "customDarkMode.white", color: "black" }}
            lightSettings={{
              bgColor: "customLightMode.backgroundBlue",
              color: "white",
            }}
          />
          </MenuItem>
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
        {isExpanded && showExpandButton && (
          <ExpansionButton
            isExpanded={true}
            toggleExpansion={toggleExpansion}
          />
        )}
        {showContactButton && (
          <ContactMeButton
            darkSettings={{ bgColor: "customDarkMode.primary", color: "black" }}
            lightSettings={{
              bgColor: "customLightMode.orange",
              color: "white",
            }}
            isExpanded={true}
          />
        )}
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
