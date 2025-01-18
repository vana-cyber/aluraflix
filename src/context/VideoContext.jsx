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
      console.log("Deletando vídeo com ID:", id);
      setListaVideos(prevVideos => {
          return prevVideos.map(secao => {
              const novosVideos = secao.videos.filter(video => video.id !== id);
              return {
                  ...secao,
                  videos: novosVideos
              };
          }).filter(secao => secao.videos.length > 0); 
      });
  };

    return (
        <VideoContext.Provider value={{ listaVideos, setListaVideos, deletaVideo }}>
            {children}
        </VideoContext.Provider>
    );
};