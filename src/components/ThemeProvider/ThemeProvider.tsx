import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../..';

export const ComponentLibThemeProvider = <T,>(props: {
  theme: T;
  children: React.ReactNode;
}) => {
  const theme = {
    myComponentLib: { ...defaultTheme, ...props.theme },
  };
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
