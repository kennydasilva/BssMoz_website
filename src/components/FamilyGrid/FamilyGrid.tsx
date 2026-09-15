import { FAMILIES } from "../../data/catalog";
import { useLanguage } from "../../state/LanguageContext";
import { useCatalogFilter } from "../../state/CatalogFilterContext";
import styles from "./FamilyGrid.module.css";

export function FamilyGrid() {
  const { lang, t } = useLanguage();
  const { openFamily } = useCatalogFilter();

  return (
    <section id="catalogo" className={styles.section}>
      <div className={`container ${styles.wrap}`}>
        <div className="eyebrow">{t.catalogo}</div>
        <div className={styles.head}>
          <h2 className={styles.title}>{t.familiasTitulo}</h2>
          <a href="#completo" className={styles.consult}>
            {t.consultar} →
          </a>
        </div>
        <div className={styles.grid}>
          {FAMILIES.map((family) => (
            <article key={family.id} className={styles.card}>
              <div className={styles.photoWrap}>
                <img className={styles.photo} src={family.photo} alt={family.name[lang]} />
                <span className={styles.tag}>{family.tag[lang]}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>{family.name[lang]}</h3>
                <p className={styles.summary}>{family.summary[lang]}</p>
                <button type="button" className={styles.open} onClick={() => openFamily(family.id)}>
                  {t.verOpcoes}
                  <span className={styles.openArrow}>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
