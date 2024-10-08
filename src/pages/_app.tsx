import { ChakraProvider } from "@chakra-ui/react";

import './globals.css'
import '@fontsource/bungee-shade';

import theme from "../theme";

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
