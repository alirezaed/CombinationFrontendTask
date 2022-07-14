import { DefaultTheme, createGlobalStyle } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "4px",
  headerHeight: "50px",
  paddings: [4, 8, 16, 24],
  margins: [8, 16, 32, 64],
  colors: {
    main: "#576F72",
    secondary: "#7D9D9C",
    light: "#E4DCCF",
    lighter: "#F0EBE3",
    white: "white",
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
