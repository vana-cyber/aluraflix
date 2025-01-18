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

    return (
        <VideoContext.Provider value={{ listaVideos, setListaVideos }}>
            {children}
        </VideoContext.Provider>
    );
};