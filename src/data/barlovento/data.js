import { getLangFromUrl, useTranslations } from '@/lib/translations';

import RespSocial from '@/images/chuao/responsabilidad-social-fundacion-prosperi-color.png';
import RespSocial2 from '@/images/chuao/responsabilidad-social-regreso-al-agro-color.png';

import { images } from './barlovento-images';

export default (Astro) => {
  const lang = getLangFromUrl(Astro.url);
  const trans = useTranslations(lang);
  const langImages = images[lang];
  const langContent = trans('barlovento');

  return {
    generalInformation: {
      title: langContent.generalInformation.title,
      cocoa: {
        title: 'cacao gourmet',
        subtitle: 'barlovento',
        header: 'fermentado superior',
        color: 'bg-orange-700',
        scale: false,
      },
      mainImage: {
        src: langImages.general.porcelanaWeb,
        alt: langContent.generalInformation.image.alt,
      },
      rating: {
        value: '4.5',
        stars: {
          src: langImages.general.ratingStars,
          alt: langContent.generalInformation.rating.stars,
        },
      },
      sections: langContent.generalInformation.sections,
    },
   characteristics: {
      title: langContent.characteristics.title,
      subtitle: langContent.characteristics.subtitle,
      flavors_by_date_cata: [
        {
          date: '2025/05/09',
          flavors: [
            {
              name: langContent.characteristics.flavors[0].name,
              percentage: '2.5',
              progress: 50,
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
              percentage: '1.75',
              progress: 47,
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
              percentage: '0.0',
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
              percentage: '2.5',
              progress: 50,
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
              percentage: '2.5',
              progress: 50,
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
              percentage: '0.0',
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
              percentage: '0.0',
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
        },
        {
          date: '2024/05/09',
          flavors: [
            {
              name: langContent.characteristics.flavors[0].name,
              percentage: '2.3',
              progress: 46,
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
              percentage: '1.73',
              progress: 45,
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
              percentage: '0.0',
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
              percentage: '2.5',
              progress: 45,
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
              percentage: '2.4',
              progress: 50,
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
              percentage: '0.0',
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
              percentage: '0.0',
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
        },
        {
          date: '2023/04/01',
          flavors: [
            {
              name: langContent.characteristics.flavors[0].name,
              percentage: '2.2',
              progress: 46,
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
              percentage: '1.72',
              progress: 45,
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
              percentage: '0.0',
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
              percentage: '2.5',
              progress: 45,
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
              percentage: '2.4',
              progress: 50,
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
              percentage: '0.0',
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
              percentage: '0.0',
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
        },
        {
          date: '2022/05/10',
          flavors: [
            {
              name: langContent.characteristics.flavors[0].name,
              percentage: '2.5',
              progress: 46,
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
              percentage: '1.75',
              progress: 45,
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
              percentage: '0.0',
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
              percentage: '2.5',
              progress: 45,
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
              percentage: '2.5',
              progress: 50,
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
              percentage: '0.0',
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
              percentage: '0.0',
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
        },
      ],
      // flavors: [
      //   {
      //     name: langContent.characteristics.flavors[0].name,
      //     percentage: '2.5',
      //     progress: 50,
      //     icon: {
      //       src: '/icons/afrutado_dulces-white-icon.svg',
      //       alt: 'Ceresa-white-icon',
      //     },
      //     className: 'border-l-12 border-l-red-500',
      //     description: langContent.characteristics.flavors[0].description,
      //     color: '#ef4444',
      //   },
      //   {
      //     name: langContent.characteristics.flavors[1].name,
      //     percentage: '1.75',
      //     progress: 47,
      //     icon: {
      //       src: '/icons/afrutado_citricos-white-icon.svg',
      //       alt: 'Naranja-white-icon',
      //     },
      //     className: 'border-l-12 border-l-amber-500',
      //     description: langContent.characteristics.flavors[1].description,
      //     color: '#f59e0b',
      //   },
      //   {
      //     name: langContent.characteristics.flavors[2].name,
      //     percentage: '0.0',
      //     progress: 0,
      //     icon: {
      //       src: '/icons/aflorado-white-icon.svg',
      //       alt: 'Flor-white-icon',
      //     },
      //     className: 'border-l-12 border-l-pink-500',
      //     description: langContent.characteristics.flavors[2].description,
      //     color: '#ec4899',
      //   },
      //   {
      //     name: langContent.characteristics.flavors[3].name,
      //     percentage: '2.5',
      //     progress: 50,
      //     icon: {
      //       src: '/icons/acriollado-white-icon.svg',
      //       alt: 'Bellota-white-icon',
      //     },
      //     className: 'border-l-12 border-l-yellow-500/50',
      //     description: langContent.characteristics.flavors[3].description,
      //     color: '#eab30880',
      //   },
      //   {
      //     name: langContent.characteristics.flavors[4].name,
      //     percentage: '2.5',
      //     progress: 50,
      //     icon: {
      //       src: '/icons/cacao-white-icon.svg',
      //       alt: 'Cacao-white-icon',
      //     },
      //     className: 'border-l-12 border-l-yellow-900',
      //     description: langContent.characteristics.flavors[4].description,
      //     color: '#713f12',
      //   },
      //   {
      //     name: langContent.characteristics.flavors[5].name,
      //     percentage: '0.0',
      //     progress: 0,
      //     icon: {
      //       src: '/icons/boscoso-white-icon.svg',
      //       alt: 'Pino-white-icon',
      //     },
      //     className: 'border-l-12 border-l-lime-300',
      //     description: langContent.characteristics.flavors[5].description,
      //     color: '#bef264',
      //   },
      //   {
      //     name: langContent.characteristics.flavors[6].name,
      //     percentage: '0.0',
      //     progress: 0,
      //     icon: {
      //       src: '/icons/especias-white-icon.svg',
      //       alt: 'Clabos-white-icon',
      //     },
      //     className: 'border-l-12 border-l-yellow-300',
      //     description: langContent.characteristics.flavors[6].description,
      //     color: '#fde047',
      //   },
      // ],
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
        // {
        //   title: langContent.characteristics.information[0].title,
        //   indicatorColor: 'bg-amber-950',
        //   description: {
        //     boldText: langContent.characteristics.information[0].description.boldText,
        //     additionalText: langContent.characteristics.information[0].description.additionalText,
        //   },
        // },
        // {
        //   title: langContent.characteristics.information[1].title,
        //   indicatorColor: 'bg-amber-950',
        //   description: {
        //     boldText: langContent.characteristics.information[1].description.boldText,
        //     additionalText: langContent.characteristics.information[1].description.additionalText,
        //   },
        // },
        // {
        //   title: langContent.characteristics.information[2].title,
        //   indicatorColor: 'bg-amber-950',
        //   description: {
        //     boldText: langContent.characteristics.information[2].description.boldText,
        //     additionalText: langContent.characteristics.information[2].description.additionalText,
        //   },
        // },
      ],
      analysis: {
        title: langContent.characteristics.analysis.title,
        image: langImages.general.cuencaCacao,
        imageAlt: langContent.characteristics.analysis.alt,
        description: [
          {
            text: langContent.characteristics.analysis.description[0].text,
            information_block: false,
          },
          {
            text: langContent.characteristics.analysis.description[1].text,
            information_block: false,
          },
        ],
      },
    },
    cocoaMap: [
      // {
      //   title: langContent.cocoaMap[0].title,
      //   content: [
      //     {
      //       type: 'quote',
      //       quote: langContent.cocoaMap[0].content[0].quote,
      //       author: langContent.cocoaMap[0].content[0].author,
      //       border: true,
      //     },
      //     {
      //       type: 'paragraph',
      //       text: langContent.cocoaMap[0].content[1].text,
      //     },
      //   ],
      //   image: {
      //     src: langImages.general.ruedaSabores,
      //     alt: langContent.cocoaMap[0].image.alt,
      //     align: 'right',
      //   },
      // },
      {
        title: langContent.cocoaMap[1].title,
        content: [
          {
            type: 'quote',
            quote: langContent.cocoaMap[1].content[0].text,
            border: true,
          },
          {
            type: 'paragraph',
            text: langContent.cocoaMap[1].content[1].text,
          },
          {
            type: 'paragraph',
            text: langContent.cocoaMap[1].content[2].text,
          },
          {
            type: 'paragraph',
            text: langContent.cocoaMap[1].content[3].text,
          },
          {
            type: 'paragraph',
            text: langContent.cocoaMap[1].content[4].text,
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
              ],
            },
          ],
        },
      ],
    },
    traceability: {
      title: langContent.traceability.title,
      content: [
        {
          type: 'paragraph',
          text: langContent.traceability.content[0].text,
        },
        {
          type: 'richText',
          text: langContent.traceability.content[1].text,
        },
        {
          type: 'paragraph',
          text: langContent.traceability.content[2].text,
        },
        {
          type: 'richText',
          text: langContent.traceability.content[3].text,
        },
        {
          type: 'paragraph',
          text: langContent.traceability.content[4].text,
        },
        {
          type: 'richText',
          text: langContent.traceability.content[5].text,
        },
      ],
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
        {
          src: langImages.protocols.secado[0],
          alt: langContent.postHarvestBenefit.content[1].protocols[1].image.alt,
        },
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
    location: {
      title: langContent.location.title,
      subtitle: langContent.location.subtitle,
      locationInfo: {
        map: {
          src: langImages.location.map,
          alt: langContent.location.locationInfo.map.alt,
          link: 'https://www.google.com/maps/place/Barlovento,+Caracas+1073,+Miranda/@10.4333743,-66.7872667,14z/data=!3m1!4b1!4m6!3m5!1s0x8c2af864a8509581:0x428417c856b97c56!8m2!3d10.433333!4d-66.766667!16s%2Fg%2F120x66wx?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D',
        },
        details: langContent.location.locationInfo.details,
      },
      paragraphs: langContent.location.paragraphs,
      ecology: {
        title: '',
        paragraphs: '',
        images: [],
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
