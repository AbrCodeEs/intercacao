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
import { cajaseca } from '@/data/cajaSeca/cajaseca-content';
import { barinas } from '@/data/barinas/barinas-content';
import { choroni } from '@/data/choroni/choroni-content';
import { huila } from '@/data/huila/huila-content';
import { manapiare } from '@/data/manapiare/manapiare-content';
import { mantuano } from '@/data/mantuano/mantuano-content';
import { ocumare } from '@/data/ocumare/ocumare-content';
import { trinchera } from '@/data/trinchera/trinchera-content';
import { piura } from '@/data/piura/piura-content';
import { chulucanas } from '@/data/chulucanas/chulucanas-content';

export const languages = {
  en:'English',
  es: 'Español',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    home: home.es,
    chuao: chuao.es,
    porcelana: porcelana.es,
    tesoro: tesoro.es,
    pintao: pintao.es,
    patanemo: patanemo.es,
    tumaco: tumaco.es,
    canoabo: canoabo.es,
    choroni: choroni.es,
    huila: huila.es,
    manapiare: manapiare.es,
    mantuano: mantuano.es,
    ocumare: ocumare.es,
    trinchera: trinchera.es,
    piura: piura.es,
    chulucanas: chulucanas.es,
    surdellago: surDelLago.es,
    barlovento: barlovento.es,
    cajaseca: cajaseca.es,
    barinas: barinas.es,
  },
  en:{
    home: home.en,
    chuao: chuao.en,
    porcelana: porcelana.en,
    tesoro: tesoro.en,
    pintao: pintao.en,
    patanemo: patanemo.en,
    tumaco: tumaco.en,
    canoabo: canoabo.en,
    choroni: choroni.en,
    huila: huila.en,
    manapiare: manapiare.en,
    mantuano: mantuano.en,
    ocumare: ocumare.en,
    trinchera: trinchera.en,
    piura: piura.en,
    chulucanas: chulucanas.en,
    surdellago: surDelLago.en,
    barlovento: barlovento.en,
    cajaseca: cajaseca.en,
    barinas: barinas.en,
  },
} as const;
