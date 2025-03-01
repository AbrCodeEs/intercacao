'use client';

import React, { useState } from 'react';
import { TransitionPanel } from '@/components/ui/transition-panel';

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

import carouselDanza1 from '@/images/home/carousels/danza/carousel-1.png';
import carouselDanza2 from '@/images/home/carousels/danza/carousel-2.jpeg';
import carouselDanza3 from '@/images/home/carousels/danza/carousel-3.jpeg';
import carouselDanza4 from '@/images/home/carousels/danza/carousel-4.jpeg';
import carouselDanza5 from '@/images/home/carousels/danza/carousel-5.jpeg';
import carouselDanza6 from '@/images/home/carousels/danza/carousel-6.jpeg';
import carouselDanza7 from '@/images/home/carousels/danza/carousel-7.jpeg';
import carouselDanza8 from '@/images/home/carousels/danza/carousel-8.jpeg';
import carouselDanza9 from '@/images/home/carousels/danza/carousel-9.jpeg';
import carouselDanza10 from '@/images/home/carousels/danza/carousel-10.jpeg';
import carouselDanza11 from '@/images/home/carousels/danza/carousel-11.jpeg';

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
    classNameImg: 'xl:pt-20 lg:pt-10 md:pt-10 pt-5 animate-trigger-top',
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
    classNameImg: 'xl:pb-20 lg:pb-10 md:pb-10 pb-5 animate-trigger-top',
    images: [{
      src: carouselWilfriedMerle1.src,
      alt: 'Regreso al Agua',
    },{
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
    },{
      src: carouselWilfriedMerle10.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselWilfriedMerle11.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselWilfriedMerle12.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselWilfriedMerle13.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselWilfriedMerle14.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselWilfriedMerle15.src,
      alt: 'Regreso al Agua',
    }],
  },
  {
    title: 'Regreso al Agro',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoRegresoAlAgro.src,
      alt: 'Regreso al Agua',
    },
    classNameImg: 'xl:pt-20 lg:pt-10 md:pt-10 pt-5 animate-trigger-top',
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
    className: 'w-full py-3',
    classNameImg: 'xl:w-120 lg:w-110 md:w-100 w-80',
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
    classNameImg: 'xl:pb-20 lg:pb-10 md:pb-10 pb-5',
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
    classNameImg: 'xl:pt-20 lg:pt-10 md:pt-10 pt-5',
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
    classNameImg: 'xl:pb-20 lg:pb-10 md:pb-10 pb-5',
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
        src: carouselMusica1.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselMusica2.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselMusica3.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselMusica4.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselMusica5.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselMusica6.src,
        alt: 'Regreso al Agua',
      },
      {
        src: carouselMusica7.src,
        alt: 'Regreso al Agua',
      },
    ],
  },
];

export function TabsTransitionPanel() {
  const [activeIndex, setActiveIndex] = useState(ITEMS.length - 1);

  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-between gap-10">
        <div className="flex w-4/5 grow flex-row flex-wrap justify-center gap-y-6">
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className={cn('group flex w-1/3 items-center justify-center', item.className)}
            >
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
          ))}
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center justify-between gap-10 py-10 md:container lg:container xl:container">
        <div className="w-full grow overflow-hidden">
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
              <>
                <Carousel key={`index-${index}`} className="overflow-hidden xl:rounded-lg lg:rounded-lg md:rounded-lg">
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
              </>
            ))}
          </TransitionPanel>
        </div>
      </div>
    </>
  );
}
