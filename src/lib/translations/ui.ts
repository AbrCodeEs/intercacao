import { home } from '@/lib/translations/data/home';

import { chuao } from '@/data/chuao/chuao-content';
import { porcelana } from '@/data/porcelana/porcelana-content';
import { pintao } from '@/data/pintao/pintao-content';
import { tesoro } from '@/data/tesoro/tesoro-content';

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
    tesoro: tesoro.es,
    pintao: pintao.es
  },
  en: {
    home: home.en,
    chuao: chuao.en,
    porcelana: porcelana.en,
    tesoro: tesoro.en,
    pintao: pintao.en
  },
} as const;
