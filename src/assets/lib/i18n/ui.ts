import { chuao } from './translations/chuao';
import { porcelana } from './translations/porcelana';

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  es: {
    chuao: chuao.es,
    porcelana: porcelana.es,
  },
  en: {
    chuao: chuao.en,
    porcelana: porcelana.en,
  },
} as const;
