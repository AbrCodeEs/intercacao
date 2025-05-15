import PorcelanaWeb from '@/images/porcelana/porcelana-web.webp';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/porcelana/evaluacion.webp';
import SaboresPositivos from '@/images/porcelana/cacao.webp';
import EquipoCata from '@/images/porcelana/equipodecata.webp';
import CuencaCacao from '@/images/porcelana/cacao2.webp';

import RuedaSabores from '@/images/porcelana/ruedadesabores.webp';
import MapaSensorial from '@/images/porcelana/mapasensorial.webp';
import RuedaSaboresEn from '@/images/porcelana/ruedadesaboresEN.webp';
import MapaSensorialEn from '@/images/porcelana/mapasensorialEn.webp';

import TipoDeCacaoOne from '@/images/porcelana/tipodecacao.webp';
import TipoDeCacaoTwo from '@/images/porcelana/tipodecacao2.webp';

import ProtocoloFermentacionOne from '@/images/porcelana/fermentado1.webp';
import ProtocoloFermentacionTwo from '@/images/porcelana/fermentado2.webp';
import ProtocoloFermentacionThree from '@/images/porcelana/fermentado3.webp';

import CosechaOne from '@/images/porcelana/cosecha1.webp';
import CosechaTwo from '@/images/porcelana/cosecha2.webp';

import CertificadoOrigenOne from '@/images/porcelana/certificaciones1.webp';
import CertificadoOrigenTwo from '@/images/porcelana/certificaciones2.webp';
import CertificadoOrigenTree from '@/images/porcelana/certificaciones3.webp';

import TraceabilityOne from '@/images/porcelana/trazabilidad.webp';
import TraceabilityTwo from '@/images/porcelana/trazabilidad2.webp';
import TraceabilityThree from '@/images/porcelana/trazabilidad3.webp';
import TraceabilityFour from '@/images/porcelana/trazabilidad4.webp';

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
        ProtocoloFermentacionThree,
      ],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      certificados: [CertificadoOrigenOne, CertificadoOrigenTwo],
      certificadoOrigen: CertificadoOrigenTree,
      traceability: [TraceabilityOne, TraceabilityTwo, TraceabilityThree, TraceabilityFour],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo, locationThree],
    },
    history: [historiaOne, historiaTwo, historiaThree],
  },
  en:{
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
        ProtocoloFermentacionTwo,
        ProtocoloFermentacionThree,
      ],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      certificados: [CertificadoOrigenOne, CertificadoOrigenTwo],
      certificadoOrigen: CertificadoOrigenTree,
      traceability: [TraceabilityOne, TraceabilityTwo, TraceabilityThree, TraceabilityFour],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo, locationThree],
    },
    history: [historiaOne, historiaTwo, historiaThree],
  },
};

export { images };
