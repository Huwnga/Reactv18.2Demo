import React from "react";
import TopNav from "./top-nav";
import { Container } from "react-bootstrap";

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <TopNav />
      <Container fluid>{children}</Container>
    </>
  );
};
