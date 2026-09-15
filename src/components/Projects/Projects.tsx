import { useLanguage } from "../../state/LanguageContext";
import styles from "./Projects.module.css";

const PROJECT_PHOTOS = [
  "/images/armazem.png",
  "/images/corte.png",
  "/images/estrutural.png",
  "/images/grelhas.png",
  "/images/chapas.png",
  "/images/tubos.png",
];

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projetos" className={styles.section}>
      <div className={`container ${styles.wrap}`}>
        <div className="eyebrow">{t.projetosLabel}</div>
        <div className={styles.head}>
          <h2 className={styles.title}>{t.projetosTitulo}</h2>
          <p className={styles.text}>{t.projetosTexto}</p>
        </div>
        <div className={styles.grid}>
          {PROJECT_PHOTOS.map((photo, i) => (
            <figure key={photo + i} className={styles.figure}>
              <div className={styles.imageWrap}>
                <img className={styles.image} src={photo} alt={t.projetoPlaceholder} />
              </div>
              <figcaption className={styles.caption}>{t.projetoLegenda}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
