import { useState } from "react";
import { PROJECT_PHOTOS } from "../../data/catalog";
import { useLanguage } from "../../state/LanguageContext";
import styles from "./Projects.module.css";

export function Projects() {
  const { lang, t } = useLanguage();
  const [missing, setMissing] = useState<Record<string, boolean>>({});

  return (
    <section id="projetos" className={styles.section}>
      <div className={`container ${styles.wrap}`}>
        <div className="eyebrow">{t.projetosLabel}</div>
        <div className={styles.head}>
          <h2 className={styles.title}>{t.projetosTitulo}</h2>
          <p className={styles.text}>{t.projetosTexto}</p>
        </div>
        <div className={styles.grid}>
          {PROJECT_PHOTOS.map((item) => (
            <figure key={item.photo} className={styles.figure}>
              <div className={styles.imageWrap}>
                {missing[item.photo] ? (
                  <div className={styles.placeholder} aria-hidden="true">
                    {lang === "pt" ? "Foto em breve" : "Photo coming soon"}
                  </div>
                ) : (
                  <img
                    className={styles.image}
                    src={item.photo}
                    alt={item.alt[lang]}
                    loading="lazy"
                    onError={() => setMissing((m) => ({ ...m, [item.photo]: true }))}
                  />
                )}
              </div>
              <figcaption className={styles.caption}>{item.caption[lang]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
