'use client';

import React, { useRef, useState, useEffect } from 'react';
import { TransitionPanel } from '@/components/ui/transition-panel';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { motion, AnimatePresence, useInView } from 'motion/react';
import logoFundacionProsperi from '@/images/global/logo-fundacion-prosperi.webp';

import { cn } from '@/assets/lib/utils';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { DialogTimeLine } from '@/components/ui/morphing-dialog/DialogTimeLine';

interface TabsTransitionPanelProps {
  trans: [string, string];
  items: { title: string; icon: string; images: { src: string; alt: string }[] }[];
}

export function TabsTransitionPanel({ trans, items }: TabsTransitionPanelProps) {
  const [activeIndex, setActiveIndex] = useState(items.length - 1);
  const [isPanelVisible, setIsPanelVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const hasInitialDisplay = useRef(false); // Nuevo ref para controlar la visualización inicial
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Detectar visibilidad del carrusel con Framer Motion
  const isCarouselInView = useInView(carouselRef, {
    margin: '0px 0px -50px 0px',
    amount: 'some',
  });

  const isContainerEndVisible = useInView(sentinelRef, {
    margin: '0px 0px -50px 0px',
    amount: 'some',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, bottom } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isFullyHidden = top > viewportHeight || bottom < 0;

      const shouldShowButton = isCarouselInView && !isFullyHidden;
      setIsButtonVisible(shouldShowButton);

      if (shouldShowButton) {
        if (!hasInitialDisplay.current) {
          // Mostrar panel solo en la primera aparición del botón
          setIsPanelVisible(true);
          hasInitialDisplay.current = true;
        }
      } else {
        // Ocultar ambos elementos al hacer scroll
        setIsPanelVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCarouselInView]);

  return (
    <>
      <>
        <div className="flex h-full w-full flex-col gap-10 px-10 py-20 md:container md:px-20 lg:container lg:px-10 xl:container xl:px-10">
          <div className="h-full">
            <div className="py-2">
              {/* <h1 className="py-2 text-4xl font-bold text-neutral-600 uppercase">
                {trans.title}
              </h1> */}
              <img
                src={logoFundacionProsperi.src}
                alt="Fundacion Prosperi"
                className="w-100 pb-3"
              />
              <p className="text-lg">{trans.description}</p>
            </div>
          </div>
        </div>

        <DialogTimeLine />

        <motion.div ref={containerRef} className="relative overflow-hidden">
          <motion.div ref={carouselRef}>
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
                {items.map((item, index) => (
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

            {isButtonVisible && (
              <motion.button
                onClick={() => setIsPanelVisible(!isPanelVisible)}
                className={cn("bg-primary right-4.5 bottom-4 z-50 flex items-center justify-center rounded-full p-4 text-white shadow-lg", isContainerEndVisible ? 'absolute' : 'fixed')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            )}

            <AnimatePresence>
              {isPanelVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={cn("right-5.5 bottom-20 z-40 flex flex-col items-center gap-2", isContainerEndVisible ? 'absolute' : 'fixed')}
                >
                  {items.map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);
                        setIsPanelVisible(false);
                      }}
                      initial={{ scale: 0, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0, y: 20 }}
                      transition={{ type: 'spring', delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-zinc-100"
                    >
                      {item.icon.split('/').length > 1 ? (
                        <img className="size-5" src={item.icon} alt={item.title} />
                      ) : (
                        <span
                          className={cn(
                            'p-1',
                            item.icon == 'R' && 'text-yellow-500',
                            item.icon == 'M' && 'text-blue-500',
                            item.icon == 'D' && 'text-red-500',
                          )}
                        >
                          {item.icon}
                        </span>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div className="mx-auto flex flex-col items-center justify-between gap-10 py-10 md:container lg:container xl:container">
              <motion.div className="relative w-full grow overflow-hidden">
                <TransitionPanel
                  activeIndex={activeIndex}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  variants={{
                    enter: { opacity: 0, y: 50, filter: 'blur(4px)' },
                    center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                  }}
                >
                  {items.map((item, index) => (
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
          </motion.div>
          <div
            ref={sentinelRef}
            className="pointer-events-none absolute bottom-[-1px] left-0 h-1 w-full"
          />
        </motion.div>
      </>
    </>
  );
}
