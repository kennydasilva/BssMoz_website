import { useState } from "react";
import { useLanguage } from "../../state/LanguageContext";
import styles from "./Faq.module.css";

export function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={`container ${styles.wrap}`}>
        <div>
          <div className="eyebrow">FAQ</div>
          <h2 className={styles.title}>{t.faqTitulo}</h2>
        </div>
        <div>
          {t.faq.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question} className={styles.item}>
                <button
                  type="button"
                  className={`${styles.question} ${open ? styles.questionOpen : ""}`}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.questionSign}>{open ? "−" : "+"}</span>
                </button>
                {open && <p className={styles.answer}>{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
