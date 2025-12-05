
import { UserData, DrugAdjustment } from '../types';

export const calculateBMI = (weight: number, height: number): number => {
  if (!weight || !height) return 0;
  const heightM = height / 100;
  return Number((weight / (heightM * heightM)).toFixed(1));
};

export const calculateCrCl = (data: UserData): number | null => {
  if (!data.labs.creatinine || !data.weight || !data.age) return null;
  
  // Cockcroft-Gault Equation
  let crCl = ((140 - data.age) * data.weight) / (72 * data.labs.creatinine);
  
  if (data.gender === 'female') {
    crCl *= 0.85;
  }
  
  return Number(crCl.toFixed(1));
};

export const getCKDStage = (crCl: number): string => {
  if (crCl >= 90) return 'Stage 1 (Normal/High)';
  if (crCl >= 60) return 'Stage 2 (Mild)';
  if (crCl >= 45) return 'Stage 3a (Mild-Moderate)';
  if (crCl >= 30) return 'Stage 3b (Moderate-Severe)';
  if (crCl >= 15) return 'Stage 4 (Severe)';
  return 'Stage 5 (Failure/Dialysis)';
};

export const getRenalDoseRecommendation = (crCl: number, drug: DrugAdjustment): string => {
  // Check if renal adjustment data exists
  if (drug.crcl30_50 || drug.crcl10_30 || drug.crcl_less_10) {
    if (crCl >= 50) return drug.normal || "Standard";
    if (crCl >= 30) return drug.crcl30_50 || drug.normal || "Standard";
    if (crCl >= 10) return drug.crcl10_30 || "Consult Doctor";
    return drug.crcl_less_10 || "Contraindicated";
  }
  return "N/A";
};

// --- RENAL SMART LOGIC (KDIGO 2025) ---
export const analyzeRenalHealth = (data: UserData) => {
  const crCl = calculateCrCl(data);
  const labs = data.labs;
  const warnings: string[] = [];
  const recs: string[] = [];

  // 1. CKD Staging & Drug Warnings
  if (crCl !== null) {
    if (crCl < 60) {
      warnings.push(`eGFR ${crCl} mL/min: CKD Stage 3+. Drug dosing requires adjustment.`);
      recs.push('Avoid NSAIDs (Ibuprofen, Naproxen) completely.');
      recs.push('Avoid Nitrofurantoin (ineffective/toxic).');
    }
    
    if (crCl < 30) {
      warnings.push('CRITICAL: eGFR < 30. Metformin is contraindicated.');
      warnings.push('Stop SGLT2i if starting dialysis (otherwise continue for protection).');
      warnings.push('Avoid Morphine/Codeine (active metabolites accumulate).');
      recs.push('Dietary protein restriction (0.6-0.8 g/kg/day) highly recommended.');
    }
  }

  // 2. Electrolyte & Lab Analysis
  if (labs.creatinine) {
    if(labs.creatinine > 5.0) warnings.push(`CRITICAL: SCr ${labs.creatinine} mg/dL. Immediate nephrology referral.`);
    else if(labs.creatinine > 1.3) warnings.push('Elevated Creatinine: Monitor for progression.');
  }

  if (labs.bun && labs.bun > 80) {
    warnings.push(`CRITICAL: BUN ${labs.bun} mg/dL. Uremic symptoms likely (nausea, confusion).`);
  }

  if (labs.potassium) {
    if (labs.potassium >= 6.5) {
      warnings.push(`EMERGENCY: Potassium ${labs.potassium}. Risk of cardiac arrest. Go to ER.`);
    } else if (labs.potassium > 5.5) {
      warnings.push(`Hyperkalemia (K+ ${labs.potassium}).`);
      recs.push('Low Potassium Diet (<2000mg/day).');
      recs.push('Consider stopping RAAS inhibitors temporarily if confirmed.');
      recs.push('Acute management: Calcium Gluconate + Insulin/Dextrose if ECG changes.');
    }
  }

  if (labs.sodium) {
    if (labs.sodium < 125 || labs.sodium > 155) {
      warnings.push(`CRITICAL: Sodium ${labs.sodium}. Seizure risk. Go to ER.`);
    }
  }

  if (labs.bicarbonate && labs.bicarbonate < 20) {
    warnings.push(`Metabolic Acidosis (HCO3 ${labs.bicarbonate}).`);
    recs.push('Start Sodium Bicarbonate 650mg TID (Target HCO3 22-24).');
  }

  if (labs.calcium && (labs.calcium < 7.0 || labs.calcium > 12.0)) {
    warnings.push(`CRITICAL: Calcium ${labs.calcium}. Risk of tetany/arrhythmia.`);
  }

  if (labs.phosphorus && labs.phosphorus > 5.5) {
    warnings.push(`Hyperphosphatemia (Phos ${labs.phosphorus}).`);
    recs.push('Low Phosphate Diet (800-1000mg/day).');
    recs.push('Start Phosphate Binders (Sevelamer or Calcium Acetate) with meals.');
  }

  if (labs.hemoglobin && labs.hemoglobin < 10.0) {
    warnings.push(`Renal Anemia (Hb ${labs.hemoglobin}).`);
    recs.push('Check Iron Studies (Ferritin/TSAT).');
    recs.push('Consider IV Iron or ESA (Target Hb 10-11.5).');
  }

  if (labs.uacr && labs.uacr >= 30) {
    warnings.push('Microalbuminuria detected.');
    recs.push('Maximize ACEi/ARB therapy for renal protection.');
    recs.push('Add SGLT2 inhibitor or Finerenone if diabetic.');
  }

  return { crCl, warnings, recs };
};

// --- LIVER SMART LOGIC ---
export const analyzeLiverHealth = (data: UserData) => {
  const labs = data.labs;
  const warnings: string[] = [];
  const recs: string[] = [];
  let pattern = '';

  if (!labs.ast && !labs.alt) return null;

  const ast = labs.ast || 0;
  const alt = labs.alt || 0;
  const alp = labs.alp || 0;
  const bili = labs.bilirubin || 0;
  const inr = labs.inr || 1.0;
  const alb = labs.albumin || 4.0;

  // 1. Pattern Recognition
  if (ast > 40 || alt > 40) {
    if (alp > 150) {
      pattern = 'Mixed/Cholestatic Pattern';
      recs.push('Evaluate for biliary obstruction (Gallstones) or drug reaction.');
    } else {
      pattern = 'Hepatocellular Pattern';
      if (ast > 2 * alt) {
        warnings.push('AST:ALT ratio > 2:1 strongly suggests Alcohol-related liver disease.');
      } else {
        recs.push('Differential: Viral Hepatitis, NAFLD, or Drug Toxicity.');
      }
    }
  }

  if (ast > 1000 || alt > 1000) {
    warnings.push('CRITICAL: Transaminases > 1000 U/L. Causes: Ischemia, Toxin (Acetaminophen), or Acute Viral. Immediate ER evaluation.');
  }

  // 2. Severity (Child-Pugh Proxy)
  let severityScore = 0;
  if (bili > 2) severityScore++;
  if (bili > 3) severityScore++;
  if (alb < 3.5) severityScore++;
  if (alb < 2.8) severityScore++;
  if (inr > 1.7) severityScore++;
  if (inr > 2.3) severityScore++;

  if (severityScore >= 1) {
    warnings.push('Evidence of impaired synthetic function (Low Albumin/High INR).');
  }

  if (bili > 3.0 && inr > 1.5) {
    warnings.push('CRITICAL: Signs of Acute Liver Failure. Urgent Transplant Center referral may be needed.');
  }

  // 3. Drug Safety based on Severity
  if (severityScore >= 3 || inr > 1.5) {
    warnings.push('Child-Pugh B/C likely (Decompensated).');
    recs.push('AVOID: NSAIDs, Statins (use extreme caution), Morphine/Benzodiazepines.');
    recs.push('Acetaminophen: Max 2g/day absolute limit.');
  } else {
    recs.push('Child-Pugh A likely (Compensated).');
    recs.push('Acetaminophen: Max 2-3g/day safe.');
    recs.push('Statins: Generally safe, start low and monitor.');
  }

  return { pattern, warnings, recs };
};

// --- CARDIOVASCULAR SMART LOGIC ---
export const analyzeBloodPressure = (data: UserData) => {
  const sb = data.labs.systolic_bp;
  const db = data.labs.diastolic_bp;

  if (!sb || !db) return null;

  const warnings: string[] = [];
  const recs: string[] = [];
  let stage = 'Normal';

  if (sb > 180 || db > 120) {
    stage = 'Hypertensive Crisis';
    warnings.push('CRITICAL: BP > 180/120. Seek emergency care immediately.');
  } else if (sb >= 140 || db >= 90) {
    stage = 'Stage 2 Hypertension';
    warnings.push('Blood pressure is significantly elevated.');
    recs.push('Urgent lifestyle modification and medical consultation recommended.');
    recs.push('Strict sodium restriction (<1500mg/day).');
  } else if (sb >= 130 || db >= 80) {
    stage = 'Stage 1 Hypertension';
    recs.push('Lifestyle changes advised (DASH diet, exercise).');
    recs.push('Monitor BP daily.');
  } else if (sb >= 120 && db < 80) {
    stage = 'Elevated';
    recs.push('Implement healthy lifestyle changes.');
  }

  return { stage, warnings, recs };
};
