import { useColorMode, IconButton, IconButtonProps } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";



type DarkModeSwitchProps = IconButtonProps & {
  lightSettings: {};
  darkSettings: {};
};

export const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({lightSettings, darkSettings, ...props}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      _light={lightSettings}
      _dark={darkSettings}
      onClick={toggleColorMode}
      rounded={'full'}
      size={[
        "sm", // base
        "md", // sm
        "md", // md
      ]}
      {...props}
    />
  );
};
