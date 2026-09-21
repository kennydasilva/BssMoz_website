import type { Family, Material, Product, ProjectPhoto } from "../types";

export const FAMILIES: Family[] = [
  {
    id: "structural",
    name: { pt: "Perfis estruturais", en: "Structural profiles" },
    tag: { pt: "Estrutural", en: "Structural" },
    summary: {
      pt: "Vigas I e T, canal U, ângulos, barras chatas e redondas.",
      en: "I and T beams, U channel, angles, flat and round bar.",
    },
    photo: "/images/products/i-bar.jpg",
  },
  {
    id: "plates",
    name: { pt: "Chapas e placas", en: "Sheet and plate" },
    tag: { pt: "Plano", en: "Flat" },
    summary: {
      pt: "Chapa lisa, xadrez, Hardox e soluções para cobertura.",
      en: "Plain sheet, chequer plate, Hardox and roofing solutions.",
    },
    photo: "/images/products/chapa-lisa.jpg",
  },
  {
    id: "tube",
    name: { pt: "Tubos e canos", en: "Tube and pipe" },
    tag: { pt: "Tubagem", en: "Tubing" },
    summary: {
      pt: "Formatos redondos, quadrados, retangulares e ovais.",
      en: "Round, square, rectangular and oval formats.",
    },
    photo: "/images/products/tubo-quadrado.jpg",
  },
  {
    id: "handrail",
    name: { pt: "Corrimãos e grelhas", en: "Handrail and grating" },
    tag: { pt: "Acessos", en: "Access" },
    summary: {
      pt: "Grelhas, corrimãos, degraus e plataformas resistentes.",
      en: "Grating, handrail, treads and hard-wearing platforms.",
    },
    photo: "/images/handrail-family.jpg",
  },
];

export const MATERIALS: Material[] = [
  { id: "aco", name: { pt: "Aço-carbono", en: "Carbon steel" } },
  { id: "inox", name: { pt: "Inox", en: "Stainless" } },
  { id: "galv", name: { pt: "Galvanizado", en: "Galvanised" } },
  { id: "alu", name: { pt: "Alumínio", en: "Aluminium" } },
  { id: "latao", name: { pt: "Latão / Cobre", en: "Brass / Copper" } },
  { id: "outros", name: { pt: "Hardox / Fibra / Zintec", en: "Hardox / GRP / Zintec" } },
];

export const PRODUCTS: Product[] = [
  {
    id: "i-bar",
    family: "structural",
    name: { pt: "Viga I / IPE", en: "I-beam / IPE" },
    materials: ["aco"],
    specs: {
      pt: [["Perfil", "Secção em I"], ["Uso", "Vigas, pórticos"], ["Comprimento", "À medida, decimais"]],
      en: [["Profile", "I section"], ["Use", "Beams, portal frames"], ["Length", "Cut to size, decimals"]],
    },
  },
  {
    id: "t-bar",
    family: "structural",
    name: { pt: "Perfil T", en: "T-bar" },
    materials: ["aco", "inox"],
    specs: {
      pt: [["Perfil", "Secção em T"], ["Uso", "Reforço, moldura"], ["Comprimento", "À medida"]],
      en: [["Profile", "T section"], ["Use", "Reinforcement, framing"], ["Length", "Cut to size"]],
    },
  },
  {
    id: "canal-u",
    family: "structural",
    name: { pt: "Canal U / UPN", en: "U channel / UPN" },
    materials: ["aco"],
    specs: {
      pt: [["Perfil", "Secção em U"], ["Uso", "Chassis, travessas"], ["Comprimento", "À medida"]],
      en: [["Profile", "U section"], ["Use", "Chassis, crossbeams"], ["Length", "Cut to size"]],
    },
  },
  {
    id: "angulo",
    family: "structural",
    name: { pt: "Barra de ângulo", en: "Angle bar" },
    materials: ["aco", "inox", "alu"],
    specs: {
      pt: [["Perfil", "L, abas iguais"], ["Uso", "Estruturas leves"], ["Comprimento", "À medida"]],
      en: [["Profile", "Equal-leg L"], ["Use", "Light structures"], ["Length", "Cut to size"]],
    },
  },
  {
    id: "chata",
    family: "structural",
    name: { pt: "Barra chata", en: "Flat bar" },
    materials: ["aco", "inox", "latao", "alu"],
    specs: {
      pt: [["Perfil", "Retangular maciço"], ["Uso", "Ferragens, apoios"], ["Comprimento", "À medida"]],
      en: [["Profile", "Solid rectangular"], ["Use", "Fittings, supports"], ["Length", "Cut to size"]],
    },
  },
  {
    id: "redonda",
    family: "structural",
    name: { pt: "Barra redonda", en: "Round bar" },
    materials: ["aco", "inox", "latao", "alu"],
    specs: {
      pt: [["Perfil", "Maciço redondo"], ["Uso", "Eixos, pinos"], ["Comprimento", "À medida"]],
      en: [["Profile", "Solid round"], ["Use", "Shafts, pins"], ["Length", "Cut to size"]],
    },
  },
  {
    id: "flange",
    family: "structural",
    name: { pt: "Flange", en: "Flange" },
    materials: ["aco", "inox"],
    specs: {
      pt: [["Uso", "Ligação de tubagem"], ["Tipos", "Sob consulta"], ["Material", "Aço, inox"]],
      en: [["Use", "Pipe connection"], ["Types", "On request"], ["Material", "Steel, stainless"]],
    },
  },
  {
    id: "chapa-lisa",
    family: "plates",
    name: { pt: "Chapa lisa", en: "Plain sheet" },
    materials: ["aco", "inox", "galv", "alu", "outros"],
    specs: {
      pt: [["Formato", "Plano"], ["Corte", "Laser, plasma, à medida"], ["Arestas", "Chanfro opcional"]],
      en: [["Format", "Flat"], ["Cutting", "Laser, plasma, to size"], ["Edges", "Bevel optional"]],
    },
  },
  {
    id: "chapa-xadrez",
    family: "plates",
    name: { pt: "Chapa xadrez", en: "Chequer plate" },
    materials: ["aco", "galv", "alu"],
    specs: {
      pt: [["Formato", "Relevo antiderrapante"], ["Uso", "Pisos, rampas"], ["Corte", "À medida"]],
      en: [["Format", "Anti-slip pattern"], ["Use", "Floors, ramps"], ["Cutting", "To size"]],
    },
  },
  {
    id: "placa-hardox",
    family: "plates",
    name: { pt: "Placa Hardox", en: "Hardox plate" },
    materials: ["outros"],
    specs: {
      pt: [["Propriedade", "Resistência ao desgaste"], ["Uso", "Baldes, tremonhas"], ["Corte", "Plasma, laser"]],
      en: [["Property", "Wear resistance"], ["Use", "Buckets, hoppers"], ["Cutting", "Plasma, laser"]],
    },
  },
  {
    id: "chapa-cobertura",
    family: "plates",
    name: { pt: "Chapa de cobertura", en: "Roof sheet" },
    materials: ["galv", "aco"],
    specs: {
      pt: [["Formato", "Ondulada / IBR"], ["Uso", "Coberturas"], ["Comprimento", "À medida"]],
      en: [["Format", "Corrugated / IBR"], ["Use", "Roofing"], ["Length", "Cut to size"]],
    },
  },
  {
    id: "tubo-redondo",
    family: "tube",
    name: { pt: "Tubo redondo", en: "Round tube" },
    materials: ["aco", "inox", "galv", "alu", "latao"],
    specs: {
      pt: [["Secção", "Redonda"], ["Fabrico", "Laminado quente/frio"], ["Comprimento", "À medida, decimais"]],
      en: [["Section", "Round"], ["Process", "Hot/cold rolled"], ["Length", "Cut to size, decimals"]],
    },
  },
  {
    id: "tubo-quadrado",
    family: "tube",
    name: { pt: "Tubo quadrado", en: "Square tube" },
    materials: ["aco", "galv", "inox"],
    specs: {
      pt: [["Secção", "Quadrada"], ["Uso", "Estruturas, caixilhos"], ["Comprimento", "À medida"]],
      en: [["Section", "Square"], ["Use", "Structures, frames"], ["Length", "Cut to size"]],
    },
  },
  {
    id: "tubo-retangular",
    family: "tube",
    name: { pt: "Tubo retangular", en: "Rectangular tube" },
    materials: ["aco", "galv", "inox"],
    specs: {
      pt: [["Secção", "Retangular"], ["Uso", "Vigas leves, grades"], ["Comprimento", "À medida"]],
      en: [["Section", "Rectangular"], ["Use", "Light beams, railings"], ["Length", "Cut to size"]],
    },
  },
  {
    id: "tubo-oval",
    family: "tube",
    name: { pt: "Tubo oval", en: "Oval tube" },
    materials: ["aco", "inox"],
    specs: {
      pt: [["Secção", "Oval"], ["Uso", "Serralharia, mobiliário"], ["Comprimento", "À medida"]],
      en: [["Section", "Oval"], ["Use", "Metalwork, furniture"], ["Length", "Cut to size"]],
    },
  },
  {
    id: "cano-galv",
    family: "tube",
    name: { pt: "Cano galvanizado", en: "Galvanised pipe" },
    materials: ["galv"],
    specs: {
      pt: [["Uso", "Condução de água"], ["Acabamento", "Galvanizado"], ["Comprimento", "À medida"]],
      en: [["Use", "Water conveyance"], ["Finish", "Galvanised"], ["Length", "Cut to size"]],
    },
  },
  {
    id: "grelha-galv",
    family: "handrail",
    name: { pt: "Grelha galvanizada", en: "Galvanised grating" },
    materials: ["galv", "aco"],
    specs: {
      pt: [["Uso", "Plataformas, passadiços"], ["Acabamento", "Galvanizado a quente"], ["Medidas", "Sob consulta"]],
      en: [["Use", "Platforms, walkways"], ["Finish", "Hot-dip galvanised"], ["Sizes", "On request"]],
    },
  },
  {
    id: "grelha-frp",
    family: "handrail",
    name: { pt: "Grelha de fibra de vidro", en: "GRP grating" },
    materials: ["outros"],
    specs: {
      pt: [["Uso", "Ambientes corrosivos"], ["Material", "Fibra de vidro"], ["Medidas", "Sob consulta"]],
      en: [["Use", "Corrosive areas"], ["Material", "Fibreglass"], ["Sizes", "On request"]],
    },
  },
  {
    id: "corrimao",
    family: "handrail",
    name: { pt: "Corrimão de segurança", en: "Safety handrail" },
    materials: ["aco", "galv", "inox"],
    specs: {
      pt: [["Uso", "Apoio, anti-queda"], ["Ângulos", "Qualquer ângulo"], ["Comprimento", "À medida"]],
      en: [["Use", "Support, fall arrest"], ["Angles", "Any angle"], ["Length", "Cut to size"]],
    },
  },
  {
    id: "degrau",
    family: "handrail",
    name: { pt: "Degrau de escada", en: "Stair tread" },
    materials: ["galv", "aco"],
    specs: {
      pt: [["Uso", "Escadas industriais"], ["Acabamento", "Galvanizado"], ["Medidas", "Sob consulta"]],
      en: [["Use", "Industrial stairs"], ["Finish", "Galvanised"], ["Sizes", "On request"]],
    },
  },
];

export const PROJECT_PHOTOS: ProjectPhoto[] = [
  {
    photo: "/images/products/flange.jpg",
    alt: { pt: "Flange", en: "Flange" },
    caption: { pt: "Flange", en: "Flange" },
  },
  {
    photo: "/images/corte-metal.jpg",
    alt: { pt: "Corte de metal sob medida", en: "Custom metal cutting" },
    caption: { pt: "Corte de metal sob medida", en: "Custom metal cutting" },
  },
  {
    photo: "/images/products/canal-u.jpg",
    alt: { pt: "Canal", en: "Channel" },
    caption: { pt: "Canal", en: "Channel" },
  },
  {
    photo: "/images/products/grelha.jpg",
    alt: { pt: "Grelha", en: "Grating" },
    caption: { pt: "Grelha", en: "Grating" },
  },
  {
    photo: "/images/products/chapa-xadrez.jpg",
    alt: { pt: "Placa e folha", en: "Sheet and plate" },
    caption: { pt: "Placa e folha", en: "Sheet and plate" },
  },
  {
    photo: "/images/products/tubo-redondo.jpg",
    alt: { pt: "Tubo", en: "Tube" },
    caption: { pt: "Tubo", en: "Tube" },
  },
];
