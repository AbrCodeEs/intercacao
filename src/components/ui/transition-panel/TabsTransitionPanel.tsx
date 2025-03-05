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

import carouselMusica1 from '@/images/home/carousels/musica/carousel-1.jpeg';
import carouselMusica2 from '@/images/home/carousels/musica/carousel-2.jpeg';
import carouselMusica3 from '@/images/home/carousels/musica/carousel-3.jpeg';
import carouselMusica4 from '@/images/home/carousels/musica/carousel-4.jpeg';
import carouselMusica5 from '@/images/home/carousels/musica/carousel-5.jpeg';
import carouselMusica6 from '@/images/home/carousels/musica/carousel-6.jpeg';
import carouselMusica7 from '@/images/home/carousels/musica/carousel-7.jpeg';

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
import carouselRegresoAlAgua9 from '@/images/home/carousels/regreso-al-agua/carousel-9.jpeg';
import carouselRegresoAlAgua10 from '@/images/home/carousels/regreso-al-agua/carousel-10.jpeg';

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
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
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
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
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
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoRegresoAlAgro.src,
      alt: 'Regreso al Agua',
    },
    className: 'flex justify-center items-center xl:mt-20 lg:mt-10 md:mt-10 mt-5',
    icon: <img src='/icons/grano.png' loading="eager" className='w-5'/>,
    images: [],
  },
  {
    title: 'Fundación Quirico Prosperi',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoFundacionProsperi.src,
      alt: 'Regreso al Agua',
    },
    className: 'xl:w-90 lg:w-70 flex justify-center items-center col-start-2',
    classNameImg: 'w-200',
    icon:  <img src='/icons/fqp.png' loading="eager" className='w-5'/>,
    images: [],
  },
  {
    title: 'Electro Religioso',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoElectronReligion.src,
      alt: 'Regreso al Agua',
    },
    className: 'flex justify-center items-center row-start-3 xl:mb-20 lg:mb-10 md:mb-10 mb-5',
    icon: <div className='w-5 text-amber-500 font-bold'>R</div>,
    images: [],
  },
  {
    title: 'Electro Musica y Danza',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoElectronMusica.src,
      alt: 'Regreso al Agua',
    },
    className: 'flex justify-center items-center row-start-3',
    icon: <div className='w-5 text-blue-500 font-bold'>MD</div>,
    images: [],
  },
  {
    title: 'Electro Deporte',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoElectronDeporte.src,
      alt: 'Regreso al Agua',
    },
    className: 'flex justify-center items-center row-start-3 xl:mb-20 lg:mb-10 md:mb-10 mb-5',
    icon: <div className='w-5 text-red-500 font-bold'>D</div>,
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
];

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
      <div className="grid grid-flow-row auto-rows-max grid-cols-3 grid-rows-3 items-center justify-center gap-0">
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
