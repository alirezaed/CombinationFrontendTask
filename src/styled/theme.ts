import { DefaultTheme, createGlobalStyle } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "5px",
  headerHeight: "50px",
  paddings:[4,8,16,24],
  margins:[8,16,32,64],
  colors: {
    main: "cyan",
    secondary: "magenta",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export { theme, GlobalStyle };
