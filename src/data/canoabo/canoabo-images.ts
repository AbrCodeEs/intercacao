import PorcelanaWeb from '@/images/pintao/carupano-pintao-web.webp';

import RatingStars from '@/images/chuao/rating-stars-cut.png';

import Clasificacion from '@/images/pintao/evaluacion.webp';
import SaboresPositivos from '@/images/pintao/cacaoesencia.webp';
import EquipoCata from '@/images/pintao/equipocata.webp';
import CuencaCacao from '@/images/pintao/cortecacao.webp';
import RuedaSabores from '@/images/pintao/ruedadesabores.webp';
import MapaSensorial from '@/images/pintao/mapasensorial.webp';

import TipoDeCacaoOne from '@/images/pintao/cacaotrinitario.webp';
import TipoDeCacaoTwo from '@/images/pintao/cacaocriollo.webp';
import TipoDeCacaoThree from '@/images/pintao/secadocriollo.webp';
import TipoDeCacaoFour from '@/images/pintao/secadotrinitario.webp';

import ProtocoloFermentacionOne from '@/images/pintao/cosecha1.webp';
import ProtocoloFermentacionTwo from '@/images/pintao/cosecha2.webp';
import ProtocoloFermentacionThree from '@/images/pintao/cosecha3.webp';

import CosechaOne from '@/images/pintao/secado1.webp';
import CosechaTwo from '@/images/pintao/secado2.webp';

import TraceabilityOne from '@/images/pintao/trazabilidad.webp';
import TraceabilityTwo from '@/images/pintao/trazabilidad2.webp';

import map from '@/images/pintao/mapa.webp';
import locationOne from '@/images/pintao/paisaje.webp';

import historiaOne from '@/images/pintao/historia1.webp';
import historiaTwo from '@/images/pintao/historia2.webp';
import historiaThree from '@/images/pintao/historia3.webp';

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
      secado: [CosechaOne, CosechaTwo],
     
    },
    certifications: {
      traceability: [TraceabilityOne, TraceabilityTwo],
    },
    location: {
      map: map,
      location: [locationOne],
    },
    history: [historiaOne, historiaTwo, historiaThree],
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
      secado: [CosechaOne, CosechaTwo],
     
    },
    certifications: {
      traceability: [TraceabilityOne, TraceabilityTwo],
    },
    location: {
      map: map,
      location: [locationOne],
    },
    history: [historiaOne, historiaTwo, historiaThree],
  },
};

export { images };
