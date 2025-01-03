
import FormularioCard from '../../components/FormularioCard';
import styles from './NovoVideo.module.css';

export default function NovoVideo() {
    return (
        <>
            <h1 className={styles.titulo}>NOVO VÍDEO</h1>
            <p className={styles.paragrafo}>Complete o formulário para criar um novo card de vídeo</p>
            <FormularioCard />
        </>
    )
}