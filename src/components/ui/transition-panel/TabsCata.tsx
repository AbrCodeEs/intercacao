'use client';
import React, { useEffect, useState } from 'react';
import { TransitionPanel } from '@/components/ui/transition-panel';
import useMeasure from 'react-use-measure';
import { Progress } from '@/components/ui/progress';

interface Flavor {
  name: string;
  percentage: string;
  progress: number;
  icon: {
    src: string;
    alt: string;
  };
  className: string;
  description: string;
  color: string;
}

interface CataData {
  date: string;
  flavors: Flavor[];
}

interface TabsCataProps {
  catas: CataData[];
}

function Button({
  onClick,
  children,
  isLastCata = false,
}: {
  onClick: () => void;
  children: React.ReactNode;
  isLastCata?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`relative flex h-8 shrink-0 scale-100 appearance-none items-center justify-center rounded-lg border px-2 text-sm transition-colors select-none focus-visible:ring-2 active:scale-[0.98] ${
        isLastCata
          ? 'cursor-not-allowed border-zinc-300 bg-zinc-100 text-zinc-400'
          : 'border-zinc-950/10 bg-transparent text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800'
      }`}
    >
      {children}
    </button>
  );
}

export function TabsCata({ catas }: TabsCataProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, bounds] = useMeasure();

  const handleSetActiveIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
    if (activeIndex >= catas.length) setActiveIndex(catas.length - 1);
  }, [activeIndex, catas.length]);

  return (
    <div className="w-full overflow-hidden">
      <TransitionPanel
        activeIndex={activeIndex}
        variants={{
          enter: (direction) => ({
            x: direction > 0 ? bounds.width : -bounds.width,
            opacity: 0,
            height: bounds.height > 0 ? bounds.height : 'auto',
            position: 'initial',
          }),
          center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            height: bounds.height > 0 ? bounds.height : 'auto',
          },
          exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? bounds.width : -bounds.width,
            opacity: 0,
            position: 'absolute',
            top: 0,
            width: '100%',
          }),
        }}
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        custom={direction}
      >
        {catas.map((cata, index) => (
          <div key={index} className="px-4 pt-4" ref={ref}>
            <h3 className="mb-4 font-bold text-zinc-800 uppercase">Cata del {cata.date}</h3>
            <div className="flex w-full flex-col gap-4">
              {cata.flavors.map((flavor, flavorIndex) => (
                <div key={flavorIndex} className="flex w-full flex-col justify-between gap-1">
                  <Progress
                    className={`border-l-12 border-l-${flavor.color} ${flavor.className}`}
                    value={flavor.progress}
                  >
                    <div className="flex h-full flex-row items-center justify-between px-5 text-white">
                      <div className="flex items-center gap-3">
                        <img
                          src={flavor.icon.src}
                          alt={flavor.icon.alt}
                          className="h-8 w-8"
                          loading="lazy"
                        />
                        <span className="uppercase">{flavor.name}</span>
                      </div>
                      <span>{flavor.percentage}</span>
                    </div>
                  </Progress>
                  <p className="text-lg">{flavor.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </TransitionPanel>
      <div className="flex justify-between p-4">
        {activeIndex > 0 ? (
          <Button onClick={() => handleSetActiveIndex(activeIndex - 1)}>Cata más reciente</Button>
        ) : (
          <div />
        )}
        <Button
          onClick={() =>
            activeIndex === catas.length - 1 ? null : handleSetActiveIndex(activeIndex + 1)
          }
          isLastCata={activeIndex === catas.length - 1}
        >
          {activeIndex === catas.length - 1 ? 'Cata más antigua' : 'Cata anterior'}
        </Button>
      </div>
    </div>
  );
}
