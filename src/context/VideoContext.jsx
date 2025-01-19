import React, { createContext, useState, useEffect } from 'react';

// Criação do contexto
export const VideoContext = createContext();

// Provedor do contexto
export const VideoProvider = ({ children }) => {
    const [listaVideos, setListaVideos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/sections')
            .then(response => response.json())
            .then(data => setListaVideos(data))
            .catch(error => console.error('Erro ao buscar vídeos:', error));
    }, []);

    const deletaVideo = (id) => {
        console.log("ID do vídeo:", id);
        console.log("Deletando vídeo com ID:", id);
    
        // Encontrar a seção que contém o vídeo a ser deletado
        const secaoComVideo = listaVideos.find(secao =>
            secao.videos.some(video => video.id === id)
        );
    
        if (!secaoComVideo) {
            console.error("Vídeo não encontrado.");
            return;
        }
    
        // ID da seção
        const secaoId = secaoComVideo.id;
        console.log("ID da seção:", secaoId);
    
        // Obter a seção atual para atualizar
        fetch(`http://localhost:3000/sections/${secaoId}`)
            .then(response => response.json())
            .then(secao => {
                // Filtra os vídeos para remover o vídeo que você deseja deletar
                const novosVideos = secao.videos.filter(video => video.id !== id);
                
                // Atualiza a seção com a nova lista de vídeos
                fetch(`http://localhost:3000/sections/${secaoId}`, {
                    method: 'PUT', // ou 'PATCH'
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ...secao, videos: novosVideos })
                })
                .then(response => {
                    if (response.ok) {
                        console.log("Vídeo deletado com sucesso!");
                        // Atualiza o estado local após a deleção
                        setListaVideos(prevVideos => {
                            return prevVideos.map(secao => {
                                if (secao.id === secaoId) {
                                    return {
                                        ...secao,
                                        videos: novosVideos
                                    };
                                }
                                return secao;
                            }).filter(secao => secao.videos.length > 0);
                        });
                    } else {
                        console.error('Erro ao atualizar a seção:', response.statusText);
                    }
                });
            })
            .catch(error => console.error('Erro ao fazer a requisição:', error));
    };

    return (
        <VideoContext.Provider value={{ listaVideos, setListaVideos, deletaVideo }}>
            {children}
        </VideoContext.Provider>
    );
};