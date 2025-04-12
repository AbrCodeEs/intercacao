import { chuao } from '@/lib/translations/data/chuao';
import { home } from '@/lib/translations/data/home';
import { porcelana } from '@/lib/translations/data/porcelana';

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
