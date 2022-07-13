import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import UserCard from "../components/UserCard";
import { IncommingModel, UserModel } from "../types/models";

const PageContainer = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
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
      <Button disabled={!user} onClick={handleShowHideClick}>{show ? "Hide" : "Show"}</Button>
      {!user && "Loading..."}
      {show && <UserCard {...user} />}
    </PageContainer>
  );
}
