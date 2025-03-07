'use client';

import React, { useRef, useState, useEffect } from 'react';
import { TransitionPanel } from '@/components/ui/transition-panel';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { motion, AnimatePresence, useInView } from 'motion/react';

import logoRegresoAlAgua from '@/images/global/logo-regreso-al-agua.webp';
import logoWilfriedMerle from '@/images/global/logo-wilfried-merle.webp';
import logoRegresoAlAgro from '@/images/global/logo-regreso-al-agro.webp';
import logoFundacionProsperi from '@/images/global/logo-fundacion-prosperi.webp';
import logoElectronDeporte from '@/images/global/logo-electron-deporte.png';
import logoElectronMusica from '@/images/global/logo-electron-musica-y-dansa.png';
import logoElectronReligion from '@/images/global/logo-electron-religion.png';
import { cn } from '@/assets/lib/utils';

import carouselDanza1 from '@/images/home/carousels/danza/01.jpg';
import carouselDanza2 from '@/images/home/carousels/danza/02.jpg';
import carouselDanza3 from '@/images/home/carousels/danza/03.jpg';
import carouselDanza4 from '@/images/home/carousels/danza/04.jpg';
import carouselDanza5 from '@/images/home/carousels/danza/05.jpg';
import carouselDanza6 from '@/images/home/carousels/danza/06.jpg';
import carouselDanza7 from '@/images/home/carousels/danza/07.jpg';
import carouselDanza8 from '@/images/home/carousels/danza/08.jpg';
import carouselDanza9 from '@/images/home/carousels/danza/09.jpg';
import carouselDanza10 from '@/images/home/carousels/danza/10.jpg';
import carouselDanza11 from '@/images/home/carousels/danza/11.jpg';
import carouselDanza12 from '@/images/home/carousels/danza/12.jpg';
import carouselDanza13 from '@/images/home/carousels/danza/13.jpg';
import carouselDanza14 from '@/images/home/carousels/danza/14.jpg';
import carouselDanza15 from '@/images/home/carousels/danza/15.jpg';
import carouselDanza16 from '@/images/home/carousels/danza/16.jpg';
import carouselDanza17 from '@/images/home/carousels/danza/17.jpg';
import carouselDanza18 from '@/images/home/carousels/danza/18.jpg';
import carouselDanza19 from '@/images/home/carousels/danza/19.jpg';

import carouselRegresoAlAgua1 from '@/images/home/carousels/regreso-al-agua/carousel-1.jpeg';
import carouselRegresoAlAgua2 from '@/images/home/carousels/regreso-al-agua/carousel-2.jpeg';
import carouselRegresoAlAgua3 from '@/images/home/carousels/regreso-al-agua/carousel-3.jpeg';
import carouselRegresoAlAgua4 from '@/images/home/carousels/regreso-al-agua/carousel-4.jpeg';
import carouselRegresoAlAgua5 from '@/images/home/carousels/regreso-al-agua/carousel-5.jpeg';
import carouselRegresoAlAgua6 from '@/images/home/carousels/regreso-al-agua/carousel-6.jpeg';
import carouselRegresoAlAgua7 from '@/images/home/carousels/regreso-al-agua/carousel-7.jpeg';
import carouselRegresoAlAgua8 from '@/images/home/carousels/regreso-al-agua/carousel-8.jpeg';
import carouselRegresoAlAgua10 from '@/images/home/carousels/regreso-al-agua/carousel-9.jpeg';
import carouselRegresoAlAgua9 from '@/images/home/carousels/regreso-al-agua/carousel-10.jpeg';

import carouselWilfriedMerle1 from '@/images/home/carousels/wilfried-merle/carousel-1.jpeg';
import carouselWilfriedMerle2 from '@/images/home/carousels/wilfried-merle/carousel-2.jpeg';
import carouselWilfriedMerle3 from '@/images/home/carousels/wilfried-merle/carousel-3.jpeg';
import carouselWilfriedMerle4 from '@/images/home/carousels/wilfried-merle/carousel-4.jpeg';
import carouselWilfriedMerle5 from '@/images/home/carousels/wilfried-merle/carousel-5.jpeg';
import carouselWilfriedMerle6 from '@/images/home/carousels/wilfried-merle/carousel-6.jpeg';
import carouselWilfriedMerle7 from '@/images/home/carousels/wilfried-merle/carousel-7.jpeg';
import carouselWilfriedMerle8 from '@/images/home/carousels/wilfried-merle/carousel-8.jpeg';
import carouselWilfriedMerle9 from '@/images/home/carousels/wilfried-merle/carousel-9.jpeg';
import carouselWilfriedMerle10 from '@/images/home/carousels/wilfried-merle/carousel-10.jpeg';
import carouselWilfriedMerle11 from '@/images/home/carousels/wilfried-merle/carousel-11.jpeg';
import carouselWilfriedMerle12 from '@/images/home/carousels/wilfried-merle/carousel-12.jpeg';
import carouselWilfriedMerle13 from '@/images/home/carousels/wilfried-merle/carousel-13.jpeg';
import carouselWilfriedMerle14 from '@/images/home/carousels/wilfried-merle/carousel-14.jpeg';
import carouselWilfriedMerle15 from '@/images/home/carousels/wilfried-merle/carousel-15.jpeg';

import carouselDeporte1 from '@/images/home/carousels/deporte/01.jpg';
import carouselDeporte2 from '@/images/home/carousels/deporte/02.jpg';
import carouselDeporte3 from '@/images/home/carousels/deporte/03.jpg';
import carouselDeporte4 from '@/images/home/carousels/deporte/04.jpg';
import carouselDeporte5 from '@/images/home/carousels/deporte/05.jpg';
import carouselDeporte6 from '@/images/home/carousels/deporte/06.jpg';
import carouselDeporte7 from '@/images/home/carousels/deporte/07.jpg';
import carouselDeporte8 from '@/images/home/carousels/deporte/08.jpg';
import carouselDeporte9 from '@/images/home/carousels/deporte/09.jpg';
import carouselDeporte10 from '@/images/home/carousels/deporte/10.jpg';
import carouselDeporte11 from '@/images/home/carousels/deporte/11.jpg';
import carouselDeporte12 from '@/images/home/carousels/deporte/12.jpg';
import carouselDeporte13 from '@/images/home/carousels/deporte/13.jpg';
import carouselDeporte14 from '@/images/home/carousels/deporte/14.jpg';
import carouselDeporte15 from '@/images/home/carousels/deporte/15.jpg';
import carouselDeporte16 from '@/images/home/carousels/deporte/16.jpg';

import carouselReligion1 from '@/images/home/carousels/religion/01.jpg';
import carouselReligion2 from '@/images/home/carousels/religion/02.jpg';
import carouselReligion3 from '@/images/home/carousels/religion/03.jpg';
import carouselReligion4 from '@/images/home/carousels/religion/04.jpg';
import carouselReligion5 from '@/images/home/carousels/religion/05.jpg';
import carouselReligion6 from '@/images/home/carousels/religion/06.jpg';
import carouselReligion7 from '@/images/home/carousels/religion/07.jpg';
import carouselReligion8 from '@/images/home/carousels/religion/08.jpg';
import carouselReligion9 from '@/images/home/carousels/religion/09.jpg';
import carouselReligion10 from '@/images/home/carousels/religion/10.jpg';
import carouselReligion11 from '@/images/home/carousels/religion/11.jpg';
import carouselReligion12 from '@/images/home/carousels/religion/12.jpg';
import carouselReligion13 from '@/images/home/carousels/religion/13.jpg';
import carouselReligion14 from '@/images/home/carousels/religion/14.jpg';
import carouselReligion15 from '@/images/home/carousels/religion/15.jpg';
import carouselReligion16 from '@/images/home/carousels/religion/16.jpg';
import carouselReligion17 from '@/images/home/carousels/religion/17.jpg';
import carouselReligion18 from '@/images/home/carousels/religion/18.jpg';

import carouselAgro1 from '@/images/home/carousels/agro/01.jpg';
import carouselAgro2 from '@/images/home/carousels/agro/02.jpg';
import carouselAgro3 from '@/images/home/carousels/agro/03.jpg';
import carouselAgro4 from '@/images/home/carousels/agro/04.jpg';
import carouselAgro5 from '@/images/home/carousels/agro/05.jpg';
import carouselAgro6 from '@/images/home/carousels/agro/06.jpg';
import carouselAgro7 from '@/images/home/carousels/agro/07.jpg';
import carouselAgro8 from '@/images/home/carousels/agro/08.jpg';
import carouselAgro9 from '@/images/home/carousels/agro/09.jpg';
import carouselAgro10 from '@/images/home/carousels/agro/10.jpg';

import carrouselProperi1 from '@/images/home/carousels/prosperi/01.jpg';
import carrouselProperi2 from '@/images/home/carousels/prosperi/02.jpg';
import carrouselProperi3 from '@/images/home/carousels/prosperi/03.jpg';
import carrouselProperi4 from '@/images/home/carousels/prosperi/04.jpg';
import carrouselProperi5 from '@/images/home/carousels/prosperi/05.jpg';
import carrouselProperi6 from '@/images/home/carousels/prosperi/06.jpg';
import carrouselProperi7 from '@/images/home/carousels/prosperi/07.jpg';
import carrouselProperi8 from '@/images/home/carousels/prosperi/08.jpg';
import carrouselProperi9 from '@/images/home/carousels/prosperi/09.jpg';
import carrouselProperi10 from '@/images/home/carousels/prosperi/10.jpg';
import carrouselProperi11 from '@/images/home/carousels/prosperi/11.jpg';
import carrouselProperi12 from '@/images/home/carousels/prosperi/12.jpg';
import carrouselProperi13 from '@/images/home/carousels/prosperi/13.jpg';
import carrouselProperi14 from '@/images/home/carousels/prosperi/14.jpg';
import carrouselProperi15 from '@/images/home/carousels/prosperi/15.jpg';
import carrouselProperi16 from '@/images/home/carousels/prosperi/16.jpg';
import carrouselProperi17 from '@/images/home/carousels/prosperi/17.jpg';
import carrouselProperi18 from '@/images/home/carousels/prosperi/18.jpg';

import carouselHistoria1 from '@/images/home/carousels/historia/01.jpeg';
import carouselHistoria2 from '@/images/home/carousels/historia/02.jpeg';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const ITEMS = [
  {
    title: 'Regreso al Agua',
    content:
      'La Fundación Quirico Prosperi lidera “Regreso del Agua”,  un proyecto innovador que combina tecnología, investigación y acción comunitaria para revivir el cauce del río. A través de cultivos ecológicos y prácticas sostenibles, trabajamos juntos para que el agua vuelva a fluir, devolviendo vida y esperanza a nuestra tierra. ¡Un futuro más verde y próspero nos espera! Si se puede!',
    img: {
      src: logoRegresoAlAgua.src,
      alt: 'Regreso al Agua',
    },
    className: 'flex justify-center items-center xl:mt-20 lg:mt-10 md:mt-10 mt-5',
    icon: <img src='/icons/agua.png' loading="eager" className='w-5'/>,
    images: [
      {
        src: carouselRegresoAlAgua1.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselRegresoAlAgua2.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselRegresoAlAgua3.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselRegresoAlAgua4.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselRegresoAlAgua5.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselRegresoAlAgua6.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselRegresoAlAgua7.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselRegresoAlAgua8.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselRegresoAlAgua9.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselRegresoAlAgua10.src,
        alt: 'Regreso al Agua',
      },
    ],
  },
  {
    title: 'Vivero Wilfried Merle',
    content:
      'La Fundación Quirico Prosperi honra el legado de Wilfried Merle con el “Vivero Wilfried Merle”, un espacio dedicado a la investigación, producción y preservación de las mejores plantas de cacao, café y otras especies que fortalecen estos cultivos. Inspirado en su visión de sostenibilidad y desarrollo comunitario, el vivero no solo impulsa la agricultura responsable, sino que también sirve como centro de aprendizaje para colegios y universidades. Aquí, nuevas generaciones descubren el valor del campo y la importancia de cultivar con conciencia ambiental. ¡Sembrando conocimiento, cosechando futuro!',
    img: {
      src: logoWilfriedMerle.src,
      alt: 'Regreso al Agua',
    },
    className: 'flex justify-center items-center',
    icon: <img src='/icons/wilfried.png' loading="eager" className='w-5'/>,
    images: [
      {
        src: carouselWilfriedMerle1.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle2.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle3.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle4.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle5.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle6.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle7.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle8.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle9.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle10.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle11.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle12.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle13.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle14.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselWilfriedMerle15.src,
        alt: 'Regreso al Agua',
      },
    ],
  },
  {
    title: 'Regreso al Agro',
    content:
      'La Fundación Quirico Prosperi, comprometida con el rescate de los valores históricos, culturales y agrícolas de Venezuela, impulsa “Regreso al Agro”, un programa educativo que demuestra que el cultivo de cacao y café no solo es una tradición, sino una profesión rentable y transformadora. A través de la promoción de buenas prácticas agrícolas, buscamos empoderar a la comunidad y sembrar un futuro sostenible para las nuevas generaciones. ¡El campo es vida, progreso y oportunidad!',
    img: {
      src: logoRegresoAlAgro.src,
      alt: 'Regreso al Agua',
    },
    className: 'flex justify-center items-center xl:mt-20 lg:mt-10 md:mt-10 mt-5',
    icon: <img src='/icons/grano.png' loading="eager" className='w-5'/>,
    images: [{
      src: carouselAgro1.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselAgro2.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselAgro3.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselAgro4.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselAgro5.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselAgro6.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselAgro7.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselAgro8.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselAgro9.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselAgro10.src,
      alt: 'Regreso al Agua',
    }
    ],
  },
  {
    title: 'Fundación Quirico Prosperi',
    content:
      'Fundación Quirico Prosperi es una organización sin fines de lucro dedicada a promover los valores históricos, culturales y agrícolas de Venezuela, con especial énfasis en la región de Paria. A través de sus programas, la fundación impulsa el desarrollo sostenible, la educación y el rescate de tradiciones como el cultivo de cacao y café. La FQP busca mejorar la calidad de vida de las comunidades, promover la agricultura responsable y garantizar el bienestar de la región. ¡Descubra más sobre su impactante trabajo en su página web oficial!',
    img: {
      src: logoFundacionProsperi.src,
      alt: 'Regreso al Agua',
    },
    className: 'flex justify-center items-center col-start-2 my-8',
    classNameImg: 'w-100',
    icon:  <img src='/icons/fqp.png' loading="eager" className='w-5'/>,
    images: [{
      src: carrouselProperi1.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi2.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi3.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi4.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi5.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi6.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi7.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi8.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi9.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi10.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi11.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi12.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi13.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi14.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi15.src,
      alt: 'Regreso al Agua', 
    },{
      src: carrouselProperi16.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi17.src,
      alt: 'Regreso al Agua',
    },{
      src: carrouselProperi18.src,
      alt: 'Regreso al Agua',
    }]
  },
  {
    title: 'Electron Religioso',
    content:
      'La Fundación Quirico Prosperi fortalece la fe y los valores en la comunidad a través de su programa de apoyo religioso. Contribuye a las iglesias Santa Rosa de Lima en Carúpano y la Iglesia Pedro y Pablo en El Rincón mediante donaciones, respaldo a los grupos y profesores de catequesis así como diversas iniciativas que unen y enriquecen la espiritualidad. ¡Fe, solidaridad y comunidad en acción!',
    img: {
      src: logoElectronReligion.src,
      alt: 'Regreso al Agua',
    },
    className: 'flex justify-center items-center row-start-3 xl:mb-20 lg:mb-10 md:mb-10 mb-5',
    icon: <div className='w-5 text-yellow-300 font-bold'>R</div>,
    images: [
      {
        src: carouselReligion1.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion2.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion3.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion4.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion5.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion6.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion7.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion8.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion9.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion10.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion11.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion12.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion13.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion14.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion15.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion16.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion17.src,
        alt: 'Regreso al Agua',
      }, {
        src: carouselReligion18.src,
        alt: 'Regreso al Agua',
      }
    ],
  },
  {
    title: 'Electron Musica y Danza',
    content:
      'La Fundación Quirico Prosperi celebra la cultura, el arte y el talento de los jóvenes de El Rincón con su programa  electrón de danza y música. A través de la danza folclórica dirigida desde hace más de 15 años por Roger Urbano y la formación musical del Sistema Nacional de Orquestas, herencia del maestro Abreu, niños y jóvenes descubren su pasión, fortalecen sus raíces y brillan con su arte. ¡Tradición y música que transforman vidas!',
    img: {
      src: logoElectronMusica.src,
      alt: 'Regreso al Agua',
    },
    className: 'flex justify-center items-center row-start-3',
    icon: <div className='w-5 text-blue-500 font-bold'>M</div>,
    images: [
      {
        src: carouselDanza1.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza2.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza3.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza4.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza5.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza6.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza7.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza8.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza9.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza10.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza11.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza12.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza13.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza14.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza15.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza16.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza17.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza18.src,
        alt: 'Danza',
      },
      {
        src: carouselDanza19.src,
        alt: 'Danza',
      },
    ],
  },
  {
    title: 'Electron Deporte',
    content:
      'La Fundación Quirico Prosperi impulsa el talento deportivo en El Rincón a través de sus programas de baloncesto y fútbol, brindando a niños y jóvenes la oportunidad de entrenar, competir y crecer en un ambiente de disciplina y trabajo en equipo. ¡El deporte está transformando vidas y construyendo un futuro mejor para la comunidad!',
    img: {
      src: logoElectronDeporte.src,
      alt: 'Regreso al Agua',
    },
    className: 'flex justify-center items-center row-start-3 xl:mb-20 lg:mb-10 md:mb-10 mb-5',
    icon: <div className='w-5 text-red-600 font-bold'>D</div>,
    images: [
      {
        src: carouselDeporte1.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte2.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte3.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte4.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte5.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte6.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte7.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte8.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte9.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte10.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte11.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte12.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte13.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte14.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte15.src,
        alt: 'Deporte',
      }, {
        src: carouselDeporte16.src,
        alt: 'Deporte',
      }
    ],
  },
];

const historia = [{
  src: carouselHistoria1.src,
  alt: 'Historia',
},{
  src: carouselHistoria2.src,
  alt: 'Historia',
}]

export function TabsTransitionPanel() {
  const [activeIndex, setActiveIndex] = useState(ITEMS.length - 1);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);

  // Detectar visibilidad del carrusel con Framer Motion
  const isCarouselInView = useInView(carouselRef, {
    margin: '0px 0px -50px 0px',
    amount: 'some',
  });

  // Controlar visibilidad del panel
  useEffect(() => {
    console.log(isCarouselInView);
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, bottom } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isFullyHidden = top > viewportHeight || bottom < 0;

      setIsPanelVisible(isCarouselInView && !isFullyHidden);
    };

    handleScroll(); // Verificar estado inicial
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCarouselInView]);

  return (
    <>
      <Carousel className="overflow-hidden md:rounded-lg lg:rounded-lg xl:rounded-lg">
        <CarouselContent
          classNameWrapper="w-1/2 xl:overflow-hidden lg:overflow-hidden md:overflow-hidden overflow-visible"
        >
          {
            historia?.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-2/4"
              >
                <div className="flex aspect-square items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="eager"
                    className="aspect-[4/5] object-cover overflow-hidden md:rounded-lg lg:rounded-lg xl:rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="left-5 disabled:!opacity-1 md:left-5 lg:left-10 xl:left-10" />
        <CarouselNext className="right-5 disabled:!opacity-1 md:right-5 lg:right-10 xl:right-10" />
      </Carousel>

      <div className="grid grid-flow-row auto-rows-max grid-cols-3 items-center justify-center gap-0">
        <AnimatedBackground
          className={cn('group flex items-center justify-center rounded-lg bg-zinc-100')}
          transition={{
            type: 'spring',
            bounce: 0.5,
            duration: 0.6,
          }}
          enableHover
        >
          {ITEMS.map((item, index) => (
            <div key={index} data-id={`card-${index}`} className={cn(item.className)}>
              <div className="flex flex-col items-center justify-center space-y-1 p-4 select-none">
                <button key={index} onClick={() => setActiveIndex(index)}>
                  <img
                    src={item.img.src}
                    alt={item.img.alt}
                    loading="lazy"
                    className={cn(
                      'block h-full w-80 cursor-pointer object-fill object-center transition-all duration-500 ease-out group-hover:scale-105',
                      item.classNameImg,
                    )}
                  />
                </button>
              </div>
            </div>
          ))}
        </AnimatedBackground>
      </div>

      <AnimatePresence initial={false}>
        {isPanelVisible && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="fixed top-2/3 right-4 flex -translate-y-1/2 flex-col items-center gap-1 md:hidden z-10"
          >
            {ITEMS.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-lg bg-white px-4 py-3 shadow-lg transition-colors hover:bg-zinc-100 ${
                  activeIndex === index ? 'bg-zinc-200' : ''
                }`}
              > 
                {item.icon}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="mx-auto flex flex-col items-center justify-between gap-10 py-10 md:container lg:container xl:container"
        ref={containerRef}
      >
        <motion.div className="relative w-full grow overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div ref={carouselRef} />
          </div>
          <TransitionPanel
            activeIndex={activeIndex}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            variants={{
              enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
              center: { opacity: 1, y: 0, filter: 'blur(0px)' },
              exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
            }}
          >
            {ITEMS.map((item, index) => (
              <motion.div key={index}>
                <Carousel className="overflow-hidden md:rounded-lg lg:rounded-lg xl:rounded-lg">
                  <CarouselContent
                    classNameWrapper="w-full xl:overflow-hidden lg:overflow-hidden md:overflow-hidden overflow-visible"
                    className="-ml-0 w-full"
                  >
                    {!!item.images.length &&
                      item.images?.map((image, index) => (
                        <CarouselItem
                          key={index}
                          className="basis-120 pl-0 md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
                        >
                          <div className="flex aspect-square items-center justify-center">
                            <img
                              src={image.src}
                              alt={image.alt}
                              loading="eager"
                              className="aspect-[4/5] object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-5 disabled:!opacity-1 md:left-5 lg:left-10 xl:left-10" />
                  <CarouselNext className="right-5 disabled:!opacity-1 md:right-5 lg:right-10 xl:right-10" />
                </Carousel>
                <div key={index} className="p-10 md:py-5 lg:py-5 xl:py-5">
                  <h1 className="py-2 text-4xl font-bold text-neutral-600 uppercase">
                    {item.title}
                  </h1>
                  <p className="text-lg">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </TransitionPanel>
        </motion.div>
      </motion.div>
    </>
  );
}
