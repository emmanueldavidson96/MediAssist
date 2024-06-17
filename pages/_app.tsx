import React from "react";
import { AppProps } from "next/app";
import ContextProvider from "@/context/Context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;