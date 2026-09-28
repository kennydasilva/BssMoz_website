import { useLanguage } from "../../state/LanguageContext";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className={`container ${styles.main}`}>
        <div>
          <div className={styles.brandRow}>
            <img className={styles.logo} src="/images/bss-logo.png" alt="BSS" />
            <span className={styles.wordmark}>Better Steel Solutions, Lda</span>
          </div>
          <p className={styles.tagline}>{t.rodapeTexto}</p>
        </div>
        <div>
          <div className={styles.label}>{t.contactoLabel}</div>
          <div className={styles.links}>
            <a href="tel:+258848038846" className={styles.link}>
              +258 84 803 8846
            </a>
            <a
              href="https://wa.me/258848038846"
              target="_blank"
              rel="noopener"
              className={styles.link}
            >
              WhatsApp · +258 84 803 8846
            </a>
            <a href="tel:+258848029476" className={styles.link}>
              +258 84 802 9476 ({t.alternativo})
            </a>
            <a href="mailto:commercial@bssmoz.com" className={styles.link}>
              commercial@bssmoz.com
            </a>
            <a href="mailto:stefane.macie@bssmoz.com" className={styles.link}>
              stefane.macie@bssmoz.com
            </a>
            <a
              href="/catalogo/BSS_CATALOGUE.pdf"
              target="_blank"
              rel="noopener"
              className={styles.link}
            >
              {t.catalogoPdf}
            </a>
          </div>
        </div>
        <div>
          <div className={styles.label}>{t.endereco}</div>
          <div className={styles.address}>
            Av. da Namaacha, n.º 25
            <br />
            Prolongamento do Km 16
            <br />
            Matola Rio, Boane
          </div>
          <div className={styles.horario}>
            <strong>{t.horarioLabel}:</strong> {t.horario.join(" · ")}
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomRow}`}>
          <span className={styles.copyright}>© 2026 BSS</span>
          <a
            href="https://www.facebook.com/bettersteelsolutions"
            target="_blank"
            rel="noopener"
            className={styles.facebook}
          >
            Facebook
          </a>
          <span className={styles.signature}>{t.assinatura}</span>
        </div>
      </div>
    </footer>
  );
}
