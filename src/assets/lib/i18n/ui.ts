import { chuao } from './translations/chuao';
import { home } from './translations/home';
import { porcelana } from './translations/porcelana';

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    home: home.es,
    chuao: chuao.es,
    porcelana: porcelana.es,
  },
  en: {
    home: home.en,
    chuao: chuao.en,
    porcelana: porcelana.en,
  },
} as const;
