import { styled } from 'styled-components';
import { useContext } from 'react';
import { useState } from 'react';
import ListaSuspensa from 'components/ListaSuspensa';
import { VideoContext } from 'context/VideoContext';

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 40rem;
    padding: 1.5rem;
    width: 100%;
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
    padding: 1rem;
`

const Botao = styled.button`
    background-color: transparent;
    border-color: var(--white);
    border-radius: 0.7rem;
    color: var(--white);
    font-size: 1rem;
    padding: 0.8rem;
    text-transform: uppercase;
    width: 10rem;
    font-weight: bold;

    &:hover {
        border-color: var(--cor-secundaria);
        color: var(--cor-secundaria);
    }
`

const CampoTexto = styled.input`
    background-color: transparent;
    border-color: var(--cor-primaria);
    text-align: start;
    padding: 1rem;
    border-radius: 0.7rem;
    width: 30rem;
    color: var(--cor-fonte-2);
`

const AreaDeTexto = styled.textarea`
    background-color: transparent;
    padding: 5rem;
    border-radius: 0.7rem;
    border-color: var(--cor-primaria);
    padding-left: 1.5rem;
    text-align: start;
    `

export default function FormularioCard() {
    
    const { setListaVideos } = useContext(VideoContext);
    const [title, setTitle] = useState('');
    const [section, setSection] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [url, setUrl] = useState('');
    const [descricao, setDescricao] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const novoVideo = {
            title,
            id: Date.now(), 
            url,
            thumbnail,
            descricao,
        };
        
        try {
            // buscando a api
            const response = await fetch(`http://localhost:3000/sections`);
            const sections = await response.json();
    
            // encontrando a seção
            const sectionToUpdate = sections.find(sec => sec.section === section);
    
            console.log('Seção encontrada:', sectionToUpdate); // Debugging
    
            if (sectionToUpdate) {
                // adicionando novo vídeo à seção existente
                sectionToUpdate.videos.push(novoVideo);
    
                console.log('Seção atualizada:', sectionToUpdate); // Debugging
                
                // enviando a seção atualizada de volta para a API
                const updateResponse = await fetch(`http://localhost:3000/sections/${sectionToUpdate.id}`, {
                    method: 'PUT', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sectionToUpdate),
                });
    
                if (!updateResponse.ok) {
                    throw new Error(`Erro ao atualizar seção: ${updateResponse.status}`);
                }
                
                // atualizando o estado local
                setListaVideos((prevSections) => {
                    return prevSections.map((sec) => {
                        if (sec.section === section) {
                            return {
                                ...sec,
                                videos: [...sec.videos, novoVideo], // adicionando novo vídeo a seção existente
                            };
                        }
                        return sec;
                    })
                });
    
                setTitle('');
                setSection('');
                setThumbnail('');
                setUrl('');
                setDescricao('');
            } else {
                console.error('Seção não encontrada');
            }
        } catch (error) {
            console.error('Erro ao adicionar vídeo:', error);
        }
    };
    
    const handleClear = (event) => {
        event.preventDefault();
        // Limpa os valores dos campos
        setTitle('');
        setSection('');
        setThumbnail('');
        setUrl('');
        setDescricao('');
    };

    return (
        <>
            <Formulario onSubmit={handleSubmit}>
                <Label className="titulo">Título</Label>
                <CampoTexto type="text"
                    id="titulo" name="title"
                    value={title}
                    placeholder='Digite o título do vídeo'
                    onChange={(e) => setTitle(e.target.value)}
                    required />

                <ListaSuspensa
                    id="categoria"
                    name="section"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    required />

                <Label className="imagem">Imagem</Label>
                <CampoTexto
                    type="url"
                    id="imagem"
                    name="thumbnail"
                    value={thumbnail}
                    placeholder='Digite o link da imagem'
                    onChange={(e) => setThumbnail(e.target.value)}
                    required />

                <Label className="video">Vídeo</Label>
                <CampoTexto
                    type="url"
                    id="url"
                    name="url"
                    value={url}
                    placeholder='Digite o link do vídeo'
                    onChange={(e) => setUrl(e.target.value)}
                    required />

                <Label className="descricao">Descrição</Label>
                <AreaDeTexto
                    id="descricao"
                    name="descricao"
                    value={descricao}
                    placeholder='Sobre o quê é esse vídeo?'
                    onChange={(e) => setDescricao(e.target.value)}
                    required />

                <ConteinerBotao>
                    <Botao type="submit" aria-label="Guardar informações">
                        Guardar
                    </Botao>
                    <Botao type="button" aria-label="Limpar formulário" onClick={(event) => handleClear(event)}>
                        Limpar
                    </Botao>
                </ConteinerBotao>

            </Formulario>

        </>
    )
}