'use client';

import React, { useRef, useState, useEffect } from 'react';
import { TransitionPanel } from '@/components/ui/transition-panel';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { motion, AnimatePresence, useInView } from 'motion/react';
import logoFundacionProsperi from '@/images/global/logo-fundacion-prosperi.webp';

import { cn } from '@/lib/cn';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { DialogTimeLine } from '@/components/ui/morphing-dialog/DialogTimeLine';
import HorizontalScrollSection from '@/components/ui/carousel/HorizontalScrollSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
        <div className="flex h-full w-full flex-col gap-10 px-10 pt-20 md:container md:px-20 lg:container lg:px-10 xl:container xl:px-10">
          <div className="h-full">
            <div className="py-2">
              <div className="flex items-center justify-center">
                <img
                  src={logoFundacionProsperi.src}
                  alt="Fundacion Prosperi"
                  className="w-100 pb-3"
                />
              </div>
              <p className="xl:text-center md:text-center text-lg">{trans.description}</p>
            </div>
          </div>
        </div>

        <DialogTimeLine trans={trans} />

        <HorizontalScrollSection trans={trans.horizontal_scroll} />
      </>
    </>
  );
}
