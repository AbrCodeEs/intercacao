import PorcelanaWeb from '@/images/chulu/acuarelas-paloblanco.png';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/chulu/clasificacion.webp';
import SaboresPositivos from '@/images/chulu/essencecocoa.webp';
import EquipoCata from '@/images/chulu/equipodecata.webp';
import CuencaCacao from '@/images/chulu/corte.webp';

import RuedaSabores from '@/images/chulu/ruedadesabores.webp';
import MapaSensorial from '@/images/chulu/mapasensorial.webp';
import RuedaSaboresEn from '@/images/chulu/ruedadesaboresEn.webp';
import MapaSensorialEn from '@/images/chulu/mapasensorialEn.webp';

import TipoDeCacaoOne from '@/images/chulu/semilillaporcelana.webp';
import TipoDeCacaoTwo from '@/images/chulu/semillascriollo.webp';
import TipoDeCacaoThree from '@/images/chulu/cacaotrinitarioseco.webp';
import TipoDeCacaoFour from '@/images/chulu/criolloseco.webp';

import ProtocoloFermentacionOne from '@/images/chulu/fermentacion.webp';
import ProtocoloFermentacionTwo from '@/images/chulu/fermentacion2.webp';
import ProtocoloFermentacionThree from '@/images/chulu/fermentacion3.webp';

import CertificadoOrigenOne from '@/images/chulu/certificado.webp';
import CertificadoOrigenTwo from '@/images/chulu/certificado2.webp';
import CertificadoOrigenTree from '@/images/chulu/certificado3.webp';
import CertificadoOrigenFour from '@/images/chulu/certificado4.webp';
import CertificadoOrigenFive from '@/images/chulu/certificado5.webp';

import TraceabilityOne from '@/images/chulu/trazabilidad.webp';
import TraceabilityTwo from '@/images/chulu/trazabilidad2.webp';

import map from '@/images/chulu/mapa.webp';
import locationOne from '@/images/chulu/ecologia.webp';
import locationTwo from '@/images/chulu/ecologia2.webp';

import historiaOne from '@/images/chulu/historia.webp';
import historiaTwo from '@/images/chulu/historia2.webp';

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
      fermentacion: [
        ProtocoloFermentacionOne,
        ProtocoloFermentacionTwo,
        ProtocoloFermentacionThree,
      ],
    },
    certifications: {
      certificados: [
        CertificadoOrigenOne,
        CertificadoOrigenTwo,
        CertificadoOrigenTree,
        CertificadoOrigenFour,
        CertificadoOrigenFive,
      ],
      traceability: [TraceabilityOne, TraceabilityTwo],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo],
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
    },
    certifications: {
      certificados: [
        CertificadoOrigenOne,
        CertificadoOrigenTwo,
        CertificadoOrigenTree,
        CertificadoOrigenFour,
        CertificadoOrigenFive,
      ],
      traceability: [TraceabilityOne, TraceabilityTwo],
    },
    location: {
      map: map,
      location: [locationOne, locationTwo],
    },
    history: [historiaOne, historiaTwo],
  },
};

export { images };
