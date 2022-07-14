import * as React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  height: ${(props) => props.theme.headerHeight};
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  background-color: ${props=>props.theme.colors.main};
  color: ${props=>props.theme.colors.white};
  font-weight: bold;
`;
export default function Header() {
  return <HeaderDiv>Combination Task (Alireza Edalatpour)</HeaderDiv>;
}
