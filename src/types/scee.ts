export type ActiveTab = 'overview' | 'pib-pine' | 'physical-flows' | 'assets' | 'ecosystems' | 'simulator' | 'quiz-cases';

export interface EcosystemBiome {
  id: string;
  name: string;
  frenchName: string;
  initialExtentKm2: number;
  currentExtentKm2: number;
  conditionScore: number; // 0 to 100
  carbonStockMt: number;
  waterFiltrationValueMEur: number;
  floodProtectionValueMEur: number;
  pollinationValueMEur: number;
  recreationValueMEur: number;
  color: string;
}

export interface QuizQuestion {
  id: number;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  referenceDoc: string;
}

export interface CaseStudy {
  id: string;
  country: string;
  flag: string;
  title: string;
  frameworkPillar: string;
  problem: string;
  sceeSolution: string;
  concreteResult: string;
  source: string;
}

export interface GlossaryTerm {
  term: string;
  acronym?: string;
  category: 'Cadre Central' | 'Écosystèmes' | 'Macroéconomie' | 'Flux Physiques';
  definition: string;
  example: string;
}
