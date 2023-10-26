import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Container, CssBaseline } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import { Header } from "./components"
import { router } from "./router"

export const App = () => (
  <>
    <CssBaseline />
    <Header />
    <Container maxWidth="sm">
      <RouterProvider router={router} />
    </Container>
  </>
)
