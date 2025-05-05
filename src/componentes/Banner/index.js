import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Yan Carlo, acadêmico de Sistemas de Informação. Aqui compartilho vários conhecimentos, espero que aprenda algo novo. 
                </p>

                <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de Yan Carlo"
                />
                </div>
            </div>
        </div>
    )
}
