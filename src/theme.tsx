import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

import {headerTheme} from './headerTheme';

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  components: {
    Heading: headerTheme,
},
  
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
  },
    fonts,
  breakpoints,
  textStyles: { 
    hero: {
        fontFamily: `'Bungee Shade'`,
    },
    title: {
        fontFamily: `'Menlo', monospace`, 
    },
},
});

export default theme;