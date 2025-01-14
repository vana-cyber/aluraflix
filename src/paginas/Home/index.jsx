import Videos from 'components/Videos';
import styles from './Home.module.css';
import React, { useEffect, useState } from 'react';

export default function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await fetch('http://localhost:3000/sections');
            const data = await response.json();
            setVideos(data);
        };

        fetchVideos();
    }, []);


    return (
        <>
            <main className={styles.containerVideos}>
                <section className={styles.frontend}>
                    <Videos videos={videos} section="Todos os Vídeos" />
                </section>
            </main>
        </>
    )
}