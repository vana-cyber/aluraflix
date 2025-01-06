import Videos from 'components/Videos';
import styles from './Home.module.css';

export default function Home() {


    return (
        <>
            <main className={styles.containerVideos}>
                <section className={styles.frontend}>
                  <Videos />
                </section>
            </main>
        </>
    )
}