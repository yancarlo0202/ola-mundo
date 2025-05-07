import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";

import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Yan Carlo
            </h3>

            <img
                src={fotoSobreMim}
                alt='Foto de Yan Carlo'
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Meu nome é Yan Carlo e atualmente estou cursando o 5º período do bacharelado em Sistemas de Informação pela Fametro. Ao longo dessa jornada acadêmica, tenho adquirido conhecimentos teóricos e práticos importantes, que fortalecem minha base na área da tecnologia da informação. Cada semestre tem sido uma oportunidade de evoluir, entender melhor o mercado e me preparar para os desafios do mundo profissional.
            </p>
            <p className={styles.paragrafo}>
                Desde a adolescência, sempre tive um grande fascínio por tecnologia. Fui aquele tipo de jovem curioso, que adorava explorar softwares, desmontar e montar computadores e entender como as coisas funcionam por trás das telas. Esse interesse natural foi o que despertou em mim a vontade de transformar a curiosidade em profissão e seguir carreira na área de TI.
            </p>
            <p className={styles.paragrafo}>
                Com essa paixão como combustível, decidi investir seriamente nos estudos e no desenvolvimento de habilidades técnicas. Ao longo do curso, tenho me aprofundado em linguagens de programação, bancos de dados, lógica computacional e desenvolvimento de sistemas, com um foco especial na stack Java. Também venho explorando o desenvolvimento fullstack, pois acredito que essa versatilidade me tornará um profissional mais completo e preparado para diferentes desafios.
            </p>
            <p className={styles.paragrafo}>
                Estou determinado a conquistar minha primeira oportunidade na área de tecnologia. Tenho buscado constantemente participar de projetos, cursos complementares, eventos e tudo que possa me aproximar do mercado e me tornar um candidato competitivo. Sei que o início da carreira pode ser desafiador, mas estou disposto a enfrentar cada etapa com dedicação e foco.
            </p>
            <p className={styles.paragrafo}>
                Meu objetivo é construir uma carreira sólida como desenvolvedor fullstack e/ou Java developer, contribuindo com soluções tecnológicas que impactem positivamente empresas e pessoas. Acredito que, com esforço contínuo, aprendizado constante e paixão pelo que faço, posso alcançar grandes conquistas na área tech. Essa é a trilha que escolhi e estou animado para os próximos passos dessa jornada.
            </p>
        </PostModelo>
    )
}