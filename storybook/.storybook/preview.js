import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

import { ThemeProvider } from "styled-components";
import themeDefault from "../components/particles/themeDefault";
import GlobalStyles from "../components/particles/globalStyles";

addParameters({
  docs: {
    continer: DocsContainer,
    page: DocsPage,
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
