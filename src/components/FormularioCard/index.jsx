import styles from './FormularioCard.module.css';
import Botao from '../Botao';

export default function FormularioCard() {
    return (
        <form>
            <label className={styles.titulo}>Título</label>
            <input type="text" id="titulo" name="titulo" placeholder='Digite o título do vídeo' required />

            <label className={styles.categoria}>Categoria</label>
            <input type="url" id="url" name="url" required />

            <label className={styles.imagem}>Imagem</label>
            <input type="url" id="url" name="url" placeholder='Digite o link da imagem' required />

            <label className={styles.video}>Vídeo</label>
            <input type="url" id="url" name="url" placeholder='Digite o link do vídeo' required />

            <label className={styles.descricao}>Descrição</label>
            <textarea id="descricao" name="descricao" placeholder='Sobre o quê é esse vídeo?' required />

            <Botao>
                Guardar
            </Botao>
            <Botao>
                Limpar
            </Botao>
        </form>
    )
}