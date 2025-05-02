import PorcelanaWeb from '@/images/surdellago/placeholder.webp';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/porcelana/evaluacion.webp';
import SaboresPositivos from '@/images/porcelana/cacao.webp';
import EquipoCata from '@/images/porcelana/equipodecata.webp';
import CuencaCacao from '@/images/surdellago/placeholder.webp';
import RuedaSabores from '@/images/barlovento/ruedaDeSabores.webp';
import MapaSensorial from '@/images/barlovento/ruedaDeSaboresTwo.webp';
import TipoDeCacaoOne from '@/images/surdellago/placeholder.webp';
import TipoDeCacaoTwo from '@/images/surdellago/placeholder.webp';

import ProtocoloFermentacionOne from '@/images/cajaseca/secado.webp';
import ProtocoloFermentacionTwo from '@/images/cajaseca/secadoTwo.webp';
import ProtocoloFermentacionThre from '@/images/cajaseca/secadoThre.webp';

import CosechaOne from '@/images/cajaseca/secadoFour.webp';
import CosechaTwo from '@/images/cajaseca/secado5.webp';
import CosechaThre from '@/images/cajaseca/secadoSix.webp';

import TraceabilityOne from '@/images/cajaseca/agricultores.webp';
import TraceabilityTwo from '@/images/cajaseca/agricultoresTwo.webp';
import TraceabilityThree from '@/images/cajaseca/agricultoresThre.webp';

import map from '@/images/surdellago/placeholder.webp';
import locationOne from '@/images/cajaseca/agricultoresFour.webp';
import locationTwo from '@/images/cajaseca/agricultoresSeven.webp';
import locationThree from '@/images/cajaseca/agricultoresSix.webp';

import historiaOne from '@/images/surdellago/placeholder.webp';
import historiaTwo from '@/images/surdellago/placeholder.webp';
import historiaThree from '@/images/surdellago/placeholder.webp';

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
      fermentacion: [ProtocoloFermentacionOne, ProtocoloFermentacionTwo, ProtocoloFermentacionThre],
      secado: [CosechaOne, CosechaTwo, CosechaThre],
    },
    certifications: {
      traceability: [TraceabilityOne, TraceabilityTwo, TraceabilityThree],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo, locationThree],
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
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo],
    },
    protocols: {
      fermentacion: [ProtocoloFermentacionOne, ProtocoloFermentacionTwo, ProtocoloFermentacionThre],
      secado: [CosechaOne, CosechaTwo, CosechaThre],
    },
    certifications: {
      traceability: [TraceabilityOne, TraceabilityTwo, TraceabilityThree],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo, locationThree],
    },
    history: [historiaOne, historiaTwo, historiaThree],
  },
};

export { images };
