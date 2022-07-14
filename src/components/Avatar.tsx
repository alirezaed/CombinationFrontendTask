import * as React from "react";
import styled from "styled-components";

const StyledAvatar = styled.div<AvatarProps>`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border: 1px solid gray;
  background-image: url(${(props) => props.imageUrl});
`;

interface AvatarProps {
  imageUrl: string;
}

export default function Avatar(props: AvatarProps) {
  return <StyledAvatar imageUrl={props.imageUrl} />;
}
