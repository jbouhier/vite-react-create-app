import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from "react-router-dom"
import { Layout } from "./Layout"
import { About, Home } from "./pages"
import { about, home } from "./paths"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={about} element={<About />} />
      <Route path="*" element={<Navigate to={home} replace />} />
    </Route>
  )
)

