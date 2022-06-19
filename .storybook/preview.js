import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/styles/colors";
// whereever you have defined your material ui theme

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
