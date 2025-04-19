// chuao-images.ts
import ChuaoWeb from '@/images/chuao/chuao-web.webp';
import RatingStars from '@/images/chuao/rating-stars-cut.png';
import Clasificacion from '@/images/chuao/clasificacion-rating.png';
import SaboresPositivos from '@/images/chuao/sabores-positivos.jpg';
import EquipoCata from '@/images/chuao/equipo-de-cata.jpg';
import CuencaCacao from '@/images/chuao/cuenca-de-cacao.jpg';
import RuedaSabores from '@/images/chuao/rueda-de-sabores.png';
import MapaSensorial from '@/images/chuao/mapa-perfil-sensorial-chuao.png';

import SemillaPorcelana from '@/images/chuao/semililla-porcelana-uno.png';
import SemillaPorcelanaDos from '@/images/chuao/semililla-porcelana-dos.png';
import CorteChuaoTrinitario from '@/images/chuao/corte-chuao-trinitario.png';
import CorteChuaoCriollo from '@/images/chuao/corte-chuao-criollo.png';

import ProtocoloFermentacion from '@/images/chuao/protocolo-fermentacion.jpg';
import ProtocoloSecado from '@/images/chuao/protocolo-secado.jpg';
import CertificadoOrigen from '@/images/chuao/certificado-de-origen-chuao.jpg';
import Agricultores from '@/images/chuao/chuao-agricultores.jpeg';
import Mosaico from '@/images/chuao/chuao-mosaico.jpeg';
import Mapa from '@/images/chuao/mapa-chuao.jpg';
import Ubicacion from '@/images/chuao/ubicacion-ecologia.jpg';
import Ubicacion2 from '@/images/chuao/ubicacion-henry-pittier.jpg';
import Historia from '@/images/chuao/historia-pueblo-iglesia-sepia.jpg';
import Historia2 from '@/images/chuao/historia-dime-chuao-pared.jpg';

const images = {
  es: {
    general: {
      chuaoWeb: ChuaoWeb,
      ratingStars: RatingStars,
      clasificacion: Clasificacion,
      saboresPositivos: SaboresPositivos,
      equipoCata: EquipoCata,
      cuencaCacao: CuencaCacao,
      ruedaSabores: RuedaSabores,
      mapaSensorial: MapaSensorial,
    },
    benefit: {
      tipoDeCacao: [SemillaPorcelana, SemillaPorcelanaDos, CorteChuaoTrinitario, CorteChuaoCriollo],
    },
    protocols: {
      fermentacion: [ProtocoloFermentacion],
      secado: [ProtocoloSecado, ],
      corteChuao: CorteChuaoCriollo,
    },
    certifications: {
      certificados: [Mosaico, Agricultores],
      certificadoOrigen: CertificadoOrigen,
      traceability: [Mapa, Ubicacion],
    },
    location: {
      map: Mapa,
      location: [Ubicacion, Ubicacion2, Historia],
    },
    history: [Historia, Historia2],
  },
  en: {
    general: {
      chuaoWeb: ChuaoWeb,
      ratingStars: RatingStars,
      clasificacion: Clasificacion,
      saboresPositivos: SaboresPositivos,
      equipoCata: EquipoCata,
      cuencaCacao: CuencaCacao,
      ruedaSabores: RuedaSabores,
      mapaSensorial: MapaSensorial,
    },
    benefit: {
      tipoDeCacao: [SemillaPorcelana, SemillaPorcelanaDos,  CorteChuaoTrinitario, CorteChuaoCriollo],
    },
    protocols: {
      fermentacion: [ProtocoloFermentacion],
      secado: [ProtocoloSecado, CorteChuaoTrinitario],
    },
    certifications: {
      certificados: [CertificadoOrigen, Agricultores],
      certificadoOrigen: Mosaico,
      traceability: [Mapa, Ubicacion],
    },
    location: {
      map: Mapa,
      location: [Ubicacion, Ubicacion2, Historia],
    },
    history: [Historia, Historia2],
  },
};

export { images };
