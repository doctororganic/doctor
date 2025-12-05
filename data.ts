
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
        { day: 5, meals: [{ type: "الفطور", description: "بانكيك (محضر منزلياً بمسحوق قليل الفوسفور) مع التوت." }, { type: "الغداء", description: "سلطة تونة قليلة الصوديوم مع بسكويت." }, { type: "العشاء", description: "جزء صغير من لحم البقر قليل الدهن مع قرنبيط مهروس." }] },
        { day: 6, meals: [{ type: "الفطور", description: "شرائح تفاح مع كمية صغيرة من زبدة الفول السوداني." }, { type: "الغداء", description: "بقايا اللحم والقرنبيط." }, { type: "العشاء", description: "شوربة دجاج بالشعيرية (باستخدام مرق قليل الصوديوم)." }] },
        { day: 7, meals: [{ type: "الفطور", description: "بياض بيض مخفوق مع سبانخ." }, { type: "الغداء", description: "شرائح خيار وفلفل مع صلصة خفيفة." }, { type: "العشاء", description: "سمك بلطي مخبوز بالليمون، أرز أبيض وهليون على البخار." }] }
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
      meal_plan: [{ day: 1, meals: [{ type: "Breakfast", description: "Oatmeal with walnuts." }, { type: "Dinner", description: "Salmon with spinach." }] }],
      honey_advice: "1 tsp with cinnamon. Supports serotonin."
    },
    ar: {
      name: "الاكتئاب الرئيسي",
      overview: "حزن مستمر وفقدان المتعة.",
      symptoms: ["حزن", "فقدان متعة", "تغير نوم", "تعب"],
      lifestyle_modifications: ["نوم منتظم.", "تعرض للشمس.", "تواصل اجتماعي."],
      workout_plan: ["مشي 30 دقيقة.", "يوغا."],
      nutrition: { allowed: ["سمك", "جوز", "خضروات"], avoid: ["كحول", "سكر"], tips: ["تريبتوفان."] },
      medications: [{ name: "سيرترالين", dose: "50 مجم", notes: "مضاد اكتئاب." }],
      supplements: [{ name: "فيتامين د", dose: "2000 وحدة", notes: "للمزاج." }],
      meal_plan: [{ day: 1, meals: [{ type: "الفطور", description: "شوفان." }, { type: "العشاء", description: "سلمون." }] }],
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
      meal_plan: [{ day: 1, meals: [{ type: "Breakfast", description: "Oatmeal." }, { type: "Dinner", description: "Grilled chicken." }] }],
      honey_advice: "Contains nitric oxide metabolites. 1 tsp daily."
    },
    ar: {
      name: "ارتفاع ضغط الدم",
      overview: "ارتفاع الضغط. حمية DASH أساسية.",
      symptoms: ["صداع", "دوخة"],
      lifestyle_modifications: ["حمية DASH.", "تقليل ملح."],
      workout_plan: ["هوائية 150 دقيقة.", "تجنب الأثقال الثقيلة."],
      nutrition: { allowed: ["بوتاسيوم", "ألبان قليلة دسم"], avoid: ["ملح"], tips: ["قراءة الملصقات."] },
      medications: [{ name: "ليسينوبريل", dose: "10 مجم", notes: "خافض ضغط." }],
      supplements: [{ name: "مغنيسيوم", dose: "400 مجم", notes: "موسع أوعية." }],
      meal_plan: [{ day: 1, meals: [{ type: "الفطور", description: "شوفان." }, { type: "العشاء", description: "دجاج." }] }],
      honey_advice: "يوسع الأوعية. ملعقة صغيرة."
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
      meal_plan: [{ day: 1, meals: [{ type: "Breakfast", description: "Yogurt cherries." }, { type: "Dinner", description: "Tofu stir fry." }] }],
      honey_advice: "Inhibits xanthine oxidase. 1 tbsp daily."
    },
    ar: {
      name: "النقرس",
      overview: "التهاب مفاصل يوريك.",
      symptoms: ["ألم إبهام القدم", "احمرار"],
      lifestyle_modifications: ["شرب ماء.", "تجنب كحول.", "إنقاص وزن."],
      workout_plan: ["سباحة.", "راحة وقت الألم."],
      nutrition: { allowed: ["كرز", "قهوة"], avoid: ["لحم أحمر", "محار"], tips: ["عصير كرز."] },
      medications: [{ name: "ألوبيورينول", dose: "يومياً", notes: "وقاية." }],
      supplements: [{ name: "فيتامين سي", dose: "500 مجم", notes: "يخفض اليوريك." }],
      meal_plan: [{ day: 1, meals: [{ type: "الفطور", description: "زبادي وكرز." }, { type: "العشاء", description: "توفو." }] }],
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
      meal_plan: [{ day: 1, meals: [{ type: "Breakfast", description: "Spinach smoothie." }, { type: "Dinner", description: "Salmon." }] }],
      honey_advice: "Soothes cough. 1 tsp at night."
    },
    ar: {
      name: "الربو",
      overview: "التهاب الشعب الهوائية.",
      symptoms: ["أزيز", "سعال", "ضيق نفس"],
      lifestyle_modifications: ["تجنب المهيجات.", "تمارين تنفس."],
      workout_plan: ["سباحة.", "إحماء."],
      nutrition: { allowed: ["مغنيسيوم", "أوميغا 3"], avoid: ["مواد حافظة"], tips: ["القهوة مفيدة."] },
      medications: [{ name: "فنتولين", dose: "عند اللزوم", notes: "إسعافي." }],
      supplements: [{ name: "مغنيسيوم", dose: "400 مجم", notes: "موسع." }],
      meal_plan: [{ day: 1, meals: [{ type: "الفطور", description: "سموذي." }, { type: "العشاء", description: "سلمون." }] }],
      honey_advice: "يهدئ السعال. ملعقة قبل النوم."
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
      meal_plan: [{ day: 1, meals: [{ type: "Breakfast", description: "Yogurt." }, { type: "Lunch", description: "Soup." }] }],
      honey_advice: "Antimicrobial. 1 tsp."
    },
    ar: {
      name: "التهاب المسالك",
      overview: "عدوى بكتيرية.",
      symptoms: ["حرقان", "تكرار بول"],
      lifestyle_modifications: ["شرب ماء.", "تبول بعد الجماع."],
      workout_plan: ["راحة."],
      nutrition: { allowed: ["توت بري", "بروبيوتيك"], avoid: ["كافيين"], tips: ["مانوز."] },
      medications: [{ name: "مضاد حيوي", dose: "حسب الوصفة", notes: "إكمال." }],
      supplements: [{ name: "دي-مانوز", dose: "2 جم", notes: "وقاية." }],
      meal_plan: [{ day: 1, meals: [{ type: "الفطور", description: "زبادي." }, { type: "الغداء", description: "شوربة." }] }],
      honey_advice: "مضاد بكتيريا. ملعقة."
    }
  }
};