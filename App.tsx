import React, { useState, useEffect } from 'react';
import { InputForm } from './components/InputForm';
import { ResultsView } from './components/ResultsView';
import { UserData, Language } from './types';
import { Globe, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className={`min-h-screen ${lang === 'ar' ? 'rtl' : 'ltr'} bg-primary-50 dark:bg-dark-bg text-slate-900 dark:text-dark-text transition-colors duration-300`}>
      {/* Navbar */}
      <nav className="bg-white/80 dark:bg-dark-card/80 backdrop-blur-md shadow-sm border-b border-purple-100 dark:border-slate-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary-600 to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20">M</div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-purple-600 dark:from-primary-400 dark:to-purple-400">Your guide to healthy life</span>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-primary-50 hover:bg-primary-100 text-primary-600 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-primary-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 hover:bg-primary-100 text-primary-700 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-primary-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <Globe size={18} />
                <span className="font-medium">{lang === 'en' ? 'العربية' : 'English'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!userData ? (
          <div className="space-y-12 animate-fade-in-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                {lang === 'en' ? 'Your Health Journey ' : 'رحلتك الصحية '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400">
                  {lang === 'en' ? 'Starts Here' : 'تبدأ هنا'}
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === 'en' 
                  ? 'Get personalized nutritional advice, meal plans, and lifestyle modifications based on your unique medical profile.'
                  : 'احصل على نصائح غذائية شخصية، وخطط وجبات، وتعديلات في نمط الحياة بناءً على ملفك الطبي الفريد.'}
              </p>
            </div>
            <InputForm lang={lang} onSubmit={setUserData} />
          </div>
        ) : (
          <div className="animate-fade-in">
            <button 
              onClick={() => setUserData(null)}
              className="mb-8 px-4 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-dark-card transition-all flex items-center gap-2 font-medium"
            >
              {lang === 'en' ? '← Back to Form' : '→ الرجوع للنموذج'}
            </button>
            <ResultsView data={userData} lang={lang} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/50 dark:bg-dark-card/50 backdrop-blur border-t border-purple-100 dark:border-slate-800 mt-24 py-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            © 2024 Your guide to healthy life. 
            <span className="block sm:inline mt-2 sm:mt-0 sm:ml-2 opacity-75 text-sm">
              {lang === 'en' ? 'For informational purposes only. Consult a doctor.' : 'لأغراض إعلامية فقط. استشر طبيبك.'}
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;