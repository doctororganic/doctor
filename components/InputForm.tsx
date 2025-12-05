
import React, { useState } from 'react';
import { UserData, Language } from '../types';
import { DISEASE_DATA } from '../data';
import { Activity, Beaker, User, ChevronRight } from 'lucide-react';

interface Props {
  lang: Language;
  onSubmit: (data: UserData) => void;
}

export const InputForm: React.FC<Props> = ({ lang, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    age: 0,
    weight: 0,
    height: 0,
    gender: 'male',
    condition: '',
    labs: {}
  });

  const t = {
    personal: lang === 'en' ? 'Personal Information' : 'المعلومات الشخصية',
    name: lang === 'en' ? 'Name' : 'الاسم',
    age: lang === 'en' ? 'Age' : 'العمر',
    weight: lang === 'en' ? 'Weight (kg)' : 'الوزن (كجم)',
    height: lang === 'en' ? 'Height (cm)' : 'الطول (سم)',
    gender: lang === 'en' ? 'Gender' : 'الجنس',
    male: lang === 'en' ? 'Male' : 'ذكر',
    female: lang === 'en' ? 'Female' : 'أنثى',
    condition: lang === 'en' ? 'Select Condition' : 'اختر الحالة المرضية',
    labs: lang === 'en' ? 'Lab Results (Optional)' : 'نتائج التحاليل (اختياري)',
    renalPanel: lang === 'en' ? 'Renal Panel' : 'تحاليل الكلى',
    liverPanel: lang === 'en' ? 'Liver Panel' : 'تحاليل الكبد',
    cardioPanel: lang === 'en' ? 'Cardiovascular Health Panel' : 'تحاليل صحة القلب والأوعية الدموية', // Added
    immunityPanel: lang === 'en' ? 'Immunity Panel' : 'تحاليل المناعة', // Added
    submit: lang === 'en' ? 'Generate Personalized Plan' : 'إنشاء الخطة الشخصية'
  };

  const diseaseGroups = [
    {
      label: lang === 'en' ? 'Kidney & Liver' : 'الكلى والكبد',
      options: ['renal_ckd', 'liver_disease']
    },
    {
      label: lang === 'en' ? 'Diabetes & Metabolic' : 'السكري والاستقلاب',
      options: ['diabetes_t1', 'diabetes_t2', 'anemia', 'gout']
    },
    {
      label: lang === 'en' ? 'Cardiovascular' : 'القلب والأوعية',
      options: ['hypertension']
    },
    {
      label: lang === 'en' ? 'Mental Health' : 'الصحة النفسية',
      options: ['depression_mdd', 'depression_bipolar', 'depression_sad', 'depression_postpartum']
    },
    {
      label: lang === 'en' ? 'Neurology & Pain' : 'الأعصاب والألم',
      options: ['headache_migraine', 'headache_tension', 'arthritis_ra', 'arthritis_oa']
    },
    {
      label: lang === 'en' ? 'Infections & Immunity' : 'العدوى والمناعة',
      options: ['respiratory_infection', 'asthma', 'uti', 'weak_immunity']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.condition) onSubmit(formData);
  };

  const handleLabChange = (lab: string, value: string) => {
    setFormData({
      ...formData,
      labs: { ...formData.labs, [lab]: value ? Number(value) : undefined }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-card rounded-3xl shadow-xl shadow-purple-900/5 p-8 md:p-10 max-w-4xl mx-auto border border-purple-50 dark:border-slate-700 transition-colors duration-300">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-700 pb-6">
        <div className="p-3.5 bg-primary-50 dark:bg-primary-900/30 rounded-2xl text-primary-600 dark:text-primary-400">
          <User size={28} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{t.personal}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
        <div className="group">
          <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2 group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400 transition-colors">{t.name}</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all duration-200"
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t.age}</label>
          <input
            type="number"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all duration-200"
            onChange={e => setFormData({...formData, age: Number(e.target.value)})}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t.weight}</label>
          <input
            type="number"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all duration-200"
            onChange={e => setFormData({...formData, weight: Number(e.target.value)})}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t.height}</label>
          <input
            type="number"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all duration-200"
            onChange={e => setFormData({...formData, height: Number(e.target.value)})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t.gender}</label>
          <select 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all duration-200 appearance-none"
            onChange={e => setFormData({...formData, gender: e.target.value as 'male'|'female'})}
          >
            <option value="male">{t.male}</option>
            <option value="female">{t.female}</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">{t.condition}</label>
          <div className="relative">
            <Activity className="absolute left-4 top-3.5 text-primary-500" size={20} />
            <select 
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all duration-200 appearance-none"
              onChange={e => setFormData({...formData, condition: e.target.value})}
            >
              <option value="">-- {t.condition} --</option>
              {diseaseGroups.map(group => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map(key => (
                    DISEASE_DATA[key] && (
                      <option key={key} value={key}>{DISEASE_DATA[key][lang].name}</option>
                    )
                  ))}
                </optgroup>
              ))}
            </select>
            <div className="absolute right-4 top-4 pointer-events-none text-slate-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-700 pb-6 pt-2">
        <div className="p-3.5 bg-purple-50 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400">
          <Beaker size={28} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{t.labs}</h2>
      </div>

      {/* General Labs */}
      <div className="mb-8 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/30">
        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-slate-400 rounded-full"></span> General
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { id: 'hemoglobin', label: 'Hemoglobin (g/dL)' },
            { id: 'hba1c', label: 'HbA1c (%)' },
            { id: 'wbc', label: 'WBC' },
            { id: 'ferritin', label: 'Ferritin' }
          ].map(lab => (
            <div key={lab.id}>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">{lab.label}</label>
              <input
                type="number"
                step="0.1"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none text-sm transition-colors"
                onChange={e => handleLabChange(lab.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Cardiovascular Health Panel */}
      <div className="mb-8 p-6 rounded-2xl border border-rose-100 dark:border-rose-900/50 bg-rose-50/30 dark:bg-rose-900/10">
        <h3 className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-rose-500 rounded-full"></span> {t.cardioPanel}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { id: 'systolic_bp', label: 'Systolic BP (mmHg)' },
            { id: 'diastolic_bp', label: 'Diastolic BP (mmHg)' }
          ].map(lab => (
            <div key={lab.id} className="col-span-1">
              <label className="block text-xs font-semibold text-rose-600/70 dark:text-rose-400/70 mb-1.5">{lab.label}</label>
              <input
                type="number"
                step="1"
                className="w-full px-3 py-2 rounded-lg border border-rose-200 dark:border-rose-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none text-sm transition-colors"
                onChange={e => handleLabChange(lab.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Immunity Panel (New) */}
      <div className="mb-8 p-6 rounded-2xl border border-teal-100 dark:border-teal-900/50 bg-teal-50/30 dark:bg-teal-900/10">
        <h3 className="text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-teal-500 rounded-full"></span> {t.immunityPanel}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { id: 'wbc', label: 'WBC (x10^9/L)' }, // Re-using WBC for specific panel
            { id: 'ferritin', label: 'Ferritin (ng/mL)' }, // Re-using Ferritin
            { id: 'crp', label: 'CRP (mg/L)' },
            { id: 'esr', label: 'ESR (mm/hr)' }
          ].map(lab => (
            <div key={lab.id}>
              <label className="block text-xs font-semibold text-teal-600/70 dark:text-teal-400/70 mb-1.5">{lab.label}</label>
              <input
                type="number"
                step="0.1"
                className="w-full px-3 py-2 rounded-lg border border-teal-200 dark:border-teal-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none text-sm transition-colors"
                onChange={e => handleLabChange(lab.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Renal Panel */}
      <div className="mb-8 p-6 rounded-2xl border border-primary-100 dark:border-primary-900/50 bg-primary-50/30 dark:bg-primary-900/10">
        <h3 className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-primary-500 rounded-full"></span> {t.renalPanel}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { id: 'creatinine', label: 'Creatinine (mg/dL)' },
            { id: 'bun', label: 'BUN (mg/dL)' },
            { id: 'potassium', label: 'Potassium (mEq/L)' },
            { id: 'sodium', label: 'Sodium (mEq/L)' },
            { id: 'phosphorus', label: 'Phosphorus (mg/dL)' },
            { id: 'calcium', label: 'Calcium (mg/dL)' },
            { id: 'albumin', label: 'Albumin (g/dL)' },
            { id: 'uacr', label: 'UACR (mg/g)' },
            { id: 'bicarbonate', label: 'Bicarbonate (mEq/L)' }
          ].map(lab => (
            <div key={lab.id}>
              <label className="block text-xs font-semibold text-primary-600/70 dark:text-primary-400/70 mb-1.5">{lab.label}</label>
              <input
                type="number"
                step="0.01"
                className="w-full px-3 py-2 rounded-lg border border-primary-200 dark:border-primary-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none text-sm transition-colors"
                onChange={e => handleLabChange(lab.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Liver Panel */}
      <div className="mb-10 p-6 rounded-2xl border border-orange-100 dark:border-orange-900/50 bg-orange-50/30 dark:bg-orange-900/10">
        <h3 className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span> {t.liverPanel}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { id: 'ast', label: 'AST (U/L)' },
            { id: 'alt', label: 'ALT (U/L)' },
            { id: 'alp', label: 'ALP (U/L)' },
            { id: 'ggt', label: 'GGT (U/L)' },
            { id: 'bilirubin', label: 'Total Bilirubin (mg/dL)' },
            { id: 'inr', label: 'INR' },
            { id: 'platelets', label: 'Platelets' }
          ].map(lab => (
            <div key={lab.id}>
              <label className="block text-xs font-semibold text-orange-600/70 dark:text-orange-400/70 mb-1.5">{lab.label}</label>
              <input
                type="number"
                step="0.1"
                className="w-full px-3 py-2 rounded-lg border border-orange-200 dark:border-orange-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none text-sm transition-colors"
                onChange={e => handleLabChange(lab.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      <button 
        type="submit"
        className="w-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 group text-lg"
      >
        <span>{t.submit}</span>
        <ChevronRight className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} size={20} />
      </button>
    </form>
  );
};