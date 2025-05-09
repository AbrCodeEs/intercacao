import PatanemoWeb from '@/images/mantuano/acuarela-mantuano.png';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/mantuano/evaluacion.webp';
import SaboresPositivos from '@/images/patanemo/cacao.webp';
import EquipoCata from '@/images/mantuano/equipodecata.webp';
import CuencaCacao from '@/images/mantuano/corte.webp';

import RuedaSabores from '@/images/mantuano/ruedadesabores.webp';
import MapaSensorial from '@/images/mantuano/mapasensorial.webp';
import RuedaSaboresEn from '@/images/mantuano/ruedadesaboresEn.webp';
import MapaSensorialEn from '@/images/mantuano/mapasensorialEn.webp';

import TipoDeCacaoOne from '@/images/mantuano/cacaotrinitario.webp';
import TipoDeCacaoTwo from '@/images/mantuano/trinitarioseco.webp';

import ProtocoloFermentacionOne from '@/images/mantuano/fermentacion.webp';
import ProtocoloFermentacionTwo from '@/images/mantuano/fermentacion2.webp';

import CosechaOne from '@/images/mantuano/secado.webp';
import CosechaTwo from '@/images/mantuano/secado2.webp';
import TraceabilityOne from '@/images/mantuano/trazabilidad.webp';

import map from '@/images/mantuano/mapa.webp';
import locationOne from '@/images/mantuano/ecologia.webp';
import locationTwo from '@/images/mantuano/ecologia2.webp';

import historiaOne from '@/images/mantuano/historia.webp';
import historiaTwo from '@/images/mantuano/historia2.webp';

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
      fermentacion: [ProtocoloFermentacionOne, ProtocoloFermentacionTwo],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      traceability: [TraceabilityOne],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo],
    },
    history: [historiaOne, historiaTwo],
  },
  eng: {
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
      fermentacion: [ProtocoloFermentacionOne, ProtocoloFermentacionTwo],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      traceability: [TraceabilityOne],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo],
    },
    history: [historiaOne, historiaTwo],
  },
};

export { images };
