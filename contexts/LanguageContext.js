import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  locale: 'fr',
  changeLocale: () => {},
  mounted: false
});

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Récupérer la langue sauvegardée uniquement côté client
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') || 'fr';
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLocale, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}
