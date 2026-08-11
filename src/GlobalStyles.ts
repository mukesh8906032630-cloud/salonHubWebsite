import { createGlobalStyle } from 'styled-components';

// Same token values as salonHubFrontend/src/context/ThemeContext.tsx's light-mode palette —
// this site doesn't need a theme toggle, it just borrows the product's fixed light look.
export const GlobalStyles = createGlobalStyle`
  :root {
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-family);
    background: #f8fafc;
    color: #0f172a;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: inherit;
  }
`;
