import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { SessionProvider } from "next-auth/react";
import { withTRPC } from "@trpc/next";
import { api } from "../utils/api";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const clearDb = api.data.clearDb.useQuery();
  return (
    <SessionProvider session={session}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MAS PROJEKT S19049</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/auth/signin">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  );
}

export default api.withTRPC(MyApp);
