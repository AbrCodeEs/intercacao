import { chuao } from './translations/chuao';

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  es: {
    chuao: chuao.es,
  },
  en: {
    chuao: chuao.en,
  },
} as const;
