import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { UserData, DiseaseContent } from '../types';
import { calculateCrCl, getCKDStage, analyzeRenalHealth, analyzeLiverHealth, analyzeBloodPressure } from '../utils/healthCalculators';

export const generatePDF = (userData: UserData, data: DiseaseContent, lang: 'en' | 'ar') => {
  const doc = new jsPDF();
  const isAr = lang === 'ar';
  
  const title = isAr ? `Report: ${data.name}` : `Health Report: ${data.name}`;
  
  doc.setFontSize(20);
  doc.text("Your guide to healthy life Consultation", 14, 20);
  
  doc.setFontSize(12);
  doc.text(`Patient: ${userData.name}`, 14, 30);
  doc.text(`Age: ${userData.age} | Weight: ${userData.weight}kg | Height: ${userData.height}cm`, 14, 36);
  
  // BMI
  const heightM = userData.height / 100;
  const bmi = (userData.weight / (heightM * heightM)).toFixed(1);
  doc.text(`BMI: ${bmi}`, 14, 42);

  let yPos = 55;

  // Perform analyses
  const renalAnalysis = analyzeRenalHealth(userData);
  const liverAnalysis = analyzeLiverHealth(userData);
  const bpAnalysis = analyzeBloodPressure(userData);

  // Kidney Function & Electrolytes Analysis
  if (renalAnalysis.crCl !== null || renalAnalysis.warnings.length > 0 || renalAnalysis.recs.length > 0) {
    yPos += 10;
    if (yPos > 250) { // Check for page overflow
      doc.addPage();
      yPos = 20;
    }
    doc.setFontSize(14);
    doc.setTextColor(0, 80, 150);
    doc.text(isAr ? "تحليل وظائف الكلى والكهارل" : "Kidney Function & Electrolytes Analysis", 14, yPos);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    yPos += 6;

    if (renalAnalysis.crCl !== null) {
      doc.text(`${isAr ? 'معدل الترشيح (eGFR)' : 'Estimated GFR'}: ${renalAnalysis.crCl} mL/min`, 14, yPos);
      yPos += 5;
      doc.text(`${isAr ? 'المرحلة' : 'Stage'}: ${getCKDStage(renalAnalysis.crCl)}`, 14, yPos);
      yPos += 5;
    }

    if (renalAnalysis.warnings.length > 0) {
      yPos += 5;
      doc.setFontSize(12);
      doc.setTextColor(150, 0, 0); // Red color for warnings
      doc.text(isAr ? "تنبيهات هامة:" : "Important Warnings:", 14, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      yPos += 6;
      renalAnalysis.warnings.forEach(w => {
        const warningLines = doc.splitTextToSize(`• ${w}`, 180);
        doc.text(warningLines, 14, yPos);
        yPos += warningLines.length * 5;
      });
    }

    if (renalAnalysis.recs.length > 0) {
      yPos += 5;
      doc.setFontSize(12);
      doc.setTextColor(0, 100, 0); // Green color for recommendations
      doc.text(isAr ? "توصيات:" : "Recommendations:", 14, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      yPos += 6;
      renalAnalysis.recs.forEach(r => {
        const recLines = doc.splitTextToSize(`• ${r}`, 180);
        doc.text(recLines, 14, yPos);
        yPos += recLines.length * 5;
      });
    }
  }

  // Liver Function Analysis
  if (liverAnalysis !== null && (liverAnalysis.pattern || liverAnalysis.warnings.length > 0 || liverAnalysis.recs.length > 0)) {
    yPos += 10;
    if (yPos > 250) { // Check for page overflow
      doc.addPage();
      yPos = 20;
    }
    doc.setFontSize(14);
    doc.setTextColor(0, 80, 150);
    doc.text(isAr ? "تحليل وظائف الكبد" : "Liver Function Analysis", 14, yPos);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    yPos += 6;

    if (liverAnalysis.pattern) {
      doc.text(`${isAr ? 'النمط المكتشف' : 'Pattern Detected'}: ${liverAnalysis.pattern}`, 14, yPos);
      yPos += 5;
    }

    if (liverAnalysis.warnings.length > 0) {
      yPos += 5;
      doc.setFontSize(12);
      doc.setTextColor(150, 0, 0); // Red color for warnings
      doc.text(isAr ? "تنبيهات هامة:" : "Important Warnings:", 14, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      yPos += 6;
      liverAnalysis.warnings.forEach(w => {
        const warningLines = doc.splitTextToSize(`• ${w}`, 180);
        doc.text(warningLines, 14, yPos);
        yPos += warningLines.length * 5;
      });
    }

    if (liverAnalysis.recs.length > 0) {
      yPos += 5;
      doc.setFontSize(12);
      doc.setTextColor(0, 100, 0); // Green color for recommendations
      doc.text(isAr ? "توصيات:" : "Recommendations:", 14, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      yPos += 6;
      liverAnalysis.recs.forEach(r => {
        const recLines = doc.splitTextToSize(`• ${r}`, 180);
        doc.text(recLines, 14, yPos);
        yPos += recLines.length * 5;
      });
    }
  }

  // Blood Pressure Analysis
  if (bpAnalysis !== null && (bpAnalysis.stage || bpAnalysis.warnings.length > 0 || bpAnalysis.recs.length > 0)) {
    yPos += 10;
    if (yPos > 250) { // Check for page overflow
      doc.addPage();
      yPos = 20;
    }
    doc.setFontSize(14);
    doc.setTextColor(0, 80, 150);
    doc.text(isAr ? "تحليل ضغط الدم" : "Blood Pressure Analysis", 14, yPos);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    yPos += 6;

    if (bpAnalysis.stage) {
      doc.text(`${isAr ? 'فئة ضغط الدم' : 'BP Category'}: ${bpAnalysis.stage}`, 14, yPos);
      yPos += 5;
      if (userData.labs.systolic_bp && userData.labs.diastolic_bp) {
        doc.text(`${isAr ? 'القياس' : 'Reading'}: ${userData.labs.systolic_bp}/${userData.labs.diastolic_bp} mmHg`, 14, yPos);
        yPos += 5;
      }
    }

    if (bpAnalysis.warnings.length > 0) {
      yPos += 5;
      doc.setFontSize(12);
      doc.setTextColor(150, 0, 0); // Red color for warnings
      doc.text(isAr ? "تنبيهات هامة:" : "Important Warnings:", 14, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      yPos += 6;
      bpAnalysis.warnings.forEach(w => {
        const warningLines = doc.splitTextToSize(`• ${w}`, 180);
        doc.text(warningLines, 14, yPos);
        yPos += warningLines.length * 5;
      });
    }

    if (bpAnalysis.recs.length > 0) {
      yPos += 5;
      doc.setFontSize(12);
      doc.setTextColor(0, 100, 0); // Green color for recommendations
      doc.text(isAr ? "توصيات:" : "Recommendations:", 14, yPos);
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      yPos += 6;
      bpAnalysis.recs.forEach(r => {
        const recLines = doc.splitTextToSize(`• ${r}`, 180);
        doc.text(recLines, 14, yPos);
        yPos += recLines.length * 5;
      });
    }
  }


  // Overview
  yPos += 10;
  if (yPos > 250) { // Check for page overflow
    doc.addPage();
    yPos = 20;
  }
  doc.setFontSize(14);
  doc.setTextColor(0, 80, 150);
  doc.text("Condition Overview", 14, yPos);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  const overviewLines = doc.splitTextToSize(data.overview, 180);
  doc.text(overviewLines, 14, yPos + 6);
  yPos += 10 + (overviewLines.length * 5);

  // Lifestyle
  yPos += 10;
  if (yPos > 250) { // Check for page overflow
    doc.addPage();
    yPos = 20;
  }
  doc.setFontSize(14);
  doc.setTextColor(0, 80, 150);
  doc.text("Lifestyle Recommendations", 14, yPos);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  yPos += 6;
  data.lifestyle_modifications.forEach(item => {
    const itemLines = doc.splitTextToSize(`• ${item}`, 180);
    doc.text(itemLines, 14, yPos);
    yPos += itemLines.length * 5;
  });
  yPos += 5;

  // Workout Plan
  yPos += 10;
  if (yPos > 250) { // Check for page overflow
    doc.addPage();
    yPos = 20;
  }
  doc.setFontSize(14);
  doc.setTextColor(0, 80, 150);
  doc.text("Workout Plan", 14, yPos);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  yPos += 6;
  data.workout_plan.forEach(item => {
    const itemLines = doc.splitTextToSize(`• ${item}`, 180);
    doc.text(itemLines, 14, yPos);
    yPos += itemLines.length * 5;
  });
  yPos += 5;

  // Nutrition Table
  yPos += 10;
  if (yPos > 250) { // Check for page overflow
    doc.addPage();
    yPos = 20;
  }
  doc.setFontSize(14);
  doc.setTextColor(0, 80, 150);
  doc.text("Nutritional Guidelines", 14, yPos);
  yPos += 6;
  
  autoTable(doc, {
    startY: yPos,
    head: [['Allowed Foods', 'Foods to Avoid']],
    body: [
      [data.nutrition.allowed.join(', '), data.nutrition.avoid.join(', ')]
    ],
    theme: 'grid',
    headStyles: { fillColor: [22, 163, 74] }
  });

  // @ts-ignore
  yPos = doc.lastAutoTable.finalY + 15;

  // Meds & Supplements
  if (yPos > 250) { // Check for page overflow
    doc.addPage();
    yPos = 20;
  }
  doc.setFontSize(14);
  doc.setTextColor(0, 80, 150);
  doc.text("Medications & Supplements Guide", 14, yPos);
  yPos += 6;

  const medsBody = [
    ...data.medications.map(m => [m.name, m.dose, m.notes]),
    ...data.supplements.map(s => [s.name, s.dose, s.notes])
  ];

  autoTable(doc, {
    startY: yPos,
    head: [['Name', 'Dose', 'Notes']],
    body: medsBody,
    theme: 'striped'
  });

  doc.save(`HealthGuide_Report_${userData.name.replace(' ', '_')}.pdf`);
};