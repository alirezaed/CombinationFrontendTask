import * as React from "react";
import styled from "styled-components";
import { UserModel } from "../types/models";

const CardContainer = styled.div`
  height: 20px;
`;
export default function UserCard(props: UserModel) {
  return <CardContainer>{props.firstname}</CardContainer>;
}
