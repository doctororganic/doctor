
export type Language = 'en' | 'ar';

export interface UserData {
  name: string;
  age: number;
  weight: number; // kg
  height: number; // cm
  gender: 'male' | 'female';
  condition: string;
  labs: {
    // Basic
    creatinine?: number;
    hba1c?: number;
    hemoglobin?: number;
    wbc?: number;
    ferritin?: number;
    
    // Cardiovascular
    systolic_bp?: number;
    diastolic_bp?: number;
    
    // Renal Panel
    bun?: number;
    potassium?: number;
    sodium?: number;
    phosphorus?: number;
    calcium?: number;
    albumin?: number;
    uacr?: number; // Urine Albumin-to-Creatinine Ratio
    bicarbonate?: number;

    // Liver Panel
    ast?: number;
    alt?: number;
    alp?: number; // Alkaline Phosphatase
    ggt?: number;
    bilirubin?: number;
    inr?: number;
    platelets?: number;
  };
}

export interface Meal {
  type: string;
  description: string;
}

export interface DayPlan {
  day: number;
  meals: Meal[];
}

export interface Medication {
  name: string;
  dose: string;
  notes: string;
}

export interface Supplement {
  name: string;
  dose: string;
  notes: string;
}

// --- Specialized Data Structures ---

export interface LabRange {
  test: string;
  normal: string;
  mild?: string;
  moderate?: string;
  critical: string;
}

export interface ClinicalSyndrome {
  condition: string;
  drugs: string;
  non_drug: string;
  monitoring: string;
}

export interface SymptomGuide {
  symptom: string;
  meaning: string;
  action: string;
}

export interface DrugAdjustment {
  drug: string;
  normal?: string;
  crcl30_50?: string;
  crcl10_30?: string;
  crcl_less_10?: string;
  adjustment_a?: string; // Child-Pugh A
  adjustment_b?: string; // Child-Pugh B
  adjustment_c?: string; // Child-Pugh C
  comments?: string;
}

export interface DifferentialDiagnosis {
  condition: string;
  symptoms: string[];
  diagnostic_clues: string[];
  risk_factors?: string[];
}

export interface DiseaseContent {
  name: string;
  overview: string;
  symptoms: string[];
  lifestyle_modifications: string[];
  workout_plan: string[];
  nutrition: {
    allowed: string[];
    avoid: string[];
    tips: string[];
  };
  medications: Medication[];
  supplements: Supplement[];
  meal_plan: DayPlan[];
  honey_advice?: string;
  
  // Specific Medical Tables
  special_tables?: {
    nutrition_rules?: { target: string; recommendation: string }[];
    drug_adjustments?: DrugAdjustment[];
    lab_ranges?: LabRange[];
    clinical_syndromes?: ClinicalSyndrome[];
    symptoms_guide?: SymptomGuide[];
    red_flags?: string[];
    differential_diagnosis?: DifferentialDiagnosis[];
    liver_drug_safety?: DrugAdjustment[]; // For liver specific structure
  };
}

export interface LocalizedContent {
  en: DiseaseContent;
  ar: DiseaseContent;
}

export type DiseaseDatabase = Record<string, LocalizedContent>;
