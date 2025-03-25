'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import semillaCafe1 from '@/images/home/agro/01_semilla_cafe.jpg';
import semillaCafe2 from '@/images/home/agro/02_semillas_cacao.jpg';
import semillaCafe3 from '@/images/home/agro/03_sacos_cacao.jpg';
import semillaCafe4 from '@/images/home/agro/04_germinado_cacao.jpg';
import semillaCafe5 from '@/images/home/agro/05_secado_cacao_puipuy.jpg';
import semillaCafe6 from '@/images/home/agro/06_cacaos_ensaco.jpg';
import semillaCafe7 from '@/images/home/agro/07_yeih_cacao_planta.jpg';
import semillaCafe8 from '@/images/home/agro/08_cacao_enventa.jpg';
import semillaCafe9 from '@/images/home/agro/09_cacaoyprosperi.jpg';
import semillaCafe10 from '@/images/home/agro/10_escuela_regreso_al_agro.jpg';
import semillaCafe11 from '@/images/home/agro/11_productora_cacao.jpg';
import semillaCafe12 from '@/images/home/agro/12_secado_cacao_artesanal.jpg';
import semillaCafe13 from '@/images/home/agro/13_vendedor_cacao_puypuy.jpg';
import semillaCafe14 from '@/images/home/agro/14_mazorcas_cacao.jpg';
import semillaCafe15 from '@/images/home/agro/15_secado_puypuy.jpg';
import semillaCafe16 from '@/images/home/agro/16_secado_puypuy.jpg';

const images = [
  { src: semillaCafe1.src, alt: 'Semilla de cafe 1' },
  { src: semillaCafe2.src, alt: 'Semilla de cafe 2' },
  { src: semillaCafe3.src, alt: 'Semilla de cafe 3' },
  { src: semillaCafe4.src, alt: 'Semilla de cafe 4' },
  { src: semillaCafe5.src, alt: 'Semilla de cafe 5' },
  { src: semillaCafe6.src, alt: 'Semilla de cafe 6' },
  { src: semillaCafe7.src, alt: 'Semilla de cafe 7' },
  { src: semillaCafe8.src, alt: 'Semilla de cafe 8' },
  { src: semillaCafe9.src, alt: 'Semilla de cafe 9' },
  { src: semillaCafe10.src, alt: 'Semilla de cafe 10' },
  { src: semillaCafe11.src, alt: 'Semilla de cafe 11' },
  { src: semillaCafe12.src, alt: 'Semilla de cafe 12' },
  { src: semillaCafe13.src, alt: 'Semilla de cafe 13' },
  { src: semillaCafe14.src, alt: 'Semilla de cafe 14' },
  { src: semillaCafe15.src, alt: 'Semilla de cafe 15' },
  { src: semillaCafe16.src, alt: 'Semilla de cafe 16' },
];

// Importa tus imágenes locales
import electronesFqp from '@/images/home/electrones-fqp.jpg';
import fqp from '@/images/home/fqp.png';

// Define el tipo para las traducciones
interface Translations {
  title: string;
  description: string;
  current_news_title: string;
  view_more: string;
  image: string;
  explore_section: {
    title: string;
    cta: string;
  };
  timeline_items: Array<{
    title: string;
    description: string;
    url: string;
  }>;
}

const HorizontalScrollSection = ({ trans }: Translations) => {
  const containerRef = useRef(null);

  return (
    <div className="container mx-auto my-10 flex w-full flex-col px-10">
      <h1 className="pb-5 text-center text-4xl font-bold">{trans.title}</h1>
      <p className="pb-5 md:text-center xl:text-center">{trans.description}</p>

      <div
        ref={containerRef}
        className="hide-scrollbar container m-auto flex w-full flex-col gap-4 overflow-x-auto overflow-y-hidden p-5 py-16"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div
          className="flex gap-2 px-4"
          style={{ minWidth: `${trans.timeline_items.length * 200}px` }}
        >
          <div className="relative flex flex-shrink-0 basis-70 flex-col gap-4 xl:basis-1/3">
            <div>
              <img
                src={electronesFqp.src}
                alt="Electrones FQP"
                className="size-auto w-full rounded-lg object-cover"
              />
              <h3 className="absolute bottom-10 left-5 text-3xl font-bold">Electrones FQP</h3>
            </div>
          </div>

          {trans.timeline_items.map((item, index) => {
            const itemRef = useRef(null);
            const isInView = useInView(itemRef, {
              root: containerRef,
              margin: '0px 100px 0px 0px',
              once: false,
            });

            return (
              <motion.div
                key={index}
                ref={itemRef}
                className="flex flex-shrink-0 basis-70 flex-col gap-4 xl:basis-1/3"
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="size-auto w-full rounded-lg object-cover"
                  />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  {/* <div className="flex items-center justify-end py-4">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <Button variant={'link'}>{trans.view_more}</Button>
                    </a>
                  </div> */}
                </div>
              </motion.div>
            );
          })}

          <motion.div
            className="flex flex-shrink-0 basis-70 flex-col gap-5 xl:basis-1/3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg border border-gray-300 p-5 text-center md:p-10 xl:p-20">
              <img src={fqp.src} alt="FQP" className="w-20 object-cover" />
              <p className="text-sm font-bold md:text-lg xl:text-lg">
                {trans.explore_section.title}
              </p>
              <p className="text-sm font-bold md:text-lg xl:text-lg">{trans.explore_section.cta}</p>
              {/* <a
                className="underline"
                href="https://fqp.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://fundacionprosperi.org
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-10">
        <h1 className="pb-5 text-center text-4xl font-bold">{trans.current_news_title}</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-3 md:gap-6 md:px-10">
        {/* Elemento 1 */}
        <div className="w-full rounded-lg md:h-auto">
          <Carousel className="flex w-full items-center justify-center md:px-5 xl:px-5">
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-auto p-1">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="aspect-auto rounded-lg object-cover xl:size-auto"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-10 disabled:!opacity-1 md:left-7 lg:left-7 xl:left-7" />
            <CarouselNext className="-right-10 disabled:!opacity-1 md:right-7 lg:right-7 xl:right-7" />
          </Carousel>
        </div>

        {/* Elemento 2 */}
        <div className="h-64 w-full rounded-lg md:h-auto">
          <div className="flex h-full items-center justify-center overflow-hidden rounded-lg">
            <iframe
               className="h-full w-full"
              src="https://www.youtube.com/embed/ngxZMKCeUkU"
              title="camara de comercio e industria carupano Fund. 1896"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* Elemento 3 - Video */}
        <div className="h-64 w-full rounded-lg bg-gray-300 md:h-auto">
          <div className="aspect-[5/6] h-full w-full overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/u7t9KKmVT-c"
              title="El Rincon, Edo Sucre. Los Andres de Paria"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* Elemento 4 - Video */}
        <div className="h-64 w-full rounded-lg bg-gray-300 md:h-auto">
          <div className="aspect-[5/6] h-full w-full overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/KcO0CpzSUtw"
              title="Productores de Pui Puy y el Vivero Wilfried Merle"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* Elemento 5 - Video */}
        <div className="h-64 w-full rounded-lg bg-gray-300 md:h-auto">
          <div className="aspect-[5/6] h-full w-full overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/pxzbbMMQE8U"
              title="Carupan Hermoso, Comercio y Vida"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
