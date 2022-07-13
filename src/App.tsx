import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import UserPage from "./pages/UserPage";
import { theme, GlobalStyle } from "./styled/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <UserPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
