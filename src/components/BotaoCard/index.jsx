import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import ModalEditarCard from "components/ModalEditarCard";
import { VideoContext } from "context/VideoContext";
import { useContext } from "react";



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
    margin-top: 3rem;
    justify-content: flex-end;
    background-color: #000000;
    padding: 2rem;
    border-radius: 0.8rem;
    width: 100%;
`

export default function BotaoCard({ video }) {
    
    const { deletaVideo } = useContext(VideoContext);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = () => {
        deletaVideo(video.id);
        console.log("ID do vídeo a ser deletado:", video.id); 
    }

    return (
        <BotaoConteiner>
            <Botao type="button" onClick={() => {handleDelete}}>
                <FaRegTrashAlt />
                DELETAR
            </Botao>
            <Botao  type="button" onClick={() => <ModalEditarCard />}>
                <PiPencilSimpleLineBold size={20} />
                EDITAR
            </Botao>
        </BotaoConteiner>
    )
}