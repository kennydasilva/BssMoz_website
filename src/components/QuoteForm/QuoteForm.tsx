import { useState } from "react";
import type { FormEvent } from "react";
import { FAMILIES } from "../../data/catalog";
import { useLanguage } from "../../state/LanguageContext";
import styles from "./QuoteForm.module.css";

interface FormState {
  nome: string;
  contacto: string;
  familia: string;
  detalhe: string;
}

export function QuoteForm() {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState<FormState>({ nome: "", contacto: "", familia: "", detalhe: "" });
  const [enviado, setEnviado] = useState(false);

  const familia = form.familia || FAMILIES[0].name[lang];

  const setField = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((s) => ({ ...s, [key]: e.target.value }));
    setEnviado(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
  };

  const contacts = [
    { k: lang === "pt" ? "Telefone" : "Phone", v: "+258 84 802 9476" },
    { k: lang === "pt" ? "Telefone" : "Phone", v: "+258 84 803 8846" },
    { k: "E-mail", v: "commercial@bssmoz.com" },
    { k: t.endereco, v: "Av. da Namaacha n.º 25, Km 16, Matola Rio, Boane" },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.wrap}`}>
        <div>
          <div className="eyebrow">{t.cotacaoLabel}</div>
          <h2 className={styles.title}>{t.cotacaoTitulo}</h2>
          <p className={styles.text}>{t.contactoTexto}</p>
          <div>
            {contacts.map((c, i) => (
              <div key={c.k + i} className={styles.contact}>
                <div className={styles.contactKey}>{c.k}</div>
                <div className={styles.contactValue}>{c.v}</div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.field}>
            {t.campoNome}
            <input
              className={styles.input}
              value={form.nome}
              onChange={setField("nome")}
              placeholder={t.phNome}
            />
          </label>
          <label className={styles.field}>
            {t.campoContacto}
            <input
              className={styles.input}
              value={form.contacto}
              onChange={setField("contacto")}
              placeholder="+258 ..."
            />
          </label>
          <label className={styles.field}>
            {t.campoFamilia}
            <select className={styles.input} value={familia} onChange={setField("familia")}>
              {FAMILIES.map((f) => (
                <option key={f.id} value={f.name[lang]}>
                  {f.name[lang]}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.field}>
            {t.campoDetalhe}
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              value={form.detalhe}
              onChange={setField("detalhe")}
              rows={5}
              placeholder={t.phDetalhe}
            />
          </label>
          <button type="submit" className={styles.submit}>
            {t.enviar} →
          </button>
          {enviado && <div className={styles.confirmation}>{t.enviadoMsg}</div>}
        </form>
      </div>
    </section>
  );
}
