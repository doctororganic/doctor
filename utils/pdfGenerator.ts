import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { UserData, DiseaseContent } from '../types';

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

  // Overview
  doc.setFontSize(14);
  doc.setTextColor(0, 80, 150);
  doc.text("Condition Overview", 14, yPos);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  const overviewLines = doc.splitTextToSize(data.overview, 180);
  doc.text(overviewLines, 14, yPos + 6);
  yPos += 10 + (overviewLines.length * 5);

  // Lifestyle
  doc.setFontSize(14);
  doc.setTextColor(0, 80, 150);
  doc.text("Lifestyle Recommendations", 14, yPos);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  yPos += 6;
  data.lifestyle_modifications.forEach(item => {
    doc.text(`• ${item}`, 14, yPos);
    yPos += 5;
  });
  yPos += 5;

  // Workout Plan
  doc.setFontSize(14);
  doc.setTextColor(0, 80, 150);
  doc.text("Workout Plan", 14, yPos);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  yPos += 6;
  data.workout_plan.forEach(item => {
    doc.text(`• ${item}`, 14, yPos);
    yPos += 5;
  });
  yPos += 5;

  // Nutrition Table
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