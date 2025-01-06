
import styled from 'styled-components';
import FormularioCard from '../../components/FormularioCard';

const ConteinerNovoVideo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Titulo = styled.h1`
    color: var(--white);
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
`

const Paragrafo = styled.p`
    color: var(--white);
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
`

export default function NovoVideo() {
    return (
        <>
            <ConteinerNovoVideo>
                <Titulo>NOVO VÍDEO</Titulo>
                <Paragrafo>Complete o formulário para criar um novo card de vídeo.</Paragrafo>
                <FormularioCard />
            </ConteinerNovoVideo>
        </>
    )
}