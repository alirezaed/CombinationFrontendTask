import * as React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerDiv = styled.div`
  border: 3px solid  ${props=>props.theme.colors.secondary};
  border-top: 3px solid  ${props=>props.theme.colors.light};
  border-radius: 50%;
  align-self: center;
  justify-self: center;
  width: 30px;
  height: 30px;
  animation: ${rotate} 1s ease infinite;
`;
export default function Spinner(props: any) {
  return <SpinnerDiv {...props} />;
}
