import styled from "styled-components";
import { useContext } from "react";
import { VideoContext } from '@/context/VideoContext';
import BotaoCard from "components/BotaoCard";


const ListaSeções = styled.div`
    margin-left: 2rem;
    display: flex;
    flex-direction: row;
    width: 85rem;
    gap: 2rem;
    overflow: auto;
    `;

const ListaVideos = styled.ul`
    display: flex;
    flex-flow: column;
    gap: 1.5rem;
    list-style: none;
    width: 100%;
    `;

const CardVideo = styled.figure`
    width: 375px;
    margin: 0;
    text-align: center;
    justify-content: space-between;
    height: 25rem;
    img {
        width: 100%;
        height: 13rem;
        border-radius: 0.8rem;
    }

    h3 {
        margin-top: 0.5rem;
        height: 2rem; 
    }
`;

const CardVideoEstilizado = styled.div`
    box-sizing: border-box;
    border: 3px solid;
    width: 380px;
    border-color: ${props => props.borderColor};
    border-radius: 15px;
    height: 25rem;
`

const DivEstilizada = styled.div`
    padding: 1rem;
    background-color: ${props => props.backgroundColor};
    width: 350px;
    border-radius: 1.5rem;
    text-align: center;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    justify-content: center;
`

const Titulo = styled.h2`
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
                <div key={secao.id}>
                    <DivEstilizada backgroundColor={secao.color}>
                        <Titulo>
                            {secao.section}
                        </Titulo>
                    </DivEstilizada>

                    <ListaSeções>
                        {secao.videos.map((video) => (
                            <li key={video.id}>
                                <CardVideoEstilizado borderColor={secao.color}>
                                    <CardVideo>
                                        <a href={video.url} target="_blank" rel="noopener noreferrer">
                                            <img src={video.thumbnail} alt={video.title} />
                                        </a>
                                        <figcaption>
                                            <h3>{video.title}</h3>
                                            <BotaoCard />
                                        </figcaption>
                                    </CardVideo>
                                </CardVideoEstilizado>
                            </li>
                        ))}
                    </ListaSeções>
                </div>
            ))}
        </ListaVideos>
    );
}
