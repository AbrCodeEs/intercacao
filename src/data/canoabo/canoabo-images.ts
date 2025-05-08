import PorcelanaWeb from '@/images/canoabo/canoabo-web.webp';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/canoabo/evaluacion.webp';
import SaboresPositivos from '@/images/canoabo/cacao.webp';
import EquipoCata from '@/images/canoabo/equipodecata.webp';
import CuencaCacao from '@/images/canoabo/corte.webp';

import RuedaSabores from '@/images/canoabo/mapadesabores.webp';
import MapaSensorial from '@/images/canoabo/mapasensorial.webp';
import RuedaSaboresEn from '@/images/canoabo/mapadesaboresEn.webp';
import MapaSensorialEn from '@/images/canoabo/mapasensorialEn.webp';

import TipoDeCacaoOne from '@/images/canoabo/cacaotrinitario.webp';
import TipoDeCacaoTwo from '@/images/canoabo/trinitarioseco.webp';

import ProtocoloFermentacionOne from '@/images/canoabo/fermentacion.webp';

import CosechaOne from '@/images/canoabo/secado.webp';
import CosechaTwo from '@/images/canoabo/secado2.webp';

import TraceabilityOne from '@/images/canoabo/trazabilidad.webp';

import map from '@/images/canoabo/mapa.webp';
import locationOne from '@/images/canoabo/ecologia.webp';

import historiaOne from '@/images/canoabo/historia.webp';
import historiaTwo from '@/images/canoabo/historia2.webp';

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
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo],
    },
    protocols: {
      fermentacion: [
        ProtocoloFermentacionOne,
      ],
      secado: [CosechaOne, CosechaTwo],
     
    },
    certifications: {
      traceability: [TraceabilityOne],
    },
    location: {
      map: map,
      location: [locationOne],
    },
    history: [historiaOne, historiaTwo],
  },
  eng: {
    general: {
      porcelanaWeb: PorcelanaWeb,
      ratingStars: RatingStars,
      clasificacion: Clasificacion,
      saboresPositivos: SaboresPositivos,
      equipoCata: EquipoCata,
      cuencaCacao: CuencaCacao,
      ruedaSabores: RuedaSaboresEn,
      mapaSensorial: MapaSensorialEn,
    },
    benefit: {
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo],
    },
    protocols: {
      fermentacion: [
        ProtocoloFermentacionOne,
      ],
      secado: [CosechaOne, CosechaTwo],
     
    },
    certifications: {
      traceability: [TraceabilityOne],
    },
    location: {
      map: map,
      location: [locationOne],
    },
    history: [historiaOne, historiaTwo],
  },
};

export { images };
