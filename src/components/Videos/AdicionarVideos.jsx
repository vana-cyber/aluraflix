import { styled } from 'styled-components';

const ListaDeVideos = styled.div`
    margin-top: 2rem;
`;

const VideoCard = styled.div`
    background: var(--dark-gray);
    border: 1px solid var(--cor-primaria);
    border-radius: 0.7rem;
    padding: 1rem;
    margin-bottom: 1rem;
`;


export default function AdicionaVideos() {
    
    return (
        <>
            <ListaDeVideos>
                {videos.map((video, index) => (
                    <VideoCard key={index}>
                        <h3>{video.titulo}</h3>
                        <img
                            src={video.imagem}
                            alt={`Thumbnail de ${video.titulo}`}
                            style={{ maxWidth: '100%', borderRadius: '0.5rem' }}
                        />
                        <p>{video.descricao}</p>
                        <a href={video.url} target="_blank" rel="">
                            Assistir ao vídeo
                        </a>
                    </VideoCard>
                ))}
            </ListaDeVideos>
        </>
    )
}