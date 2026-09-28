import { useState } from "react";
import { useLanguage } from "../../state/LanguageContext";
import type { Lang } from "../../types";
import styles from "./Header.module.css";

const LANGS: Lang[] = ["en", "pt"];

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a href="#topo" className={styles.logoLink} onClick={closeMenu}>
          <img className={styles.logo} src="/images/bss-logo.png" alt="BSS" />
          <span className={styles.wordmark}>Better Steel Solutions, Lda</span>
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.menuIcon} />
        </button>

        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
          <nav className={styles.nav}>
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.navLink}
                onClick={closeMenu}
              >
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
          <a
            href="mailto:commercial@bssmoz.com"
            className={styles.cta}
            onClick={closeMenu}
          >
            {t.pedirPreco} →
          </a>
        </div>
      </div>
    </header>
  );
}
