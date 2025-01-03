import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./paginas/Home";
import NovoVideo from "./paginas/NovoVideo";
import Rodape from "./components/Rodape";
import Menu from "./components/Menu";
import EstilosGlobais from "components/EstilosGlobais";

function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <EstilosGlobais />
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novovideo" element={<NovoVideo />} />
        </Routes>

        <Rodape />
      </BrowserRouter>
    </>
  )
}

export default AppRoutes;
