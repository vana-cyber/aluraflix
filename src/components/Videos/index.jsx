import styled from "styled-components";
import { useContext } from "react";
import { VideoContext } from '@/context/VideoContext';
import BotaoCard from "components/BotaoCard";


const ListaSeções = styled.div`
    display: flex;
    flex-direction: row;
    width: 85rem;
    gap: 2rem;
    overflow: auto;
    `;

const ListaVideos = styled.ul`
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    list-style: none;
    width: 100%;
    `;

const CardVideo = styled.figure`
    width: 350px;
    min-height: 400px;
    border: 3px solid;
    border-color: var(--cor-${props => props.section});
    border-radius: 15px;
    text-align: center;
    img {
        width: 100%;
        height: 13rem;
        border-radius: 0.8rem;
    }
`;

const DivEstilizada = styled.div`
    padding: 1rem;
    width: 350px;
    border-radius: 1.5rem;
    background-color: var(--cor-${props => props.section});
    text-align: center;
    margin-left: 5rem;
    margin-top: 2rem;
    justify-content: center;
`

const Titulo = styled.h2`
    margin-left: 0.8rem;
    font-weight: bold;
`

export default function Videos() {

    const { listaVideos } = useContext(VideoContext);


    if (!listaVideos || !Array.isArray(listaVideos)) {
        return <p>Nenhum vídeo disponível.</p>;
    }
    return (
        <ListaVideos>
            {listaVideos.map((secao) => (
                <DivEstilizada key={secao.id}>
                    <Titulo>{secao.section}</Titulo>

                    <ListaSeções>
                        {secao.videos.map((video) => (
                            <li key={video.id}>
                                <CardVideo>
                                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                                        <img src={video.thumbnail} alt={video.title} />
                                    </a>
                                    <figcaption>
                                        <h3>{video.title}</h3>
                                        <BotaoCard />
                                    </figcaption>
                                </CardVideo>
                            </li>
                        ))}
                    </ListaSeções>
                </DivEstilizada>
            ))}
        </ListaVideos>
    );
}
