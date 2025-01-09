import styled from "styled-components";
import videos from "./videos.json";
import BotaoCard from "components/BotaoCard";

const ListaSeções = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ListaVideos = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    list-style: none;
    padding: 0;
`;

const CardVideo = styled.figure`
    max-width: 432px;
    min-height: 319.92px;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
    img {
        width: 100%;
        height: auto;
        border-radius: 4px;
    }
`;

const DivEstilizada = styled.div`
    padding: 1rem;
    width: 300px;
    border-radius: 1.5rem;
    background-color: white;
    text-align: center;
    margin-left: 2rem;
    margin-top: 2rem;
    justify-content: center;
`

const Titulo = styled.h2`
    margin-left: 0.8rem;
`

export default function Videos() {
    return (
        <ListaSeções>
            {videos.map((section) => (
                <section key={section.section}>
                    <DivEstilizada>
                        <Titulo>{section.section}</Titulo>
                    </DivEstilizada>
                    <ListaVideos>
                        {section.videos.map((video) => (
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
                </section>
            ))}
        </ListaSeções>
    );
}
