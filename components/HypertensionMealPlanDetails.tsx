
import React from 'react';
import { Language } from '../types';
import { AlertTriangle, XCircle, CheckCircle } from 'lucide-react';

interface Props {
  lang: Language;
}

export const HypertensionMealPlanDetails: React.FC<Props> = ({ lang }) => {
  const isAr = lang === 'ar'; // This component is primarily designed for Arabic content based on the user's request.

  // All text is hardcoded to Arabic as per the provided snippet,
  // but wrapped in a 't' object for potential future English localization.
  const t = {
    headerTitle: 'نظام دايت لعلاج ارتفاع ضغط الدم',
    headerSubtitle: 'خطة غذائية متكاملة لسبعة أيام (DASH-Focused)',
    medicalNoteTitle: 'ملاحظة طبية هامة:',
    medicalNoteText: 'هذه الخطة هي **مقترح غذائي عام** ولا يجب اعتبارها بديلاً للمشورة الطبية المتخصصة. **يجب استشارة طبيبك أو أخصائي التغذية** قبل البدء في أي نظام غذائي جديد. التحكم في كمية الصوديوم (الملح) هو الأهم؛ جميع الوصفات هنا تعتمد على ملح قليل أو خالٍ من الصوديوم.',
    weeklyMealPlanTitle: '📅 خطة الوجبات الأسبوعية لارتفاع ضغط الدم',
    day: 'اليوم',
    breakfast: 'الإفطار ☀️',
    lunch: 'الغداء 🥗',
    dinner: 'العشاء 🌙',
    sunday: 'الأحد',
    oatmealBerriesNuts: 'شوفان مع توت ومكسرات',
    tunaSaladNoMayo: 'سلطة تونة (بدون مايونيز)',
    grilledChickenSautéedVeggies: 'دجاج مشوي مع خضار سوتيه',
    monday: 'الاثنين',
    scrambledEggsSpinach: 'بيض مخفوق مع سبانخ',
    lentilSoup: 'عدس بجبة أو شوربة عدس',
    bakedSalmonBrownRice: 'سلمون مخبوز مع أرز بني',
    tuesday: 'الثلاثاء',
    greekYogurtBananaFlax: 'زبادي يوناني مع موز وبذور الكتان',
    lowSodiumTurkeySandwich: 'ساندويتش ديك رومي قليل الصوديوم',
    vegetableStewSpices: 'يخنة خضار بالبهارات',
    wednesday: 'الأربعاء',
    wholeWheatToastAvocadoTomato: 'توست أسمر مع أفوكادو وطماطم',
    boiledChickenGreenSalad: 'صدر دجاج مسلوق مع سلطة خضراء',
    tilapiaSweetPotato: 'سمك بلطي (قليل الدهون) مع بطاطا حلوة',
    thursday: 'الخميس',
    spinachBananaSmoothie: 'سموذي السبانخ والموز',
    wholeWheatPastaFreshTomatoSauce: 'معكرونة قمح كامل بصلصة الطماطم الطازجة',
    quinoaVeggiesNuts: 'كينوا بالخضروات والمكسرات',
    friday: 'الجمعة',
    cottageCheeseCucumber: 'جبنة قريش قليلة الملح مع خيار',
    greenBeanCasseroleMincedMeat: 'طاجن فاصوليا خضراء باللحم المفروم (قليل الدهون)',
    healthyCaesarSalad: 'سلطة السيزر الصحية (صلصة لايت)',
    saturday: 'السبت',
    wholeWheatBreadHummus: 'خبز قمح كامل مع حمص',
    healthyPizzaWholeWheatVeggies: 'بيتزا صحية بعجينة القمح الكامل والخضار',
    potassiumRichVegetableSoup: 'شوربة الخضار الغنية بالبوتاسيوم',
    detailedMealDescTitle: '🍽️ وصف شامل للوجبات (اليوم الأول - الأحد)',
    mealSecret: '**سر الوجبة:**',
    basicComponents: '**المكونات الأساسية:**',
    suggestedQuantities: '**الكميات المقترحة:**',
    preparationMethod: '**طريقة التحضير:**',
    alternatives: '**البدائل:**',
    benefitsHypertension: '**الفوائد لمرضى الضغط:**',
    breakfastOatmealTitle: '1. الإفطار: شوفان التوت والمكسرات 🥣',
    oatmealSecret: 'غنية بالألياف القابلة للذوبان (بيتا جلوكان) التي تساعد على خفض الكوليسترول وضغط الدم.',
    oatmealComponents: 'كربوهيدرات معقدة، ألياف، دهون صحية، مضادات أكسدة.',
    oatmealQuantities: '50 جرام شوفان، 200 مل حليب قليل الدسم، نصف كوب توت مشكل، ملعقة كبيرة لوز أو جوز.',
    oatmealPreparation: 'يُغلى الحليب ثم يُضاف الشوفان ويُترك حتى يتكثف. يُزين بالتوت والمكسرات.',
    oatmealAlternatives: 'تفاح مقطع بدلاً من التوت، بذور الشيا أو الكتان بدلاً من المكسرات.',
    oatmealBenefits: 'مصدر ممتاز للبوتاسيوم والمغنيسيوم والألياف، يدعم صحة القلب وينظم الضغط.',
    lunchTunaTitle: '2. الغداء: سلطة التونة الصحية 🥗',
    tunaSecret: 'غنية بأحماض أوميغا-3 (EPA و DHA) المضادة للالتهاب والمفيدة للقلب.',
    tunaComponents: 'بروتين عالي الجودة، دهون صحية، فيتامينات ومعادن.',
    tunaQuantities: 'علبة تونة مصفاة جيدًا (ماء أو زيت)، 2 كوب خضار ورقية، نصف حبة طماطم، صلصة زيت زيتون وليمون (بدون ملح).',
    tunaPreparation: 'تخلط التونة مع الخضروات، ويُضاف فوقها الصلصة الحمضية.',
    tunaAlternatives: 'دجاج مسلوق أو حمص بدلاً من التونة.',
    tunaBenefits: 'أوميغا-3 تساهم في مرونة الشرايين وتخفيف ضغط الدم.',
    dinnerChickenTitle: '3. العشاء: دجاج مشوي وخضروات سوتيه 🍗🥕',
    chickenSecret: 'وجبة متوازنة قليلة الدهون وغنية بالبروتين والخضروات الغنية بالبوتاسيوم.',
    chickenComponents: 'بروتين، ألياف، فيتامينات (خاصة فيتامين C و K).',
    chickenQuantities: '150 جرام صدر دجاج منزوع الجلد، كوبين خضروات (بروكلي، جزر، كوسة)، بهارات طبيعية وزيت زيتون للتتبيل.',
    chickenPreparation: 'يُتبل الدجاج ويُشوى. تُطهى الخضروات سوتيه أو على البخار.',
    chickenAlternatives: 'لحم بقري خالٍ من الدهون أو ديك رومي بدلاً من الدجاج.',
    chickenBenefits: 'البروتين للشبع، والخضروات لتزويد الجسم بالبوتاسيوم والمغنيسيوم اللازمين لتنظيم الضغط.',
    additionalDetailsTitle: '📋 تفاصيل إضافية لبقية الأيام (الأهمية الغذائية)',
    nutritionalComponent: 'المكون الغذائي الأبرز',
    benefitForHypertension: 'الفائدة لمرضى الضغط',
    eggsSpinachNutrient: 'اللوتين والزياكسانثين (من السبانخ)',
    eggsSpinachBenefit: 'مضادات أكسدة تحمي من تلف الأوعية الدموية.',
    lentilsNutrient: 'الألياف والبوتاسيوم والمغنيسيوم',
    lentilsBenefit: 'يساعد في خفض ضغط الدم وتحسين مستويات الكوليسترول.',
    yogurtBananaNutrient: 'الكالسيوم والبوتاسيوم',
    yogurtBananaBenefit: 'عنصران ضروريان لتوازن السوائل والتحكم في ضغط الدم.',
    avocadoToastNutrient: 'الدهون الأحادية غير المشبعة',
    avocadoToastBenefit: 'دهون صحية تقلل من الالتهاب وتحسن صحة القلب.',
    spinachSmoothieNutrient: 'البوتاسيوم والمغنيسيوم',
    spinachSmoothieBenefit: 'يساعدان في موازنة تأثير الصوديوم وطرد السوائل الزائدة.',
    hummusNutrient: 'بروتين نباتي وألياف',
    hummusBenefit: 'بديل صحي للحوم، يساعد على الشبع دون دهون مشبعة.',
    quinoaVeggiesNutrient: 'المغنيسيوم والألياف',
    quinoaVeggiesBenefit: 'المغنيسيوم ضروري لتنظيم عمل العضلات والأعصاب، بما في ذلك عضلة القلب.',
    generalAdviceTitle: '🩺 نصيحة طبية غذائية لمرضى الضغط',
    avoidReduceTitle: '⚠️ تجنب أو قلل من:',
    avoidSodium: '**الصوديوم:** الهدف اليومي لا يزيد عن 1500 ملجم. تجنب الأطعمة المعلبة والمصنعة والوجبات السريعة.',
    avoidSaturatedTransFats: '**الدهون المشبعة والمتحولة:** اللحوم الدهنية، الزبدة، المقليات، والمعجنات التجارية.',
    avoidAddedSugarSweetenedDrinks: '**السكر المضاف والمشروبات المحلاة:** تساهم في زيادة الوزن وتؤثر سلبًا على ضغط الدم.',
    avoidAlcoholCaffeine: '**الكحول والكافيين الزائد:** استشر طبيبك حول الكمية الآمنة لك.',
    focusOnTitle: '✅ ركز على:',
    focusDASH: '**نظام DASH الغذائي:** (Dietary Approaches to Stop Hypertension) وهو نظام يركز على الفواكه، الخضروات، والحبوب الكاملة.',
    focusPotassiumMagnesium: '**البوتاسيوم والمغنيسيوم:** تناول مصادر جيدة مثل الموز، السبانخ، البطاطا الحلوة، الفاصوليا، والمكسرات غير المملحة.',
    focusHealthyFats: '**الدهون الصحية:** زيت الزيتون، الأفوكادو، الأسماك الدهنية (سلمون، ماكريل).',
  };

  // Add explicit type definition for CardProps
  interface CardProps {
    children: React.ReactNode;
    className?: string;
  }

  // Use React.FC with the explicit CardProps
  const Card: React.FC<CardProps> = ({ children, className = '' }) => (
    <div className={`bg-white dark:bg-dark-card rounded-3xl shadow-lg p-6 ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto space-y-8 mt-12">

      {/* Header and Disclaimer */}
      <Card className="shadow-xl shadow-purple-900/5">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-2">{t.headerTitle}</h1>
          {/* FIX: Corrected typo from t.subtitle to t.headerSubtitle */}
          <h2 className="text-xl font-medium text-primary-600 dark:text-primary-400">{t.headerSubtitle}</h2>
        </header>

        {/* Medical Disclaimer Card */}
        <div className="p-6 bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 text-red-800 dark:text-red-300 font-bold rounded-2xl">
          <div className="flex items-center mb-2">
            <AlertTriangle className="h-6 w-6 ml-3 text-red-600 dark:text-red-400" />
            <span className="text-lg">{t.medicalNoteTitle}</span>
          </div>
          <p className="mt-2 font-normal text-gray-700 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: t.medicalNoteText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
        </div>
      </Card>

      {/* 7-Day Meal Plan Table */}
      <Card className="overflow-hidden">
        <h3 className="p-5 text-2xl font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-700">{t.weeklyMealPlanTitle}</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead>
              <tr className="bg-primary-600 table-header">
                <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-white rounded-tr-none rounded-tl-xl">{t.day}</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-white">{t.breakfast}</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-white">{t.lunch}</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-white rounded-tl-none rounded-tr-xl">{t.dinner}</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-dark-card divide-y divide-slate-200 dark:divide-slate-700">
              {/* Day 1 */}
              <tr className="hover:bg-primary-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600 dark:text-primary-400">{t.sunday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.oatmealBerriesNuts}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.tunaSaladNoMayo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.grilledChickenSautéedVeggies}</td>
              </tr>
              {/* Day 2 */}
              <tr className="bg-slate-50 dark:bg-slate-800/30 hover:bg-primary-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600 dark:text-primary-400">{t.monday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.scrambledEggsSpinach}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.lentilSoup}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.bakedSalmonBrownRice}</td>
              </tr>
              {/* Day 3 */}
              <tr className="hover:bg-primary-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600 dark:text-primary-400">{t.tuesday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.greekYogurtBananaFlax}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.lowSodiumTurkeySandwich}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.vegetableStewSpices}</td>
              </tr>
              {/* Day 4 */}
              <tr className="bg-slate-50 dark:bg-slate-800/30 hover:bg-primary-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600 dark:text-primary-400">{t.wednesday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.wholeWheatToastAvocadoTomato}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.boiledChickenGreenSalad}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.tilapiaSweetPotato}</td>
              </tr>
              {/* Day 5 */}
              <tr className="hover:bg-primary-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600 dark:text-primary-400">{t.thursday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.spinachBananaSmoothie}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.wholeWheatPastaFreshTomatoSauce}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.quinoaVeggiesNuts}</td>
              </tr>
              {/* Day 6 */}
              <tr className="bg-slate-50 dark:bg-slate-800/30 hover:bg-primary-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600 dark:text-primary-400">{t.friday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.cottageCheeseCucumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.greenBeanCasseroleMincedMeat}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.healthyCaesarSalad}</td>
              </tr>
              {/* Day 7 */}
              <tr className="hover:bg-primary-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600 dark:text-primary-400">{t.saturday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.wholeWheatBreadHummus}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.healthyPizzaWholeWheatVeggies}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.potassiumRichVegetableSoup}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Day 1 Detailed Description */}
      <Card>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-3">{t.detailedMealDescTitle}</h3>

        {/* Meal Item 1: Breakfast */}
        <div className="mb-6 p-4 border border-blue-200 dark:border-blue-900/50 rounded-lg bg-blue-50/50 dark:bg-blue-900/10">
          <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-3">{t.breakfastOatmealTitle}</h4>
          <p className="text-slate-700 dark:text-slate-300 mb-2" dangerouslySetInnerHTML={{ __html: t.mealSecret + t.oatmealSecret }}></p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400 pr-4">
            <li><strong className="text-slate-800 dark:text-slate-200">{t.basicComponents.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.oatmealComponents}</li>
            <li><strong className="text-slate-800 dark:text-slate-200">{t.suggestedQuantities.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.oatmealQuantities}</li>
            <li><strong className="text-slate-800 dark:text-slate-200">{t.preparationMethod.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.oatmealPreparation}</li>
            <li><strong className="text-slate-800 dark:text-slate-200">{t.alternatives.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.oatmealAlternatives}</li>
            <li><strong className="text-slate-800 dark:text-slate-200">{t.benefitsHypertension.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.oatmealBenefits}</li>
          </ul>
        </div>

        {/* Meal Item 2: Lunch */}
        <div className="mb-6 p-4 border border-green-200 dark:border-green-900/50 rounded-lg bg-green-50/50 dark:bg-green-900/10">
          <h4 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-3">{t.lunchTunaTitle}</h4>
          <p className="text-slate-700 dark:text-slate-300 mb-2" dangerouslySetInnerHTML={{ __html: t.mealSecret + t.tunaSecret }}></p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400 pr-4">
            <li><strong className="text-slate-800 dark:text-slate-200">{t.basicComponents.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.tunaComponents}</li>
            <li><strong className="text-slate-800 dark:text-slate-200">{t.suggestedQuantities.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.tunaQuantities}</li>
            <li><strong className="text-slate-800 dark:text-slate-200">{t.preparationMethod.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.tunaPreparation}</li>
            <li><strong className="text-slate-800 dark:text-slate-200">{t.alternatives.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.tunaAlternatives}</li>
            <li><strong className="text-slate-800 dark:text-slate-200">{t.benefitsHypertension.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.tunaBenefits}</li>
          </ul>
        </div>

        {/* Meal Item 3: Dinner */}
        <div className="p-4 border border-indigo-200 dark:border-indigo-900/50 rounded-lg bg-indigo-50/50 dark:bg-indigo-900/10">
          <h4 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-3">{t.dinnerChickenTitle}</h4>
          <p className="text-slate-700 dark:text-slate-300 mb-2" dangerouslySetInnerHTML={{ __html: t.mealSecret + t.chickenSecret }}></p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-400 pr-4">
            <li><strong className="text-slate-800 dark:text-slate-200">{t.basicComponents.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.chickenComponents}</li>
            <li><strong className="text-slate-800 dark:text-slate-200">{t.suggestedQuantities.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.chickenQuantities}</li>
            <li><strong className="text-slate-800 dark:text-slate-200">{t.preparationMethod.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.chickenPreparation}</li>
            <li><strong className="text-slate-800 dark:text-slate-200">{t.alternatives.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.chickenAlternatives}</li>
            <li><strong className="text-slate-800 dark:text-slate-200">{t.benefitsHypertension.replace(/\*\*(.*?)\*\*/g, '$1')}</strong> {t.chickenBenefits}</li>
          </ul>
        </div>
      </Card>

      {/* Detailed Nutritional Benefits Table */}
      <Card>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-3">{t.additionalDetailsTitle}</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/50">
                <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">{t.day}</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">{t.breakfast.replace('☀️', '')}</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">{t.nutritionalComponent}</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">{t.benefitForHypertension}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100" rowSpan={2}>{t.monday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.scrambledEggsSpinach}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.eggsSpinachNutrient}</td>
                <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">{t.eggsSpinachBenefit}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800/30">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.lentilSoup}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.lentilsNutrient}</td>
                <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">{t.lentilsBenefit}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">{t.tuesday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.greekYogurtBananaFlax}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.yogurtBananaNutrient}</td>
                <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">{t.yogurtBananaBenefit}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800/30">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">{t.wednesday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.wholeWheatToastAvocadoTomato}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.avocadoToastNutrient}</td>
                <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">{t.avocadoToastBenefit}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">{t.thursday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.spinachBananaSmoothie}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.spinachSmoothieNutrient}</td>
                <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">{t.spinachSmoothieBenefit}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-800/30">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">{t.friday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.wholeWheatBreadHummus}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.hummusNutrient}</td>
                <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">{t.hummusBenefit}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">{t.saturday}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.quinoaVeggiesNuts}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 dark:text-slate-200">{t.quinoaVeggiesNutrient}</td>
                <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">{t.quinoaVeggiesBenefit}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* General Medical Advice Card */}
      <Card>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-3">{t.generalAdviceTitle}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Avoid Section */}
          <div className="p-4 border border-red-300 dark:border-red-900/50 rounded-lg bg-red-50/50 dark:bg-red-900/10">
            <h4 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center">
              <XCircle className="h-5 w-5 ml-2" />
              {t.avoidReduceTitle}
            </h4>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 text-sm pr-4">
              <li dangerouslySetInnerHTML={{ __html: t.avoidSodium.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.avoidSaturatedTransFats.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.avoidAddedSugarSweetenedDrinks.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.avoidAlcoholCaffeine.replace(/\*\*(.*?)\*\*/g, '<strong>$1') }}></li>
            </ul>
          </div>

          {/* Focus Section */}
          <div className="p-4 border border-green-300 dark:border-green-900/50 rounded-lg bg-green-50/50 dark:bg-green-900/10">
            <h4 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center">
              <CheckCircle className="h-5 w-5 ml-2" />
              {t.focusOnTitle}
            </h4>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 text-sm pr-4">
              <li dangerouslySetInnerHTML={{ __html: t.focusDASH.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.focusPotassiumMagnesium.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
              <li dangerouslySetInnerHTML={{ __html: t.focusHealthyFats.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};
