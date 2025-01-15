import React, { createContext, useState } from 'react';

// Criação do contexto
export const VideoContext = createContext();

// Provedor do contexto
export const VideoProvider = ({ children }) => {
    const [listaVideos, setListaVideos] = useState([]);

    return (
        <VideoContext.Provider value={{ listaVideos, setListaVideos }}>
            {children}
        </VideoContext.Provider>
    );
};