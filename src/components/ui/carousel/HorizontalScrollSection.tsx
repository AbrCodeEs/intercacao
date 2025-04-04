'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';

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
        <div className="h-64 w-full rounded-lg bg-gray-300 md:h-auto">
          <div className="flex h-full items-center justify-center">Contenido 1</div>
        </div>

        {/* Elemento 2 */}
        <div className="h-64 w-full rounded-lg bg-gray-300 md:h-auto">
          <div className="flex h-full items-center justify-center">Contenido 2</div>
        </div>

        {/* Elemento 3 - Video */}
        <div className="h-64 w-full rounded-lg bg-gray-300 md:h-auto">
          <div className="aspect-video h-full w-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/7eTjGEETdag"
              className="h-full w-full"
              frameBorder="0"
              allowFullScreen
              title="Video player"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
