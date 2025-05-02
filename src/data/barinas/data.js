import { getLangFromUrl, useTranslations } from '@/lib/translations';

import RespSocial from '@/images/chuao/responsabilidad-social-fundacion-prosperi-color.png';
import RespSocial2 from '@/images/chuao/responsabilidad-social-regreso-al-agro-color.png';

import { images } from './barinas-images';

export default (Astro) => {
  const lang = getLangFromUrl(Astro.url);
  const trans = useTranslations(lang);
  const langImages = images[lang];
  const langContent = trans('barinas');

  return {
    generalInformation: {
      title: langContent.generalInformation.title,
      mainImage: {
        src: langImages.general.porcelanaWeb,
        alt: langContent.generalInformation.image.alt,
      },
      rating: {
        value: '0',
        stars: {
          src: langImages.general.ratingStars,
          alt: langContent.generalInformation.rating.stars,
        },
      },
      sections: langContent.generalInformation.sections,
    },
    characteristics: {
      title: langContent.characteristics.title,
      flavors: [
        {
          name: langContent.characteristics.flavors[0].name,
          percentage: '0',
          progress: 0,
          icon: {
            src: '/icons/afrutado_dulces-white-icon.svg',
            alt: 'Ceresa-white-icon',
          },
          className: 'border-l-12 border-l-red-500',
          description: langContent.characteristics.flavors[0].description,
          color: '#ef4444',
        },
        {
          name: langContent.characteristics.flavors[1].name,
          percentage: '0',
          progress: 0,
          icon: {
            src: '/icons/afrutado_citricos-white-icon.svg',
            alt: 'Naranja-white-icon',
          },
          className: 'border-l-12 border-l-amber-500',
          description: langContent.characteristics.flavors[1].description,
          color: '#f59e0b',
        },
        {
          name: langContent.characteristics.flavors[2].name,
          percentage: '0',
          progress: 0,
          icon: {
            src: '/icons/aflorado-white-icon.svg',
            alt: 'Flor-white-icon',
          },
          className: 'border-l-12 border-l-pink-500',
          description: langContent.characteristics.flavors[2].description,
          color: '#ec4899',
        },
        {
          name: langContent.characteristics.flavors[3].name,
          percentage: '0',
          progress: 0,
          icon: {
            src: '/icons/acriollado-white-icon.svg',
            alt: 'Bellota-white-icon',
          },
          className: 'border-l-12 border-l-yellow-500/50',
          description: langContent.characteristics.flavors[3].description,
          color: '#eab30880',
        },
        {
          name: langContent.characteristics.flavors[4].name,
          percentage: '0',
          progress: 0,
          icon: {
            src: '/icons/cacao-white-icon.svg',
            alt: 'Cacao-white-icon',
          },
          className: 'border-l-12 border-l-yellow-900',
          description: langContent.characteristics.flavors[4].description,
          color: '#713f12',
        },
        {
          name: langContent.characteristics.flavors[5].name,
          percentage: '0',
          progress: 0,
          icon: {
            src: '/icons/boscoso-white-icon.svg',
            alt: 'Pino-white-icon',
          },
          className: 'border-l-12 border-l-lime-300',
          description: langContent.characteristics.flavors[5].description,
          color: '#bef264',
        },
        {
          name: langContent.characteristics.flavors[6].name,
          percentage: '0',
          progress: 0,
          icon: {
            src: '/icons/especias-white-icon.svg',
            alt: 'Clabos-white-icon',
          },
          className: 'border-l-12 border-l-yellow-300',
          description: langContent.characteristics.flavors[6].description,
          color: '#fde047',
        },
      ],
      flavors_image: { src: langImages.general.saboresPositivos, alt: 'sabores-positivos' },
      assessment: {
        title: langContent.characteristics.assessment.title,
        classification: {
          image: langImages.general.clasificacion,
          imageAlt: langContent.characteristics.assessment.classification,
        },
        equipment: {
          image: langImages.general.equipoCata,
          imageAlt: langContent.characteristics.assessment.equipment,
        },
      },
      information: [
        {
          title: langContent.characteristics.information[0].title,
          indicatorColor: 'bg-amber-950',
          description: {
            boldText: langContent.characteristics.information[0].description.boldText,
            additionalText: langContent.characteristics.information[0].description.additionalText,
          },
        },
        {
          title: langContent.characteristics.information[1].title,
          indicatorColor: 'bg-amber-950',
          description: {
            boldText: langContent.characteristics.information[1].description.boldText,
            additionalText: langContent.characteristics.information[1].description.additionalText,
          },
        },
        {
          title: langContent.characteristics.information[2].title,
          indicatorColor: 'bg-amber-950',
          description: {
            boldText: langContent.characteristics.information[2].description.boldText,
            additionalText: langContent.characteristics.information[2].description.additionalText,
          },
        },
      ],
      analysis: {
        title: langContent.characteristics.analysis.title,
        image: langImages.general.cuencaCacao,
        imageAlt: langContent.characteristics.analysis.alt,
        description: [
          {
            text: langContent.characteristics.analysis.description[0].text,
            information_block: true,
          },
          {
            text: langContent.characteristics.analysis.description[1].text,
            information_block: true,
          },
          {
            text: langContent.characteristics.analysis.description[2].text,
            information_block: false,
          },
          {
            text: langContent.characteristics.analysis.description[3].text,
            information_block: false,
          },
        ],
      },
    },
    cocoaMap: [
      {
        title: langContent.cocoaMap[0].title,
        content: [
          {
            type: 'quote',
            quote: langContent.cocoaMap[0].content[0].quote,
            author: langContent.cocoaMap[0].content[0].author,
            border: true,
          },
          {
            type: 'paragraph',
            text: langContent.cocoaMap[0].content[1].text,
          },
        ],
        image: {
          src: langImages.general.ruedaSabores,
          alt: langContent.cocoaMap[0].image.alt,
          align: 'right',
        },
      },
      {
        title: langContent.cocoaMap[1].title,
        content: [
          {
            type: 'quote',
            quote: langContent.cocoaMap[1].content[0].quote,
            author: langContent.cocoaMap[1].content[0].author,
            border: true,
          },
        ],
        image: {
          src: langImages.general.mapaSensorial,
          alt: langContent.cocoaMap[1].image.alt,
          align: 'right',
        },
      },
    ],
    postHarvestBenefit: {
      title: langContent.postHarvestBenefit.title,
      backgroundColor: 'bg-neutral-100',
      content: [
        {
          type: 'quote',
          text: langContent.postHarvestBenefit.content[0].text,
          border: true,
        },
        {
          type: 'protocols',
          protocols: [
            {
              title: langContent.postHarvestBenefit.content[1].protocols[0].title,
              items: [
                {
                  category: 'keyValue',
                  key: langContent.postHarvestBenefit.content[1].protocols[0].items[0].key,
                  value: '',
                },
                {
                  category: 'imageText',
                  image: langImages.benefit.tipoDeCacao[0],
                  alt: langContent.postHarvestBenefit.content[1].protocols[0].items[1].alt,
                  text: langContent.postHarvestBenefit.content[1].protocols[0].items[1].text,
                  size: 24,
                },
                {
                  category: 'keyValue',
                  key: langContent.postHarvestBenefit.content[1].protocols[0].items[2].key,
                  value: langContent.postHarvestBenefit.content[1].protocols[0].items[2].value,
                },
                {
                  category: 'list',
                  items: langContent.postHarvestBenefit.content[1].protocols[0].items[3].items,
                },
              ],
              mainImage: [
                {
                  src: langImages.protocols.fermentacion[0],
                  alt: langContent.postHarvestBenefit.content[1].protocols[0].image.alt,
                },
                {
                  src: langImages.protocols.fermentacion[1],
                  alt: langContent.postHarvestBenefit.content[1].protocols[0].image.alt,
                },
              ],
            },
            {
              title: langContent.postHarvestBenefit.content[1].protocols[1].title,
              items: [
                {
                  category: 'keyValue',
                  key: langContent.postHarvestBenefit.content[1].protocols[1].items[0].key,
                  value: '',
                },
                {
                  category: 'imageText',
                  image: langImages.benefit.tipoDeCacao[1],
                  alt: langContent.postHarvestBenefit.content[1].protocols[1].items[1].alt,
                  text: langContent.postHarvestBenefit.content[1].protocols[1].items[1].text,
                  size: 24,
                },
                {
                  category: 'keyValue',
                  key: langContent.postHarvestBenefit.content[1].protocols[1].items[2].key,
                  value: langContent.postHarvestBenefit.content[1].protocols[1].items[2].value,
                },
                {
                  category: 'keyValue',
                  key: langContent.postHarvestBenefit.content[1].protocols[1].items[3].key,
                  value: '',
                },
                {
                  category: 'list',
                  items: langContent.postHarvestBenefit.content[1].protocols[1].items[4].items,
                },
              ],
              mainImage: [
                {
                  src: langImages.protocols.secado[0],
                  alt: langContent.postHarvestBenefit.content[1].protocols[1].image.alt,
                },
                {
                  src: langImages.protocols.secado[1],
                  alt: langContent.postHarvestBenefit.content[1].protocols[1].image.alt,
                },
                {
                  src: langImages.protocols.secado[2],
                  alt: langContent.postHarvestBenefit.content[1].protocols[1].image.alt,
                },
              ],
            },
          ],
        },
      ],
    },
    traceability: {
      title: langContent.traceability.title,
      subtitle: langContent.traceability.subtitle,
      content: [
        {
          type: 'richText',
          text: langContent.traceability.content[0].text,
        },
        // {
        //   type: 'multiImage',
        //   src: langImages.certifications.certificados,
        //   alt: 'traceability-certificates',
        // },
        {
          type: 'paragraph',
          text: langContent.traceability.content[1].text,
        },
        {
          type: 'paragraph',
          text: langContent.traceability.content[2].text,
        },
        {
          type: 'paragraph',
          text: langContent.traceability.content[3].text,
        },
        {
          type: 'paragraph',
          text: langContent.traceability.content[4].text,
        },
        {
          type: 'paragraph',
          text: langContent.traceability.content[5].text,
        },
      ],
      // imagesDialog: {
      //   src: langImages.certifications.certificadoOrigen,
      //   alt: langContent.traceability.images[0].alt,
      // },
      images: [
        {
          src: langImages.certifications.traceability[0],
          alt: langContent.traceability.images[0].alt,
        },
        {
          src: langImages.certifications.traceability[1],
          alt: langContent.traceability.images[1].alt,
        },
        {
          src: langImages.certifications.traceability[2],
          alt: langContent.traceability.images[2].alt,
        },
      ],
    },
    location: {
      title: langContent.location.title,
      subtitle: langContent.location.subtitle,
      locationInfo: {
        map: {
          src: langImages.location.map,
          alt: langContent.location.locationInfo.map.alt,
          link: 'https://www.google.co.ve/maps/place/Chuao,+Aragua/@10.490428,-67.5375832,15z/data=!3m1!4b1!4m5!3m4!1s0x8e81d2c13131e607:0xf4644f78cc342be5!8m2!3d10.4898143!4d-67.5276414?hl=en',
        },
        details: langContent.location.locationInfo.details,
      },
      paragraphs: langContent.location.paragraphs,
      ecology: {
        title: langContent.location.ecology.title,
        paragraphs: langContent.location.ecology.paragraphs,
        images: [
          {
            src: langImages.location.location[0],
            alt: langContent.location.ecology.images[0].alt,
          },
          {
            src: langImages.location.location[1],
            alt: langContent.location.ecology.images[1].alt,
          },
          {
            src: langImages.location.location[2],
            alt: langContent.location.ecology.images[1].alt,
          }
        ],
      },
    },
    history: {
      title: langContent.history.title,
      images: [
        {
          src: langImages.history[0],
          alt: langContent.history.images[0].alt,
        },
        {
          src: langImages.history[1],
          alt: langContent.history.images[1].alt,
        },
        {
          src: langImages.history[2],
          alt: langContent.history.images[1].alt,
        },
      ],
      content: [
        {
          type: 'paragraph',
          text: langContent.history.content[0].text,
        },
        {
          type: 'paragraph',
          text: langContent.history.content[1].text,
        },
        {
          type: 'paragraph',
          text: langContent.history.content[2].text,
        },
        {
          type: 'highlight',
          text: langContent.history.content[3].text,
        },
        {
          type: 'paragraph',
          text: langContent.history.content[4].text,
        },
        {
          type: 'paragraph',
          text: langContent.history.content[5].text,
        },
        {
          type: 'paragraph',
          text: langContent.history.content[6].text,
        },
      ],
    },
    socialResponsibility: {
      title: langContent.socialResponsibility.title,

      images: [
        {
          src: RespSocial,
          alt: langContent.socialResponsibility.images[0].alt,
        },
        {
          src: RespSocial2,
          alt: langContent.socialResponsibility.images[1].alt,
        },
      ],
      paragraphs: langContent.socialResponsibility.paragraphs,
    },
  };
};
