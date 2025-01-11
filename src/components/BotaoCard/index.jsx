import styled from "styled-components";

const Botao = styled.button`
    background-color: transparent;
    border-color: transparent;
    color: var(--cor-fonte-1);
    font-weight: bold;
`

const BotaoConteiner = styled.div`
    display: flex;
    gap: 5rem;
    justify-content: center;
    align-items: flex-end;
    background-color: #000000;
    margin: 0;
    padding: 1rem;
    border-radius: 0.5rem;
`

export default function BotaoCard () {
    return (
        <BotaoConteiner>
        <Botao>
            DELETAR
        </Botao>
        <Botao>
            EDITAR
        </Botao>
        </BotaoConteiner>
    )
}