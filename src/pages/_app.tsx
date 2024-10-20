import { ChakraProvider } from "@chakra-ui/react";

import "./globals.css";
import "@fontsource/bungee-shade";

import theme from "../theme";

import { AppProps } from "next/app";
import { StrictMode } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </StrictMode>
  );
}

export default MyApp;
