import styles from './Home.module.css';

export default function Home({ titulo }) {
    return (
        <>
            <main className={styles.containerVideos}>
                <section className={styles.frontend}>
                    <h2>{titulo}</h2>
                    {/* <ul>
                        {videos.map((video, index) => {
                            return (
                                <li key={index}>
                                    <img src={video.imagem} alt={video.titulo} />
                                    <h3>{video.titulo}</h3>
                                </li>
                            )
                        }
                        )}
                    </ul> */}
                </section>
            </main>
        </>
    )
}