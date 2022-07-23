import { createGlobalStyle, css } from 'styled-components';
import { color, typography } from './styles';

export const fontUrl =
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@400;700&family=Noto+Serif:wght@400;700&display=swap';

export const bodyStyles = css`
  @import url(${fontUrl});
  font-family: ${typography.type.primary};
  color: ${color.dark};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
    font-size: 1rem;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;

export const gapPolyFill = css<{ $gap: string }>`
  @supports (-webkit-touch-callout: none) and (not (translate: none)) {
    &:not(:last-child) {
      margin-right: ${({ $gap }) => $gap};
    }
  }
`;
