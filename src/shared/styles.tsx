import { DefaultTheme } from 'styled-components';

type ThemeColorType = typeof color;
type ThemeTypographyType = typeof typography;

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ThemeColorType;
    typography: ThemeTypographyType;
  }
}

export const color = {
  // Palette
  primary: '#3B8CFF',
  secondary: '#00ABB4',
  base: '#201A3D',
  action: '#9C43FF',

  // Monochrome
  light: '#FFFFFF',
  dark: '#262626',
  gray: ['#F2F2F2', '#D9D9D9', '#BFBFBF', '#828282', '#6E6E6E', '#595959'],

  // Status
  error: '#DC5034',
};

export const typography = {
  type: {
    primary: '"Noto Sans Display", "Noto Serif"',
  },
  weight: {
    regular: '400',
    bold: '700',
  },
  size: {
    s: '0.875rem', // 14px
    m: '1.125rem', // 18px
    l: ['1.25rem', '1.375rem'], // ['20px', '22px']
  },
};

export const defaultTheme: DefaultTheme = { color, typography };
