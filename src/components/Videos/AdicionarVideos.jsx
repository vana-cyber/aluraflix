import { styled } from 'styled-components';
import { useState } from 'react';
import Videos from '.';

// const ListaDeVideos = styled.div`
//     margin-top: 2rem;
// `;

// const VideoCard = styled.div`
//     background: var(--dark-gray);
//     border: 1px solid var(--cor-primaria);
//     border-radius: 0.7rem;
//     padding: 1rem;
//     margin-bottom: 1rem;
// `;



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
        <>
            <Videos />
            <p>{video.descricao}</p>
        </>
    )
}
            // <ListaDeVideos>
            //     {videos.map((video, index) => (
            //         <VideoCard key={index}>
            //             <h3>{video.titulo}</h3>
            //             <img
            //                 src={video.imagem}
            //                 alt={`Thumbnail de ${video.titulo}`}
            //                 style={{ maxWidth: '100%', borderRadius: '0.5rem' }}
            //             />
            //             <p>{video.descricao}</p>
            //             <a href={video.url} target="_blank" rel="">
            //                 Assistir ao vídeo
            //             </a>
            //         </VideoCard>
            //     ))}
            // </ListaDeVideos>