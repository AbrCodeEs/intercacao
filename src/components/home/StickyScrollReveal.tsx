'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, motion } from 'motion/react';
import { cn } from '@/lib/cn';
import { Atom } from 'lucide-react';

interface StickyScrollProps {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    url: string | boolean;
    icon: string;
  }[];
  contentClassName?: string;
}

const panelVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
      when: 'beforeChildren',
    },
  },
};

const buttonVariants = {
  closed: {
    scale: 0,
    opacity: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  open: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

export const StickyScroll = ({ content, contentClassName }: StickyScrollProps) => {
  const [activeCard, setActiveCard] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardLength = content.length;
  const [isContainerVisible, setIsContainerVisible] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const backgroundColors = [
    '#ffffff',
    '#ccd5ae',
    '#e9edc9',
    '#fefae0',
    '#faedcd',
    '#f1dbb7',
  ];

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    if (!containerRef.current) return;

    observer.current = new IntersectionObserver(
      ([entry]) => {
        setIsContainerVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.current.observe(containerRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const safeLatest = Math.max(0, Math.min(1, latest));
    const cardsBreakpoints = content.map((_, index) => index / cardLength);

    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(safeLatest - breakpoint);
      return distance < Math.abs(safeLatest - cardsBreakpoints[acc]) ? index : acc;
    }, 0);

    setActiveCard(Math.min(closestBreakpointIndex, content.length - 1));
  });

  const handleScrollTo = (index: number) => {
    const element = document.getElementById(`card-${index}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveCard(index);
    setIsPanelOpen(false);
  };

  return (
    <motion.div
      ref={containerRef}
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-full justify-center space-x-10 rounded-3xl py-10"
    >
      <div className="relative container m-auto flex h-full items-stretch justify-stretch space-x-10 px-10 md:px-5 lg:px-5 xl:px-5">
        <div
          className={cn(
            'sticky top-10 hidden h-[90vh] w-full overflow-hidden rounded-md md:w-2/5 lg:block lg:w-2/5 xl:w-2/5',
            contentClassName,
          )}
          style={{
            backgroundColor: backgroundColors[(activeCard + 1) % backgroundColors.length],
          }}
        >
          {content[activeCard]?.content || content[activeCard]?.description}
        </div>

        <div className="relative flex w-full grow items-start md:w-2/5 lg:w-2/5 xl:w-2/5">
          <div className="w-full">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                id={`card-${index}`}
                className="flex h-full flex-col items-start justify-center gap-10 py-10 md:h-[90vh] md:py-0 lg:h-[90vh] lg:py-0 xl:h-[90vh] xl:py-0"
              >
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-4xl font-medium text-zinc-800 md:text-4xl xl:text-5xl dark:text-zinc-100"
                >
                  {item.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="overflow-hidden rounded-lg text-lg text-zinc-600 md:hidden lg:hidden xl:hidden dark:text-zinc-300"
                >
                  {item.content}
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="relative text-lg text-zinc-600 dark:text-zinc-300"
                >
                  {item.description}
                </motion.p>
                {item.url && (
                  <motion.a
                    href={item.url as string}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                    className="mt-4 rounded-lg bg-zinc-100 px-4 py-2 text-lg text-zinc-600 transition-colors duration-300 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                  >
                    Ver más...
                  </motion.a>
                )}
              </div>
            ))}
            <div className="h-10" />
          </div>
        </div>

        <motion.div
          className={cn(
            'right-6 bottom-6 z-50 flex flex-col items-end gap-4',
            activeCard === content.length - 1 ? 'absolute' : 'fixed',
          )}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isContainerVisible ? 1 : 0,
            transition: { duration: 0.3 },
          }}
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <motion.div
            className="flex flex-col gap-3"
            variants={panelVariants}
            initial="closed"
            animate={isPanelOpen ? 'open' : 'closed'}
          >
            {content.map((item, index) => (
              <motion.button
                key={index}
                variants={buttonVariants}
                className={`flex h-12 w-12 items-center justify-center rounded-full shadow-xl backdrop-blur-md transition-colors ${
                  activeCard === index ? 'ring-2 ring-white/80' : ''
                }`}
                style={{
                  backgroundColor: `${backgroundColors[(index + 1) % backgroundColors.length]}CC`,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => handleScrollTo(index)}
              >
                <span className="text-sm font-medium text-white/90">
                  {item.icon.split('/').length > 1 ? (
                    <img
                      className="size-5"
                      src={item.icon}
                      alt={item.title}
                      loading="eager"
                    />
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
                </span>
              </motion.button>
            ))}
          </motion.div>

          <motion.button
            className={`flex items-center justify-center rounded-full bg-black/20 p-3 shadow-xl backdrop-blur-md transition-colors hover:bg-black/30`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPanelOpen(!isPanelOpen)}
          >
            <Atom
              className={`h-6 w-6 text-white/90 transition-transform ease-in-out ${
                isPanelOpen ? 'rotate-45' : ''
              }`}
              strokeWidth={2.5}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};