import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { tha } from './tha';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: en,
    tha: tha,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
