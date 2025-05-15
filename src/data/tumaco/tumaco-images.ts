import PorcelanaWeb from '@/images/tumaco/acuarelas-tumaco.png';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/tumaco/evaluacion.webp';
import ClasificacionEn from '@/images/tumaco/evaluacionEn.webp';
import SaboresPositivos from '@/images/porcelana/cacao.webp';
import EquipoCata from '@/images/tumaco/equipodecata.webp';
import CuencaCacao from '@/images/tumaco/corte.webp';

import RuedaSabores from '@/images/tumaco/mapadesabores.webp';
import MapaSensorial from '@/images/tumaco/mapasensorial.webp';
import RuedaSaboresEn from '@/images/tumaco/mapadesaboresEn.webp';
import MapaSensorialEn from '@/images/tumaco/mapasensorialEn.webp';

import TipoDeCacaoOne from '@/images/tumaco/cacaotrinitario.webp';
import TipoDeCacaoTwo from '@/images/tumaco/cacaocriollo.webp';
import TipoDeCacaoThre from '@/images/tumaco/secotrinitario.webp';
import TipoDeCacaoFour from '@/images/tumaco/secocriollo.webp';

import ProtocoloFermentacionOne from '@/images/tumaco/fermentacion.webp';
import ProtocoloFermentacionTwo from '@/images/tumaco/fermentacion2.webp';
import ProtocoloFermentacionThree from '@/images/tumaco/fermentacion3.webp';

import CosechaOne from '@/images/tumaco/secado.webp';
import CosechaTwo from '@/images/tumaco/secado2.webp';

import TraceabilityOne from '@/images/tumaco/trazabilidad.webp';
import TraceabilityTwo from '@/images/tumaco/trazabilidad2.webp';

import map from '@/images/tumaco/mapa.webp';

import historiaOne from '@/images/tumaco/historia.webp';
import historiaTwo from '@/images/tumaco/historia2.webp';

const images = {
  es: {
    general: {
      porcelanaWeb: PorcelanaWeb,
      ratingStars: RatingStars,
      clasificacion: Clasificacion,
      saboresPositivos: SaboresPositivos,
      equipoCata: EquipoCata,
      cuencaCacao: CuencaCacao,
      ruedaSabores: RuedaSabores,
      mapaSensorial: MapaSensorial,
    },
    benefit: {
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo, TipoDeCacaoThre, TipoDeCacaoFour],
    },
    protocols: {
      fermentacion: [
        ProtocoloFermentacionOne,
        ProtocoloFermentacionTwo,
        ProtocoloFermentacionThree,
      ],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      traceability: [TraceabilityOne, TraceabilityTwo],
    },
    location: {
      map: map,
      location: [],
    },
    history: [historiaOne, historiaTwo],
  },
  en:{
    general: {
      porcelanaWeb: PorcelanaWeb,
      ratingStars: RatingStars,
      clasificacion: ClasificacionEn,
      saboresPositivos: SaboresPositivos,
      equipoCata: EquipoCata,
      cuencaCacao: CuencaCacao,
      ruedaSabores: RuedaSaboresEn,
      mapaSensorial: MapaSensorialEn,
    },
    benefit: {
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo, TipoDeCacaoThre, TipoDeCacaoFour],
    },
    protocols: {
      fermentacion: [
        ProtocoloFermentacionOne,
        ProtocoloFermentacionTwo,
        ProtocoloFermentacionThree,
      ],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      traceability: [TraceabilityOne, TraceabilityTwo],
    },
    location: {
      map: map,
      location: [],
    },
    history: [historiaOne, historiaTwo],
  },
};

export { images };
