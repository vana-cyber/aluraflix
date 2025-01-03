import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./paginas/Home";
import NovoVideo from "./paginas/NovoVideo";
import Rodape from "./components/Rodape";
import EstilosGlobais from "components/EstilosGlobais";
import Cabecalho from "components/Cabecalho";

function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <EstilosGlobais />

        <Cabecalho />
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
