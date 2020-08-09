import {
  ThemeProvider,
  ColorModeProvider,
  Flex,
  CSSReset,
} from "@chakra-ui/core";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      
        <Flex direction="column" align="center" justify="center">
          <CSSReset />
          <Flex justify="center" align="center" w="100%" h="93vh">
            <Component {...pageProps} />
          </Flex>
        </Flex>
      
    </ThemeProvider>
  );
}

export default MyApp;
