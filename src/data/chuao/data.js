import { getLangFromUrl, useTranslations } from '@/assets/lib/i18n/utils';

import ChuaoWeb from '@/images/chuao/chuao-web.webp';
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
      title: trans('chuao').generalInformation.title,
      mainImage: {
        src: ChuaoWeb,
        alt: trans('chuao').generalInformation.image.alt,
      },
      rating: {
        value: '5.0',
        stars: {
          src: ratingStars,
          alt: trans('chuao').generalInformation.rating.stars,
        },
      },
      sections: trans('chuao').generalInformation.sections,
    },
    characteristics: {
      title: trans('chuao').characteristics.title,
      flavors: [
        {
          name: trans('chuao').characteristics.flavors[0].name,
          percentage: '3.5',
          progress: 70,
          icon: {
            src: '/icons/afrutado_dulces-icon.svg',
            alt: 'Afrutado-dulces-icon',
          },
          className: 'border-l-12 border-l-red-500',
          description: trans('chuao').characteristics.flavors[0].description,
          color: '#ef4444',
        },
        {
          name: trans('chuao').characteristics.flavors[1].name,
          percentage: '5.0',
          progress: 100,
          icon: {
            src: '/icons/afrutado_citricos-icon.svg',
            alt: 'Afrutado-citricos-icon',
          },
          className: 'border-l-12 border-l-amber-500',
          description: trans('chuao').characteristics.flavors[1].description,
          color: '#f59e0b',
        },
        {
          name: trans('chuao').characteristics.flavors[2].name,
          percentage: '2.0',
          progress: 36,
          icon: {
            src: '/icons/aflorado-icon.svg',
            alt: 'Aflorado-icon',
          },
          className: 'border-l-12 border-l-pink-500',
          description: trans('chuao').characteristics.flavors[2].description,
          color: '#ec4899',
        },
        {
          name: trans('chuao').characteristics.flavors[3].name,
          percentage: '3.5',
          progress: 70,
          icon: {
            src: '/icons/acriollado-icon.svg',
            alt: 'Acriollado-icon',
          },
          className: 'border-l-12 border-l-yellow-500/50',
          description: trans('chuao').characteristics.flavors[3].description,
          color: '#eab30880',
        },
        {
          name: trans('chuao').characteristics.flavors[4].name,
          percentage: '3.0',
          progress: 57,
          icon: {
            src: '/icons/cacao-icon.svg',
            alt: 'Cacao-icon',
          },
          className: 'border-l-12 border-l-yellow-900',
          description: trans('chuao').characteristics.flavors[4].description,
          color: '#713f12',
        },
        {
          name: trans('chuao').characteristics.flavors[5].name,
          percentage: '0.0',
          progress: 0,
          icon: {
            src: '/icons/boscoso-icon.svg',
            alt: 'Boscoso-icon',
          },
          className: 'border-l-12 border-l-lime-300',
          description: trans('chuao').characteristics.flavors[5].description,
          color: '#bef264',
        },
        {
          name: trans('chuao').characteristics.flavors[6].name,
          percentage: '0.0',
          progress: 0,
          icon: {
            src: '/icons/especias-icon.svg',
            alt: 'Especias-icon',
          },
          className: 'border-l-12 border-l-yellow-300',
          description: trans('chuao').characteristics.flavors[6].description,
          color: '#fde047',
        },
      ],
      flavors_images: [{src: saboresPositivos.src, alt: 'Sabores positivos'}],
      assessment: {
        title: trans('chuao').characteristics.assessment.title,
        classification: {
          image: clasificacion,
          imageAlt: trans('chuao').characteristics.assessment.classification,
        },
        equipment: {
          image: equipoCata,
          imageAlt: trans('chuao').characteristics.assessment.equipment,
        },
      },
      information: [
        {
          title: trans('chuao').characteristics.information[0].title,
          indicatorColor: 'bg-amber-950',
          description: {
            boldText: trans('chuao').characteristics.information[0].description.boldText,
            additionalText:
              trans('chuao').characteristics.information[0].description.additionalText,
          },
        },
        {
          title: trans('chuao').characteristics.information[1].title,
          indicatorColor: 'bg-amber-950',
          description: {
            boldText: trans('chuao').characteristics.information[1].description.boldText,
            additionalText:
              trans('chuao').characteristics.information[1].description.additionalText,
          },
        },
        {
          title: trans('chuao').characteristics.information[2].title,
          indicatorColor: 'bg-amber-950',
          description: {
            boldText: trans('chuao').characteristics.information[2].description.boldText,
            additionalText:
              trans('chuao').characteristics.information[2].description.additionalText,
          },
        },
      ],
      analysis: {
        title: trans('chuao').characteristics.analysis.title,
        image: cuencaCacao,
        imageAlt: trans('chuao').characteristics.analysis.alt,
        description: [
          {
            text: trans('chuao').characteristics.analysis.description[0].text,
            information_block: true,
          },
          {
            text: trans('chuao').characteristics.analysis.description[1].text,
            information_block: false,
          },
          {
            text: trans('chuao').characteristics.analysis.description[2].text,
            information_block: false,
          },
          {
            text: trans('chuao').characteristics.analysis.description[3].text,
            information_block: false,
          },
          {
            text: trans('chuao').characteristics.analysis.description[4].text,
            information_block: false,
          },
        ],
      },
    },
    cocoaMap: [
      {
        title: trans('chuao').cocoaMap[0].title,
        content: [
          {
            type: 'quote',
            quote: trans('chuao').cocoaMap[0].content[0].quote,
            author: trans('chuao').cocoaMap[0].content[0].author,
            border: true,
          },
          {
            type: 'paragraph',
            text: trans('chuao').cocoaMap[0].content[1].text,
          },
          {
            type: 'paragraph',
            text: trans('chuao').cocoaMap[0].content[2].text,
          },
        ],
        image: {
          src: ruedaSabores,
          alt: trans('chuao').cocoaMap[0].image.alt,
          align: 'right',
        },
      },
      {
        title: trans('chuao').cocoaMap[1].title,
        content: [
          {
            type: 'paragraph',
            text: trans('chuao').cocoaMap[1].content[0].text,
          },
          {
            type: 'paragraph',
            text: trans('chuao').cocoaMap[1].content[1].text,
          },
        ],
        image: {
          src: mapaSensorial,
          alt: trans('chuao').cocoaMap[1].image.alt,
          align: 'right',
        },
      },
    ],
    postHarvestBenefit: {
      title: trans('chuao').postHarvestBenefit.title,
      backgroundColor: 'bg-neutral-100',
      content: [
        {
          type: 'quote',
          text: trans('chuao').postHarvestBenefit.content[0].text,
          border: true,
        },
        {
          type: 'protocols',
          protocols: [
            {
              title: trans('chuao').postHarvestBenefit.content[1].protocols[0].title,
              items: [
                {
                  category: 'keyValue',
                  key: trans('chuao').postHarvestBenefit.content[1].protocols[0].items[0].key,
                  value: '',
                },
                {
                  category: 'imageText',
                  image: semillaPorcelanaDos,
                  alt: trans('chuao').postHarvestBenefit.content[1].protocols[0].items[1].alt,
                  text: trans('chuao').postHarvestBenefit.content[1].protocols[0].items[1].text,
                  size: 24,
                },
                {
                  category: 'imageText',
                  image: semillaPorcelana,
                  alt: trans('chuao').postHarvestBenefit.content[1].protocols[0].items[2].alt,
                  text: trans('chuao').postHarvestBenefit.content[1].protocols[0].items[2].text,
                  size: 20,
                },
                {
                  category: 'keyValue',
                  key: trans('chuao').postHarvestBenefit.content[1].protocols[0].items[3].key,
                  value: trans('chuao').postHarvestBenefit.content[1].protocols[0].items[3].value,
                },
                {
                  category: 'list',
                  items: trans('chuao').postHarvestBenefit.content[1].protocols[0].items[4].items,
                },
              ],
              mainImage: {
                src: protocoloFermentacion,
                alt: trans('chuao').postHarvestBenefit.content[1].protocols[0].image.alt,
              },
            },
            {
              title: trans('chuao').postHarvestBenefit.content[1].protocols[1].title,
              items: [
                {
                  category: 'keyValue',
                  key: trans('chuao').postHarvestBenefit.content[1].protocols[1].items[0].key,
                  value: '',
                },
                {
                  category: 'imageText',
                  image: corteChuaoTrinitario,
                  alt: trans('chuao').postHarvestBenefit.content[1].protocols[1].items[1].alt,
                  text: trans('chuao').postHarvestBenefit.content[1].protocols[1].items[1].text,
                  size: 24,
                },
                {
                  category: 'imageText',
                  image: corteChuaoCriollo,
                  alt: trans('chuao').postHarvestBenefit.content[1].protocols[1].items[2].alt,
                  text: trans('chuao').postHarvestBenefit.content[1].protocols[1].items[2].text,
                  size: 24,
                },
                {
                  category: 'keyValue',
                  key: trans('chuao').postHarvestBenefit.content[1].protocols[1].items[3].key,
                  value: trans('chuao').postHarvestBenefit.content[1].protocols[1].items[3].value,
                },
                {
                  category: 'keyValue',
                  key: trans('chuao').postHarvestBenefit.content[1].protocols[1].items[4].key,
                  value: trans('chuao').postHarvestBenefit.content[1].protocols[1].items[4].value,
                },
                {
                  category: 'list',
                  items: trans('chuao').postHarvestBenefit.content[1].protocols[1].items[5].items,
                },
              ],
              mainImage: {
                src: protocoloSecado,
                alt: trans('chuao').postHarvestBenefit.content[1].protocols[1].image.alt,
              },
              video: {
                src: 'https://www.youtube.com/embed/RXWVmyqSa2o',
                title: trans('chuao').postHarvestBenefit.content[1].protocols[1].video.title,
                text: trans('chuao').postHarvestBenefit.content[1].protocols[1].video.text,
              },
            },
          ],
        },
      ],
    },
    traceability: {
      title: trans('chuao').traceability.title,
      subtitle: trans('chuao').traceability.subtitle,
      content: [
        {
          type: 'highlight',
          text: trans('chuao').traceability.content[0].text,
        },
        {
          type: 'paragraph',
          text: trans('chuao').traceability.content[1].text,
        },
        {
          type: 'paragraph',
          text: trans('chuao').traceability.content[2].text,
        },
        {
          type: 'highlight',
          text: trans('chuao').traceability.content[3].text,
        },
        {
          type: 'paragraph',
          text: trans('chuao').traceability.content[4].text,
        },
        {
          type: 'highlight',
          text: trans('chuao').traceability.content[5].text,
        },
        {
          type: 'paragraph',
          text: trans('chuao').traceability.content[6].text,
        },
        {
          type: 'highlight',
          text: trans('chuao').traceability.content[7].text,
        },
        {
          type: 'paragraph',
          text: trans('chuao').traceability.content[8].text,
        },
        {
          type: 'highlight',
          text: trans('chuao').traceability.content[9].text,
        },
        {
          type: 'paragraph',
          text: trans('chuao').traceability.content[10].text,
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
      title: trans('chuao').location.title,
      subtitle: trans('chuao').location.subtitle,
      locationInfo: {
        map: {
          src: mapa,
          alt: trans('chuao').location.locationInfo.map.alt,
          link: 'https://www.google.co.ve/maps/place/Chuao,+Aragua/@10.490428,-67.5375832,15z/data=!3m1!4b1!4m5!3m4!1s0x8e81d2c13131e607:0xf4644f78cc342be5!8m2!3d10.4898143!4d-67.5276414?hl=en',
        },
        details: trans('chuao').location.locationInfo.details,
      },
      paragraphs: trans('chuao').location.paragraphs,
      ecology: {
        title: trans('chuao').location.ecology.title,
        paragraphs: trans('chuao').location.ecology.paragraphs,
        images: [
          {
            src: ubicacion2,
            alt: trans('chuao').location.ecology.images[0].alt,
          },
          {
            src: ubicacion,
            alt: trans('chuao').location.ecology.images[1].alt,
          },
        ],
      },
    },
    history: {
      title: trans('chuao').history.title,
      images: [
        {
          src: historia,
          alt: trans('chuao').history.images[0].alt,
        },
        {
          src: historia2,
          alt: trans('chuao').history.images[1].alt,
        },
      ],
      content: [
        {
          type: 'paragraph',
          text: trans('chuao').history.content[0].text,
        },
        {
          type: 'paragraph',
          text: trans('chuao').history.content[1].text,
        },
        {
          type: 'paragraph',
          text: trans('chuao').history.content[2].text,
        },
        {
          type: 'paragraph',
          text: trans('chuao').history.content[3].text,
        },
        {
          type: 'highlight',
          text: trans('chuao').history.content[4].text,
        },
        {
          type: 'paragraph',
          text: trans('chuao').history.content[5].text,
        },
      ],
      paragraphs: trans('chuao').history.paragraphs,
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
