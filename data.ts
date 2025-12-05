

import { DiseaseDatabase } from './types';

export const DISEASE_DATA: DiseaseDatabase = {
  // --- RENAL ---
  renal_ckd: {
    en: {
      name: "Chronic Kidney Disease (Comprehensive)",
      overview: "Advanced management based on KDIGO 2025 guidelines. Focuses on delaying progression, managing electrolytes, and adjusting medication dosing for safety.",
      symptoms: ["Edema", "Fatigue", "Foamy urine", "Hypertension", "Nausea (uremia)", "Itching"],
      lifestyle_modifications: [
        "Weigh daily: Call doctor if >2kg gain in 48h.",
        "BP Target: <120/80 mmHg.",
        "Salt restriction: <2g sodium/day.",
        "Strictly avoid NSAIDs (Ibuprofen, Naproxen).",
        "Vaccinations: Pneumococcal, Hep B, Flu."
      ],
      workout_plan: [
        "Aerobic: Walking 30 mins, 5 days/week (improves BP control).",
        "Resistance: Light weights to prevent muscle wasting (sarcopenia).",
        "Avoid high-intensity if K+ is > 5.5.",
        "Stay hydrated (unless fluid restricted)."
      ],
      nutrition: {
        allowed: ["White bread/rice (lower phos)", "Egg whites", "Apples", "Berries", "Cabbage", "Olive oil"],
        avoid: ["Star fruit (Neurotoxic)", "Dark colas (Phos)", "Processed meats", "Salt substitutes (KCl)"],
        tips: ["Leach potatoes to reduce potassium.", "Choose 'Phos-free' additives.", "Cook with herbs instead of salt."]
      },
      medications: [
        { name: "SGLT2i", dose: "10mg", notes: "Dapagliflozin/Empagliflozin (First line for CKD)." },
        { name: "ACEi/ARB", dose: "Titrated", notes: "Max tolerated dose for proteinuria reduction." },
        { name: "Phosphate Binders", dose: "With meals", notes: "Sevelamer or Calcium Acetate." }
      ],
      supplements: [
        { name: "Renal Multivitamin", dose: "1 daily", notes: "B-Complex & C (Dialyvite/Renavite)." },
        { name: "Vitamin D", dose: "Check levels", notes: "Cholecalciferol or Calcitriol (active)." }
      ],
      meal_plan: [
        { day: 1, meals: [{ type: "Breakfast", description: "Cream of wheat with blueberries and almond milk." }, { type: "Lunch", description: "Grilled chicken salad with olive oil (low salt)." }, { type: "Dinner", description: "Baked cod with white rice and green beans." }] },
        { day: 2, meals: [{ type: "Breakfast", description: "Scrambled egg whites with white toast." }, { type: "Lunch", description: "Turkey burger (no cheese) with lettuce wrap." }, { type: "Dinner", description: "Pasta with garlic and olive oil, side of cauliflower." }] },
        { day: 3, meals: [{ type: "Breakfast", description: "White toast with low-sodium butter and jam." }, { type: "Lunch", description: "Egg salad (using egg whites) on white bread." }, { type: "Dinner", description: "Stir-fried bell peppers and onions with shrimp and white rice." }] },
        { day: 4, meals: [{ type: "Breakfast", description: "Puffed rice cereal with almond milk." }, { type: "Lunch", description: "Leftover shrimp stir-fry." }, { type: "Dinner", description: "Roasted chicken (skinless) with steamed carrots and zucchini." }] },
        { day: 5, meals: [{ type: "Breakfast", description: "Pancakes (from scratch, low phos powder) with berries." }, { type: "Lunch", description: "Low-sodium tuna salad with crackers." }, { type: "Dinner", description: "Small portion of lean beef with mashed cauliflower." }] },
        { day: 6, meals: [{ type: "Breakfast", description: "Apple slices with a small amount of peanut butter." }, { type: "Lunch", description: "Leftover beef and cauliflower." }, { type: "Dinner", description: "Chicken noodle soup (using low-sodium broth)." }] },
        { day: 7, meals: [{ type: "Breakfast", description: "Scrambled egg whites with spinach." }, { type: "Lunch", description: "Cucumber and bell pepper slices with a light vinaigrette." }, { type: "Dinner", description: "Baked tilapia with lemon, white rice, and steamed asparagus." }] }
      ],
      honey_advice: "Safe sweetener. Low potassium content compared to molasses/maple syrup. Use in moderation.",
      special_tables: {
        nutrition_rules: [
          { target: "Protein (CKD 3-4)", recommendation: "0.6-0.8 g/kg/day" },
          { target: "Protein (Dialysis)", recommendation: "1.2 g/kg/day" },
          { target: "Phosphorus", recommendation: "800-1000 mg/day" },
          { target: "Potassium", recommendation: "< 2000 mg/day (if hyperkalemic)" },
          { target: "Sodium", recommendation: "< 2000 mg/day" }
        ],
        drug_adjustments: [
          { drug: "Metformin", normal: "Standard", crcl30_50: "Max 1000mg", crcl10_30: "CONTRAINDICATED", crcl_less_10: "CONTRAINDICATED" },
          { drug: "Gabapentin", normal: "900-3600mg", crcl30_50: "400-1400mg", crcl10_30: "200-700mg", crcl_less_10: "100-300mg (post-HD)" },
          { drug: "Allopurinol", normal: "300mg", crcl30_50: "200mg", crcl10_30: "100mg", crcl_less_10: "100mg" },
          { drug: "Spironolactone", normal: "25-50mg", crcl30_50: "25mg (Caution)", crcl10_30: "AVOID", crcl_less_10: "AVOID" },
          { drug: "Rivaroxaban", normal: "20mg", crcl30_50: "15mg", crcl10_30: "15mg", crcl_less_10: "AVOID" }
        ],
        lab_ranges: [
          { test: "Creatinine", normal: "0.7-1.2", mild: "1.3-1.9", moderate: "2.0-5.0", critical: "> 5.0" },
          { test: "BUN", normal: "7-20", mild: "21-40", moderate: "41-80", critical: "> 80" },
          { test: "Potassium", normal: "3.5-5.0", mild: "5.1-5.9", moderate: "6.0-6.9", critical: "≥ 7.0 or < 2.5" },
          { test: "Bicarbonate", normal: "22-29", mild: "18-21", moderate: "15-17", critical: "< 10" },
          { test: "Phosphorus", normal: "2.5-4.5", mild: "4.6-5.5", moderate: "5.6-8.0", critical: "> 8.0" }
        ],
        clinical_syndromes: [
          { condition: "Hyperkalemia", drugs: "Patiromer, Lokelma", non_drug: "Low K Diet", monitoring: "ECG if >6.0" },
          { condition: "Metabolic Acidosis", drugs: "Sodium Bicarbonate 650mg TID", non_drug: "-", monitoring: "Target HCO3 22-24" },
          { condition: "CKD-MBD", drugs: "Phosphate Binders, Calcitriol", non_drug: "Low Phos Diet", monitoring: "PTH, Ca, P" }
        ],
        symptoms_guide: [
          { symptom: "Foamy Urine + Swelling", meaning: "Nephrotic Syndrome", action: "See doctor within 1 week" },
          { symptom: "Urine <400ml/day", meaning: "AKI / Obstruction", action: "ER Immediately" },
          { symptom: "Muscle weakness + palpitations", meaning: "Severe Hyperkalemia", action: "ER Immediately" }
        ],
        red_flags: [
          "Little or no urine for >12-24h",
          "Severe flank pain + fever + vomiting",
          "Sudden swelling + shortness of breath",
          "Confusion, seizures, coma"
        ]
      }
    },
    ar: {
      name: "أمراض الكلى المزمنة (شامل)",
      overview: "إدارة متقدمة بناءً على إرشادات KDIGO 2025. التركيز على تأخير تطور المرض وضبط الأدوية.",
      symptoms: ["تورم", "إعياء", "بول رغوي", "ارتفاع ضغط الدم", "غثيان", "حكة"],
      lifestyle_modifications: [
        "وزن يومي: اتصل بالطبيب إذا زاد الوزن 2 كجم في يومين.",
        "ضغط الدم <120/80.",
        "ملح <2 جم صوديوم/يوم.",
        "تجنب المسكنات (بروفين) تماماً.",
        "تلقي التطعيمات (انفلونزا، التهاب كبدي ب)."
      ],
      workout_plan: [
        "مشي 30 دقيقة، 5 أيام/أسبوع.",
        "أوزان خفيفة للحفاظ على العضلات.",
        "تجنب الرياضة العنيفة إذا البوتاسيوم مرتفع.",
        "شرب الماء حسب الحاجة (إلا إذا كان محدداً)."
      ],
      nutrition: {
        allowed: ["أرز/خبز أبيض", "بياض بيض", "تفاح/توت", "ملفوف/زهرة", "زيت زيتون"],
        avoid: ["فاكهة النجمة", "كولا سوداء", "لحوم مصنعة", "موالح"],
        tips: ["نقع البطاطس لتقليل البوتاسيوم.", "استخدام البهارات بدل الملح."]
      },
      medications: [
        { name: "SGLT2i", dose: "10 مجم", notes: "داباغليفلوزين (الخيار الأول)." },
        { name: "ACEi/ARB", dose: "حسب التحمل", notes: "لحماية الكلى." },
        { name: "رابطات الفوسفات", dose: "مع الأكل", notes: "سيفيلامير." }
      ],
      supplements: [
        { name: "فيتامينات كلى", dose: "حبة يومياً", notes: "خاصة بمرضى الكلى." },
        { name: "فيتامين د", dose: "حسب الفحص", notes: "نشط أو عادي." }
      ],
      meal_plan: [
        { day: 1, meals: [{ type: "الفطور", description: "كريمة القمح مع توت." }, { type: "الغداء", description: "دجاج مشوي وسلطة بزيت زيتون." }, { type: "العشاء", description: "سمك بالفرن مع أرز أبيض." }] },
        { day: 2, meals: [{ type: "الفطور", description: "بياض بيض مع توست أبيض." }, { type: "الغداء", description: "برجر ديك رومي بخس." }, { type: "العشاء", description: "مكرونة بيضاء مع ثوم وزيت." }] },
        { day: 3, meals: [{ type: "الفطور", description: "توست أبيض بزبدة قليلة الصوديوم ومربى." }, { type: "الغداء", description: "سلطة بياض بيض على خبز أبيض." }, { type: "العشاء", description: "جمبري مقلي مع فلفل وبصل وأرز أبيض." }] },
        { day: 4, meals: [{ type: "الفطور", description: "حبوب أرز منتفخة مع حليب اللوز." }, { type: "الغداء", description: "بقايا الجمبري المقلي." }, { type: "العشاء", description: "دجاج مشوي (بدون جلد) مع جزر وكوسا على البخار." }] },
        { day: 5, meals: [{ type: "Breakfast", description: "بانكيك (محضر منزلياً بمسحوق قليل الفوسفور) مع التوت." }, { type: "Lunch", description: "سلطة تونة قليلة الصوديوم مع بسكويت." }, { type: "Dinner", description: "جزء صغير من لحم البقر قليل الدهن مع قرنبيط مهروس." }] },
        { day: 6, meals: [{ type: "Breakfast", description: "شرائح تفاح مع كمية صغيرة من زبدة الفول السوداني." }, { type: "Lunch", description: "بقايا اللحم والقرنبيط." }, { type: "Dinner", description: "شوربة دجاج بالشعيرية (باستخدام مرق قليل الصوديوم)." }] },
        { day: 7, meals: [{ type: "Breakfast", description: "بياض بيض مخفوق مع سبانخ." }, { type: "Lunch", description: "شرائح خيار وفلفل مع صلصة خفيفة." }, { type: "Dinner", description: "سمك بلطي مخبوز بالليمون، أرز أبيض وهليون على البخار." }] }
      ],
      honey_advice: "بديل آمن للسكر. محتواه من البوتاسيوم منخفض.",
      special_tables: {
        nutrition_rules: [
          { target: "البروتين (مرحلة 3-4)", recommendation: "0.6-0.8 جم/كجم" },
          { target: "البروتين (غسيل)", recommendation: "1.2 جم/كجم" },
          { target: "الفوسفور", recommendation: "800-1000 مجم" },
          { target: "البوتاسيوم", recommendation: "< 2000 مجم (إذا مرتفع)" },
          { target: "الصوديوم", recommendation: "< 2000 مجم" }
        ],
        drug_adjustments: [
          { drug: "ميتفورمين", normal: "عادي", crcl30_50: "1000مجم ماكس", crcl10_30: "ممنوع", crcl_less_10: "ممنوع" },
          { drug: "جابابنتين", normal: "900-3600", crcl30_50: "400-1400", crcl10_30: "200-700", crcl_less_10: "100-300 (بعد الغسيل)" },
          { drug: "ألوبيورينول", normal: "300", crcl30_50: "200", crcl10_30: "100", crcl_less_10: "100" }
        ],
        lab_ranges: [
          { test: "الكرياتينين", normal: "0.7-1.2", mild: "1.3-1.9", moderate: "2.0-5.0", critical: "> 5.0" },
          { test: "اليوريا", normal: "7-20", mild: "21-40", moderate: "41-80", critical: "> 80" },
          { test: "البوتاسيوم", normal: "3.5-5.0", mild: "5.1-5.9", moderate: "6.0-6.9", critical: "≥ 7.0" },
          { test: "البيكربونات", normal: "22-29", mild: "18-21", moderate: "15-17", critical: "< 10" }
        ],
        clinical_syndromes: [
          { condition: "فرط البوتاسيوم", drugs: "Lokelma", non_drug: "حمية قليلة البوتاسيوم", monitoring: "تخطيط قلب" },
          { condition: "حموضة الدم", drugs: "بيكربونات الصوديوم", non_drug: "-", monitoring: "الهدف 22-24" }
        ],
        symptoms_guide: [
          { symptom: "بول رغوي + تورم", meaning: "زلال عالي (نفروسي)", action: "طبيب خلال أسبوع" },
          { symptom: "انقطاع البول", meaning: "فشل حاد/انسداد", action: "طوارئ فوراً" }
        ],
        red_flags: [
          "انقطاع البول > 12 ساعة",
          "ألم خاصرة شديد وحمى",
          "ضيق تنفس مفاجئ",
          "تشوش ذهني"
        ]
      }
    }
  },

  // --- LIVER ---
  liver_disease: {
    en: {
      name: "Liver Disease (Comprehensive)",
      overview: "Management tailored by Child-Pugh severity. Focus on preventing malnutrition (sarcopenia), managing ascites, and avoiding hepatotoxins.",
      symptoms: ["Jaundice", "Ascites", "Fatigue", "Confusion (Encephalopathy)", "Bruising"],
      lifestyle_modifications: [
        "Complete alcohol cessation.",
        "Sodium < 2000mg/day (for ascites).",
        "Eat late-evening snack to prevent muscle breakdown.",
        "Avoid raw shellfish (Vibrio risk).",
        "Vaccinate Hep A/B."
      ],
      workout_plan: [
        "Goal: Prevent sarcopenia.",
        "Resistance training essential (bands, light weights).",
        "Walking 30 mins daily.",
        "Avoid heavy straining if esophageal varices present."
      ],
      nutrition: {
        allowed: ["Lean proteins (Chicken, Fish, Tofu)", "Coffee (protective)", "Cruciferous veg", "Olive oil", "Whole grains"],
        avoid: ["Alcohol", "Raw seafood", "High sodium foods", "Saturated fats"],
        tips: ["High protein (1.2-1.5 g/kg) is vital, do not restrict unless severe encephalopathy.", "Small frequent meals (4-6/day)."]
      },
      medications: [
        { name: "Lactulose", dose: "Titrate", notes: "For encephalopathy (Goal 2-3 soft stools)." },
        { name: "Rifaximin", dose: "550mg BID", notes: "Add-on for encephalopathy." },
        { name: "Spironolactone", dose: "100mg+", notes: "For ascites (with Furosemide)." }
      ],
      supplements: [
        { name: "Vitamin D", dose: "2000 IU", notes: "Deficiency is common." },
        { name: "Zinc", dose: "50mg", notes: "Helps ammonia metabolism." },
        { name: "B-Complex", dose: "Daily", notes: "Thiamine crucial." }
      ],
      meal_plan: [
        { day: 1, meals: [{ type: "Breakfast", description: "Greek yogurt with walnuts and honey." }, { type: "Lunch", description: "Grilled chicken breast with quinoa and spinach." }, { type: "Dinner", description: "Baked salmon with asparagus." }, { type: "Late Snack", description: "Protein shake or peanut butter toast." }] },
        { day: 2, meals: [{ type: "Breakfast", description: "Oatmeal made with milk and flaxseeds." }, { type: "Lunch", description: "Lentil soup with whole wheat roll." }, { type: "Dinner", description: "Tofu stir-fry with mixed vegetables." }, { type: "Late Snack", description: "Cottage cheese with fruit." }] },
        { day: 3, meals: [{ type: "Breakfast", description: "Scrambled eggs with whole-wheat toast." }, { type: "Lunch", description: "Quinoa salad with chickpeas and vegetables." }, { type: "Dinner", description: "Turkey meatballs with zucchini noodles." }, { type: "Late Snack", description: "A glass of milk." }] },
        { day: 4, meals: [{ type: "Breakfast", description: "Smoothie with protein powder, spinach, and banana." }, { type: "Lunch", description: "Leftover turkey meatballs." }, { type: "Dinner", description: "Grilled fish tacos on corn tortillas with cabbage slaw." }, { type: "Late Snack", description: "Handful of almonds." }] },
        { day: 5, meals: [{ type: "Breakfast", description: "Cottage cheese with peaches." }, { type: "Lunch", description: "Chicken and vegetable skewers." }, { type: "Dinner", description: "Bean chili (low sodium)." }, { type: "Late Snack", description: "Greek yogurt." }] },
        { day: 6, meals: [{ type: "Breakfast", description: "Oatmeal with walnuts and a drizzle of honey." }, { type: "Lunch", description: "Leftover chili." }, { type: "Dinner", description: "Baked chicken with roasted sweet potatoes." }, { type: "Late Snack", description: "Hard-boiled egg." }] },
        { day: 7, meals: [{ type: "Breakfast", description: "Whole-wheat pancakes with berries." }, { type: "Lunch", description: "Tuna salad sandwich on whole wheat." }, { type: "Dinner", description: "Lean ground beef stir-fry with broccoli." }, { type: "Late Snack", description: "Apple with peanut butter." }] }
      ],
      honey_advice: "Good energy source. Antioxidant properties may protect liver cells. 1-2 tbsp/day.",
      special_tables: {
        drug_adjustments: [
          { drug: "Acetaminophen", adjustment_a: "Max 2-3g/day", adjustment_b: "Max 2g/day", adjustment_c: "Avoid if possible", comments: "Safest analgesic if limited." },
          { drug: "NSAIDs", adjustment_a: "Avoid", adjustment_b: "Contraindicated", adjustment_c: "Contraindicated", comments: "High risk of kidney failure/bleeding." },
          { drug: "Statins", adjustment_a: "Start low", adjustment_b: "Use caution", adjustment_c: "Avoid", comments: "Generally safe/beneficial in mild disease." },
          { drug: "Benzodiazepines", adjustment_a: "Avoid", adjustment_b: "Avoid", adjustment_c: "Avoid", comments: "Precipitates encephalopathy." }
        ],
        lab_ranges: [
          { test: "ALT", normal: "7-55", mild: "Elevated", moderate: ">5x", critical: ">1000 (Acute Injury)" },
          { test: "AST", normal: "8-48", mild: "Elevated", moderate: "AST>ALT (Alcohol)", critical: ">1000" },
          { test: "Bilirubin", normal: "0.3-1.2", mild: "Jaundice", moderate: ">3.0", critical: ">15" },
          { test: "INR", normal: "0.9-1.1", mild: "1.2-1.5", moderate: "1.5-2.0", critical: ">2.0 (Failure Risk)" },
          { test: "Albumin", normal: "3.5-5.5", mild: "3.0-3.5", moderate: "2.5-3.0", critical: "<2.5 (Synthetic dysfunction)" }
        ],
        clinical_syndromes: [
          { condition: "Ascites", drugs: "Spironolactone + Furosemide", non_drug: "Sodium < 2000mg", monitoring: "Daily weights" },
          { condition: "Encephalopathy", drugs: "Lactulose, Rifaximin", non_drug: "Treat infections/constipation", monitoring: "Mental status" },
          { condition: "Varices", drugs: "Beta-blockers (Nadolol)", non_drug: "Band ligation", monitoring: "Endoscopy" }
        ],
        red_flags: [
          "New confusion (Encephalopathy)",
          "Vomiting blood (Variceal bleed)",
          "Black tarry stools",
          "Rapid abdominal swelling + fever (SBP)",
          "Deep jaundice + bleeding gums"
        ]
      }
    },
    ar: {
      name: "أمراض الكبد (شامل)",
      overview: "إدارة تعتمد على شدة المرض (تشايلد-بو). التركيز على منع سوء التغذية، إدارة الاستسقاء، وتجنب سموم الكبد.",
      symptoms: ["يرقان", "استسقاء بطن", "تعب", "تشوش ذهني", "سهولة الكدمات"],
      lifestyle_modifications: [
        "منع الكحول تماماً.",
        "صوديوم < 2000 مجم (للاستسقاء).",
        "وجبة خفيفة قبل النوم لمنع تكسر العضلات.",
        "تجنب المحار الني.",
        "تطعيمات الكبد A و B."
      ],
      workout_plan: [
        "الهدف: منع ضمور العضلات.",
        "تمارين مقاومة (أربطة، أوزان خفيفة).",
        "مشي 30 دقيقة يومياً.",
        "تجنب حمل الأثقال الثقيلة إذا وجد دوالي مريء."
      ],
      nutrition: {
        allowed: ["بروتين (دجاج، سمك، توفو)", "قهوة (مفيدة)", "خضار صليبية", "زيت زيتون"],
        avoid: ["كحول", "أكل ني", "ملح عالي", "دهون مشبعة"],
        tips: ["البروتين (1.2-1.5 جم/كجم) ضروري جداً.", "وجبات صغيرة ومتكررة."]
      },
      medications: [
        { name: "لاكتيلوز", dose: "حسب الاستجابة", notes: "للاعتلال الدماغي (2-3 مرات إخراج)." },
        { name: "ريفاكسمين", dose: "550 مرتين", notes: "مضاف للاكتيلوز." },
        { name: "سبيرونولاكتون", dose: "100 مجم+", notes: "للاستسقاء." }
      ],
      supplements: [
        { name: "فيتامين د", dose: "2000 وحدة", notes: "النقص شائع." },
        { name: "زنك", dose: "50 مجم", notes: "يساعد في الأمونيا." },
        { name: "فيتامين ب", dose: "يومياً", notes: "الثيامين مهم." }
      ],
      meal_plan: [
        { day: 1, meals: [{ type: "الفطور", description: "زبادي يوناني وعسل." }, { type: "الغداء", description: "دجاج كينوا وسبانخ." }, { type: "العشاء", description: "سمك وهليون." }, { type: "سناك ليلي", description: "مخفوق بروتين." }] },
        { day: 2, meals: [{ type: "الفطور", description: "شوفان وحليب." }, { type: "الغداء", description: "شوربة عدس." }, { type: "العشاء", description: "توفو وخضار." }, { type: "سناك ليلي", description: "جبن قريش وفاكهة." }] },
        { day: 3, meals: [{ type: "الفطور", description: "بيض مخفوق مع خبز قمح كامل." }, { type: "الغداء", description: "سلطة كينوا مع حمص وخضروات." }, { type: "العشاء", description: "كرات لحم ديك رومي مع نودلز الكوسا." }, { type: "سناك ليلي", description: "كوب حليب." }] },
        { day: 4, meals: [{ type: "الفطور", description: "سموذي مع مسحوق بروتين، سبانخ وموز." }, { type: "الغداء", description: "بقايا كرات لحم الديك الرومي." }, { type: "العشاء", description: "تاكو سمك مشوي في خبز التورتيا مع سلطة ملفوف." }, { type: "سناك ليلي", description: "حفنة من اللوز." }] },
        { day: 5, meals: [{ type: "الفطور", description: "جبن قريش مع خوخ." }, { type: "الغداء", description: "أسياخ دجاج وخضروات." }, { type: "العشاء", description: "شيلي فاصوليا (قليل الصوديوم)." }, { type: "سناك ليلي", description: "زبادي يوناني." }] },
        { day: 6, meals: [{ type: "الفطور", description: "شوفان مع جوز ورشة عسل." }, { type: "الغداء", description: "بقايا الشيلي." }, { type: "العشاء", description: "دجاج مخبوز مع بطاطا حلوة مشوية." }, { type: "سناك ليلي", description: "بيضة مسلوقة." }] },
        { day: 7, meals: [{ type: "الفطور", description: "بانكيك قمح كامل مع توت." }, { type: "الغداء", description: "ساندويتش سلطة تونة على خبز قمح كامل." }, { type: "العشاء", description: "لحم بقري مفروم قليل الدهن مقلي مع بروكلي." }, { type: "سناك ليلي", description: "تفاحة مع زبدة الفول السوداني." }] }
      ],
      honey_advice: "مصدر طاقة جيد ومضاد أكسدة للكبد. 1-2 ملعقة يومياً.",
      special_tables: {
        drug_adjustments: [
          { drug: "باراسيتامول", adjustment_a: "2-3 جم", adjustment_b: "2 جم", adjustment_c: "تجنب", comments: "الأكثر أماناً بجرعات قليلة." },
          { drug: "مسكنات NSAIDs", adjustment_a: "تجنب", adjustment_b: "ممنوع", adjustment_c: "ممنوع", comments: "خطر فشل كلوي ونزيف." },
          { drug: "ستاتين", adjustment_a: "ابدأ بجرعة قليلة", adjustment_b: "حذر", adjustment_c: "تجنب", comments: "آمن غالباً في المراحل الأولى." }
        ],
        lab_ranges: [
          { test: "ALT", normal: "7-55", mild: "مرتفع", moderate: ">5 أضعاف", critical: ">1000 (تسمم/فيروسي حاد)" },
          { test: "Bilirubin", normal: "0.3-1.2", mild: "يرقان", moderate: ">3.0", critical: ">15" },
          { test: "INR", normal: "0.9-1.1", mild: "1.2-1.5", moderate: "1.5-2.0", critical: ">2.0 (خطر فشل)" },
          { test: "Albumin", normal: "3.5-5.5", mild: "3.0-3.5", moderate: "2.5-3.0", critical: "<2.5" }
        ],
        clinical_syndromes: [
          { condition: "الاستسقاء", drugs: "سبيرونولاكتون", non_drug: "ملح < 2جم", monitoring: "وزن يومي" },
          { condition: "الاعتلال الدماغي", drugs: "لاكتيلوز", non_drug: "علاج الإمساك", monitoring: "الحالة الذهنية" }
        ],
        red_flags: [
          "تشوش ذهني جديد",
          "قيء دموي",
          "براز أسود",
          "انتفاخ بطن سريع وحمى",
          "يرقان عميق مع نزيف لثة"
        ]
      }
    }
  },

  // --- DIABETES ---
  diabetes_t2: {
    en: {
      name: "Type 2 Diabetes",
      overview: "Chronic metabolic condition characterized by insulin resistance. Management goals: HbA1c < 7%.",
      symptoms: ["Thirst", "Frequent urination", "Blurred vision", "Fatigue"],
      lifestyle_modifications: ["Weight loss (5-10%).", "Carb counting.", "Monitor blood glucose.", "Foot care."],
      workout_plan: ["150 min/week moderate aerobic.", "Resistance 2-3x/week.", "Post-meal walks."],
      nutrition: { allowed: ["Non-starchy veggies", "Legumes", "Nuts", "Fish"], avoid: ["Sugary drinks", "White bread", "Processed snacks"], tips: ["Plate method: 1/2 veg, 1/4 protein, 1/4 carb."] },
      medications: [{ name: "Metformin", dose: "500-2000mg", notes: "With meals." }, { name: "GLP-1 RA", dose: "Weekly", notes: "Ozempic/Mounjaro." }],
      supplements: [{ name: "Berberine", dose: "500mg TID", notes: "Natural glucose control." }, { name: "Alpha-Lipoic Acid", dose: "600mg", notes: "Neuropathy." }],
      meal_plan: [
        { day: 1, meals: [{ type: "Breakfast", description: "Veggie omelet." }, { type: "Lunch", description: "Large salad with grilled chicken." }, { type: "Dinner", description: "Baked salmon with steamed broccoli." }] },
        { day: 2, meals: [{ type: "Breakfast", description: "Greek yogurt with berries and nuts." }, { type: "Lunch", description: "Lentil soup." }, { type: "Dinner", description: "Turkey chili with beans." }] },
        { day: 3, meals: [{ type: "Breakfast", description: "Oatmeal with flax seeds and walnuts." }, { type: "Lunch", description: "Leftover chili." }, { type: "Dinner", description: "Baked cod with steamed asparagus and a small sweet potato." }] },
        { day: 4, meals: [{ type: "Breakfast", description: "Scrambled tofu with spinach and whole-wheat toast." }, { type: "Lunch", description: "Leftover cod and asparagus." }, { type: "Dinner", description: "Chicken stir-fry with mixed vegetables and brown rice." }] },
        { day: 5, meals: [{ type: "Breakfast", description: "Smoothie with protein powder, kale, and low-GI fruit." }, { type: "Lunch", description: "Leftover stir-fry." }, { type: "Dinner", description: "Steak salad with mixed greens, tomatoes, and light vinaigrette." }] },
        { day: 6, meals: [{ type: "Breakfast", description: "Cottage cheese with sliced tomatoes and pepper." }, { type: "Lunch", description: "Turkey and avocado wrap using a low-carb tortilla." }, { type: "Dinner", description: "Black bean burgers on lettuce buns with a side salad." }] },
        { day: 7, meals: [{ type: "Breakfast", description: "Chia seed pudding made with unsweetened almond milk and berries." }, { type: "Lunch", description: "Leftover bean burgers." }, { type: "Dinner", description: "Grilled shrimp skewers with quinoa and roasted bell peppers." }] }
      ],
      honey_advice: "Lower GI than sugar but still raises blood sugar. Limit to 1 tsp occasionally."
    },
    ar: {
      name: "السكري النوع الثاني",
      overview: "حالة استقلابية تتميز بمقاومة الأنسولين.",
      symptoms: ["عطش", "تبول متكرر", "غباش رؤية", "تعب"],
      lifestyle_modifications: ["إنقاص الوزن.", "توزيع الكربوهيدرات.", "مراقبة السكر."],
      workout_plan: ["150 دقيقة مشي.", "تمارين مقاومة.", "مشي بعد الأكل."],
      nutrition: { allowed: ["خضار غير نشوية", "بقوليات", "مكسرات"], avoid: ["مشروبات سكرية", "خبز أبيض"], tips: ["طريقة الطبق."] },
      medications: [{ name: "ميتفورمين", dose: "500-2000", notes: "مع الأكل." }],
      supplements: [{ name: "بربارين", dose: "500 مجم", notes: "بديل طبيعي." }],
      meal_plan: [
        { day: 1, meals: [{ type: "الفطور", description: "أومليت بالخضار." }, { type: "الغداء", description: "سلطة كبيرة مع دجاج مشوي." }, { type: "العشاء", description: "سلمون مخبوز مع بروكلي على البخار." }] },
        { day: 2, meals: [{ type: "الفطور", description: "زبادي يوناني مع توت ومكسرات." }, { type: "الغداء", description: "شوربة عدس." }, { type: "العشاء", description: "شيلي ديك رومي بالفاصوليا." }] },
        { day: 3, meals: [{ type: "الفطور", description: "شوفان مع بذور الكتان والجوز." }, { type: "الغداء", description: "بقايا الشيلي." }, { type: "العشاء", description: "سمك القد مشوي مع هليون وبطاطا حلوة صغيرة." }] },
        { day: 4, meals: [{ type: "الفطور", description: "توفو مخفوق مع سبانخ وخبز أسمر." }, { type: "الغداء", description: "بقايا السمك والهليون." }, { type: "العشاء", description: "دجاج مقلي مع خضار مشكلة وأرز بني." }] },
        { day: 5, meals: [{ type: "الفطور", description: "سموذي بروتين مع كيل وفاكهة منخفضة السكر." }, { type: "الغداء", description: "بقايا الدجاج المقلي." }, { type: "العشاء", description: "سلطة ستيك بالخضار الورقية والطماطم وصلصة خفيفة." }] },
        { day: 6, meals: [{ type: "الفطور", description: "جبن قريش مع شرائح طماطم وفلفل." }, { type: "الغداء", description: "راب ديك رومي وأفوكادو بخبز تورتيلا قليل الكربوهيدرات." }, { type: "العشاء", description: "برجر فاصوليا سوداء في خبز خس مع سلطة جانبية." }] },
        { day: 7, meals: [{ type: "الفطور", description: "بودينغ بذور الشيا بحليب اللوز غير المحلى والتوت." }, { type: "الغداء", description: "بقايا برجر الفاصوليا." }, { type: "العشاء", description: "أسياخ جمبري مشوي مع كينوا وفلفل حلو مشوي." }] }
      ],
      honey_advice: "يرفع السكر. ملعقة صغيرة فقط."
    }
  },

  // --- MENTAL HEALTH ---
  depression_mdd: {
    en: {
      name: "Major Depressive Disorder",
      overview: "Persistent low mood and anhedonia. Treatment involves therapy and SSRIs.",
      symptoms: ["Low mood", "Anhedonia", "Sleep changes", "Fatigue"],
      lifestyle_modifications: ["Regular sleep schedule.", "Sunlight exposure.", "Social connection.", "Gratitude journaling."],
      workout_plan: ["30 mins aerobic daily.", "Yoga."],
      nutrition: { allowed: ["Omega-3 rich fish", "Walnuts", "Leafy greens"], avoid: ["Alcohol", "Processed sugar"], tips: ["Eat tryptophan-rich foods."] },
      medications: [{ name: "Sertraline", dose: "50mg", notes: "SSRI." }, { name: "Bupropion", dose: "150mg", notes: "NDRI." }],
      supplements: [{ name: "Vitamin D", dose: "2000 IU", notes: "Mood." }, { name: "Omega-3", dose: "1g", notes: "Brain health." }],
      meal_plan: [
        { day: 1, meals: [{ type: "Breakfast", description: "Oatmeal with walnuts." }, { type: "Lunch", description: "Spinach salad with grilled chicken." }, { type: "Dinner", description: "Baked salmon with steamed asparagus." }] },
        { day: 2, meals: [{ type: "Breakfast", description: "Scrambled eggs with whole-wheat toast." }, { type: "Lunch", description: "Lentil soup." }, { type: "Dinner", description: "Turkey stir-fry with colorful vegetables." }] },
        { day: 3, meals: [{ type: "Breakfast", description: "Greek yogurt with berries and chia seeds." }, { type: "Lunch", description: "Quinoa salad with chickpeas." }, { type: "Dinner", description: "Lean beef with a side of sweet potato." }] },
        { day: 4, meals: [{ type: "Breakfast", description: "Whole-wheat pancakes with a small amount of maple syrup." }, { type: "Lunch", description: "Leftover beef and sweet potato." }, { type: "Dinner", description: "Veggie burger on a whole-wheat bun with a side salad." }] },
        { day: 5, meals: [{ type: "Breakfast", description: "Smoothie with spinach, banana, and almond milk." }, { type: "Lunch", description: "Tuna salad sandwich on whole-wheat bread." }, { type: "Dinner", description: "Chicken and vegetable skewers." }] },
        { day: 6, meals: [{ type: "Breakfast", description: "Cottage cheese with sliced peaches." }, { type: "Lunch", description: "Leftover chicken skewers." }, { type: "Dinner", description: "Black bean soup with a side of whole-grain crackers." }] },
        { day: 7, meals: [{ type: "Breakfast", description: "Avocado toast on whole-grain bread." }, { type: "Lunch", description: "Mixed green salad with grilled shrimp." }, { type: "Dinner", description: "Baked cod with brown rice and green beans." }] }
      ],
      honey_advice: "1 tsp with cinnamon. Supports serotonin."
    },
    ar: {
      name: "الاكتئاب الرئيسي",
      overview: "حزن مستمر وفقدان المتعة.",
      symptoms: ["حزن", "فقدان متعة", "تغير نوم", "تعب"],
      lifestyle_modifications: ["نوم منتظم.", "تعرض للشمس.", "تواصل اجتماعي.", "كتابة الامتنان."],
      workout_plan: ["مشي 30 دقيقة يومياً.", "يوغا."],
      nutrition: { allowed: ["سمك غني بأوميغا-3", "جوز", "خضروات ورقية"], avoid: ["كحول", "سكر مصنع"], tips: ["تناول أطعمة غنية بالتريبتوفان."] },
      medications: [{ name: "سيرترالين", dose: "50 مجم", notes: "مضاد اكتئاب." }],
      supplements: [{ name: "فيتامين د", dose: "2000 وحدة", notes: "لتحسين المزاج." }, { name: "أوميغا-3", dose: "1 جم", notes: "لصحة الدماغ." }],
      meal_plan: [
        { day: 1, meals: [{ type: "الفطور", description: "شوفان مع جوز." }, { type: "الغداء", description: "سلطة سبانخ مع دجاج مشوي." }, { type: "العشاء", description: "سلمون مخبوز مع هليون على البخار." }] },
        { day: 2, meals: [{ type: "الفطور", description: "بيض مخفوق مع خبز قمح كامل." }, { type: "الغداء", description: "شوربة عدس." }, { type: "العشاء", description: "ديك رومي مقلي مع خضروات ملونة." }] },
        { day: 3, meals: [{ type: "الفطور", description: "زبادي يوناني مع توت وبذور الشيا." }, { type: "الغداء", description: "سلطة كينوا مع حمص." }, { type: "العشاء", description: "لحم بقري قليل الدهن مع جانب من البطاطا الحلوة." }] },
        { day: 4, meals: [{ type: "الفطور", description: "بانكيك قمح كامل مع كمية صغيرة من شراب القيقب." }, { type: "الغداء", description: "بقايا لحم البقر والبطاطا الحلوة." }, { type: "العشاء", description: "برجر خضروات في خبز قمح كامل مع سلطة جانبية." }] },
        { day: 5, meals: [{ type: "الفطور", description: "سموذي سبانخ، موز، وحليب اللوز." }, { type: "الغداء", description: "ساندويتش سلطة تونة على خبز قمح كامل." }, { type: "العشاء", description: "أسياخ دجاج وخضروات." }] },
        { day: 6, meals: [{ type: "الفطور", description: "جبن قريش مع شرائح خوخ." }, { type: "الغداء", description: "بقايا أسياخ الدجاج." }, { type: "العشاء", description: "شوربة فاصوليا سوداء مع جانب من البسكويت الكامل." }] },
        { day: 7, meals: [{ type: "الفطور", description: "توست أفوكادو على خبز قمح كامل." }, { type: "الغداء", description: "سلطة خضراء مشكلة مع جمبري مشوي." }, { type: "العشاء", description: "سمك القد مخبوز مع أرز بني وفاصوليا خضراء." }] }
      ],
      honey_advice: "عسل وقرفة. يدعم السيروتونين."
    }
  },

  // --- CARDIOVASCULAR ---
  hypertension: {
    en: {
      name: "Hypertension",
      overview: "Elevated BP. DASH diet is key.",
      symptoms: ["Headache", "Dizziness", "Often asymptomatic"],
      lifestyle_modifications: ["DASH Diet.", "Weight loss.", "Limit sodium <2.3g."],
      workout_plan: ["Aerobic 150 min/week.", "Avoid heavy lifting if uncontrolled."],
      nutrition: { allowed: ["Potassium foods", "Low fat dairy"], avoid: ["Salt", "Licorice"], tips: ["Read labels."] },
      medications: [{ name: "Lisinopril", dose: "10mg", notes: "ACEi." }, { name: "Amlodipine", dose: "5mg", notes: "CCB." }],
      supplements: [{ name: "Magnesium", dose: "400mg", notes: "Vasodilation." }],
      meal_plan: [
        { day: 1, meals: [{ type: "Breakfast", description: "Oatmeal with berries." }, { type: "Lunch", description: "Grilled chicken salad (low sodium dressing)." }, { type: "Dinner", description: "Baked cod with steamed green beans." }] },
        { day: 2, meals: [{ type: "Breakfast", description: "Whole-wheat toast with avocado." }, { type: "Lunch", description: "Lentil soup (homemade, low sodium)." }, { type: "Dinner", description: "Turkey meatballs with zucchini noodles." }] },
        { day: 3, meals: [{ type: "Breakfast", description: "Greek yogurt with unsalted nuts." }, { type: "Lunch", description: "Spinach salad with chickpeas and vinaigrette." }, { type: "Dinner", description: "Brown rice with mixed vegetables and tofu." }] },
        { day: 4, meals: [{ type: "Breakfast", description: "Smoothie with banana, spinach, and almond milk." }, { type: "Lunch", description: "Leftover brown rice and vegetable tofu." }, { type: "Dinner", description: "Salmon with quinoa and roasted bell peppers." }] },
        { day: 5, meals: [{ type: "Breakfast", description: "Scrambled egg whites with whole-wheat bread." }, { type: "Lunch", description: "Low-sodium tuna salad (with Greek yogurt) on lettuce cups." }, { type: "Dinner", description: "Chicken stir-fry (low sodium soy sauce) with broccoli." }] },
        { day: 6, meals: [{ type: "Breakfast", description: "Puffed wheat cereal with skim milk." }, { type: "Lunch", description: "Leftover chicken stir-fry." }, { type: "Dinner", description: "Vegetable and bean chili (homemade, low sodium)." }] },
        { day: 7, meals: [{ type: "Breakfast", description: "Fruit salad with a handful of unsalted almonds." }, { type: "Lunch", description: "Quinoa and black bean salad." }, { type: "Dinner", description: "Lean grilled steak with a large mixed green salad." }] }
      ],
      honey_advice: "Contains nitric oxide metabolites. 1 tsp daily."
    },
    ar: {
      name: "ارتفاع ضغط الدم",
      overview: "ارتفاع الضغط. حمية DASH أساسية.",
      symptoms: ["صداع", "دوخة"],
      lifestyle_modifications: ["حمية DASH.", "تقليل ملح.", "إنقاص الوزن (5-10%).", "تحديد الصوديوم أقل من 2.3 جرام/يوم."],
      workout_plan: ["هوائية 150 دقيقة/أسبوع.", "تجنب الأثقال الثقيلة إذا كان الضغط غير متحكم به."],
      nutrition: { allowed: ["أطعمة غنية بالبوتاسيوم", "ألبان قليلة الدسم"], avoid: ["ملح", "عرق السوس"], tips: ["قراءة الملصقات الغذائية بعناية."] },
      medications: [{ name: "ليسينوبريل", dose: "10 مجم", notes: "خافض ضغط." }],
      supplements: [{ name: "مغنيسيوم", dose: "400 مجم", notes: "موسع أوعية." }],
      meal_plan: [
        { day: 1, meals: [{ type: "الفطور", description: "شوفان مع توت." }, { type: "الغداء", description: "سلطة دجاج مشوي (صلصة قليلة الصوديوم)." }, { type: "العشاء", description: "سمك القد مخبوز مع فاصوليا خضراء مطهوة بالبخار." }] },
        { day: 2, meals: [{ type: "الفطور", description: "خبز قمح كامل مع أفوكادو." }, { type: "الغداء", description: "شوربة عدس (منزلية الصنع، قليلة الصوديوم)." }, { type: "العشاء", description: "كرات لحم الديك الرومي مع نودلز الكوسا." }] },
        { day: 3, meals: [{ type: "الفطور", description: "زبادي يوناني مع مكسرات غير مملحة." }, { type: "الغداء", description: "سلطة سبانخ مع حمص وصلصة خل." }, { type: "العشاء", description: "أرز بني مع خضروات مشكلة وتوفو." }] },
        { day: 4, meals: [{ type: "الفطور", description: "سموذي موز، سبانخ، وحليب اللوز." }, { type: "الغداء", description: "بقايا أرز بني وخضروات وتوفو." }, { type: "العشاء", description: "سلمون مع كينوا وفلفل حلو مشوي." }] },
        { day: 5, meals: [{ type: "الفطور", description: "بياض بيض مخفوق مع خبز قمح كامل." }, { type: "الغداء", description: "سلطة تونة قليلة الصوديوم (مع زبادي يوناني) في أكواب خس." }, { type: "العشاء", description: "دجاج مقلي (صلصة صويا قليلة الصوديوم) مع بروكلي." }] },
        { day: 6, meals: [{ type: "الفطور", description: "حبوب قمح منتفخة مع حليب خالي الدسم." }, { type: "الغداء", description: "بقايا دجاج مقلي." }, { type: "العشاء", description: "شيلي خضار وفاصوليا (منزلي الصنع، قليل الصوديوم)." }] },
        { day: 7, meals: [{ type: "الفطور", description: "سلطة فواكه مع حفنة من اللوز غير المملح." }, { type: "الغداء", description: "سلطة كينوا وفاصوليا سوداء." }, { type: "العشاء", description: "ستيك مشوي قليل الدهن مع سلطة خضراء مشكلة كبيرة." }] }
      ],
      honey_advice: "يوسع الأوعية. ملعقة صغيرة يومياً."
    }
  },

  // --- ARTHRITIS ---
  gout: {
    en: {
      name: "Gout",
      overview: "Uric acid crystal arthritis.",
      symptoms: ["Severe toe pain", "Redness", "Swelling"],
      lifestyle_modifications: ["Hydration.", "Avoid alcohol/beer.", "Weight loss."],
      workout_plan: ["Low impact.", "Rest during flares."],
      nutrition: { allowed: ["Cherries", "Vitamin C", "Coffee"], avoid: ["Red meat", "Shellfish", "Beer"], tips: ["Tart cherry juice."] },
      medications: [{ name: "Allopurinol", dose: "Daily", notes: "Preventive." }, { name: "Colchicine", dose: "Acute", notes: "Flares." }],
      supplements: [{ name: "Vitamin C", dose: "500mg", notes: "Lowers uric acid." }],
      meal_plan: [
        { day: 1, meals: [{ type: "Breakfast", description: "Yogurt with tart cherries." }, { type: "Lunch", description: "Vegetable soup." }, { type: "Dinner", description: "Tofu stir-fry with brown rice." }] },
        { day: 2, meals: [{ type: "Breakfast", description: "Oatmeal with berries." }, { type: "Lunch", description: "Quinoa salad with mixed vegetables." }, { type: "Dinner", description: "Baked chicken breast with steamed green beans." }] },
        { day: 3, meals: [{ type: "Breakfast", description: "Whole-wheat toast with avocado." }, { type: "Lunch", description: "Leftover baked chicken and green beans." }, { type: "Dinner", description: "Eggplant parmesan (baked, not fried) with whole-wheat pasta." }] },
        { day: 4, meals: [{ type: "Breakfast", description: "Scrambled eggs with spinach." }, { type: "Lunch", description: "Lentil salad." }, { type: "Dinner", description: "Grilled salmon with a large mixed green salad." }] },
        { day: 5, meals: [{ type: "Breakfast", description: "Fruit smoothie with kale." }, { type: "Lunch", description: "Vegetable and bean wrap." }, { type: "Dinner", description: "Brown rice bowl with black beans and corn." }] },
        { day: 6, meals: [{ type: "Breakfast", description: "Cottage cheese with pineapple." }, { type: "Lunch", description: "Leftover rice bowl." }, { type: "Dinner", description: "Chicken noodle soup (low sodium broth)." }] },
        { day: 7, meals: [{ type: "Breakfast", description: "Whole-wheat pancakes with a small amount of maple syrup." }, { type: "Lunch", description: "Tuna salad sandwich (light mayo) on whole-wheat bread." }, { type: "Dinner", description: "Baked tilapia with steamed broccoli and a small baked potato." }] }
      ],
      honey_advice: "Inhibits xanthine oxidase. 1 tbsp daily."
    },
    ar: {
      name: "النقرس",
      overview: "التهاب مفاصل يوريك.",
      symptoms: ["ألم إبهام القدم شديد", "احمرار", "تورم"],
      lifestyle_modifications: ["شرب الماء بكمية كافية.", "تجنب الكحول/البيرة.", "إنقاص الوزن تدريجياً."],
      workout_plan: ["تمارين منخفضة التأثير مثل السباحة.", "الراحة أثناء نوبات الألم الحادة."],
      nutrition: { allowed: ["كرز", "فيتامين سي", "قهوة"], avoid: ["لحم أحمر", "محار", "بيرة"], tips: ["عصير الكرز اللاذع."] },
      medications: [{ name: "ألوبيورينول", dose: "يومياً", notes: "للوقاية من النوبات." }],
      supplements: [{ name: "فيتامين سي", dose: "500 مجم", notes: "يخفض حمض اليوريك." }],
      meal_plan: [
        { day: 1, meals: [{ type: "الفطور", description: "زبادي مع كرز حامض." }, { type: "الغداء", description: "شوربة خضار." }, { type: "العشاء", description: "توفو مقلي مع أرز بني." }] },
        { day: 2, meals: [{ type: "الفطور", description: "شوفان مع توت." }, { type: "الغداء", description: "سلطة كينوا مع خضروات مشكلة." }, { type: "العشاء", description: "صدر دجاج مخبوز مع فاصوليا خضراء مطهوة بالبخار." }] },
        { day: 3, meals: [{ type: "الفطور", description: "خبز قمح كامل مع أفوكادو." }, { type: "الغداء", description: "بقايا دجاج مخبوز وفاصوليا خضراء." }, { type: "العشاء", description: "باذنجان بارميزان (مخبوز، غير مقلي) مع مكرونة قمح كامل." }] },
        { day: 4, meals: [{ type: "الفطور", description: "بيض مخفوق مع سبانخ." }, { type: "الغداء", description: "سلطة عدس." }, { type: "العشاء", description: "سلمون مشوي مع سلطة خضراء كبيرة." }] },
        { day: 5, meals: [{ type: "الفطور", description: "سموذي فواكه مع كيل." }, { type: "الغداء", description: "راب خضروات وفاصوليا." }, { type: "العشاء", description: "وعاء أرز بني مع فاصوليا سوداء وذرة." }] },
        { day: 6, meals: [{ type: "الفطور", description: "جبن قريش مع أناناس." }, { type: "الغداء", description: "بقايا وعاء الأرز." }, { type: "العشاء", description: "شوربة دجاج بالشعيرية (مرق قليل الصوديوم)." }] },
        { day: 7, meals: [{ type: "الفطور", description: "بانكيك قمح كامل مع كمية صغيرة من شراب القيقب." }, { type: "الغداء", description: "ساندويتش سلطة تونة (مايونيز خفيف) على خبز قمح كامل." }, { type: "العشاء", description: "سمك بلطي مخبوز مع بروكلي مطهو بالبخار وبطاطا مخبوزة صغيرة." }] }
      ],
      honey_advice: "يقلل اليوريك. ملعقة يومياً."
    }
  },

  // --- RESPIRATORY ---
  asthma: {
    en: {
      name: "Asthma",
      overview: "Airway inflammation.",
      symptoms: ["Wheezing", "Coughing", "Dyspnea"],
      lifestyle_modifications: ["Trigger avoidance.", "Breathing exercises."],
      workout_plan: ["Swimming.", "Warm up well."],
      nutrition: { allowed: ["Magnesium foods", "Omega-3"], avoid: ["Sulfites"], tips: ["Coffee helps."] },
      medications: [{ name: "Albuterol", dose: "PRN", notes: "Rescue." }, { name: "ICS", dose: "Daily", notes: "Controller." }],
      supplements: [{ name: "Magnesium", dose: "400mg", notes: "Bronchodilator." }],
      meal_plan: [
        { day: 1, meals: [{ type: "Breakfast", description: "Spinach smoothie." }, { type: "Lunch", description: "Chicken and vegetable salad." }, { type: "Dinner", description: "Baked salmon with quinoa." }] },
        { day: 2, meals: [{ type: "Breakfast", description: "Oatmeal with berries." }, { type: "Lunch", description: "Lentil soup." }, { type: "Dinner", description: "Turkey breast with roasted sweet potato." }] },
        { day: 3, meals: [{ type: "Breakfast", description: "Scrambled eggs with whole-wheat toast." }, { type: "Lunch", description: "Leftover turkey and sweet potato." }, { type: "Dinner", description: "Pasta with tomato sauce and basil." }] },
        { day: 4, meals: [{ type: "Breakfast", description: "Yogurt with flax seeds." }, { type: "Lunch", description: "Tuna salad sandwich on whole-wheat bread." }, { type: "Dinner", description: "Grilled chicken with broccoli." }] },
        { day: 5, meals: [{ type: "Breakfast", description: "Fruit salad." }, { type: "Lunch", description: "Vegetable soup." }, { type: "Dinner", description: "Fish tacos with avocado and cabbage slaw." }] },
        { day: 6, meals: [{ type: "Breakfast", description: "Whole-wheat pancakes with fruit." }, { type: "Lunch", description: "Leftover fish tacos." }, { type: "Dinner", description: "Beef stir-fry with mixed vegetables and brown rice." }] },
        { day: 7, meals: [{ type: "Breakfast", description: "Smoothie with kale, banana, and almond milk." }, { type: "Lunch", description: "Chickpea salad." }, { type: "Dinner", description: "Baked cod with asparagus and wild rice." }] }
      ],
      honey_advice: "Soothes cough. 1 tsp at night."
    },
    ar: {
      name: "الربو",
      overview: "التهاب الشعب الهوائية.",
      symptoms: ["أزيز", "سعال", "ضيق نفس"],
      lifestyle_modifications: ["تجنب المهيجات.", "تمارين تنفس."],
      workout_plan: ["سباحة.", "إحماء جيد قبل التمرين."],
      nutrition: { allowed: ["أطعمة غنية بالمغنيسيوم", "أوميغا-3"], avoid: ["كبريتيت"], tips: ["القهوة تساعد في توسيع الشعب الهوائية."] },
      medications: [{ name: "فنتولين", dose: "عند اللزوم", notes: "إسعافي." }],
      supplements: [{ name: "مغنيسيوم", dose: "400 مجم", notes: "موسع للشعب الهوائية." }],
      meal_plan: [
        { day: 1, meals: [{ type: "الفطور", description: "سموذي سبانخ." }, { type: "الغداء", description: "سلطة دجاج وخضار." }, { type: "العشاء", description: "سلمون مخبوز مع كينوا." }] },
        { day: 2, meals: [{ type: "الفطور", description: "شوفان مع توت." }, { type: "الغداء", description: "شوربة عدس." }, { type: "العشاء", description: "صدر ديك رومي مع بطاطا حلوة مشوية." }] },
        { day: 3, meals: [{ type: "الفطور", description: "بيض مخفوق مع خبز قمح كامل." }, { type: "الغداء", description: "بقايا ديك رومي وبطاطا حلوة." }, { type: "العشاء", description: "مكرونة بصلصة الطماطم والريحان." }] },
        { day: 4, meals: [{ type: "الفطور", description: "زبادي مع بذور الكتان." }, { type: "الغداء", description: "ساندويتش سلطة تونة على خبز قمح كامل." }, { type: "العشاء", description: "دجاج مشوي مع بروكلي." }] },
        { day: 5, meals: [{ type: "الفطور", description: "سلطة فواكه." }, { type: "الغداء", description: "شوربة خضروات." }, { type: "العشاء", description: "تاكو سمك مع أفوكادو وسلطة ملفوف." }] },
        { day: 6, meals: [{ type: "الفطور", description: "بانكيك قمح كامل مع فواكه." }, { type: "الغداء", description: "بقايا تاكو السمك." }, { type: "العشاء", description: "لحم بقري مقلي مع خضروات مشكلة وأرز بني." }] },
        { day: 7, meals: [{ type: "الفطور", description: "سموذي كيل، موز، وحليب اللوز." }, { type: "الغداء", description: "سلطة حمص." }, { type: "العشاء", description: "سمك القد مخبوز مع هليون وأرز بري." }] }
      ],
      honey_advice: "يهدئ السعال. ملعقة صغيرة قبل النوم."
    }
  },

  // --- UTI ---
  uti: {
    en: {
      name: "Urinary Tract Infection",
      overview: "Bacterial infection.",
      symptoms: ["Dysuria", "Frequency", "Urgency"],
      lifestyle_modifications: ["Hydration 2-3L.", "Void after intercourse."],
      workout_plan: ["Rest."],
      nutrition: { allowed: ["Cranberry", "Probiotics"], avoid: ["Caffeine", "Alcohol"], tips: ["D-mannose."] },
      medications: [{ name: "Antibiotics", dose: "As Rx", notes: "Complete course." }],
      supplements: [{ name: "D-Mannose", dose: "2g", notes: "Prevention." }, { name: "Cranberry", dose: "500mg", notes: "Prevention." }],
      meal_plan: [
        { day: 1, meals: [{ type: "Breakfast", description: "Yogurt with probiotics." }, { type: "Lunch", description: "Clear broth soup with whole-wheat crackers." }, { type: "Dinner", description: "Baked chicken with steamed carrots." }] },
        { day: 2, meals: [{ type: "Breakfast", description: "Oatmeal with berries." }, { type: "Lunch", description: "Large spinach salad with olive oil and lemon dressing." }, { type: "Dinner", description: "Baked salmon with brown rice." }] },
        { day: 3, meals: [{ type: "Breakfast", description: "Scrambled eggs with whole-wheat toast." }, { type: "Lunch", description: "Leftover baked salmon and brown rice." }, { type: "Dinner", description: "Tofu stir-fry with mixed vegetables (low sodium soy sauce)." }] },
        { day: 4, meals: [{ type: "Breakfast", description: "Cottage cheese with peaches." }, { type: "Lunch", description: "Lentil soup." }, { type: "Dinner", description: "Grilled turkey breast with sweet potato." }] },
        { day: 5, meals: [{ type: "Breakfast", description: "Smoothie with cranberry juice (unsweetened) and spinach." }, { type: "Lunch", description: "Leftover grilled turkey and sweet potato." }, { type: "Dinner", description: "Chicken noodle soup (low sodium broth)." }] },
        { day: 6, meals: [{ type: "Breakfast", description: "Whole-wheat pancakes with a small amount of fruit syrup." }, { type: "Lunch", description: "Hard-boiled eggs with cucumber slices." }, { type: "Dinner", description: "Baked cod with steamed green beans." }] },
        { day: 7, meals: [{ type: "Breakfast", description: "Greek yogurt with D-Mannose powder." }, { type: "Lunch", description: "Vegetable broth with a side of whole-grain bread." }, { type: "Dinner", description: "Lean ground beef with quinoa and roasted zucchini." }] }
      ],
      honey_advice: "Antimicrobial. 1 tsp."
    },
    ar: {
      name: "التهاب المسالك",
      overview: "عدوى بكتيرية.",
      symptoms: ["حرقان", "تكرار بول", "إلحاح في التبول"],
      lifestyle_modifications: ["شرب الماء 2-3 لتر.", "التبول بعد الجماع."],
      workout_plan: ["الراحة الكافية."],
      nutrition: { allowed: ["توت بري", "بروبيوتيك"], avoid: ["كافيين", "كحول"], tips: ["مكمل دي-مانوز."] },
      medications: [{ name: "مضاد حيوي", dose: "حسب الوصفة", notes: "إكمال الكورس كاملاً." }],
      supplements: [{ name: "دي-مانوز", dose: "2 جم", notes: "للوقاية." }, { name: "توت بري", dose: "500 مجم", notes: "للوقاية." }],
      meal_plan: [
        { day: 1, meals: [{ type: "الفطور", description: "زبادي مع البروبيوتيك." }, { type: "الغداء", description: "شوربة مرقة صافية مع بسكويت قمح كامل." }, { type: "العشاء", description: "دجاج مخبوز مع جزر مطهو بالبخار." }] },
        { day: 2, meals: [{ type: "الفطور", description: "شوفان مع توت." }, { type: "الغداء", description: "سلطة سبانخ كبيرة مع زيت زيتون وصلصة ليمون." }, { type: "العشاء", description: "سلمون مخبوز مع أرز بني." }] },
        { day: 3, meals: [{ type: "الفطور", description: "بيض مخفوق مع خبز قمح كامل." }, { type: "الغداء", description: "بقايا سلمون مخبوز وأرز بني." }, { type: "العشاء", description: "توفو مقلي مع خضروات مشكلة (صلصة صويا قليلة الصوديوم)." }] },
        { day: 4, meals: [{ type: "الفطور", description: "جبن قريش مع خوخ." }, { type: "الغداء", description: "شوربة عدس." }, { type: "العشاء", description: "صدر ديك رومي مشوي مع بطاطا حلوة." }] },
        { day: 5, meals: [{ type: "الفطور", description: "سموذي مع عصير توت بري (غير محلى) وسبانخ." }, { type: "الغداء", description: "بقايا ديك رومي مشوي وبطاطا حلوة." }, { type: "العشاء", description: "شوربة دجاج بالشعيرية (مرق قليل الصوديوم)." }] },
        { day: 6, meals: [{ type: "الفطور", description: "بانكيك قمح كامل مع كمية صغيرة من شراب الفاكهة." }, { type: "الغداء", description: "بيض مسلوق مع شرائح خيار." }, { type: "العشاء", description: "سمك القد مخبوز مع فاصوليا خضراء مطهوة بالبخار." }] },
        { day: 7, meals: [{ type: "الفطور", description: "زبادي يوناني مع مسحوق دي-مانوز." }, { type: "الغداء", description: "مرقة خضار مع جانب من الخبز الكامل." }, { type: "العشاء", description: "لحم بقري مفروم قليل الدهن مع كينوا وكوسا مشوية." }] }
      ],
      honey_advice: "مضاد بكتيريا. ملعقة."
    }
  },
  
  // --- WEAK IMMUNITY ---
  weak_immunity: {
    en: {
      name: "Weak Immunity",
      overview: "A weakened immune system can make you more susceptible to infections and illnesses. Strengthening your immunity involves a holistic approach.",
      symptoms: ["Frequent infections", "Prolonged illness", "Fatigue", "Slow wound healing"],
      lifestyle_modifications: [
        "Prioritize 7-9 hours of quality sleep nightly.",
        "Manage stress through meditation, yoga, or hobbies.",
        "Practice good hygiene (hand washing).",
        "Avoid smoking and limit alcohol intake.",
        "Stay hydrated by drinking plenty of water."
      ],
      workout_plan: [
        "Moderate exercise (30 mins daily) like brisk walking or cycling.",
        "Include light strength training 2-3 times a week.",
        "Avoid overtraining, which can suppress immunity.",
        "Ensure proper cool-down and recovery."
      ],
      nutrition: {
        allowed: ["Citrus fruits (Vitamin C)", "Leafy greens (Antioxidants)", "Berries", "Nuts & Seeds (Zinc, Vitamin E)", "Fatty fish (Omega-3)", "Garlic & Ginger"],
        avoid: ["Processed foods", "Excessive sugar", "Trans fats", "Excessive caffeine"],
        tips: ["Focus on a diverse, whole-food diet.", "Include probiotics (yogurt, kefir) for gut health.", "Cook with immune-boosting herbs and spices."]
      },
      medications: [], // No specific medications for weak immunity without underlying cause
      supplements: [
        { name: "Vitamin D", dose: "2000-4000 IU", notes: "Crucial for immune cell function." },
        { name: "Vitamin C", dose: "500-1000 mg", notes: "Powerful antioxidant." },
        { name: "Zinc", dose: "15-30 mg", notes: "Supports immune response." },
        { name: "Probiotics", dose: "Daily", notes: "For gut microbiome balance." }
      ],
      meal_plan: [
        { day: 1, meals: [{ type: "Breakfast", description: "Oatmeal with berries, nuts, and a sprinkle of cinnamon." }, { type: "Lunch", description: "Large spinach salad with grilled chicken, avocado, and citrus vinaigrette." }, { type: "Dinner", description: "Baked salmon with roasted broccoli and sweet potato." }] },
        { day: 2, meals: [{ type: "Breakfast", description: "Scrambled eggs with sautéed mushrooms and whole-wheat toast." }, { type: "Lunch", description: "Lentil soup with a side of whole-grain bread." }, { type: "Dinner", description: "Turkey stir-fry with bell peppers, snap peas, and brown rice." }] },
        { day: 3, meals: [{ type: "Breakfast", description: "Greek yogurt with flax seeds, kiwi, and a drizzle of honey." }, { type: "Lunch", description: "Quinoa salad with chickpeas, cucumber, and fresh parsley." }, { type: "Dinner", description: "Lean beef stew with carrots, celery, and potatoes." }] },
        { day: 4, meals: [{ type: "Breakfast", description: "Whole-wheat pancakes with fresh fruit compote (no added sugar)." }, { type: "Lunch", description: "Leftover beef stew." }, { type: "Dinner", description: "Chicken and vegetable skewers with a side of wild rice." }] },
        { day: 5, meals: [{ type: "Breakfast", description: "Smoothie with kale, banana, ginger, and almond milk." }, { type: "Lunch", description: "Tuna salad (made with Greek yogurt) on whole-wheat crackers." }, { type: "Dinner", description: "Baked cod with steamed asparagus and a small baked potato." }] },
        { day: 6, meals: [{ type: "Breakfast", description: "Cottage cheese with sliced oranges and a pinch of turmeric." }, { type: "Lunch", description: "Black bean soup with a side of corn tortillas." }, { type: "Dinner", description: "Vegetarian chili loaded with beans, tomatoes, and various vegetables." }] },
        { day: 7, meals: [{ type: "Breakfast", description: "Avocado toast on whole-grain bread with a sprinkle of chili flakes." }, { type: "Lunch", description: "Mixed greens salad with grilled shrimp, walnuts, and balsamic vinaigrette." }, { type: "Dinner", description: "Chicken curry with plenty of vegetables (e.g., cauliflower, peas) and brown rice." }] }
      ],
      honey_advice: "Natural antibacterial and anti-inflammatory properties. Use in moderation as a sweetener, perhaps 1-2 teaspoons daily."
    },
    ar: {
      name: "ضعف المناعة",
      overview: "يمكن أن يجعلك ضعف الجهاز المناعي أكثر عرضة للعدوى والأمراض. يتطلب تقوية المناعة نهجًا شاملاً.",
      symptoms: ["التهابات متكررة", "مرض طويل الأمد", "إرهاق", "بطء التئام الجروح"],
      lifestyle_modifications: [
        "إعطاء الأولوية لـ 7-9 ساعات من النوم الجيد ليلاً.",
        "إدارة التوتر من خلال التأمل أو اليوغا أو الهوايات.",
        "ممارسة النظافة الجيدة (غسل اليدين).",
        "تجنب التدخين والحد من تناول الكحول.",
        "الحفاظ على رطوبة الجسم بشرب الكثير من الماء."
      ],
      workout_plan: [
        "تمارين معتدلة (30 دقيقة يوميًا) مثل المشي السريع أو ركوب الدراجات.",
        "تضمين تدريبات القوة الخفيفة 2-3 مرات في الأسبوع.",
        "تجنب الإفراط في التدريب، والذي يمكن أن يضعف المناعة.",
        "ضمان التهدئة والتعافي المناسبين."
      ],
      nutrition: {
        allowed: ["فواكه حمضية (فيتامين ج)", "خضروات ورقية (مضادات الأكسدة)", "توت", "مكسرات وبذور (زنك، فيتامين هـ)", "أسماك دهنية (أوميغا 3)", "ثوم وزنجبيل"],
        avoid: ["أطعمة مصنعة", "سكر زائد", "دهون متحولة", "كافيين زائد"],
        tips: ["ركز على نظام غذائي متنوع ومتكامل.", "أدرج البروبيوتيك (الزبادي، الكفير) لصحة الأمعاء.", "اطبخ بالأعشاب والتوابل المعززة للمناعة."]
      },
      medications: [],
      supplements: [
        { name: "فيتامين د", dose: "2000-4000 وحدة دولية", notes: "ضروري لوظيفة الخلايا المناعية." },
        { name: "فيتامين ج", dose: "500-1000 مجم", notes: "مضاد أكسدة قوي." },
        { name: "زنك", dose: "15-30 مجم", notes: "يدعم الاستجابة المناعية." },
        { name: "بروبيوتيك", dose: "يوميًا", notes: "لتوازن ميكروبيوم الأمعاء." }
      ],
      meal_plan: [
        { day: 1, meals: [{ type: "الفطور", description: "شوفان مع توت ومكسرات ورشة قرفة." }, { type: "الغداء", description: "سلطة سبانخ كبيرة مع دجاج مشوي، أفوكادو، وصلصة حمضية." }, { type: "العشاء", description: "سلمون مخبوز مع بروكلي مشوي وبطاطا حلوة." }] },
        { day: 2, meals: [{ type: "الفطور", description: "بيض مخفوق مع فطر سوتيه وخبز قمح كامل." }, { type: "الغداء", description: "شوربة عدس مع جانب من خبز القمح الكامل." }, { type: "العشاء", description: "ديك رومي مقلي مع فلفل حلو، بازلاء، وأرز بني." }] },
        { day: 3, meals: [{ type: "الفطور", description: "زبادي يوناني مع بذور الكتان، كيوي، ورشة عسل." }, { type: "الغداء", description: "سلطة كينوا مع حمص، خيار، وبقدونس طازج." }, { type: "العشاء", description: "يخنة لحم بقري قليل الدهن مع جزر، كرفس، وبطاطس." }] },
        { day: 4, meals: [{ type: "الفطور", description: "بانكيك قمح كامل مع كمبوت فواكه طازجة (بدون سكر مضاف)." }, { type: "الغداء", description: "بقايا يخنة لحم البقر." }, { type: "العشاء", description: "أسياخ دجاج وخضروات مع جانب من الأرز البري." }] },
        { day: 5, meals: [{ type: "الفطور", description: "سموذي كيل، موز، زنجبيل، وحليب اللوز." }, { type: "الغداء", description: "سلطة تونة (مصنوعة من الزبادي اليوناني) على بسكويت قمح كامل." }, { type: "العشاء", description: "سمك القد مخبوز مع هليون مطهو بالبخار وبطاطا مخبوزة صغيرة." }] },
        { day: 6, meals: [{ type: "الفطور", description: "جبن قريش مع شرائح برتقال ورشة كركم." }, { type: "الغداء", description: "شوربة فاصوليا سوداء مع جانب من خبز التورتيلا." }, { type: "العشاء", description: "شيلي نباتي غني بالفاصوليا والطماطم والخضروات المتنوعة." }] },
        { day: 7, meals: [{ type: "الفطور", description: "توست أفوكادو على خبز قمح كامل مع رشة فلفل حار." }, { type: "الغداء", description: "سلطة خضراء مشكلة مع جمبري مشوي، جوز، وصلصة خل البلسميك." }, { type: "العشاء", description: "دجاج بالكاري مع الكثير من الخضروات (مثل القرنبيط، البازلاء) والأرز البني." }] }
      ],
      honey_advice: "خصائص طبيعية مضادة للبكتيريا ومضادة للالتهابات. يستخدم باعتدال كمحلي، ربما 1-2 ملعقة صغيرة يومياً."
    }
  }
};