import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import ModalEditarCard from "components/ModalEditarCard";



const Botao = styled.button`
    display: flex;
    gap: 1rem;
    background-color: transparent;
    border-color: transparent;
    color: var(--cor-fonte-1);
    font-weight: bold;
    text-align: center;
    justify-content: center;
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

export default function BotaoCard() {
    return (
        <BotaoConteiner>
            <Botao>
                <FaRegTrashAlt />
                DELETAR
            </Botao>
            <Botao onClick={() => <ModalEditarCard />}>
                <PiPencilSimpleLineBold size={20} />
                EDITAR
            </Botao>
        </BotaoConteiner>
    )
}