import PatanemoWeb from '@/images/ocumare/acuarelas-ocumare.png';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/ocumare/evaluacion.webp';
import SaboresPositivos from '@/images/patanemo/cacao.webp';
import EquipoCata from '@/images/ocumare/equipodecata.webp';
import CuencaCacao from '@/images/ocumare/corte.webp';

import RuedaSabores from '@/images/ocumare/mapadesabores.webp';
import MapaSensorial from '@/images/ocumare/mapasensorial.webp';
import RuedaSaboresEn from '@/images/ocumare/mapadesaboresEn.webp';
import MapaSensorialEn from '@/images/ocumare/mapasensorialEn.webp';

import TipoDeCacaoOne from '@/images/ocumare/cacaotrinitario.webp';
import TipoDeCacaoTwo from '@/images/ocumare/cacaocriollo.webp';

import TipoDeCacaoThree from '@/images/ocumare/trinitarioseco.webp';
import TipoDeCacaoFour from '@/images/ocumare/criolloseco.webp';

import ProtocoloFermentacionOne from '@/images/ocumare/fermentacion.webp';
import ProtocoloFermentacionTwo from '@/images/ocumare/fermentacion2.webp';
import ProtocoloFermentacionThree from '@/images/ocumare/fermentacion3.webp';

import CosechaOne from '@/images/ocumare/secado.webp';
import CosechaTwo from '@/images/ocumare/secado2.webp';
import TraceabilityOne from '@/images/ocumare/trazabilidad.webp';

import map from '@/images/ocumare/mapa.webp';
import locationOne from '@/images/ocumare/ecologia.webp';
import locationTwo from '@/images/ocumare/ecologia2.webp';

import historiaOne from '@/images/ocumare/historia.webp';
import historiaTwo from '@/images/ocumare/historia2.webp';

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
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo, TipoDeCacaoThree, TipoDeCacaoFour],
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
      traceability: [TraceabilityOne],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo],
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
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo, TipoDeCacaoThree, TipoDeCacaoFour],
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
