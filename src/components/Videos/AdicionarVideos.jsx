import { useState } from 'react';
import Videos from '.';



export const handleSubmit = (event) => {

    const [videos, setVideos] = useState([]);
    event.preventDefault(); // Prevenir o reload da página
    event.target.closest('form').reset();

    const novoVideo = {
        title: event.target.title.value,
        url: event.target.url.value,
        section: event.target.section.value,
        thumbnail: event.target.thumbnail.value,
        descricao: event.target.descricao.value,
    };

    setVideos([...videos, novoVideo]); // Adicionar novo vídeo ao estado
    event.target.reset(); // Limpar o formulário

    return (
            
            <>
                {videos.map((video) => (
                    <Videos key={video.id}>
                        <p>{video.descricao}</p>
                    </Videos>
                ))}
            </>
        
    )
}