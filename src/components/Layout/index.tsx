import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Container p="5" minW="80%" minH="70vh">
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
