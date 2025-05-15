import PorcelanaWeb from '@/images/piura/acuarelas-nativo-lanco.png';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/piura/clasificacion.webp';
import SaboresPositivos from '@/images/piura/essencecocoa.webp';
import EquipoCata from '@/images/piura/equipodecata.webp';
import CuencaCacao from '@/images/piura/corte.webp';

import RuedaSabores from '@/images/piura/ruedadesabores.webp';
import MapaSensorial from '@/images/piura/mapasensorial.webp';
import RuedaSaboresEn from '@/images/piura/ruedadesaboresEn.webp';
import MapaSensorialEn from '@/images/piura/mapasensorialEn.webp';

import TipoDeCacaoOne from '@/images/piura/semillascriollo.webp';
import TipoDeCacaoTwo from '@/images/piura/semilillatrinitario.webp';
import TipoDeCacaoThree from '@/images/piura/cacaocriolloseco.webp';
import TipoDeCacaoFour from '@/images/piura/cacaotrinitarioseco.webp';

import ProtocoloFermentacionOne from '@/images/piura/fermentacion.webp';
import ProtocoloFermentacionTwo from '@/images/piura/fermentacion2.webp';

import CosechaOne from '@/images/piura/secado.webp';
import CosechaTwo from '@/images/piura/secado2.webp';

import CertificadoOrigenOne from '@/images/piura/certificado.webp';
import CertificadoOrigenTwo from '@/images/piura/certificado2.webp';
import CertificadoOrigenThree from '@/images/piura/certificado3.webp';
import CertificadoOrigenFour from '@/images/piura/certificado4.webp';
import CertificadoOrigenFive from '@/images/piura/certificado5.webp';

import TraceabilityOne from '@/images/piura/trazabilidad.webp';
import TraceabilityTwo from '@/images/piura/trazabilidad2.webp';
import TraceabilityThree from '@/images/piura/trazabilidad3.webp';
import TraceabilityFour from '@/images/piura/trazabilidad4.webp';
import TraceabilityFive from '@/images/piura/trazabilidad5.webp';

import map from '@/images/piura/mapa.webp';
import locationOne from '@/images/piura/ecologia.webp';

import historiaOne from '@/images/piura/historia.webp';
import historiaTwo from '@/images/piura/historia2.webp';
import historiaThree from '@/images/piura/historia3.webp';

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
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo, TipoDeCacaoThree, TipoDeCacaoFour],
    },
    protocols: {
      fermentacion: [ProtocoloFermentacionOne, ProtocoloFermentacionTwo],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      certificados: [
        CertificadoOrigenOne,
        CertificadoOrigenTwo,
        CertificadoOrigenThree,
        CertificadoOrigenFour,
        CertificadoOrigenFive,
      ],
      traceability: [
        TraceabilityOne,
        TraceabilityTwo,
        TraceabilityThree,
        TraceabilityFour,
        TraceabilityFive,
      ],
    },
    location: {
      map: map,
      location: [locationOne],
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
      tipoDeCacao: [TipoDeCacaoOne, TipoDeCacaoTwo, TipoDeCacaoThree, TipoDeCacaoFour],
    },
    protocols: {
      fermentacion: [ProtocoloFermentacionOne, ProtocoloFermentacionTwo],
      secado: [CosechaOne, CosechaTwo],
    },
    certifications: {
      certificados: [
        CertificadoOrigenOne,
        CertificadoOrigenTwo,
        CertificadoOrigenThree,
        CertificadoOrigenFour,
        CertificadoOrigenFive,
      ],
      traceability: [
        TraceabilityOne,
        TraceabilityTwo,
        TraceabilityThree,
        TraceabilityFour,
        TraceabilityFive,
      ],
    },
    location: {
      map: map,
      location: [locationOne],
    },
    history: [historiaOne, historiaTwo, historiaThree],
  },
};

export { images };
