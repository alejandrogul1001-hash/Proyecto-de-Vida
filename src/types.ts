import type { ReactNode } from 'react';

export interface StudentProfile {
  name: string;
  university: string;
  faculty: string;
  school: string;
  career: string;
  subject: string;
  semester: string;
  parallel?: string;
  professorTitle: string;
  professorName: string;
  location: string;
  tagline: string;
}

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  category: 'analitica' | 'tecnologica' | 'humana' | 'estrategica' | 'artistica';
}

export interface GrowthItem {
  id: string;
  aspect: string;
  strategy: string;
  status: 'en_proceso' | 'prioridad';
  rootCause?: string;
}

export interface ProjectLifeData {
  profile: StudentProfile;
  // Pregunta 1: ¿Quién soy realmente?
  whoAmI: {
    core: string;
    identityPillars: string[];
    philosophy: string;
  };
  // Pregunta 2: Principales fortalezas
  strengths: StrengthItem[];
  // Pregunta 3: Aspectos a mejorar
  growthAreas: GrowthItem[];
  // Pregunta 4: Tipo de persona que quiero llegar a ser
  targetPersona: {
    statement: string;
    virtues: string[];
    impactVision: string;
  };
  // Pregunta 5, 6, 7: Las 3 Dimensiones
  personalGoal: {
    title: string;
    description: string;
    milestones: string[];
    habits?: string[];
  };
  professionalGoal: {
    title: string;
    description: string;
    focusAreas: string[];
    milestones?: string[];
  };
  economicGoal: {
    title: string;
    description: string;
    investmentPhilosophy: string;
    keyMetrics: string[];
    targetAmount?: string;
    strategy?: string;
  };
  // Pregunta 8: Dónde quiero estar dentro de 5 años
  fiveYearRoadmap: Array<{
    year: string;
    stage: string;
    focus: string;
    keyResults: string[];
  }>;
  // Pregunta 9: Sueño o meta que aún no he comenzado
  unstartedDream: {
    title: string;
    description: string;
    whyNotYet: string;
    whyPending?: string;
    firstStep: string;
  };
  // Pregunta 10: Obstáculos
  obstacles: Array<{
    obstacle: string;
    severity: 'alta' | 'media' | 'baja';
    mitigation: string;
    impact?: string;
  }>;
  // Pregunta 11: Dispuesto a cambiar, aprender o sacrificar
  willingness: {
    toLearn: string[];
    toChange: string[];
    toSacrifice: string[];
  };
  // Pregunta 12: Si continúo haciendo lo mismo, ¿llegaré?
  realityCheck: {
    honestAssessment: string;
    verdict: 'Requiere giro estratégico' | 'Requiere aceleración' | 'En rumbo correcto' | 'Es momento de actuar';
    gapAnalysis: string;
    willItTakeMeThere?: boolean;
    theCostOfInaction?: string;
  };
  // Pregunta 13: Acción concreta desde ahora
  concreteActionNow: {
    action: string;
    dailyCommitment: string;
    measurableMetric: string;
    deadline?: string;
  };
  // Compromiso del semestre
  semesterCommitment: {
    phrase: string;
    fullDeclaration: string;
    signedBy: string;
    date: string;
    hashVerification?: string;
  };
}

export interface SlideItem {
  id: number;
  badge: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
  speakerNotes: string;
}
