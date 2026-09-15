import type { FaqItem, Lang } from "../types";

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  k: string;
  v: string;
}

export interface Service {
  n: string;
  nome: string;
  desc: string;
}

export interface Step {
  n: string;
  t: string;
  d: string;
}

export interface Translation {
  pedirPreco: string;
  local: string;
  h1: string;
  sub: string;
  verCatalogo: string;
  stats: Stat[];
  catalogo: string;
  familiasTitulo: string;
  consultar: string;
  verOpcoes: string;
  catalogoCompleto: string;
  catalogoTitulo: string;
  catalogoTexto: string;
  filtrarFamilia: string;
  filtrarMaterial: string;
  todos: string;
  pedirMedida: string;
  servicosLabel: string;
  servicosTitulo: string;
  servicosTexto: string;
  comoFunciona: string;
  projetosLabel: string;
  projetosTitulo: string;
  projetosTexto: string;
  sobreLabel: string;
  sobreTitulo: string;
  sobreParas: string[];
  valoresLabel: string;
  valores: string[];
  faqTitulo: string;
  ctaTitulo: string;
  ctaTexto: string;
  email: string;
  cotacaoLabel: string;
  cotacaoTitulo: string;
  contactoLabel: string;
  contactoTexto: string;
  campoNome: string;
  campoContacto: string;
  campoFamilia: string;
  campoDetalhe: string;
  phNome: string;
  phDetalhe: string;
  enviar: string;
  enviadoMsg: string;
  endereco: string;
  catalogoPdf: string;
  rodapeTexto: string;
  assinatura: string;
  servicos: Service[];
  passos: Step[];
  faq: FaqItem[];
  nav: NavItem[];
  resultados: (n: number) => string;
}

export const TRANSLATIONS: Record<Lang, Translation> = {
  pt: {
    pedirPreco: "Pedir preço",
    local: "Matola Rio · Boane, Moçambique",
    h1: "Metal cortado à medida, pronto para a obra.",
    sub: "Perfis estruturais, chapas, tubos, corrimãos e grelhas em aço, inox, galvanizado, alumínio, latão, cobre, Hardox e fibra de vidro.",
    verCatalogo: "Ver catálogo",
    stats: [
      { k: "Corte", v: "Laser e plasma" },
      { k: "Medida", v: "Qualquer comprimento" },
      { k: "Gama", v: "Metais e compósitos" },
      { k: "Local", v: "Armazém em Boane" },
    ],
    catalogo: "Catálogo",
    familiasTitulo: "Quatro famílias, um fornecedor.",
    consultar: "Consultar disponibilidade",
    verOpcoes: "Ver opções",
    catalogoCompleto: "Catálogo completo",
    catalogoTitulo: "Todos os produtos, filtráveis.",
    catalogoTexto:
      "Filtre por família ou por material. Qualquer comprimento pode ser encomendado, incluindo decimais, por exemplo 5,26 m. Medidas exatas e stock confirmam-se por telefone ou e-mail.",
    filtrarFamilia: "Família",
    filtrarMaterial: "Material",
    todos: "Todos",
    pedirMedida: "Pedir medida e preço",
    servicosLabel: "Serviços",
    servicosTitulo: "Processamos o material ao seu tamanho.",
    servicosTexto: "O material sai do armazém cortado e preparado, para chegar à obra pronto a montar.",
    comoFunciona: "Como funciona um pedido",
    projetosLabel: "Projetos",
    projetosTitulo: "Material nosso, obras dos nossos clientes.",
    projetosTexto: "Uma amostra dos materiais e processos que preparamos para os projetos dos nossos clientes.",
    sobreLabel: "Sobre nós",
    sobreTitulo: "Uma empresa jovem no mercado do aço em Moçambique.",
    sobreParas: [
      "A Better Steel Solutions (BSS) fornece produtos de aço manufaturado com padrões internacionais, numa gama larga de materiais para responder à maioria dos requisitos dos nossos clientes.",
      "A missão é prestar um serviço de alta qualidade como fornecedor de metais, com forte compromisso com rapidez e eficiência. O conhecimento técnico da equipa comercial permite localizar material difícil de obter.",
      "Reunimos num só fornecedor todos os requisitos de metal do cliente, com preços competitivos e capacidade de corte à medida e chanfro de arestas.",
    ],
    valoresLabel: "Valores",
    valores: ["Excelência", "Inovação", "Zero acidentes", "Paixão", "Integridade"],
    faqTitulo: "Perguntas frequentes.",
    ctaTitulo: "Diga-nos a medida.",
    ctaTexto: "Respondemos com disponibilidade e preço para o seu projeto.",
    email: "Enviar e-mail",
    cotacaoLabel: "Cotação",
    cotacaoTitulo: "Deixe o pedido com as medidas.",
    contactoLabel: "Contactos",
    contactoTexto: "Para preço e disponibilidade, ligue ou envie e-mail. Se preferir, deixe o pedido no formulário.",
    campoNome: "Nome ou empresa",
    campoContacto: "E-mail",
    campoFamilia: "Família de produto",
    campoDetalhe: "Medidas, material e quantidade",
    phNome: "Ex: Construções Beira, Lda",
    phDetalhe: "Ex: 12 tubos quadrados 50x50x3 mm, galvanizado, 5,26 m cada",
    enviar: "Enviar pedido",
    enviadoMsg: "O seu e-mail deve abrir com o pedido preenchido. Se não abrir, escreva para commercial@bssmoz.com.",
    endereco: "Endereço",
    catalogoPdf: "Catálogo PDF",
    rodapeTexto: "Fornecedor de metais e materiais de construção em Moçambique.",
    assinatura: "Aço · Precisão · Confiança",
    servicos: [
      { n: "01", nome: "Corte laser", desc: "Precisão em chapa e placa" },
      { n: "02", nome: "Corte plasma", desc: "Para maiores espessuras" },
      { n: "03", nome: "Corte size-to-size", desc: "Comprimento exato do projeto" },
      { n: "04", nome: "Chanfro de arestas", desc: "Preparação conforme o pedido" },
      { n: "05", nome: "Procura de material", desc: "Localizamos materiais específicos" },
    ],
    passos: [
      { n: "01", t: "Envia o pedido", d: "Produto, material, medidas e quantidade." },
      { n: "02", t: "Confirmamos", d: "Disponibilidade e trabalho de corte." },
      { n: "03", t: "Cotação", d: "Preço e prazo por telefone ou e-mail." },
      { n: "04", t: "Preparação", d: "Cortamos e acabamos antes da entrega." },
    ],
    faq: [
      {
        question: "Vendem ao metro ou só em barras inteiras?",
        answer: "Vendemos no comprimento que precisar, incluindo decimais, por exemplo 5,26 m. Cortamos size-to-size antes da entrega.",
      },
      {
        question: "Que materiais têm disponíveis?",
        answer: "Aço-carbono, inox, galvanizado, alumínio, latão, cobre, Hardox, Zintec, acetal e fibra de vidro. Disponibilidade por medida confirma-se por telefone.",
      },
      {
        question: "Fazem corte laser e plasma?",
        answer: "Sim. Corte laser para precisão em chapa e placa, plasma para espessuras maiores e formas recortadas. Também chanframos arestas.",
      },
      {
        question: "Como peço um preço?",
        answer: "Ligue para +258 84 802 9476 ou envie e-mail para commercial@bssmoz.com com o produto, material, medidas e quantidade. Também pode usar o formulário desta página.",
      },
      {
        question: "Onde fica o armazém?",
        answer: "Av. da Namaacha, Residência n.º 25, Prolongamento do Km 16, Matola Rio, Boane.",
      },
      {
        question: "Conseguem material que não está no catálogo?",
        answer: "Muitas vezes sim. A equipa comercial tem experiência a localizar material difícil de obter. Descreva o que precisa.",
      },
    ],
    nav: [
      { label: "Catálogo", href: "#catalogo" },
      { label: "Serviços", href: "#servicos" },
      { label: "Projetos", href: "#projetos" },
      { label: "Sobre", href: "#sobre" },
      { label: "Contacto", href: "#contacto" },
    ],
    resultados: (n) => n + (n === 1 ? " produto" : " produtos"),
  },
  en: {
    pedirPreco: "Get a price",
    local: "Matola Rio · Boane, Mozambique",
    h1: "Metal cut to size, ready for site.",
    sub: "Structural profiles, sheet, tube, handrail and grating in steel, stainless, galvanised, aluminium, brass, copper, Hardox and fibreglass.",
    verCatalogo: "View catalogue",
    stats: [
      { k: "Cutting", v: "Laser and plasma" },
      { k: "Size", v: "Any length" },
      { k: "Range", v: "Metals and composites" },
      { k: "Local", v: "Warehouse in Boane" },
    ],
    catalogo: "Catalogue",
    familiasTitulo: "Four families, one supplier.",
    consultar: "Check availability",
    verOpcoes: "View options",
    catalogoCompleto: "Full catalogue",
    catalogoTitulo: "Every product, filterable.",
    catalogoTexto:
      "Filter by family or by material. Any length can be ordered, decimals included, for example 5.26 m. Exact sizes and stock are confirmed by phone or e-mail.",
    filtrarFamilia: "Family",
    filtrarMaterial: "Material",
    todos: "All",
    pedirMedida: "Ask size and price",
    servicosLabel: "Services",
    servicosTitulo: "We process material to your size.",
    servicosTexto: "Material leaves the warehouse cut and prepared, so it reaches site ready to assemble.",
    comoFunciona: "How an order works",
    projetosLabel: "Projects",
    projetosTitulo: "Our material, our clients' work.",
    projetosTexto: "A sample of the materials and processes we prepare for our clients' projects.",
    sobreLabel: "About us",
    sobreTitulo: "A young company in Mozambique's steel market.",
    sobreParas: [
      "Better Steel Solutions (BSS) supplies manufactured steel products to international standards, across a wide range of materials to meet most of our clients' requirements.",
      "Our mission is to deliver high-quality service as a metal supplier, with a strong commitment to speed and efficiency. Our commercial team's technical knowledge lets us source hard-to-find material.",
      "We bring all of a client's metal requirements to a single supplier, with competitive pricing and in-house cut-to-size and edge bevelling.",
    ],
    valoresLabel: "Values",
    valores: ["Excellence", "Innovation", "Zero harm", "Passion", "Integrity"],
    faqTitulo: "Frequently asked questions.",
    ctaTitulo: "Tell us the size.",
    ctaTexto: "We reply with availability and a price for your project.",
    email: "Send e-mail",
    cotacaoLabel: "Quote",
    cotacaoTitulo: "Leave your request with the sizes.",
    contactoLabel: "Contacts",
    contactoTexto: "For price and availability, call or e-mail. If you prefer, leave your request in the form.",
    campoNome: "Name or company",
    campoContacto: "E-mail",
    campoFamilia: "Product family",
    campoDetalhe: "Sizes, material and quantity",
    phNome: "e.g. Beira Construction Ltd",
    phDetalhe: "e.g. 12 square tubes 50x50x3 mm, galvanised, 5.26 m each",
    enviar: "Send request",
    enviadoMsg: "Your e-mail app should open with the request filled in. If it doesn't, write to commercial@bssmoz.com.",
    endereco: "Address",
    catalogoPdf: "Catalogue PDF",
    rodapeTexto: "Supplier of metals and construction materials in Mozambique.",
    assinatura: "Steel · Precision · Trust",
    servicos: [
      { n: "01", nome: "Laser cutting", desc: "Precision in sheet and plate" },
      { n: "02", nome: "Plasma cutting", desc: "For heavier thicknesses" },
      { n: "03", nome: "Size-to-size cutting", desc: "The project's exact length" },
      { n: "04", nome: "Edge bevelling", desc: "Preparation as requested" },
      { n: "05", nome: "Material sourcing", desc: "We locate specific materials" },
    ],
    passos: [
      { n: "01", t: "Send the request", d: "Product, material, sizes and quantity." },
      { n: "02", t: "We confirm", d: "Availability and cutting work." },
      { n: "03", t: "Quote", d: "Price and lead time by phone or e-mail." },
      { n: "04", t: "Preparation", d: "We cut and finish before delivery." },
    ],
    faq: [
      {
        question: "Do you sell by the metre or only full lengths?",
        answer: "We sell the length you need, decimals included, for example 5.26 m. We cut size-to-size before delivery.",
      },
      {
        question: "Which materials do you carry?",
        answer: "Carbon steel, stainless, galvanised, aluminium, brass, copper, Hardox, Zintec, acetal and fibreglass. Availability per size is confirmed by phone.",
      },
      {
        question: "Do you do laser and plasma cutting?",
        answer: "Yes. Laser for precision in sheet and plate, plasma for heavier thicknesses and profiled shapes. We also bevel edges.",
      },
      {
        question: "How do I get a price?",
        answer: "Call +258 84 802 9476 or e-mail commercial@bssmoz.com with the product, material, sizes and quantity. You can also use the form on this page.",
      },
      {
        question: "Where is the warehouse?",
        answer: "Av. da Namaacha, Residence no. 25, Km 16 extension, Matola Rio, Boane.",
      },
      {
        question: "Can you source material not in the catalogue?",
        answer: "Often yes. Our commercial team is experienced at locating hard-to-find material. Describe what you need.",
      },
    ],
    nav: [
      { label: "Catalogue", href: "#catalogo" },
      { label: "Services", href: "#servicos" },
      { label: "Projects", href: "#projetos" },
      { label: "About", href: "#sobre" },
      { label: "Contact", href: "#contacto" },
    ],
    resultados: (n) => n + (n === 1 ? " product" : " products"),
  },
};
