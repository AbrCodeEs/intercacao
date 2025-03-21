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
      <p className="pb-5 xl:text-center md:text-center">{trans.description}</p>

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
                  <div className="flex items-center justify-end py-4">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <Button variant={'link'}>{trans.view_more}</Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            className="flex flex-shrink-0 basis-70 flex-col gap-4 xl:basis-1/3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="https://fqp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg border border-gray-300 xl:p-20 md:p-10 p-5 text-center"
            >
              <img src={fqp.src} alt="FQP" className="w-20 object-cover" />
              <p className="xl:text-lg md:text-lg text-sm font-bold">{trans.explore_section.title}</p>
              <p className="xl:text-lg md:text-lg text-sm font-bold">{trans.explore_section.cta}</p>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="py-10">
        <h1 className="pb-5 text-center text-4xl font-bold">{trans.current_news_title}</h1>
      </div>

      <div className="mx-auto flex flex-col gap-5 md:flex-row md:px-10 xl:flex-row xl:px-10">
        <div className="flex flex-shrink-0 basis-50 flex-col gap-4 md:basis-1/3 xl:basis-1/3">
          <div className="size-100 rounded-lg bg-gray-300"></div>
        </div>
        <div className="flex flex-shrink-0 basis-50 flex-col gap-4 md:basis-1/3 xl:basis-1/3">
          <div className="size-100 rounded-lg bg-gray-300"></div>
        </div>
        <div className="flex flex-shrink-0 basis-50 flex-col gap-4 md:basis-1/3 xl:basis-1/3">
          <iframe
            className="h-full w-full overflow-hidden rounded-lg md:size-100 xl:size-100"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7eTjGEETdag"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
