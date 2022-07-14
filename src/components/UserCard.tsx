import * as React from "react";
import styled from "styled-components";
import { UserModel } from "../types/models";
import Avatar from "./Avatar";

const CardContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.paddings[2]}px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
`;

const FlexColumn = styled.div`
  display: flex;
  flex-flow: column;
  padding: ${(props) => props.theme.paddings[2]}px;
`;

const Title = styled.b`
  font-size: 1.1em;
  min-width: 100px;
  color: ${(props) => props.theme.colors.main};
`;

const SubTitle = styled.div`
  font-size: 0.9em;
  color: ${(props) => props.theme.colors.main};
`;
export default function UserCard(props: UserModel) {
  return (
    <CardContainer>
      <Avatar imageUrl={props.image} />
      <FlexColumn>
        <Title>
          {props.firstname} {props.lastname}
        </Title>
        <SubTitle>{props.country}</SubTitle>
      </FlexColumn>
    </CardContainer>
  );
}
