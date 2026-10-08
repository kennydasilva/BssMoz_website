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
  pedidoProdutoAssunto: (produto: string) => string;
  pedidoProdutoCorpo: (produto: string) => string;
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
  alternativo: string;
  rodapeTexto: string;
  assinatura: string;
  horarioLabel: string;
  horario: string[];
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
    h1: "Aço e metais para a sua obra, num só fornecedor.",
    sub: "Perfis estruturais, chapas, tubos, corrimãos e grelhas em aço, inox, galvanizado, alumínio, latão, cobre, Hardox e fibra de vidro.",
    verCatalogo: "Ver catálogo",
    stats: [
      { k: "Gama", v: "Metais e compósitos" },
      { k: "Local", v: "Armazém em Boane" },
      { k: "Medida", v: "Qualquer comprimento" },
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
    pedidoProdutoAssunto: (produto) => `Pedido de medida e preço — ${produto}`,
    pedidoProdutoCorpo: (produto) =>
      `Bom dia,\n\nGostaria de pedir medida e preço para: ${produto}.\n\nMaterial:\nMedidas:\nQuantidade:\n\nObrigado.`,
    servicosLabel: "Serviços",
    servicosTitulo: "Fornecemos o material e preparamo-lo, se precisar.",
    servicosTexto: "Além do fornecimento, localizamos material específico e, quando o projeto pede, cortamos e preparamos antes da entrega.",
    comoFunciona: "Como funciona um pedido",
    projetosLabel: "Projetos",
    projetosTitulo: "Material nosso, obras dos nossos clientes.",
    projetosTexto: "Uma amostra dos materiais e processos que preparamos para os projetos dos nossos clientes.",
    sobreLabel: "Sobre nós",
    sobreTitulo: "Uma empresa jovem no mercado do aço em Moçambique.",
    sobreParas: [
      "A Better Steel Solutions (BSS) fornece produtos de aço manufaturado com padrões internacionais, numa gama larga de materiais para responder à maioria dos requisitos dos nossos clientes.",
      "A missão é prestar um serviço de alta qualidade como fornecedor de metais, com forte compromisso com rapidez e eficiência. O conhecimento técnico da equipa comercial permite localizar material difícil de obter.",
      "Reunimos num só fornecedor todos os requisitos de metal do cliente, com preços competitivos. Quando necessário, o material pode ser cortado e preparado antes da entrega.",
    ],
    valoresLabel: "Valores",
    valores: ["Excelência", "Inovação", "Zero acidentes", "Paixão", "Integridade"],
    faqTitulo: "Perguntas frequentes.",
    ctaTitulo: "Diga-nos o que precisa.",
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
    alternativo: "alternativo",
    rodapeTexto: "Fornecedor de metais e materiais de construção em Moçambique.",
    assinatura: "Aço · Precisão · Confiança",
    horarioLabel: "Horário de funcionamento",
    horario: ["Segunda a sexta-feira: 08:00 – 16:00", "Sábados, domingos e feriados: fechado"],
    servicos: [
      { n: "01", nome: "Fornecimento de metais", desc: "Perfis, chapas, tubos, corrimãos e grelhas" },
      { n: "02", nome: "Procura de material", desc: "Localizamos materiais específicos" },
      { n: "03", nome: "Corte e preparação", desc: "Laser, plasma e chanfro, a pedido" },
    ],
    passos: [
      { n: "01", t: "Envia o pedido", d: "Produto, material, medidas e quantidade." },
      { n: "02", t: "Confirmamos", d: "Disponibilidade e stock do material." },
      { n: "03", t: "Cotação", d: "Preço e prazo por telefone ou e-mail." },
      { n: "04", t: "Preparação", d: "Corte e acabamento, se necessário, antes da entrega." },
    ],
    faq: [
      {
        question: "Vendem ao metro ou só em barras inteiras?",
        answer: "Vendemos no comprimento que precisar, incluindo decimais, por exemplo 5,26 m.",
      },
      {
        question: "Que materiais têm disponíveis?",
        answer: "Aço-carbono, inox, galvanizado, alumínio, latão, cobre, Hardox, Zintec, acetal e fibra de vidro. Disponibilidade por medida confirma-se por telefone.",
      },
      {
        question: "Como peço um preço?",
        answer: "Ligue ou envie WhatsApp para +258 84 803 8846 (alternativo: +258 84 802 9476), ou envie e-mail para commercial@bssmoz.com ou stefane.macie@bssmoz.com com o produto, material, medidas e quantidade. Também pode usar o formulário desta página.",
      },
      {
        question: "Onde fica o armazém?",
        answer: "Av. da Namaacha, Residência n.º 25, Prolongamento do Km 16, Matola Rio, Boane.",
      },
      {
        question: "Conseguem material que não está no catálogo?",
        answer: "Muitas vezes sim. A equipa comercial tem experiência a localizar material difícil de obter. Descreva o que precisa.",
      },
      {
        question: "Também fazem corte?",
        answer: "Sim, como serviço complementar ao fornecimento: corte laser e plasma, e chanfro de arestas, quando o projeto pede.",
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
    h1: "Steel and metals for your project, from one supplier.",
    sub: "Structural profiles, sheet, tube, handrail and grating in steel, stainless, galvanised, aluminium, brass, copper, Hardox and fibreglass.",
    verCatalogo: "View catalogue",
    stats: [
      { k: "Range", v: "Metals and composites" },
      { k: "Local", v: "Warehouse in Boane" },
      { k: "Size", v: "Any length" },
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
    pedidoProdutoAssunto: (produto) => `Size and price request — ${produto}`,
    pedidoProdutoCorpo: (produto) =>
      `Hello,\n\nI would like to request size and price for: ${produto}.\n\nMaterial:\nSizes:\nQuantity:\n\nThank you.`,
    servicosLabel: "Services",
    servicosTitulo: "We supply the material and prepare it if you need.",
    servicosTexto: "Beyond supply, we source specific material and, when the project calls for it, cut and prepare it before delivery.",
    comoFunciona: "How an order works",
    projetosLabel: "Projects",
    projetosTitulo: "Our material, our clients' work.",
    projetosTexto: "A sample of the materials and processes we prepare for our clients' projects.",
    sobreLabel: "About us",
    sobreTitulo: "A young company in Mozambique's steel market.",
    sobreParas: [
      "Better Steel Solutions (BSS) supplies manufactured steel products to international standards, across a wide range of materials to meet most of our clients' requirements.",
      "Our mission is to deliver high-quality service as a metal supplier, with a strong commitment to speed and efficiency. Our commercial team's technical knowledge lets us source hard-to-find material.",
      "We bring all of a client's metal requirements to a single supplier, with competitive pricing. Where needed, material can be cut and prepared before delivery.",
    ],
    valoresLabel: "Values",
    valores: ["Excellence", "Innovation", "Zero harm", "Passion", "Integrity"],
    faqTitulo: "Frequently asked questions.",
    ctaTitulo: "Tell us what you need.",
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
    alternativo: "alternative",
    rodapeTexto: "Supplier of metals and construction materials in Mozambique.",
    assinatura: "Steel · Precision · Trust",
    horarioLabel: "Business hours",
    horario: ["Monday to Friday: 8:00 AM – 4:00 PM", "Saturdays, Sundays and public holidays: closed"],
    servicos: [
      { n: "01", nome: "Metal supply", desc: "Profiles, sheet, tube, handrail and grating" },
      { n: "02", nome: "Material sourcing", desc: "We locate specific materials" },
      { n: "03", nome: "Cutting and preparation", desc: "Laser, plasma and bevelling, on request" },
    ],
    passos: [
      { n: "01", t: "Send the request", d: "Product, material, sizes and quantity." },
      { n: "02", t: "We confirm", d: "Material availability and stock." },
      { n: "03", t: "Quote", d: "Price and lead time by phone or e-mail." },
      { n: "04", t: "Preparation", d: "Cutting and finishing, if needed, before delivery." },
    ],
    faq: [
      {
        question: "Do you sell by the metre or only full lengths?",
        answer: "We sell the length you need, decimals included, for example 5.26 m.",
      },
      {
        question: "Which materials do you carry?",
        answer: "Carbon steel, stainless, galvanised, aluminium, brass, copper, Hardox, Zintec, acetal and fibreglass. Availability per size is confirmed by phone.",
      },
      {
        question: "How do I get a price?",
        answer: "Call or WhatsApp +258 84 803 8846 (alternative: +258 84 802 9476), or e-mail commercial@bssmoz.com or stefane.macie@bssmoz.com with the product, material, sizes and quantity. You can also use the form on this page.",
      },
      {
        question: "Where is the warehouse?",
        answer: "Av. da Namaacha, Residence no. 25, Km 16 extension, Matola Rio, Boane.",
      },
      {
        question: "Can you source material not in the catalogue?",
        answer: "Often yes. Our commercial team is experienced at locating hard-to-find material. Describe what you need.",
      },
      {
        question: "Do you also cut material?",
        answer: "Yes, as a complementary service to supply: laser and plasma cutting, and edge bevelling, when the project calls for it.",
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
