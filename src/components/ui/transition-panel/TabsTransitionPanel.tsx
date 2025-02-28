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

import carouselMusica1 from '@/images/home/carousels/carousel-musica-1.jpeg';
import carouselMusica2 from '@/images/home/carousels/carousel-musica-2.jpeg';
import carouselMusica3 from '@/images/home/carousels/carousel-musica-3.jpeg';
import carouselMusica4 from '@/images/home/carousels/carousel-musica-4.jpeg';
import carouselMusica5 from '@/images/home/carousels/carousel-musica-5.jpeg';
import carouselMusica6 from '@/images/home/carousels/carousel-musica-6.jpeg';
import carouselMusica7 from '@/images/home/carousels/carousel-musica-7.jpeg';
import carouselMusica8 from '@/images/home/carousels/carousel-musica-8.jpeg';
import carouselMusica9 from '@/images/home/carousels/carousel-musica-9.jpeg';
import carouselMusica10 from '@/images/home/carousels/carousel-musica-10.jpeg';

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
    classNameImg: 'xl:pt-20 lg:pt-10 md:pt-10 pt-5',
    images: []
  },
  {
    title: 'Vivero Wilfried Merle',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoWilfriedMerle.src,
      alt: 'Regreso al Agua',
    },
    classNameImg: 'xl:pb-20 lg:pb-10 md:pb-10 pb-5',
    images: []
  },
  {
    title: 'Regreso al Agro',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoRegresoAlAgro.src,
      alt: 'Regreso al Agua',
    },
    classNameImg: 'xl:pt-20 lg:pt-10 md:pt-10 pt-5',
    images: []
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
    images: []
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
    images: []
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
    images: []
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
    images: [{
      src: carouselMusica1.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselMusica2.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselMusica3.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselMusica4.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselMusica5.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselMusica6.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselMusica7.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselMusica8.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselMusica9.src,
      alt: 'Regreso al Agua',
    },{
      src: carouselMusica10.src,
      alt: 'Regreso al Agua',
    }]
  },
];

export function TabsTransitionPanel() {
  const [activeIndex, setActiveIndex] = useState(ITEMS.length - 1);

  return (
    <div className="container mx-auto flex flex-col items-center justify-between gap-10">
      <div className="flex w-4/5 grow flex-row flex-wrap justify-center gap-y-6">
        {ITEMS.map((item, index) => (
          <div
            key={index}
            className={cn(
              'group flex w-1/3 items-center justify-center',
              item.className
            )}
          >
            <button key={index} onClick={() => setActiveIndex(index)}>
              <img
                src={item.img.src}
                alt={item.img.alt}
                loading="lazy"
                className={cn('block h-full w-80 cursor-pointer object-fill object-center transition-all duration-500 ease-out group-hover:scale-105', item.classNameImg)}
              />
            </button>
          </div>
        ))}
      </div>

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
              <div key={index} className="py-2">
                <h1 className="py-2 text-4xl font-bold text-neutral-600 uppercase">{item.title}</h1>
                <p className="text-lg">{item.content}</p>
              </div>
              <Carousel className="rounded-lg overflow-hidden">
                <CarouselContent classNameWrapper="xl:overflow-hidden lg:overflow-hidden md:overflow-hidden overflow-visible" className="w-full -ml-0">
                  {item.images.length && item.images?.map((image, index) => (
                    <CarouselItem key={index} className="basis-120 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 pl-0">
                      <div className="flex aspect-square items-center justify-center">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="aspect-4/4 object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="disabled:!opacity-1 left-5 md:left-5 lg:left-10 xl:left-10" />
                <CarouselNext className="disabled:!opacity-1 right-5 md:right-5 lg:right-10 xl:right-10" />
              </Carousel>
            </>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
