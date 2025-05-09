import PorcelanaWeb from '@/images/tesoro/tesoro-web.webp';

import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/tesoro/evaluacion.webp';
import SaboresPositivos from '@/images/tesoro/cacaoesencia.webp';
import EquipoCata from '@/images/tesoro/equipocata.webp';
import CuencaCacao from '@/images/tesoro/corte1.webp';
import RuedaSabores from '@/images/tesoro/ruedamundodesabores.webp';
import MapaSensorial from '@/images/tesoro/mapaperfilsensorial.webp';

import TipoDeCacaoOne from '@/images/tesoro/cacaotrinitario.webp';
import TipoDeCacaoTwo from '@/images/tesoro/cacaocriollo.webp';

import TipoDeCacaoThree from '@/images/tesoro/secadptrinitario.webp';
import TipoDeCacaoFour from '@/images/tesoro/secadocriollo.webp';

import ProtocoloFermentacionOne from '@/images/tesoro/cosecha1.webp';
import ProtocoloFermentacionTwo from '@/images/tesoro/cosecha2.webp';
import ProtocoloFermentacionThree from '@/images/tesoro/cosecha3.webp';

import CosechaOne from '@/images/tesoro/secado1.webp';

import TraceabilityOne from '@/images/tesoro/traz1.webp';
import TraceabilityTwo from '@/images/tesoro/traz2.webp';
import TraceabilityThree from '@/images/tesoro/traz3.webp';
import TraceabilityFour from '@/images/tesoro/traz4.webp';

import map from '@/images/tesoro/mapa.webp';
import locationOne from '@/images/tesoro/paisaje1.webp';

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
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo, TipoDeCacaoThree, TipoDeCacaoFour],
    },
    protocols: {
      fermentacion: [
        ProtocoloFermentacionOne,
        ProtocoloFermentacionTwo,
        ProtocoloFermentacionThree,
      ],
      secado: [CosechaOne],
      corteChuao: '@/images/chuao/corte-chuao-trinitario.png',
    },
    certifications: {
      traceability: [TraceabilityOne, TraceabilityTwo, TraceabilityThree, TraceabilityFour],
    },
    location: {
      map: map,
      location: [locationOne],
    },
    // history: [historiaOne, historiaTwo, historiaThree],
  },
  eng: {
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
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo, TipoDeCacaoThree, TipoDeCacaoFour],
    },
    protocols: {
      fermentacion: [
        ProtocoloFermentacionOne,
        ProtocoloFermentacionTwo,
        ProtocoloFermentacionThree,
      ],
      secado: [CosechaOne],
    },
    certifications: {
      traceability: [TraceabilityOne, TraceabilityTwo, TraceabilityThree, TraceabilityFour],
    },
    location: {
      map: map,
      location: [locationOne],
    },
    // history: [historiaOne, historiaTwo, historiaThree],
  },
};

export { images };
