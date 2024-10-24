import { ChakraProvider, CSSReset } from "@chakra-ui/react";

import "./globals.css";
import "@fontsource/bungee-shade";

import { Analytics } from '@vercel/analytics/react';
import theme from "../theme";

import { AppProps } from "next/app";
import { StrictMode } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <Analytics />
      </ChakraProvider>
    </StrictMode>
  );
}

export default MyApp;
