import { useLanguage } from "../../state/LanguageContext";
import type { Lang } from "../../types";
import styles from "./Header.module.css";

const LANGS: Lang[] = ["pt", "en"];

export function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a href="#topo" className={styles.logoLink}>
          <img className={styles.logo} src="/images/bss-logo.png" alt="BSS - Better Steel Solutions" />
        </a>
        <nav className={styles.nav}>
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
        <span className={styles.langSwitch}>
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              className={`${styles.langButton} ${l === lang ? styles.langButtonActive : ""}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </span>
        <a href="mailto:commercial@bssmoz.com" className={styles.cta}>
          {t.pedirPreco} →
        </a>
      </div>
    </header>
  );
}
