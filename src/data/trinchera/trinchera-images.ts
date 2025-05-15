import PatanemoWeb from '@/images/trinchera/acuarelas-trinchera.png';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/trinchera/evaluacion.webp';
import SaboresPositivos from '@/images/patanemo/cacao.webp';
import EquipoCata from '@/images/trinchera/equipodecata.webp';
import CuencaCacao from '@/images/trinchera/corte.webp';

import RuedaSabores from '@/images/trinchera/mapadesabores.webp';
import MapaSensorial from '@/images/trinchera/mapasensorial.webp';
import RuedaSaboresEn from '@/images/trinchera/mapadesaboresEn.webp';
import MapaSensorialEn from '@/images/trinchera/mapasensorialEn.webp';

import TipoDeCacaoOne from '@/images/trinchera/cacaotrinitario.webp';
import TipoDeCacaoTwo from '@/images/trinchera/trinitarioseco.webp';

import ProtocoloFermentacionOne from '@/images/trinchera/fermentacion.webp';

import CosechaOne from '@/images/trinchera/secado.webp';
import CosechaTwo from '@/images/trinchera/secado2.webp';

import TraceabilityOne from '@/images/trinchera/trazabilidad.webp';
import TraceabilityTwo from '@/images/trinchera/trazabilidad2.webp';
import TraceabilityThree from '@/images/trinchera/trazabilidad3.webp';

import map from '@/images/trinchera/mapa.webp';

import historiaOne from '@/images/trinchera/historia.webp';
import historiaTwo from '@/images/trinchera/historia2.webp';

const images = {
  es: {
    general: {
      bannerWeb: PatanemoWeb,
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
      fermentacion: [ProtocoloFermentacionOne],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      traceability: [TraceabilityOne, TraceabilityTwo, TraceabilityThree],
    },
    location: {
      map: map,
      location: [],
    },
    history: [historiaOne, historiaTwo],
  },
  en:{
    general: {
      bannerWeb: PatanemoWeb,
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
      fermentacion: [ProtocoloFermentacionOne],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      traceability: [TraceabilityOne, TraceabilityTwo, TraceabilityThree],
    },
    location: {
      map: map,
      location: [],
    },
    history: [historiaOne, historiaTwo],
  },
};

export { images };
