import { createBrowserRouter } from "react-router-dom"
import { About, Error, Home } from "./pages"

export const homePage = "/"
export const aboutPage = "/about"

export const router = createBrowserRouter([
  {
    path: homePage,
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: aboutPage,
    element: <About />,
  }
])
