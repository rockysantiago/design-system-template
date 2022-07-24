import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withThemesProvider } from 'themeprovider-storybook';

import { defaultTheme, GlobalStyle } from '../src/shared';

addDecorator(withThemesProvider([{ ...defaultTheme }]), ThemeProvider);

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
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
