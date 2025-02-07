import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationZH_CN from './locales/zh_CN/translation.json';
import translationZH_TW from './locales/zh_TW/translation.json';

export const resources = {
  en: {
    translation: translationEN,
  },
  zh_CN: {
    translation: translationZH_CN,
  },
  zh_TW: {
    translation: translationZH_TW,
  },
  zh: {
    translation: translationZH_TW,
  },
};

const initI18n = () => {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      fallbackLng: 'en',
      debug: false,
      detection: {
        order: ['querystring', 'localStorage', 'htmlTag'],
        lookupQuerystring: 'lang',
        lookupLocalStorage: 'i18nextLng',
        caches: ['localStorage'],
      },
      interpolation: {
        escapeValue: false,
      },
    })
    .then();
};

export default initI18n;
