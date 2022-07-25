import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '..';

interface ProviderTestProps {
  children: React.ReactNode;
}

export const ProviderTest: React.FC<ProviderTestProps> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);
