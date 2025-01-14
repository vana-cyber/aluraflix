import styled from "styled-components";
import videos from "./videos.json";
import BotaoCard from "components/BotaoCard";
import EstilosGlobais from "components/EstilosGlobais";
import axios from "axios";
import React, { useEffect, useState } from 'react';

const ListaSeções = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    `;

const ListaVideos = styled.ul`
    display: flex;
    flex-direction: row;
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

export default function Videos({ videos, section }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/sections');
                console.log(response.data);
                setVideos(response.data);
            } catch (error) {
            console.error("Erro ao buscar vídeos:", error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <ListaSeções>
            {videos.length > 0 ? (
                videos.map((section) => (
                    <div key={section.section}>
                        <EstilosGlobais />
                        <DivEstilizada>
                            <Titulo>{section.section}</Titulo>
                        </DivEstilizada>
                        <ListaVideos>
                            {section && section.videos && section.videos.map((video) => (
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
                        </ListaVideos>
                    </div>
                ))
            ) : (
                <p>Carregando vídeos...</p>
            )}
        </ListaSeções>
    );
}
