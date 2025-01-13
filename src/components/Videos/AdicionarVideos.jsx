import { styled } from 'styled-components';
import { useState } from 'react';
import Videos from '.';

const ListaDeVideos = styled.div`
    margin-top: 2rem;
`;



export const handleSubmit = (event) => {

    const [videos, setVideos] = useState([]);
    event.preventDefault(); // Prevenir o reload da página
    event.target.closest('form').reset();

    const novoVideo = {
        title: event.target.title.value,
        url: event.target.url.value,
        thumbnail: event.target.thumbnail.value,
        descricao: event.target.descricao.value,
    };

    setVideos([...videos, novoVideo]); // Adicionar novo vídeo ao estado
    event.target.reset(); // Limpar o formulário

    return (
            
            <ListaDeVideos>
                {videos.map((video, id) => (
                    <Videos key={id}>
                        <p>{video.descricao}</p>
                    </Videos>
                ))}
            </ListaDeVideos>
        
    )
}