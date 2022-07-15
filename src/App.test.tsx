import React, { FC } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import UserCard from "./components/UserCard";
import { theme } from "./styled/theme";
import { ThemeProvider } from "styled-components";
import { UserModel } from "./types/models";

//An HOC to simulate theme for components
const withTheme = (Component: FC<UserModel>) => {
  const newComponent = (props: any) => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );

  return newComponent;
};

//Tests
test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Combination Task/i);
  expect(headerElement).toBeInTheDocument();
});

const UserCardWithTheme = withTheme(UserCard);
test("renders user card", () => {
  render(
    <UserCardWithTheme
      country="Iran"
      firstname="Alireza"
      lastname="Edalatpour"
      image="nothing"
    />
  );
  const nameElement = screen.getByText(/Alireza Edalatpour/i);
  expect(nameElement).toBeInTheDocument();
});

test("renders country", () => {
  render(
    <UserCardWithTheme
      country="Iran"
      firstname="Alireza"
      lastname="Edalatpour"
      image="nothing"
    />
  );
  const countryElement = screen.getByText(/Iran/i);
  expect(countryElement).toBeInTheDocument();
});
