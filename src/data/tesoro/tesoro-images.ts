import PorcelanaWeb from '@/images/tesoro/tesoro-web.webp';

import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/tesoro/evaluacion.webp';
import SaboresPositivos from '@/images/tesoro/cacaoesencia.webp';
import EquipoCata from '@/images/tesoro/equipocata.webp';
import CuencaCacao from '@/images/tesoro/corte1.webp';
import RuedaSabores from '@/images/porcelana/ruedadesabores.webp';
import MapaSensorial from '@/images/porcelana/mapasensorial.webp';

import TipoDeCacaoOne from '@/images/tesoro/cacaotrinitario.webp';
import TipoDeCacaoTwo from '@/images/tesoro/cacaocriollo.webp';

import TipoDeCacaoThree from '@/images/tesoro/secadptrinitario.webp';
import TipoDeCacaoFour from '@/images/tesoro/secadocriollo.webp';

import ProtocoloFermentacionOne from '@/images/tesoro/cosecha1.webp';
import ProtocoloFermentacionTwo from '@/images/tesoro/cosecha2.webp';

import CosechaOne from '@/images/tesoro/secado1.webp';

import TraceabilityOne from '@/images/tesoro/traz1.webp';
import TraceabilityTwo from '@/images/tesoro/traz2.webp';


import map from '@/images/tesoro/mapa.webp';
import locationOne from '@/images/tesoro/paisaje1.webp';
// import locationTwo from '@/images/tesoro/paisaje2.webp';
// import locationThree from '@/images/tesoro/paisaje3.webp';

// import historiaOne from '@/images/porcelana/historia1.webp';
// import historiaTwo from '@/images/porcelana/historia2.webp';
// import historiaThree from '@/images/porcelana/historia3.webp';

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
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo, TipoDeCacaoThree,TipoDeCacaoFour],
    },
    protocols: {
      fermentacion: [
        ProtocoloFermentacionOne,
        ProtocoloFermentacionTwo,
      ],
      secado: [CosechaOne],
      corteChuao: '@/images/chuao/corte-chuao-trinitario.png',
    },
    certifications: {
      traceability: [TraceabilityOne, TraceabilityTwo],
    },
    location: {
      map: map,
      location: [locationOne],
    },
    // history: [historiaOne, historiaTwo, historiaThree],
  },
  en: {
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
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo, TipoDeCacaoThree,TipoDeCacaoFour],
    },
    protocols: {
      fermentacion: [
        ProtocoloFermentacionOne,
        ProtocoloFermentacionTwo,
      ],
      secado: [CosechaOne],
    },
    certifications: {
      traceability: [TraceabilityOne, TraceabilityTwo],
    },
    location: {
      map: map,
      location: [locationOne],
    },
    // history: [historiaOne, historiaTwo, historiaThree],
  },
};

export { images };
