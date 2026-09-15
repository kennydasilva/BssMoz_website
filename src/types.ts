export type Lang = "pt" | "en";

export type LocalizedText = Record<Lang, string>;

export type FamilyId = "structural" | "plates" | "tube" | "handrail";

export type MaterialId = "aco" | "inox" | "galv" | "alu" | "latao" | "outros";

export interface Family {
  id: FamilyId;
  name: LocalizedText;
  tag: LocalizedText;
  summary: LocalizedText;
  photo: string;
}

export interface Material {
  id: MaterialId;
  name: LocalizedText;
}

export type ProductSpec = [string, string];

export interface Product {
  id: string;
  family: FamilyId;
  name: LocalizedText;
  materials: MaterialId[];
  specs: Record<Lang, ProductSpec[]>;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProjectPhoto {
  photo: string;
  alt: LocalizedText;
  caption: LocalizedText;
}
