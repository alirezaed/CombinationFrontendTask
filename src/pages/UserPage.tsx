import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import UserCard from "../components/UserCard";
import { FlexColumn } from "../styled/elements";
import { IncommingModel, UserModel } from "../types/models";

const PageContainer = styled(FlexColumn)`
  justify-content: center;
  max-width: 400px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-bottom: 8px;
`;

export default function UserPage() {
  const [user, setUser] = React.useState<UserModel>();
  const [show, setShow] = React.useState<boolean>(false);

  const fetchData = React.useCallback(async () => {
    setUser(undefined);
    const data = await fetch("https://randomuser.me/api/");
    const { results } = (await data.json()) as IncommingModel;
    const incommingUser = results[0];
    const userModel = {
      country: incommingUser.location.country,
      firstname: incommingUser.name.first,
      lastname: incommingUser.name.last,
      image: incommingUser.picture.medium,
    };
    setUser(userModel);
    setShow(true);
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleShowHideClick = () => {
    if (!show) {
      fetchData();
    } else {
      setShow(false);
    }
  };
  
  return (
    <PageContainer>
      <StyledButton disabled={!user} onClick={handleShowHideClick}>
        {show ? "Hide" : "Show"}
      </StyledButton>
      {!user && <Spinner />}
      {(user && show) && <UserCard {...user} />}
    </PageContainer>
  );
}
