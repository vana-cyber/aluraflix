import { styled } from 'styled-components';
import Botao from '../Botao';

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    max-width: 40rem;
    padding: 1rem;
    width: 100vh;
`

const Label = styled.label`
    color: var(--white);
    font-size: 1rem;
    
    &.titulo {
        margin-top: 1rem;
        width: 29rem;
    }
`
const ConteinerBotao = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
`

const CampoTexto = styled.input`
    background-color: transparent;
    border-color: var(--cor-primaria);
    padding: 1rem;
    border-radius: 0.7rem;
`

export default function FormularioCard() {
    return (
        <Formulario>
            <Label className="titulo">Título</Label>
            <CampoTexto type="text" id="titulo" name="titulo" placeholder='Digite o título do vídeo' required />

            <Label className="categoria">Categoria</Label>
            <CampoTexto type="url" id="url" name="url" required />

            <Label className="imagem">Imagem</Label>
            <CampoTexto type="url" id="url" name="url" placeholder='Digite o link da imagem' required />

            <Label className="video">Vídeo</Label>
            <CampoTexto type="url" id="url" name="url" placeholder='Digite o link do vídeo' required />

            <Label className="descricao">Descrição</Label>
            <textarea id="descricao" name="descricao" placeholder='Sobre o quê é esse vídeo?' required />

            <ConteinerBotao>
                <Botao />
            </ConteinerBotao>
        </Formulario>
    )
}