import { createGlobalStyle } from 'styled-components'
import { reboot } from './reboot'

const GlobalStyle = createGlobalStyle`
  ${reboot};
  
  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  a {
    cursor: pointer;
    transition: color var(--transition-duration);
  }
  
  body {
    padding-right: 0 !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 8px;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
  }

  h1 { font-size: 40px; }
  h2 { font-size: 32px; }
  h3 { font-size: 28px; }
  h4 { font-size: 24px; }
  h5 { font-size: 20px; }
  h6 { font-size: 16px; }
`

export { GlobalStyle }
