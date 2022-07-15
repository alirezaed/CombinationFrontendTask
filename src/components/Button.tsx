import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 30px;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.light};
  cursor: pointer;
  color: ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.lighter};
  &:hover {
    background-color: ${(props) => props.theme.colors.light};
  }
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

`;
function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <StyledButton {...props} />;
}

export default React.memo(Button);
