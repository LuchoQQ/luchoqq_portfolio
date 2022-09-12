import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/arimo/700.css"
import "@fontsource/poppins/700.css"
import '../styles/main.css'
const theme = extendTheme({
  fonts: {
    primary: "Arimo",
    secondary: "Poppins",
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
