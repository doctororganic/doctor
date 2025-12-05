

import React from 'react';
import { UserData, Language } from '../types';
import { DISEASE_DATA } from '../data';
import { generatePDF } from '../utils/pdfGenerator';
import { calculateCrCl, getCKDStage, analyzeRenalHealth, analyzeLiverHealth, getRenalDoseRecommendation, analyzeBloodPressure } from '../utils/healthCalculators';
import { Download, Heart, Apple, Pill, Phone, ExternalLink, Calendar, CheckCircle, Dumbbell, AlertCircle, Info, Activity, Stethoscope, AlertTriangle } from 'lucide-react';
import { sanitizeHtmlToPlainText } from '../utils/textProcessors';
import { HypertensionMealPlanDetails } from './HypertensionMealPlanDetails'; // Import the new component

interface Props {
  data: UserData;
  lang: Language;
}

export const ResultsView: React.FC<Props> = ({ data, lang }) => {
  const content = DISEASE_DATA[data.condition]?.[lang];
  const isAr = lang === 'ar';

  if (!content) return <div className="text-center p-10 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-xl">Error loading content</div>;

  // Calculate BMI
  const heightM = data.height / 100;
  const bmi = (data.weight / (heightM * heightM)).toFixed(1);
  let bmiStatus = '';
  if (Number(bmi) < 18.5) bmiStatus = isAr ? 'نقص وزن' : 'Underweight';
  else if (Number(bmi) < 25) bmiStatus = isAr ? 'وزن صحي' : 'Healthy';
  else if (Number(bmi) < 30) bmiStatus = isAr ? 'زيادة وزن' : 'Overweight';
  else bmiStatus = isAr ? 'سمنة' : 'Obese';

  // Smart Logic Analysis
  const renalAnalysis = analyzeRenalHealth(data);
  const liverAnalysis = analyzeLiverHealth(data);
  const bpAnalysis = analyzeBloodPressure(data);
  
  // Logic to show specific cards
  const showRenalCard = !!renalAnalysis.crCl || data.condition === 'renal_ckd';
  const showLiverCard = !!liverAnalysis?.pattern || data.condition === 'liver_disease';
  const showBPCard = !!bpAnalysis || data.condition === 'hypertension';

  const t = {
    consultation: isAr ? 'استشارة طبية' : 'Medical Consultation',
    lifestyle: isAr ? 'تعديلات نمط الحياة' : 'Lifestyle Modifications',
    workout: isAr ? 'خطة التمارين' : 'Workout Plan',
    nutrition: isAr ? 'التغذية' : 'Nutrition',
    meds: isAr ? 'الأدوية والمكملات (مثال للعلاج - يجب زيارة الطبيب)' : 'Medications & Supplements (Treatment Example - Consult a Doctor)',
    mealPlan: isAr ? 'خطة وجبات' : 'Meal Plan',
    allowed: isAr ? 'مسموح' : 'Allowed',
    avoid: isAr ? 'ممنوع' : 'Avoid',
    tips: isAr ? 'نصائح' : 'Tips',
    honey: isAr ? 'نصيحة العسل' : 'Honey Advice',
    download: isAr ? 'تحميل التقرير (PDF)' : 'Download Report (PDF)',
    renalAlert: isAr ? 'تحليل وظائف الكلى' : 'Renal Function Analysis',
    liverAlert: isAr ? 'تحليل وظائف الكبد' : 'Liver Function Analysis',
    bpAlert: isAr ? 'تحليل ضغط الدم' : 'Cardiovascular Health Analysis',
    gfr: isAr ? 'معدل الترشيح (eGFR)' : 'Estimated GFR',
    stage: isAr ? 'المرحلة' : 'Stage',
    warnings: isAr ? 'تنبيهات هامة' : 'Critical Warnings',
    recommendations: isAr ? 'توصيات' : 'Recommendations',
    drugAdjustments: isAr ? 'تعديلات جرعات الأدوية' : 'Drug Dosage Adjustments',
    nutritionRules: isAr ? 'قواعد التغذية الكلوية' : 'Renal Nutrition Rules',
    clinicalManagement: isAr ? 'الإدارة السريرية' : 'Clinical Management',
    redFlags: isAr ? 'علامات الخطر (الطوارئ)' : 'Red-Flag Situations (Emergency)',
    labRanges: isAr ? 'نطاقات التحاليل الطبيعية' : 'Normal Lab Ranges',
    symptomsGuide: isAr ? 'دليل الأعراض' : 'Symptom Action Guide',
    yourDose: isAr ? 'جرعتك الموصى بها' : 'Your Recommended Dose',
    formula: isAr ? 'تم الحساب بواسطة معادلة Cockcroft-Gault' : 'Calculated via Cockcroft-Gault Equation',
    typeDrug: isAr ? 'دواء' : 'Drug',
    typeSupp: isAr ? 'مكمل' : 'Supplement'
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-12">
      {/* Header Card */}
      <div className="bg-white dark:bg-dark-card rounded-3xl shadow-lg p-8 border-l-8 border-primary-600 transition-colors duration-300">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.consultation}</h1>
            <p className="text-slate-500 dark:text-slate-400">Patient: <span className="font-semibold text-slate-900 dark:text-white">{data.name}</span></p>
            <div className="flex gap-4 mt-3 text-sm font-medium">
              <span className="bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full">BMI: {bmi} ({bmiStatus})</span>
              <span className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">{data.age} years</span>
            </div>
          </div>
          <button 
            onClick={() => generatePDF(data, content, lang)}
            className="flex items-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition shadow-md shadow-primary-500/20"
          >
            <Download size={18} />
            {t.download}
          </button>
        </div>
      </div>

      {/* Dynamic Renal Card */}
      {showRenalCard && renalAnalysis && (
        <div className="bg-amber-50 dark:bg-amber-900/10 rounded-3xl shadow-lg p-8 border-l-8 border-amber-500">
          <div className="flex items-center gap-3 mb-6 text-amber-700 dark:text-amber-400">
            <AlertCircle className="w-7 h-7" />
            <h3 className="text-2xl font-bold">{t.renalAlert}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              {renalAnalysis.crCl !== null && (
                <div className="mb-6 p-4 bg-white/60 dark:bg-black/20 rounded-xl backdrop-blur-sm">
                  <p className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">{t.gfr}: <span className="text-primary-600 dark:text-primary-400 text-2xl">{renalAnalysis.crCl} mL/min</span></p>
                  <p className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-2">{t.stage}: {getCKDStage(renalAnalysis.crCl)}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 italic">{t.formula}</p>
                </div>
              )}
              
              {renalAnalysis.warnings.length > 0 && (
                <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-100 dark:border-red-900/30 mb-4">
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2 text-lg">
                    <AlertTriangle size={20} /> {t.warnings}
                  </h4>
                  <ul className="space-y-2 text-red-800 dark:text-red-300 text-sm font-medium">
                    {renalAnalysis.warnings.map((w, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="bg-white dark:bg-dark-card p-5 rounded-xl border border-amber-100 dark:border-amber-900/30 h-fit shadow-sm">
              <h4 className="font-bold text-slate-700 dark:text-slate-200 mb-3 flex items-center gap-2">
                <CheckCircle size={18} className="text-amber-500" /> {t.recommendations}
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                {renalAnalysis.recs.map((rec, i) => <li key={i} className="pl-2 border-l-2 border-amber-200 dark:border-amber-800">{rec}</li>)}
              </ul>
            </div>
          </div>

          {/* Personalized Medication Table */}
          {renalAnalysis.crCl !== null && content.special_tables?.drug_adjustments && (
            <div className="mt-8 bg-white dark:bg-dark-card p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 shadow-sm">
              <h4 className="font-bold text-primary-800 dark:text-primary-300 mb-4 flex items-center gap-2 text-lg">
                <Pill size={20} /> {t.yourDose} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">(Based on CrCl {renalAnalysis.crCl} mL/min)</span>
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-primary-50 dark:bg-primary-900/20 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="p-4 rounded-tl-lg">Drug</th>
                      <th className="p-4">Standard Dose</th>
                      <th className="p-4 bg-primary-100 dark:bg-primary-900/40 text-primary-900 dark:text-primary-100 border-l-4 border-primary-500 rounded-tr-lg">Your Recommended Dose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {content.special_tables.drug_adjustments.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{row.drug}</td>
                        <td className="p-4 text-slate-500 dark:text-slate-400">{row.normal}</td>
                        <td className="p-4 bg-primary-50/50 dark:bg-primary-900/10 font-bold text-primary-800 dark:text-primary-300 border-l-4 border-primary-500">
                          {getRenalDoseRecommendation(renalAnalysis.crCl!, row)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Dynamic BP Card */}
      {showBPCard && bpAnalysis && (
        <div className="bg-rose-50 dark:bg-rose-900/10 rounded-3xl shadow-lg p-8 border-l-8 border-rose-500">
          <div className="flex items-center gap-3 mb-6 text-rose-700 dark:text-rose-400">
            <Heart className="w-7 h-7" />
            <h3 className="text-2xl font-bold">{t.bpAlert}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <div className="mb-6 p-4 bg-white/60 dark:bg-black/20 rounded-xl backdrop-blur-sm">
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">Blood Pressure Category:</p>
                <p className="text-xl font-bold text-rose-800 dark:text-rose-300">{bpAnalysis.stage}</p>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mt-2">
                  {data.labs.systolic_bp}/{data.labs.diastolic_bp} mmHg
                </p>
              </div>
              
              {bpAnalysis.warnings.length > 0 && (
                <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-100 dark:border-red-900/30 mb-4">
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2 text-lg">
                    <AlertTriangle size={20} /> {t.warnings}
                  </h4>
                  <ul className="space-y-2 text-red-800 dark:text-red-300 text-sm font-medium">
                    {bpAnalysis.warnings.map((w, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-dark-card p-5 rounded-xl border border-rose-100 dark:border-rose-900/30 h-fit shadow-sm">
              <h4 className="font-bold text-slate-700 dark:text-slate-200 mb-3 flex items-center gap-2">
                <CheckCircle size={18} className="text-rose-500" /> {t.recommendations}
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                {bpAnalysis.recs.map((rec, i) => <li key={i} className="pl-2 border-l-2 border-rose-200 dark:border-rose-800">{rec}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Liver Card */}
      {showLiverCard && liverAnalysis && (
        <div className="bg-orange-50 dark:bg-orange-900/10 rounded-3xl shadow-lg p-8 border-l-8 border-orange-500">
          <div className="flex items-center gap-3 mb-6 text-orange-700 dark:text-orange-400">
            <Activity className="w-7 h-7" />
            <h3 className="text-2xl font-bold">{t.liverAlert}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              {liverAnalysis.pattern && (
                <div className="mb-6 p-4 bg-white/60 dark:bg-black/20 rounded-xl backdrop-blur-sm">
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">Pattern Detected:</p>
                  <p className="text-xl font-bold text-orange-800 dark:text-orange-300">{liverAnalysis.pattern}</p>
                </div>
              )}
              
              {liverAnalysis.warnings.length > 0 && (
                <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-100 dark:border-red-900/30 mb-4">
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2 text-lg">
                    <Info size={20} /> {t.warnings}
                  </h4>
                  <ul className="space-y-2 text-red-800 dark:text-red-300 text-sm font-medium">
                    {liverAnalysis.warnings.map((w, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-dark-card p-5 rounded-xl border border-orange-100 dark:border-orange-900/30 h-fit shadow-sm">
              <h4 className="font-bold text-slate-700 dark:text-slate-200 mb-3 flex items-center gap-2">
                <CheckCircle size={18} className="text-orange-500" /> {t.recommendations}
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                {liverAnalysis.recs.map((rec, i) => <li key={i} className="pl-2 border-l-2 border-orange-200 dark:border-orange-800">{rec}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Disease Overview & Lifestyle & Workout */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* Overview */}
          <div className="bg-white dark:bg-dark-card rounded-3xl shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6 text-primary-600 dark:text-primary-400">
              <div className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <Heart size={24} />
              </div>
              <h3 className="text-2xl font-bold">{content.name}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg">{content.overview}</p>
            
            <h4 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2 text-lg border-b border-slate-100 dark:border-slate-700 pb-2">
              <CheckCircle className="text-primary-500 w-5 h-5" />
              {t.lifestyle}
            </h4>
            <ul className="space-y-3">
              {content.lifestyle_modifications.map((mod, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300 bg-primary-50/50 dark:bg-primary-900/10 p-3 rounded-lg border-l-4 border-primary-400 dark:border-primary-600">
                  {mod}
                </li>
              ))}
            </ul>
          </div>

          {/* Workout Plan */}
          <div className="bg-white dark:bg-dark-card rounded-3xl shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6 text-purple-600 dark:text-purple-400">
              <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <Dumbbell size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t.workout}</h3>
            </div>
            <ul className="space-y-3">
              {content.workout_plan.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300 bg-purple-50/50 dark:bg-purple-900/10 p-3 rounded-lg border-l-4 border-purple-400 dark:border-purple-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-3xl shadow-md p-8 h-fit transition-colors duration-300">
          <div className="flex items-center gap-3 mb-6 text-green-600 dark:text-green-400">
            <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <Apple size={24} />
            </div>
            <h3 className="text-2xl font-bold">{t.nutrition}</h3>
          </div>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3 bg-green-50 dark:bg-green-900/20 inline-block px-3 py-1 rounded-lg">{t.allowed}</h4>
              <div className="flex flex-wrap gap-2">
                {content.nutrition.allowed.map((item, i) => (
                  <span key={i} className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 text-sm px-3 py-1.5 rounded-full border border-green-100 dark:border-green-800/50">{item}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3 bg-red-50 dark:bg-red-900/20 inline-block px-3 py-1 rounded-lg">{t.avoid}</h4>
              <div className="flex flex-wrap gap-2">
                {content.nutrition.avoid.map((item, i) => (
                  <span key={i} className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 text-sm px-3 py-1.5 rounded-full border border-red-100 dark:border-red-800/50">{item}</span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3 bg-blue-50 dark:bg-blue-900/20 inline-block px-3 py-1 rounded-lg">{t.tips}</h4>
              <ul className="space-y-2">
                {content.nutrition.tips.map((tip, i) => (
                  <li key={i} className="text-slate-700 dark:text-slate-300 text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {content.honey_advice && (
              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 p-5 rounded-xl">
                <h4 className="font-bold text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-2">
                  <span className="text-xl">🍯</span> {t.honey}
                </h4>
                <p className="text-sm text-amber-900 dark:text-amber-200">{content.honey_advice}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Special Tables Section (Clinical Management) */}
      {content.special_tables && (
        <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
            <div className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
              <Stethoscope className="text-primary-600 dark:text-primary-400" size={24} />
            </div>
            {t.clinicalManagement}
          </h3>

          <div className="space-y-10">
            
            {/* Red Flags */}
            {content.special_tables.red_flags && (
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border-l-4 border-red-500">
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-4 flex items-center gap-2 text-lg">
                  <AlertTriangle size={24} /> {t.redFlags}
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {content.special_tables.red_flags.map((flag, i) => (
                    <div key={i} className="flex items-start gap-3 text-red-900 dark:text-red-200 font-medium">
                      <span className="mt-2 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                      {flag}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Clinical Syndromes Table */}
            {content.special_tables.clinical_syndromes && (
              <div className="overflow-hidden rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left bg-white dark:bg-dark-card">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      <tr>
                        <th className="p-4 font-bold">Condition</th>
                        <th className="p-4 font-bold">Key Drugs</th>
                        <th className="p-4 font-bold">Management</th>
                        <th className="p-4 font-bold">Monitoring</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {content.special_tables.clinical_syndromes.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{row.condition}</td>
                          <td className="p-4 text-primary-700 dark:text-primary-400 font-medium">{row.drugs}</td>
                          <td className="p-4 text-slate-600 dark:text-slate-400">{row.non_drug}</td>
                          <td className="p-4 text-slate-500 dark:text-slate-500 italic">{row.monitoring}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Drug Adjustments (Generic / Full Table View) */}
            {!showRenalCard && content.special_tables.drug_adjustments && (
              <div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2 text-lg">
                  <Pill size={20} className="text-purple-600 dark:text-purple-400"/> {t.drugAdjustments}
                </h4>
                <div className="overflow-hidden rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left bg-white dark:bg-dark-card">
                      <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        <tr>
                          <th className="p-4 font-bold">Drug</th>
                          {/* Conditional Headers based on data type */}
                          {content.special_tables.drug_adjustments[0].crcl30_50 ? (
                            <>
                              <th className="p-4 font-bold">Normal Dose</th>
                              <th className="p-4 font-bold text-yellow-700 dark:text-yellow-500">CrCl 30-50</th>
                              <th className="p-4 font-bold text-orange-700 dark:text-orange-500">CrCl 10-30</th>
                              <th className="p-4 font-bold text-red-700 dark:text-red-500">CrCl &lt; 10</th>
                            </>
                          ) : (
                            <>
                              <th className="p-4 font-bold">Mild Disease</th>
                              <th className="p-4 font-bold">Moderate</th>
                              <th className="p-4 font-bold">Severe</th>
                              <th className="p-4 font-bold">Comments</th>
                            </>
                          )}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {content.special_tables.drug_adjustments.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{row.drug}</td>
                            {row.crcl30_50 ? (
                              <>
                                <td className="p-4 text-slate-600 dark:text-slate-400">{row.normal}</td>
                                <td className="p-4 bg-yellow-50/50 dark:bg-yellow-900/10 text-slate-700 dark:text-slate-300">{row.crcl30_50}</td>
                                <td className="p-4 bg-orange-50/50 dark:bg-orange-900/10 text-slate-700 dark:text-slate-300">{row.crcl10_30}</td>
                                <td className="p-4 bg-red-50/50 dark:bg-red-900/10 text-red-700 dark:text-red-400 font-semibold">{row.crcl_less_10}</td>
                              </>
                            ) : (
                              <>
                                <td className="p-4 text-slate-600 dark:text-slate-400">{row.adjustment_a}</td>
                                <td className="p-4 bg-yellow-50/50 dark:bg-yellow-900/10 text-slate-700 dark:text-slate-300">{row.adjustment_b}</td>
                                <td className="p-4 bg-red-50/50 dark:bg-red-900/10 text-red-700 dark:text-red-400 font-semibold">{row.adjustment_c}</td>
                                <td className="p-4 text-slate-500 dark:text-slate-500 text-xs">{row.comments}</td>
                              </>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Lab Ranges */}
            {content.special_tables.lab_ranges && (
              <div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2 text-lg">
                  <Activity size={20} className="text-green-600 dark:text-green-400"/> {t.labRanges}
                </h4>
                <div className="overflow-hidden rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left bg-white dark:bg-dark-card">
                      <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        <tr>
                          <th className="p-3 font-bold">Test</th>
                          <th className="p-3 font-bold">Normal</th>
                          <th className="p-3 font-bold text-red-600 dark:text-red-400">Critical</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {content.special_tables.lab_ranges.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="p-3 font-semibold text-slate-800 dark:text-slate-200">{row.test}</td>
                            <td className="p-3 text-slate-600 dark:text-slate-400">{row.normal}</td>
                            <td className="p-3 font-bold text-red-600 dark:text-red-400">{row.critical}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Medications Table */}
      <div className="bg-white dark:bg-dark-card rounded-3xl shadow-md p-8 transition-colors duration-300">
        <div className="flex items-center gap-3 mb-8 text-primary-600 dark:text-primary-400">
          <div className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
            <Pill size={24} />
          </div>
          <h3 className="text-2xl font-bold">{t.meds}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="p-5 font-semibold text-slate-700 dark:text-slate-300 rounded-tl-xl">Type</th>
                <th className="p-5 font-semibold text-slate-700 dark:text-slate-300">Name</th>
                <th className="p-5 font-semibold text-slate-700 dark:text-slate-300">Dosage</th>
                <th className="p-5 font-semibold text-slate-700 dark:text-slate-300 rounded-tr-xl">Notes</th>
              </tr>
            </thead>
            <tbody className="text-slate-600 dark:text-slate-300">
              {content.medications.map((med, i) => (
                <tr key={i} className="border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-5">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded uppercase tracking-wide">{t.typeDrug}</span>
                  </td>
                  <td className="p-5 font-medium text-slate-900 dark:text-white">{med.name}</td>
                  <td className="p-5">
                    <span className="text-sm font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-700 dark:text-slate-300">{med.dose}</span>
                  </td>
                  <td className="p-5 text-sm">{med.notes}</td>
                </tr>
              ))}
              {content.supplements.map((sup, i) => (
                <tr key={`sup-${i}`} className="border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 bg-purple-50/30 dark:bg-purple-900/5 transition-colors">
                  <td className="p-5">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded uppercase tracking-wide">{t.typeSupp}</span>
                  </td>
                  <td className="p-5 font-medium text-purple-900 dark:text-purple-300">{sup.name}</td>
                  <td className="p-5">
                    <span className="text-sm font-mono bg-white/60 dark:bg-black/20 px-2 py-1 rounded text-slate-700 dark:text-slate-300">{sup.dose}</span>
                  </td>
                  <td className="p-5 text-sm">{sup.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conditional Meal Plan Display */}
      {data.condition === 'hypertension' ? (
        <HypertensionMealPlanDetails lang={lang} />
      ) : (
        <div className="bg-white dark:bg-dark-card rounded-3xl shadow-md p-8 transition-colors duration-300">
          <div className="flex items-center gap-3 mb-8 text-orange-600 dark:text-orange-400">
            <div className="p-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
              <Calendar size={24} />
            </div>
            <h3 className="text-2xl font-bold">{t.mealPlan}</h3>
          </div>
          <div className="flex overflow-x-auto space-x-6 pb-4 -mx-8 px-8">
            {content.meal_plan.map((day) => (
              <div key={day.day} className="flex-shrink-0 w-80 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 bg-orange-50/20 dark:bg-orange-900/5">
                <h4 className="font-bold text-slate-800 dark:text-white mb-5 border-b border-orange-100 dark:border-orange-900/30 pb-3">
                  Day {day.day}
                </h4>
                <div className="space-y-5">
                  {day.meals.map((meal, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="text-xs font-bold uppercase text-orange-600 dark:text-orange-400 bg-white dark:bg-dark-card py-1 px-2.5 rounded-full border border-orange-100 dark:border-slate-700 h-fit shadow-sm">
                        {meal.type}
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 pt-0.5 leading-relaxed">{sanitizeHtmlToPlainText(meal.description)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper component for chevron icon
const ChevronRight = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);