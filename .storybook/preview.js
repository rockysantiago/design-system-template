import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme, GlobalStyle } from '../src/shared';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
