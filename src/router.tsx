import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import { Layout } from "./Layout"
import { About, Error, Home } from "./pages"
import { about, home } from "./paths"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Error />}>
      <Route path={home} element={<Home />} />
      <Route path={about} element={<About />} />
    </Route>
  )
)

