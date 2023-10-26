import { Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./components";

export const Layout = () => (
  <>
    <CssBaseline />
    <Header />
    <Container maxWidth="xl">
      <Outlet />
    </Container>
  </>
)

