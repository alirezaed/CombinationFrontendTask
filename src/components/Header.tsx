import * as React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  height: ${(props) => props.theme.headerHeight};
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  background-color: #d6ecff;
  color: #858585;
  font-weight: bold;
`;
export default function Header() {
  return <HeaderDiv>Combination Task (Alireza Edalatpour)</HeaderDiv>;
}
