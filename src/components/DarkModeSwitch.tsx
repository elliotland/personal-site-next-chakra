import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

type DarkModeSwitchProps = {
  lightSettings: {};
  darkSettings: {};
};

export const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({lightSettings, darkSettings}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      _light={lightSettings}
      _dark={darkSettings}
      onClick={toggleColorMode}
      
      size={[
        "sm", // base
        "md", // sm
        "md", // md
      ]}
    />
  );
};
