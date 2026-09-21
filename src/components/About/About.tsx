import { useLanguage } from "../../state/LanguageContext";
import styles from "./About.module.css";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className={styles.section}>
      <div className={`container ${styles.wrap}`}>
        <div>
          <div className="eyebrow">{t.sobreLabel}</div>
          <h2 className={styles.title}>{t.sobreTitulo}</h2>
          {t.sobreParas.map((p) => (
            <p key={p} className={styles.para}>
              {p}
            </p>
          ))}
        </div>
        <div className={styles.side}>
          <div className={styles.imageWrap}>
            <img className={styles.image} src="/images/sobre-zbar.jpg" alt="Barra Z em alumínio" />
          </div>
          <div>
            <div className={styles.valuesLabel}>{t.valoresLabel}</div>
            {t.valores.map((v) => (
              <div key={v} className={styles.value}>
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
