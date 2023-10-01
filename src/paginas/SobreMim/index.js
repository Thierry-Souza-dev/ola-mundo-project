import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={StyleSheet.subtitulo}>
                Olá, eu sou o Thierry! Foto de outra pessoa*
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de outra pessoa"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, esta página que faz parte de um projeto de aprendizagem.
            </p>

            <p className={styles.paragrafo}>
                Está relacionado a uma pequena biografia da vida do criador desse projeto e pode ser alterada em um futuro caso seja necessário.

            </p>
        </PostModelo>
    )
}