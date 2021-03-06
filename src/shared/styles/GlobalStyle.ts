import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  &:root {
    /* Colors */
    --primary: #050505;
    --secondary: #454545;
    --brand: #FF4136;
    --brand-secondary: #ff6026;

    /* Fonts */
    --sans: 'Inter', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: var(--sans);
  }

  .katex .katex-mathml {
    position: fixed;
  }
`;

export default GlobalStyle;
