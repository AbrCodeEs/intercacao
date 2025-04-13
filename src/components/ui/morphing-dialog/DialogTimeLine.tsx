'use client';
import { PlusIcon, ChevronUp } from 'lucide-react';
import carousel3 from '@/images/home/timeLine/Logo_182.jpg';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export interface TimelineEntry {
  title: string; // Cambiado a string | undefined si es necesario
  subtitle?: string;
  name: string;
  content: React.ReactNode;
  img?: { src: string; alt: string }[];
  img_toggle?: boolean;
  tile?: undefined;
}

export function DialogTimeLine({ trans }: { trans: [string, string | Record<string, any | Record<string, any>>] }) {
  return (
    <div className="container mx-auto my-10 flex w-full flex-col px-10">
      <div className="flex flex-col items-center gap-5 pb-20 text-zinc-950 md:text-center xl:text-center">
        <h1 className="text-center text-4xl font-bold">{trans.timeline_preview.title}</h1>
        <p className="text-lg">{trans.timeline_preview.description}</p>
        <div className="flex h-auto w-full flex-col items-center justify-center gap-5 pb-20">
          <img
            loading="eager"
            src={trans.horizontal_scroll.bar.img.src}
            alt={trans.horizontal_scroll.bar.img.alt}
            className="size-50 rounded-full md:size-50 xl:size-60"
            width="1000"
            height="1000"
          />

          <h1 className="w-1/2 text-center text-2xl font-bold capitalize lg:text-3xl xl:text-4xl">
            {trans.horizontal_scroll.bar.title}
          </h1>

          <p className="text-center text-lg">
            {trans.horizontal_scroll.bar.description.map((description: string, index: number) => (
              <span key={index}>{description}</span>
            ))}
          </p>

          <img
            loading="eager"
            src={trans.horizontal_scroll.bar.banner.src}
            alt={trans.horizontal_scroll.bar.banner.alt}
            className="size-90 rounded-2xl xl:size-130"
            width="1000"
            height="1000"
          />
        </div>
        <img src={carousel3.src} alt="" className="size-50 rounded-full object-cover" />
        <h2 className="text-center text-4xl font-bold">{trans.timeline_preview.title_two}</h2>
      </div>

      <Accordion
        className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700"
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        {trans.timeline_items.map((item, index) => (
          <AccordionItem key={index} value={`porsperi-${index}`} className="py-2">
            <AccordionTrigger className="w-full text-left text-zinc-950">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-2 text-base md:text-lg lg:text-xl xl:text-2xl">
                  <h1> {item.title}</h1>
                  <h2 className="font-bold text-zinc-700">{item.subtitle}</h2>
                </div>
                <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-center justify-center gap-5 py-4 md:flex-row md:items-start xl:flex-row xl:items-start">
                {item.img.length && (
                  <Carousel className="w-full max-w-xs md:px-5 xl:px-5">
                    <CarouselContent>
                      {item.img.map((img, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <img
                              src={img.src}
                              alt={item.title}
                              className="size-90 rounded-lg object-cover xl:size-70"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-10 disabled:!opacity-1 md:left-7 lg:left-7 xl:left-7" />
                    <CarouselNext className="-right105 disabled:!opacity-1 md:right-7 lg:right-7 xl:right-7" />
                  </Carousel>
                )}

                <p className="text-base text-zinc-700 md:text-lg lg:text-lg xl:text-lg">
                  {item.content}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* <div className="container mx-auto my-10 flex w-full flex-row justify-end px-10">
        <a href="https://fqp.vercel.app#timeline" target="_blank" rel="noopener noreferrer">
          ver más
        </a>
      </div> */}

      {/* <Accordion
        className="flex w-full flex-col divide-y divide-zinc-700"
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <AccordionItem value="getting-started" className="py-2">
          <AccordionTrigger className="w-full border-b border-zinc-200 p-1 text-left text-zinc-950">
            <DialogTriggerContent trans={trans} />
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col items-center justify-between px-5 py-3"></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </div>
  );
}
