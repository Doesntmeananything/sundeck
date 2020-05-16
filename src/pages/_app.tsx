import {
  CSSReset,
  ColorModeProvider,
  ThemeProvider,
  theme
} from "@chakra-ui/core";
import produce, { enableAllPlugins } from "immer";
import { AppProps } from "next/app";
import Head from "next/head";

enableAllPlugins();

const customTheme = produce(theme, (newTheme) => {
  newTheme.fonts.heading = `Philosopher, ${theme.fonts.heading}`;
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
            as="font"
          />
        </Head>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
