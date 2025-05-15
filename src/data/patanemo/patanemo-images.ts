import PatanemoWeb from '@/images/patanemo/acuarela-patanemo.png';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/patanemo/evaluacion.webp';
import SaboresPositivos from '@/images/patanemo/cacao.webp';
import EquipoCata from '@/images/patanemo/equipodecata.webp';
import CuencaCacao from '@/images/patanemo/corte.webp';

import RuedaSabores from '@/images/patanemo/ruedadesabores.webp';
import MapaSensorial from '@/images/patanemo/mapasensorial.webp';
import RuedaSaboresEn from '@/images/patanemo/ruedadesaboresEn.webp';
import MapaSensorialEn from '@/images/patanemo/mapasensorialEn.webp';

import TipoDeCacaoOne from '@/images/patanemo/cacaotrinitario.webp';
import TipoDeCacaoTwo from '@/images/patanemo/trinitarioseco.webp';

import ProtocoloFermentacionOne from '@/images/patanemo/fermentacion1.webp';

import CosechaOne from '@/images/patanemo/secado1.webp';
import TraceabilityOne from '@/images/patanemo/trazabilidad.webp';

import map from '@/images/patanemo/mapa.webp';
import locationOne from '@/images/patanemo/ecologia.webp';
import locationTwo from '@/images/patanemo/ecologia2.webp';
import locationThree from '@/images/patanemo/ecologia3.webp';

import historiaOne from '@/images/patanemo/historia.webp';
import historiaTwo from '@/images/patanemo/historia2.webp';
// import historiaThree from '@/images/patanemo/historia3.webp';

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
      secado: [CosechaOne],
    },
    certifications: {
      traceability: [TraceabilityOne],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo, locationThree],
    },
    history: [
      historiaOne,
      historiaTwo,
      // historiaThree
    ],
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
      secado: [CosechaOne],
    },
    certifications: {
      traceability: [TraceabilityOne],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo, locationThree],
    },
    history: [historiaOne, historiaTwo],
  },
};

export { images };
