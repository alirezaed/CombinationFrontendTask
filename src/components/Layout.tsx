import * as React from "react";
import styled from "styled-components";
import { FlexColumn } from "../styled/elements";
import Header from "./Header";

const MainContent = styled(FlexColumn)`
  padding: ${(props) => props.theme.paddings[2]}px;
  align-items: center;
`;

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <FlexColumn>
      <Header />
      <MainContent>{children}</MainContent>
    </FlexColumn>
  );
}
