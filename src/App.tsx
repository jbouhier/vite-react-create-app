import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, About } from "./pages"
import { Header } from "./components"

export const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </BrowserRouter>
)
