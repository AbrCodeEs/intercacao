import { home } from '@/lib/translations/data/home';

import { chuao } from '@/data/chuao/chuao-content';
import { porcelana } from '@/data/porcelana/porcelana-content';
import { pintao } from '@/data/pintao/pintao-content';
import { tesoro } from '@/data/tesoro/tesoro-content';
import { patanemo } from '@/data/patanemo/patanemo-content';
import { tumaco } from '@/data/tumaco/tumaco-content';
import { canoabo } from '@/data/canoabo/canoabo-content';
import { surDelLago } from '@/data/surDelLago/surDelLago-content';
import { barlovento } from '@/data/barlovento/barlovento-content';

export const languages = {
  eng: 'English',
  es: 'Español',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    home: home.es, // ✅
    chuao: chuao.es, // ✅
    porcelana: porcelana.es, // ✅
    tesoro: tesoro.es, // ✅
    pintao: pintao.es, // ✅
    patanemo: patanemo.es,
    tumaco: tumaco.es,
    canoabo: canoabo.es,
    // ultimos productos
    surdellago: surDelLago.es,
    barlovento: barlovento.es
  },
  eng: {
    home: home.en,
    chuao: chuao.en,
    porcelana: porcelana.en,
    tesoro: tesoro.en,
    pintao: pintao.en,
    patanemo: patanemo.en,
    tumaco: tumaco.en,
    canoabo: canoabo.en,
    // ultimos productos
    surdellago: surDelLago.en,
    barlovento: barlovento.es
  },
} as const;
