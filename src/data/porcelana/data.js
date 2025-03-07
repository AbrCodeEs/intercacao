import { getLangFromUrl, useTranslations } from '@/assets/lib/i18n/utils';

import PorcelanaWeb from '@/images/porcelana/porcelana-web.webp';
import ratingStars from '@/images/chuao/rating-stars-cut.png';
import clasificacion from '@/images/chuao/clasificacion-rating.png';
import saboresPositivos from '@/images/chuao/sabores-positivos.jpg';
import equipoCata from '@/images/chuao/equipo-de-cata.jpg';
import cuencaCacao from '@/images/chuao/cuenca-de-cacao.jpg';
import ruedaSabores from '@/images/chuao/rueda-de-sabores.png';
import mapaSensorial from '@/images/chuao/mapa-perfil-sensorial-chuao.png';
import semillaPorcelana from '@/images/chuao/semililla-porcelana-uno.png';
import semillaPorcelanaDos from '@/images/chuao/semililla-porcelana-dos.png';
import protocoloFermentacion from '@/images/chuao/protocolo-fermentacion.jpg';
import protocoloSecado from '@/images/chuao/protocolo-secado.jpg';
import corteChuaoTrinitario from '@/images/chuao/corte-chuao-trinitario.png';
import corteChuaoCriollo from '@/images/chuao/corte-chuao-criollo.png';
import certificadoOrigen from '@/images/chuao/certificado-de-origen-chuao.jpg';
import agricultores from '@/images/chuao/chuao-agricultores.jpeg';
import mosaico from '@/images/chuao/chuao-mosaico.jpeg';
import mapa from '@/images/chuao/mapa-chuao.jpg';
import ubicacion from '@/images/chuao/ubicacion-ecologia.jpg';
import ubicacion2 from '@/images/chuao/ubicacion-henry-pittier.jpg';
import historia from '@/images/chuao/historia-pueblo-iglesia-sepia.jpg';
import historia2 from '@/images/chuao/historia-dime-chuao-pared.jpg';
import RespSocial from '@/images/chuao/responsabilidad-social-fundacion-prosperi-color.png';
import RespSocial2 from '@/images/chuao/responsabilidad-social-regreso-al-agro-color.png';

export default (Astro) => {
  const lang = getLangFromUrl(Astro.url);
  const trans = useTranslations(lang);

  return {
    generalInformation: {
      title: trans('porcelana').generalInformation.title,
      mainImage: {
        src: PorcelanaWeb,
        alt: trans('porcelana').generalInformation.image.alt,
      },
      rating: {
        value: '4.5',
        stars: {
          src: ratingStars,
          alt: trans('porcelana').generalInformation.rating.stars,
        },
      },
      sections: trans('porcelana').generalInformation.sections,
    },
    characteristics: {
      title: trans('porcelana').characteristics.title,
      flavors: [
        {
          name: trans('porcelana').characteristics.flavors[0].name,
          percentage: '3.2',
          progress: 64,
          icon: {
            src: '/icons/ceresa-white-icon-intercacao.svg',
            alt: 'Ceresa-white-icon',
          },
          className: 'border-l-12 border-l-red-500',
          description: trans('porcelana').characteristics.flavors[0].description,
          color: '#ef4444',
        },
        {
          name: trans('porcelana').characteristics.flavors[1].name,
          percentage: '1.8',
          progress: 50,
          icon: {
            src: '/icons/naranja-white-icon-intercacao.svg',
            alt: 'Naranja-white-icon',
          },
          className: 'border-l-12 border-l-amber-500',
          description: trans('porcelana').characteristics.flavors[1].description,
          color: '#f59e0b',
        },
        {
          name: trans('porcelana').characteristics.flavors[2].name,
          percentage: '0.4',
          progress: 8,
          icon: {
            src: '/icons/flor-white-icon-intercacao.svg',
            alt: 'Flor-white-icon',
          },
          className: 'border-l-12 border-l-pink-500',
          description: trans('porcelana').characteristics.flavors[2].description,
          color: '#ec4899',
        },
        {
          name: trans('porcelana').characteristics.flavors[3].name,
          percentage: '4.9',
          progress: 82,
          icon: {
            src: '/icons/bellota-white-icon-intercacao.svg',
            alt: 'Bellota-white-icon',
          },
          className: 'border-l-12 border-l-yellow-500/50',
          description: trans('porcelana').characteristics.flavors[3].description,
          color: '#eab30880',
        },
        {
          name: trans('porcelana').characteristics.flavors[4].name,
          percentage: '2.5',
          progress: 66,
          icon: {
            src: '/icons/cacao-white-icon-intercacao.svg',
            alt: 'Cacao-white-icon',
          },
          className: 'border-l-12 border-l-yellow-900',
          description: trans('porcelana').characteristics.flavors[4].description,
          color: '#713f12',
        },
        {
          name: trans('porcelana').characteristics.flavors[5].name,
          percentage: '0.5',
          progress: 10,
          icon: {
            src: '/icons/pinos-white-icon-intercacao.svg',
            alt: 'Pino-white-icon',
          },
          className: 'border-l-12 border-l-lime-300',
          description: trans('porcelana').characteristics.flavors[5].description,
          color: '#bef264',
        },
        {
          name: trans('porcelana').characteristics.flavors[6].name,
          percentage: '1.2',
          progress: 28.8,
          icon: {
            src: '/icons/clabos-white-icon-intercacao.svg',
            alt: 'Clabos-white-icon',
          },
          className: 'border-l-12 border-l-yellow-300',
          description: trans('porcelana').characteristics.flavors[6].description,
          color: '#fde047',
        },
      ],
      flavors_image: { src: saboresPositivos, alt: 'a' },
      assessment: {
        title: trans('porcelana').characteristics.assessment.title,
        classification: {
          image: clasificacion,
          imageAlt: trans('porcelana').characteristics.assessment.classification,
        },
        equipment: {
          image: equipoCata,
          imageAlt: trans('porcelana').characteristics.assessment.equipment,
        },
      },
      information: [
        {
          title: trans('porcelana').characteristics.information[0].title,
          indicatorColor: 'bg-amber-950',
          description: {
            boldText: trans('porcelana').characteristics.information[0].description.boldText,
            additionalText:
              trans('porcelana').characteristics.information[0].description.additionalText,
          },
        },
        {
          title: trans('porcelana').characteristics.information[1].title,
          indicatorColor: 'bg-amber-950',
          description: {
            boldText: trans('porcelana').characteristics.information[1].description.boldText,
            additionalText:
              trans('porcelana').characteristics.information[1].description.additionalText,
          },
        },
        {
          title: trans('porcelana').characteristics.information[2].title,
          indicatorColor: 'bg-amber-950',
          description: {
            boldText: trans('porcelana').characteristics.information[2].description.boldText,
            additionalText:
              trans('porcelana').characteristics.information[2].description.additionalText,
          },
        },
      ],
      analysis: {
        title: trans('porcelana').characteristics.analysis.title,
        image: cuencaCacao,
        imageAlt: trans('porcelana').characteristics.analysis.alt,
        description: [
          {
            text: trans('porcelana').characteristics.analysis.description[0].text,
            information_block: true,
          },
          {
            text: trans('porcelana').characteristics.analysis.description[1].text,
            information_block: true,
          },
          {
            text: trans('porcelana').characteristics.analysis.description[2].text,
            information_block: false,
          },
          {
            text: trans('porcelana').characteristics.analysis.description[3].text,
            information_block: false,
          },
        ],
      },
    },
    cocoaMap: [
      {
        title: trans('porcelana').cocoaMap[0].title,
        content: [
          {
            type: 'quote',
            quote: trans('porcelana').cocoaMap[0].content[0].quote,
            author: trans('porcelana').cocoaMap[0].content[0].author,
            border: true,
          },
          {
            type: 'paragraph',
            text: trans('porcelana').cocoaMap[0].content[1].text,
          },
        ],
        image: {
          src: ruedaSabores,
          alt: trans('porcelana').cocoaMap[0].image.alt,
          align: 'right',
        },
      },
      {
        title: trans('porcelana').cocoaMap[1].title,
        content: [
          {
            type: 'quote',
            quote: trans('porcelana').cocoaMap[1].content[0].quote,
            author: trans('porcelana').cocoaMap[1].content[0].author,
            border: true,
          },
        ],
        image: {
          src: mapaSensorial,
          alt: trans('porcelana').cocoaMap[1].image.alt,
          align: 'right',
        },
      },
    ],
    postHarvestBenefit: {
      title: trans('porcelana').postHarvestBenefit.title,
      backgroundColor: 'bg-neutral-100',
      content: [
        {
          type: 'quote',
          text: trans('porcelana').postHarvestBenefit.content[0].text,
          border: true,
        },
        {
          type: 'protocols',
          protocols: [
            {
              title: trans('porcelana').postHarvestBenefit.content[1].protocols[0].title,
              items: [
                {
                  category: 'keyValue',
                  key: trans('porcelana').postHarvestBenefit.content[1].protocols[0].items[0].key,
                  value: '',
                },
                {
                  category: 'imageText',
                  image: semillaPorcelanaDos,
                  alt: trans('porcelana').postHarvestBenefit.content[1].protocols[0].items[1].alt,
                  text: trans('porcelana').postHarvestBenefit.content[1].protocols[0].items[1].text,
                  size: 24,
                },
                {
                  category: 'keyValue',
                  key: trans('porcelana').postHarvestBenefit.content[1].protocols[0].items[2].key,
                  value:
                    trans('porcelana').postHarvestBenefit.content[1].protocols[0].items[2].value,
                },
                {
                  category: 'list',
                  items:
                    trans('porcelana').postHarvestBenefit.content[1].protocols[0].items[3].items,
                },
              ],
              mainImage: {
                src: protocoloFermentacion,
                alt: trans('porcelana').postHarvestBenefit.content[1].protocols[0].image.alt,
              },
            },
            {
              title: trans('porcelana').postHarvestBenefit.content[1].protocols[1].title,
              items: [
                {
                  category: 'keyValue',
                  key: trans('porcelana').postHarvestBenefit.content[1].protocols[1].items[0].key,
                  value: '',
                },
                {
                  category: 'imageText',
                  image: corteChuaoTrinitario,
                  alt: trans('porcelana').postHarvestBenefit.content[1].protocols[1].items[1].alt,
                  text: trans('porcelana').postHarvestBenefit.content[1].protocols[1].items[1].text,
                  size: 24,
                },
                {
                  category: 'keyValue',
                  key: trans('porcelana').postHarvestBenefit.content[1].protocols[1].items[2].key,
                  value:
                    trans('porcelana').postHarvestBenefit.content[1].protocols[1].items[2].value,
                },
                {
                  category: 'keyValue',
                  key: trans('porcelana').postHarvestBenefit.content[1].protocols[1].items[3].key,
                  value: '',
                },
                {
                  category: 'list',
                  items:
                    trans('porcelana').postHarvestBenefit.content[1].protocols[1].items[4].items,
                },
              ],
              mainImage: {
                src: protocoloSecado,
                alt: trans('porcelana').postHarvestBenefit.content[1].protocols[1].image.alt,
              },
              video: {
                src: 'https://www.youtube.com/embed/RXWVmyqSa2o',
                title: trans('porcelana').postHarvestBenefit.content[1].protocols[1].video.title,
                text: trans('porcelana').postHarvestBenefit.content[1].protocols[1].video.text,
              },
            },
          ],
        },
      ],
    },
    traceability: {
      title: trans('porcelana').traceability.title,
      subtitle: trans('porcelana').traceability.subtitle,
      content: [
        {
          type: 'richText',
          text: trans('porcelana').traceability.content[0],
        },
        {
          type: 'paragraph',
          text: trans('porcelana').traceability.content[1].text,
        },
        {
          type: 'paragraph',
          text: trans('porcelana').traceability.content[2].text,
        },
        {
          type: 'paragraph',
          text: trans('porcelana').traceability.content[3].text,
        },
        {
          type: 'paragraph',
          text: trans('porcelana').traceability.content[4].text,
        },
        {
          type: 'paragraph',
          text: trans('porcelana').traceability.content[5].text,
        },
      ],
      images: [
        {
          src: certificadoOrigen,
          alt: trans('chuao').traceability.images[0].alt,
          useDialog: true,
        },
        {
          src: agricultores,
          alt: trans('chuao').traceability.images[1].alt,
        },
        {
          src: mosaico,
          alt: trans('chuao').traceability.images[2].alt,
        },
      ],
    },
    location: {
      title: trans('porcelana').location.title,
      subtitle: trans('porcelana').location.subtitle,
      locationInfo: {
        map: {
          src: mapa,
          alt: trans('porcelana').location.locationInfo.map.alt,
          link: 'https://www.google.co.ve/maps/place/Chuao,+Aragua/@10.490428,-67.5375832,15z/data=!3m1!4b1!4m5!3m4!1s0x8e81d2c13131e607:0xf4644f78cc342be5!8m2!3d10.4898143!4d-67.5276414?hl=en',
        },
        details: trans('porcelana').location.locationInfo.details,
      },
      paragraphs: trans('porcelana').location.paragraphs,
      ecology: {
        title: trans('porcelana').location.ecology.title,
        paragraphs: trans('porcelana').location.ecology.paragraphs,
        images: [
          {
            src: ubicacion2,
            alt: trans('porcelana').location.ecology.images[0].alt,
          },
          {
            src: ubicacion,
            alt: trans('porcelana').location.ecology.images[1].alt,
          },
        ],
      },
      socioeconomic: {
        title: trans('porcelana').location.socioeconomic.title,
        paragraphs: trans('porcelana').location.socioeconomic.paragraphs,
        images: [
          {
            src: ubicacion2,
            alt: trans('porcelana').location.socioeconomic.images[0].alt,
          },
          {
            src: ubicacion,
            alt: trans('porcelana').location.socioeconomic.images[1].alt,
          },
        ],
      },
    },
    history: {
      title: trans('porcelana').history.title,
      images: [
        {
          src: historia,
          alt: trans('porcelana').history.images[0].alt,
        },
        {
          src: historia2,
          alt: trans('porcelana').history.images[1].alt,
        },
      ],
      content: [
        {
          type: 'paragraph',
          text: trans('porcelana').history.content[0].text,
        },
        {
          type: 'paragraph',
          text: trans('porcelana').history.content[1].text,
        },
        {
          type: 'paragraph',
          text: trans('porcelana').history.content[2].text,
        },
        {
          type: 'highlight',
          text: trans('porcelana').history.content[3].text,
        },
        {
          type: 'paragraph',
          text: trans('porcelana').history.content[4].text,
        },
        {
          type: 'paragraph',
          text: trans('porcelana').history.content[5].text,
        },
        {
          type: 'paragraph',
          text: trans('porcelana').history.content[6].text,
        },
      ],
    },
    socialResponsibility: {
      title: trans('chuao').socialResponsibility.title,

      images: [
        {
          src: RespSocial,
          alt: trans('chuao').socialResponsibility.images[0].alt,
        },
        {
          src: RespSocial2,
          alt: trans('chuao').socialResponsibility.images[1].alt,
        },
      ],
      paragraphs: trans('chuao').socialResponsibility.paragraphs,
    },
  };
};
