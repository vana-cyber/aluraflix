import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./paginas/Home";
import NovoVideo from "./paginas/NovoVideo";
import Rodape from "./components/Rodape";
import EstilosGlobais from "components/EstilosGlobais";
import Cabecalho from "components/Cabecalho";
import {styled} from "styled-components";

const  Fundo = styled.div`
  background-color: var(--cor-quartenaria);
`

function AppRoutes() {

  return (
    <>
      <BrowserRouter>
        <EstilosGlobais />
        <Fundo>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novovideo" element={<NovoVideo />} />
        </Routes>

        <Rodape />
        </Fundo>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes;
