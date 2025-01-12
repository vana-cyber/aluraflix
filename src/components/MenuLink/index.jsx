import { NavLink } from "react-router";
import { styled } from "styled-components";

const Navegacao = styled(NavLink)`
    color: ${(props) => (props.$ativo ? "#2271D1" : "#F5F5F5")};
    text-decoration: none; /* Adicione se quiser remover sublinhado */
    transition: all 0.3s ease;
    font-weight: bold;
`
const Conteiner = styled.div`
     border-color: ${(props) => (props.$ativo ? "#2271D1" : "#F5F5F5")};
     box-shadow: ${(props) =>
    props.$ativo ? "inset 0 0 5px #2271D1" : ""}; /* Lógica para a sombra */
     padding: 1rem;
     width: 8rem;
     border: 2.5px solid;
     border-radius: 0.5rem;
     text-align: center;
`

export default function MenuLink({ to, children, ativo = false}) {
    return (
        <>
            <Navegacao to={to} $ativo={ativo}>
                <Conteiner>
                {children}
                </Conteiner>
            </Navegacao>
        </>
    )
}