import * as React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
    height: 20px;
`
export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {

    return <StyledButton {...props} />
}
