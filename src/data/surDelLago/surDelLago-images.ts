import PorcelanaWeb from '@/images/surdellago/sur-del-lago.webp';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/porcelana/evaluacion.webp';
import SaboresPositivos from '@/images/porcelana/cacao.webp';
import EquipoCata from '@/images/porcelana/equipodecata.webp';
import CuencaCacao from '@/images/porcelana/cacao2.webp';

import RuedaSabores from '@/images/porcelana/ruedadesabores.webp';
import MapaSensorial from '@/images/porcelana/mapasensorial.webp';
import MapaSensorialEn from '@/images/barlovento/mapasensorialEn.webp';

import TipoDeCacaoOne from '@/images/porcelana/tipodecacao.webp';
import TipoDeCacaoTwo from '@/images/porcelana/tipodecacao2.webp';

import ProtocoloFermentacionOne from '@/images/surdellago/placeholder.webp';
import ProtocoloFermentacionTwo from '@/images/surdellago/placeholder.webp';
import ProtocoloFermentacionThree from '@/images/surdellago/placeholder.webp';

import CosechaOne from '@/images/surdellago/cacao.jpeg';
// import CosechaTwo from '@/images/porcelana/cosecha2.webp';

import CertificadoOrigenOne from '@/images/surdellago/placeholder.webp';
import CertificadoOrigenTwo from '@/images/surdellago/placeholder.webp';
import CertificadoOrigenTree from '@/images/surdellago/placeholder.webp';

import TraceabilityOne from '@/images/surdellago/placeholder.webp';
import TraceabilityTwo from '@/images/surdellago/placeholder.webp';

import map from '@/images/surdellago/mapa.webp';
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
      fermentacion: [
        ProtocoloFermentacionOne,
        ProtocoloFermentacionTwo,
        ProtocoloFermentacionThree,
      ],
      secado: [CosechaOne],
    },
    certifications: {
      certificados: [CertificadoOrigenOne, CertificadoOrigenTwo],
      certificadoOrigen: CertificadoOrigenTree,
      traceability: [TraceabilityOne, TraceabilityTwo],
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
      fermentacion: [
        ProtocoloFermentacionOne,
        ProtocoloFermentacionTwo,
        ProtocoloFermentacionThree,
      ],
      secado: [CosechaOne],
    },
    certifications: {
      certificados: [CertificadoOrigenOne, CertificadoOrigenTwo],
      certificadoOrigen: CertificadoOrigenTree,
      traceability: [TraceabilityOne, TraceabilityTwo],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo, locationThree],
    },
    history: [historiaOne, historiaTwo, historiaThree],
  },
};

export { images };
