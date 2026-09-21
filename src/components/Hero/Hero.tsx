import { useLanguage } from "../../state/LanguageContext";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="topo" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.meta}>
            <span className={styles.metaLocal}>{t.local}</span>
          </div>
          <h1 className={styles.title}>{t.h1}</h1>
          <p className={styles.sub}>{t.sub}</p>
          <div className={styles.actions}>
            <a href="mailto:commercial@bssmoz.com" className={styles.primary}>
              {t.pedirPreco} →
            </a>
            <a href="#catalogo" className={styles.secondary}>
              {t.verCatalogo}
            </a>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <img className={styles.image} src="/images/hero-tubo-inox.jpg" alt="Tubo quadrado em inox" />
        </div>
      </div>
      <div className={`container ${styles.statsWrap}`}>
        <div className={styles.stats}>
          {t.stats.map((s) => (
            <div key={s.k} className={styles.stat}>
              <div className={styles.statKey}>{s.k}</div>
              <div className={styles.statValue}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
