import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones de ejemplo
const resources = {
  en: {
    translation: {
      welcome: 'Welcome to my site',
    },
  },
  pt: {
    translation: {
      welcome: 'Bem-vindo ao meu site',
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido a mi sitio',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
