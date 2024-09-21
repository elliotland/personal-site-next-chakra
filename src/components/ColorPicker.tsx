import { useTheme, useColorModeValue } from "@chakra-ui/react";

const useRandomThemeColor = (specificColors = []) => {
  const theme = useTheme();
  const colorMode = useColorModeValue("customLightMode", "customDarkMode");

  // Function to get a random color
  const getRandomColor = () => {
    let colorOptions = [];

    if (specificColors.length > 0) {
      // Use only the specific colors provided
      colorOptions = specificColors.map(color => {
        // Check if the color is a nested color (e.g., "customLightMode.primary")
        if (color.includes('.')) {
          return color;
        }
        // Check if it's a global color
        if (theme.colors[color]) {
          return color;
        }
        // Assume it's a color from the current mode
        return `${colorMode}.${color}`;
      });
    } else {
      // If no specific colors are provided, use all theme colors
      const modeColors = Object.keys(theme.colors[colorMode]).map(color => `${colorMode}.${color}`);
      const globalColors = Object.keys(theme.colors).filter(color => typeof theme.colors[color] === 'string');
      colorOptions = [...modeColors, ...globalColors];
    }

    // If no valid colors are available, return a default color
    if (colorOptions.length === 0) {
      return "gray.500"; // You can change this to any default color you prefer
    }

    // Select a random color
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    return colorOptions[randomIndex];
  };

  return getRandomColor;
};

export default useRandomThemeColor;