import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Container p="5" minW="80%" minH="100vh">
        {children}
      </Container>
    </>
  );
}

export default Layout;
