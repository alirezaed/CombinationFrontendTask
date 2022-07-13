import * as React from "react";
import styled from "styled-components";
import Header from "./Header";

const LayoutContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

const MainContent = styled.div`
  height: calc(100vh - ${(props) => props.theme.headerHeight});
  padding: ${(props) => props.theme.paddings[2]}px
`;
export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
}
