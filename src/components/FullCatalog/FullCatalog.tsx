import { useMemo } from "react";
import { FAMILIES, MATERIALS, PRODUCTS } from "../../data/catalog";
import { useLanguage } from "../../state/LanguageContext";
import { useCatalogFilter } from "../../state/CatalogFilterContext";
import type { FamilyFilter, MaterialFilter } from "../../state/CatalogFilterContext";
import styles from "./FullCatalog.module.css";

export function FullCatalog() {
  const { lang, t } = useLanguage();
  const { familyFilter, materialFilter, setFamilyFilter, setMaterialFilter } = useCatalogFilter();

  const visible = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          (familyFilter === "todos" || p.family === familyFilter) &&
          (materialFilter === "todos" || p.materials.includes(materialFilter)),
      ),
    [familyFilter, materialFilter],
  );

  return (
    <section id="completo" className={styles.section}>
      <div className={`container ${styles.wrap}`}>
        <div className={styles.head}>
          <div>
            <div className="eyebrow">{t.catalogoCompleto}</div>
            <h2 className={styles.title}>{t.catalogoTitulo}</h2>
            <p className={styles.text}>{t.catalogoTexto}</p>
          </div>
          <div className={styles.filters}>
            <div>
              <div className={styles.filterLabel}>{t.filtrarFamilia}</div>
              <div className={styles.chips}>
                <Chip active={familyFilter === "todos"} label={t.todos} onClick={() => setFamilyFilter("todos")} />
                {FAMILIES.map((f) => (
                  <Chip
                    key={f.id}
                    active={familyFilter === f.id}
                    label={f.name[lang]}
                    onClick={() => setFamilyFilter(f.id as FamilyFilter)}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className={styles.filterLabel}>{t.filtrarMaterial}</div>
              <div className={styles.chips}>
                <Chip active={materialFilter === "todos"} label={t.todos} onClick={() => setMaterialFilter("todos")} />
                {MATERIALS.map((m) => (
                  <Chip
                    key={m.id}
                    active={materialFilter === m.id}
                    label={m.name[lang]}
                    onClick={() => setMaterialFilter(m.id as MaterialFilter)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.count}>{t.resultados(visible.length)}</div>

        <div className={styles.grid}>
          {visible.map((product) => {
            const family = FAMILIES.find((f) => f.id === product.family);
            return (
              <article key={product.id} className={styles.card}>
                <div className={styles.cardHead}>
                  <h3 className={styles.cardName}>{product.name[lang]}</h3>
                  <span className={styles.cardFamily}>{family?.name[lang]}</span>
                </div>
                <div className={styles.specs}>
                  {product.specs[lang].map(([k, v]) => (
                    <div key={k} className={styles.spec}>
                      <span className={styles.specKey}>{k}</span>
                      <span className={styles.specValue}>{v}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`mailto:commercial@bssmoz.com?subject=${encodeURIComponent(
                    t.pedidoProdutoAssunto(product.name[lang]),
                  )}&body=${encodeURIComponent(t.pedidoProdutoCorpo(product.name[lang]))}`}
                  className={styles.cardCta}
                >
                  {t.pedirMedida} →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Chip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.chip} ${active ? styles.chipActive : ""}`}
    >
      {label}
    </button>
  );
}
