import { useLanguage } from "../../state/LanguageContext";
import styles from "./CtaBanner.module.css";

export function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className={styles.section}>
      <div className={`container ${styles.wrap}`}>
        <div>
          <h2 className={styles.title}>{t.ctaTitulo}</h2>
          <p className={styles.text}>{t.ctaTexto}</p>
        </div>
        <div className={styles.actions}>
          <a href="tel:+258848029476" className={styles.phone}>
            +258 84 802 9476
          </a>
          <a href="mailto:commercial@bssmoz.com" className={styles.email}>
            {t.email}
          </a>
        </div>
      </div>
    </section>
  );
}
