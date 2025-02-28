import banner from '@/images/home/banner.webp';
import mundoDeSabores from '@/images/home/imagotipo-mundo-de-sabores.webp';
import mundoDeSaboresPanel from '@/images/home/mundo-de-sabores-panel.webp';
import logoInteracao from '@/images/global/logo-intercacao.webp';
import logoWhiteImagotipoCacaoGourmet from '@/images/global/logo-white-imagotipo-cacao-gourmet.webp';
import mundoDeSaboresEN from '@/images/home/imagotipo-world-of-flavors.webp';
import mundoDeSaboresINGPanelConSombra from '@/images/home/mundo-de-sabores-ing-panel-con-sombra.webp';

const es = {
  banner: {
    src: banner,
    alt: 'Intercacao banner principal',
  },
  logo: {
    src: logoInteracao,
    alt: 'Logo Intercacao',
  },
  mundo_de_sabores: {
    src: mundoDeSabores,
    alt: 'Mundo de Sabores',
  },
  mundo_de_sabores_panel: {
    src: mundoDeSaboresPanel,
    alt: 'Mundo de Sabores panel',
  },
  logo_white_imagotipo_cacao_gourmet: {
    src: logoWhiteImagotipoCacaoGourmet,
    alt: 'Logo White Imagotipo Cacao Gourmet',
  },
  about: {
    title: 'Nosotros',
    subtitle: 'Somos un equipo de apasionados por el cacao.',
    description:
      'Nuestra misión es buscar los más deseados cacaos que contribuyan a la elaboración de los mejores chocolates del mundo. Trabajamos en los lugares donde crecen los mejores cacaos, hogar de los grandiosos cacaos criollos, llegamos a orígenes inaccesibles buscando una completa trazabilidad y aplicando protocolos post cosecha logrando así aromas y sabores extraordinarios para que los grandes chocolateros puedan elaborar los mejores chocolates del mundo.',
  },
  cocoa_gallery: {
    order_by: 'Ordenar por:',
    filter_flavor: 'Mundo de sabores',
    link: 'Ver mas',
  },
  posts: [
    {
      title: 'Metodo de evaluación',
      description:
        'El metodo de evaluacion “cacao grader” complementa el metodo tradicional con un una evaluacion organoléptica completa, desarrollada por la reconocida Chloe Doutre',
      image_alt: 'Metodo de evaluación',
    },
    {
      title: 'Chloe Doutre Rousell',
      description: 'Consultora, Educadora y Experta en cacao fino y chocolate. ',
      image_alt: 'Metodo de evaluación',
    },
    {
      title: 'Ing. Alexis Zambrano',
      description: 'Profesor, PhD, Magister, Ingeniero Quimico. ',
      image_alt: 'Metodo de evaluación',
    },
    {
      title: 'Fundacion Quirico Prosperi',
      description:
        'Organización sin fines de lucro creada con la misión de promover y difundir los valores históricos y agrícolas de Venezuela a través de programas educativos y sociales como “Regreso al agro” y “Proyecto Agua”. ',
      image_alt: 'Metodo de evaluación',
    },
    {
      title: 'Central de Beneficio “Pintao“',
      description:
        'Situado en La Concepción, Rio Caribe, nuestras instalaciones cuentan con un equipo de expertos que garantiza los mejores protocolos de fermentación y secado y trazabilidad',
      image_alt: 'Metodo de evaluación',
    },
    {
      title: 'Central de Beneficio “Tesoro”',
      description:
        'Situado en el sur del lago (SDLG), nuestras instalaciones cuentan con un equipo de expertos que garantiza los mejores protocolos de fermentacion y secado y trazabilidad',
      image_alt: 'Metodo de evaluación',
    },
  ],
};

const en = {
  banner: {
    src: banner,
    alt: 'Main Intercacao banner',
  },
  logo: {
    src: logoInteracao,
    alt: 'Intercacao Logo',
  },
  mundo_de_sabores: {
    src: mundoDeSaboresEN,
    alt: 'World of Flavors',
  },
  mundo_de_sabores_panel: {
    src: mundoDeSaboresINGPanelConSombra,
    alt: 'World of Flavors Panel',
  },
  logo_white_imagotipo_cacao_gourmet: {
    src: logoWhiteImagotipoCacaoGourmet,
    alt: 'White Logo Imagotype Gourmet Cacao',
  },
  about: {
    title: 'About Us',
    subtitle: 'We are a team passionate about cocoa.',
    description:
      "Our mission is to seek the most desirable cocoa beans that contribute to the creation of the world's finest chocolates. We work in the regions where the best cocoa grows, home to magnificent Criollo cocoa varieties. We reach inaccessible origins to ensure complete traceability, applying post-harvest protocols to achieve extraordinary aromas and flavors, enabling master chocolatiers to craft the world's finest chocolates.",
  },
  cocoa_gallery: {
    order_by: 'Order by:',
    filter_flavor: 'World of Flavors',
    link: 'See',
  },
  posts: [
    {
      title: 'Evaluation Method',
      description:
        "The 'cacao grader' evaluation method complements traditional methods with a complete organoleptic assessment, developed by renowned expert Chloe Doutre.",
      image_alt: 'Evaluation Method',
    },
    {
      title: 'Chloe Doutre Rousell',
      description: 'Consultant, Educator, and Expert in fine cocoa and chocolate.',
      image_alt: 'Evaluation Method',
    },
    {
      title: 'Dr. Alexis Zambrano',
      description: "Professor, PhD, Master's Degree Holder, Chemical Engineer.",
      image_alt: 'Evaluation Method',
    },
    {
      title: 'Quirico Prosperi Foundation',
      description:
        "Non-profit organization created to promote and disseminate Venezuela's historical and agricultural values through educational and social programs like 'Return to Agriculture' and 'Water Project'.",
      image_alt: 'Evaluation Method',
    },
    {
      title: 'Pintao Processing Center',
      description:
        'Located in La Concepción, Rio Caribe, our facilities feature expert teams ensuring the best fermentation protocols, drying processes, and traceability.',
      image_alt: 'Evaluation Method',
    },
    {
      title: 'Tesoro Processing Center',
      description:
        'Located in South Lake (SDLG), our facilities feature expert teams ensuring the best fermentation protocols, drying processes, and traceability.',
      image_alt: 'Evaluation Method',
    },
  ],
};

const home = { es, en };

export { home };
