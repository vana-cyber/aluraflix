
import styled from 'styled-components';
import FormularioCard from '../../components/FormularioCard';

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
            <Titulo>NOVO VÍDEO</Titulo>
            <Paragrafo>Complete o formulário para criar um novo card de vídeo.</Paragrafo>
            <FormularioCard />
        </>
    )
}