'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

interface TimelineEntry {
  title: string;
  subtitle?: string;
  name?: string;
  content?: React.ReactNode;
  img?: Array<{ src: string; alt: string }>;
}

interface TimelineProps {
  data: TimelineEntry[];
  onActiveIndexChange?: (index: number) => void;
}

export const Timeline = ({ data, onActiveIndexChange }: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastVisibleIndex = useRef(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // offset: ['start 10%', 'end 50%'],
    offset: ['end end', 'start start'],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, timelineRef.current?.offsetHeight || 0],
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));

          if (entry.isIntersecting) {
            // Solo actualiza si el índice es diferente al último visible
            if (index !== lastVisibleIndex.current) {
              onActiveIndexChange?.(index);
              lastVisibleIndex.current = index;
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.8,
      },
    );

    entryRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute('data-index', index.toString());
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, [data, onActiveIndexChange]);

  return (
    <div className="w-full overflow-auto bg-white font-sans md:px-10" ref={containerRef}>
      <motion.div ref={timelineRef} viewport={{ once: true }} className="relative w-full">
        {data.map((entry, index) => (
          <motion.div
            key={`${entry.title}-${index}`}
            ref={(el) => (entryRefs.current[index] = el)}
            className="flex justify-start md:gap-10"
          >
            {/* Left Column */}
            <div className="sticky top-0 z-40 flex flex-col items-center self-start md:flex-row lg:w-1/3 xl:w-1/3">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3">
                <div className="bg-primary h-4 w-4 rounded-full border border-neutral-300 p-2" />
              </div>
              <div className="flex flex-col">
                <h3 className="hidden text-xl text-neutral-500 md:block md:pl-20 md:text-4xl">
                  {entry.title}
                </h3>
                <h2 className="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-5xl">
                  {entry.subtitle}
                </h2>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative w-full pr-4 pl-20 md:pl-4 lg:w-2/3 xl:w-2/3">
              <MobileTitle title={entry.title} />
              <TimelineContent entry={entry} />
            </div>
          </motion.div>
        ))}

        <TimelineLine heightTransform={heightTransform} opacityTransform={opacityTransform} />
      </motion.div>
    </div>
  );
};

const MobileTitle = ({ title }: { title: string }) => (
  <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden">{title}</h3>
);

const TimelineContent = ({ entry }: { entry: TimelineEntry }) => (
  <motion.div>
    {entry.img && entry.img.length > 0 && (
      <Carousel className="overflow-hidden md:rounded-lg lg:rounded-lg xl:rounded-lg">
        <CarouselContent className="-ml-0 w-full">
          {entry.img.map((image, imgIndex) => (
            <CarouselItem
              key={imgIndex}
              className="basis-70 pl-0 md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
            >
              <div className="mr-2 flex aspect-square items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="eager"
                  className="aspect-[4/5] overflow-hidden rounded-lg object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-5 md:left-5 lg:left-10 xl:left-10" />
        <CarouselNext className="right-5 md:right-5 lg:right-10 xl:right-10" />
      </Carousel>
    )}
    <p className="my-5 text-lg font-normal text-neutral-800">{entry.content}</p>
  </motion.div>
);

const TimelineLine = ({
  heightTransform,
  opacityTransform,
}: {
  heightTransform: any;
  opacityTransform: any;
}) => (
  <div
    style={{ height: '100%' }}
    className="bg-primary absolute top-0 left-8 w-[2px] overflow-hidden md:left-8"
  >
    <motion.div
      style={{ height: heightTransform, opacity: opacityTransform }}
      className="bg-primary absolute inset-x-0 top-0 w-[2px] rounded-full"
    />
  </div>
);
