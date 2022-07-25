import { createGlobalStyle, css } from 'styled-components';
import { color, typography } from './styles';

import { SupportedFonts } from '..';

const setFontFace = (fontFamily: SupportedFonts) => {
  const url = `fonts/${fontFamily}`;

  return css`
    @font-face {
      font-family: ${fontFamily};
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url('${url}-Bold.ttf') format('truetype');
    }

    @font-face {
      font-family: ${fontFamily};
      font-style: italic;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url('${url}-BoldItalic.ttf') format('truetype');
    }

    @font-face {
      font-family: ${fontFamily};
      font-style: italic;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url('${url}-Italic.ttf') format('truetype');
    }

    @font-face {
      font-family: ${fontFamily};
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url('${url}-Regular.ttf') format('truetype');
    }
  `;
};

export const bodyStyles = css`
  ${setFontFace(SupportedFonts.NotoSansDisplay)}
  ${setFontFace(SupportedFonts.NotoSerif)}

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
