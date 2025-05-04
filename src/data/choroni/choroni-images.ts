import PorcelanaWeb from '@/images/choroni/choroni-web.webp';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/choroni/evaluacion.webp';
import SaboresPositivos from '@/images/porcelana/cacao.webp';
import EquipoCata from '@/images/choroni/equipodecata.webp';
import CuencaCacao from '@/images/choroni/corte.webp';
import RuedaSabores from '@/images/choroni/mapadesabores.webp';
import MapaSensorial from '@/images/choroni/mapasensorial.webp';

import TipoDeCacaoOne from '@/images/choroni/cacaotrinitario.webp';
import TipoDeCacaoTwo from '@/images/choroni/cacaocriollo.webp';

import TipoDeCacaoThre from '@/images/choroni/trinitarioseco.webp';
import TipoDeCacaoFour from '@/images/choroni/criolloseco.webp';

import ProtocoloFermentacionOne from '@/images/choroni/fermentacion.webp';

import CosechaOne from '@/images/choroni/secado.webp';
import CosechaTwo from '@/images/choroni/secado2.webp';

import CertificadoOrigenTree from '@/images/choroni/trazabilidad.webp';

import TraceabilityOne from '@/images/choroni/trazabilidad2.webp';

import map from '@/images/choroni/mapa.webp';

import historiaOne from '@/images/choroni/historia.webp';
import historiaTwo from '@/images/choroni/historia2.webp';

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
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo, TipoDeCacaoThre, TipoDeCacaoFour],
    },
    protocols: {
      fermentacion: [ProtocoloFermentacionOne],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      certificadoOrigen: CertificadoOrigenTree,
      traceability: [TraceabilityOne],
    },
    location: {
      map: map,
      location: [],
    },
    history: [historiaOne, historiaTwo],
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
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo, TipoDeCacaoThre, TipoDeCacaoFour],
    },
    protocols: {
      fermentacion: [ProtocoloFermentacionOne],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      certificadoOrigen: CertificadoOrigenTree,
      traceability: [TraceabilityOne],
    },
    location: {
      map: map,
      location: [],
    },
    history: [historiaOne, historiaTwo],
  },
};

export { images };
