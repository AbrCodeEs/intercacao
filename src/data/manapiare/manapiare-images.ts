import PatanemoWeb from '@/images/manapiare/manapiare-web.webp';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/manapiare/evaluacion.webp';
import SaboresPositivos from '@/images/patanemo/cacao.webp';
import EquipoCata from '@/images/manapiare/equipodecata.webp';
import CuencaCacao from '@/images/manapiare/corte.webp';
import RuedaSabores from '@/images/manapiare/mapadesabore.webp';
import MapaSensorial from '@/images/manapiare/mapasensorial.webp';

import TipoDeCacaoOne from '@/images/manapiare/cacaotrinitario.webp';
import TipoDeCacaoTwo from '@/images/manapiare/trinitarioseco.webp';

import ProtocoloFermentacionOne from '@/images/manapiare/fermentacion.webp';
import ProtocoloFermentacionTwo from '@/images/manapiare/fermentacion2.webp';

import CosechaOne from '@/images/manapiare/secado.webp';
import CosechaTwo from '@/images/manapiare/secado2.webp';
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
      fermentacion: [ProtocoloFermentacionOne, ProtocoloFermentacionTwo],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      traceability: [
        TraceabilityOne
      ],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo, locationThree],
    },
    history: [historiaOne, historiaTwo, 
      // historiaThree
    ],
  },
  eng: {
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
      traceability: [
        TraceabilityOne,
      ],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo, locationThree],
    },
    history: [historiaOne, historiaTwo
    ],
  },
};

export { images };
