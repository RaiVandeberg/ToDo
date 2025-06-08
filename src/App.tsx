import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";



export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route element={<PageHome />} index />

        </Route>
      </Routes>

    </BrowserRouter>
  )
}


