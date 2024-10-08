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
    {isExpanded? <>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          aria-label="Menu"
          variant={"outline"}
          colorScheme={"grey"}
          mr={"2em"}
          display={isExpanded ? ["flex", "none", "none"] : "none"}
        />
        <MenuList>
          {showContactButton && (
            <MenuItem>
              <ContactMeButton
                aria-label="Contact Me"
                isExpanded={isExpanded}
                darkSettings={{
                  bgColor: "customDarkMode.primary",
                  color: "black",
                }}
                lightSettings={{
                  bgColor: "customLightMode.orange",
                  color: "white",
                }}
                w={"100%"}
              />
            </MenuItem>
          )}
          {showExpandButton && (
            <MenuItem>
              <ExpansionButton
                isExpanded={true}
                toggleExpansion={toggleExpansion}
                w={"100%"}
              />
            </MenuItem>
          )}
          <MenuItem>
            <DarkModeSwitch
              aria-label="Toggle Dark Mode"
              darkSettings={{ bgColor: "customDarkMode.white", color: "black" }}
              lightSettings={{
                bgColor: "customLightMode.backgroundBlue",
                color: "white",
              }}
              w={"100%"}
            />
          </MenuItem>
        </MenuList>
      </Menu></> : null}
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
        {showContactButton && (
          <ContactMeButton
            isExpanded={isExpanded}
            darkSettings={{ bgColor: "customDarkMode.primary", color: "black" }}
            lightSettings={{
              bgColor: "customLightMode.orange",
              color: "white",
            }}
          />
        )}
        {isExpanded && showExpandButton && (
          <ExpansionButton
            isExpanded={true}
            toggleExpansion={toggleExpansion}
          />
        )}
        <DarkModeSwitch
          aria-label="Toggle Dark Mode"
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
