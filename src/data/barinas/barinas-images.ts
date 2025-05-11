import PorcelanaWeb from '@/images/barinas/barinas-web.webp';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/barinas/evaluacion.webp';
import SaboresPositivos from '@/images/porcelana/cacao.webp';
import EquipoCata from '@/images/barinas/equipodecata2.webp';
import CuencaCacao from '@/images/barinas/equipodecata3.webp';

import RuedaSabores from '@/images/barlovento/ruedaDeSabores.webp';
import MapaSensorial from '@/images/barinas/mapasensorialEn.webp';
import MapaSensorialEn from '@/images/barinas/mapasensorialEn.webp';

import TipoDeCacaoOne from '@/images/surdellago/placeholder.webp';
import TipoDeCacaoTwo from '@/images/surdellago/placeholder.webp';

import ProtocoloFermentacionOne from '@/images/barinas/agricolas.webp';
import ProtocoloFermentacionTwo from '@/images/barinas/agricolasTwo.webp';

import CosechaOne from '@/images/barinas/agricolasThre.webp';
import CosechaTwo from '@/images/barinas/cacao.webp';
import CosechaThre from '@/images/barinas/cacaoTwo.webp';

import TraceabilityOne from '@/images/barinas/agricultores.webp';
import TraceabilityTwo from '@/images/barinas/agricultoresTwo.webp';
import TraceabilityThree from '@/images/barinas/agricultoresThre.webp';

import map from '@/images/barinas/mapa.webp';
import locationOne from '@/images/surdellago/placeholder.webp';
import locationTwo from '@/images/surdellago/placeholder.webp';
import locationThree from '@/images/surdellago/placeholder.webp';

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
      fermentacion: [ProtocoloFermentacionOne, ProtocoloFermentacionTwo],
      secado: [CosechaOne, CosechaTwo, CosechaThre],
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
      mapaSensorial: MapaSensorialEn,
    },
    benefit: {
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo],
    },
    protocols: {
      fermentacion: [ProtocoloFermentacionOne, ProtocoloFermentacionTwo],
      secado: [CosechaOne, CosechaTwo, CosechaThre],
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
