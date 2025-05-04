import PorcelanaWeb from '@/images/huila/huila-web.webp';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/huila/evaluacion.webp';
import SaboresPositivos from '@/images/porcelana/cacao.webp';
import EquipoCata from '@/images/huila/equipodecata.webp';
import CuencaCacao from '@/images/huila/corte.webp';
import RuedaSabores from '@/images/huila/mapadesabores.webp';
import MapaSensorial from '@/images/huila/mapasensorial.webp';
import TipoDeCacaoOne from '@/images/huila/cacaotrinitario.webp';
import TipoDeCacaoTwo from '@/images/huila/trinitarioseco.webp';

import ProtocoloFermentacionOne from '@/images/huila/fermentacion.webp';
import ProtocoloFermentacionTwo from '@/images/huila/fermentacion2.webp';
import ProtocoloFermentacionThree from '@/images/huila/fermentacion3.webp';

import CosechaOne from '@/images/huila/secado.webp';
import CosechaTwo from '@/images/huila/secado2.webp';

import CertificadoOrigenOne from '@/images/huila/certificaciones.webp';

import TraceabilityOne from '@/images/huila/trazabilidad.webp';
import TraceabilityTwo from '@/images/huila/trazabilidad2.webp';
import TraceabilityThre from '@/images/huila/trazabilidad3.webp';
import TraceabilityFour from '@/images/huila/trazabilidad4.webp';

import map from '@/images/huila/mapa.webp';
import locationOne from '@/images/huila/ecologia.webp';

import historiaOne from '@/images/huila/historia.webp';

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
      certificados: [CertificadoOrigenOne],
      traceability: [TraceabilityOne, TraceabilityTwo, TraceabilityThre, TraceabilityFour],
    },
    location: {
      map: map,
      location: [locationOne],
    },
    history: [historiaOne],
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
        ProtocoloFermentacionThree,
      ],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      certificados: [CertificadoOrigenOne],
      traceability: [TraceabilityOne, TraceabilityTwo, TraceabilityThre, TraceabilityFour],
    },
    location: {
      map: map,
      location: [locationOne],
    },
    history: [historiaOne],
  },
};

export { images };
