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

import ProtocoloFermentacionOne from '@/images/barlovento/secado.webp';
import ProtocoloFermentacionTwo from '@/images/barlovento/secadoTwo.webp';

import CosechaOne from '@/images/barlovento/secadoThre.webp';

import TraceabilityOne from '@/images/barlovento/negro.webp';
import TraceabilityTwo from '@/images/barlovento/negroTwo.webp';
import TraceabilityThree from '@/images/barlovento/negros.webp';

import map from '@/images/porcelana/mapa.webp';
import locationOne from '@/images/porcelana/paisaje1.webp';
import locationTwo from '@/images/porcelana/paisaje2.webp';
import locationThree from '@/images/porcelana/paisaje3.webp';

import historiaOne from '@/images/porcelana/historia1.webp';
import historiaTwo from '@/images/porcelana/historia2.webp';
import historiaThree from '@/images/porcelana/historia3.webp';

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
        ProtocoloFermentacionTwo,
      ],
      secado: [CosechaOne],
    },
    certifications: {
      // certificados: [CertificadoOrigenOne, CertificadoOrigenTwo],
      // certificadoOrigen: CertificadoOrigenTree,
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
      fermentacion: [
        ProtocoloFermentacionOne,
        ProtocoloFermentacionTwo,
      ],
      secado: [CosechaOne],
    },
    certifications: {
      // certificados: [CertificadoOrigenOne, CertificadoOrigenTwo],
      // certificadoOrigen: CertificadoOrigenTree,
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
