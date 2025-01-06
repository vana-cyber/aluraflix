import styled from "styled-components"
import videos from "./videos.json"



const CardVideo = styled.figure`
    padding: 10rem;
    img {
        max-width: 432px;
    }
`   

export default function Videos() {
    return (
        <ul>
            {videos.map(video => <li key={video.id}>
                <h2>{video.section}</h2>
                <CardVideo>
                    <a href={video.url}>
                        <img src={video.thumbnail} />
                    </a>
                    <figcaption>
                        <button>DELETAR</button>
                        <button>EDITAR</button>
                    </figcaption>
                </CardVideo>
            </li>)}
        </ul>
    )

}