import { useLanguage } from "../../state/LanguageContext";
import styles from "./Services.module.css";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="servicos" className={styles.section}>
      <div className={`container ${styles.wrap}`}>
        <div>
          <div className="eyebrow">{t.servicosLabel}</div>
          <h2 className={styles.title}>{t.servicosTitulo}</h2>
          <p className={styles.text}>{t.servicosTexto}</p>
          <div className={styles.imageWrap}>
            <img className={styles.image} src="/images/servicos-armazem.jpg" alt="Armazém de tubos e perfis de aço" />
          </div>
        </div>
        <div>
          <div className={styles.list}>
            {t.servicos.map((s) => (
              <div key={s.n} className={styles.item}>
                <span className={styles.itemNum}>{s.n}</span>
                <span className={styles.itemName}>{s.nome}</span>
                <span className={styles.itemDesc}>{s.desc}</span>
              </div>
            ))}
          </div>
          <div className={styles.stepsBlock}>
            <div className={styles.stepsLabel}>{t.comoFunciona}</div>
            <div className={styles.steps}>
              {t.passos.map((p) => (
                <div key={p.n} className={styles.step}>
                  <div className={styles.stepNum}>{p.n}</div>
                  <div className={styles.stepTitle}>{p.t}</div>
                  <div className={styles.stepDesc}>{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
