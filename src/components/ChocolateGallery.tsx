'use client';

import { cn } from '@/lib/utils';
import React, { useState, useEffect, useRef } from 'react';
import { chocolateBars } from '@/data/chocolateBars';
import { useIntersectionObserver } from '@uidotdev/usehooks';
// ... (imports previos se mantienen)
import { Filter } from 'lucide-react';

import { FloatingButtonPanel } from '@/components/ui/floating-button';
import { ChocolateCard } from '@/components/ChocolateCard';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import type {
  SortOption,
  FlavorOption,
  CountryOption,
  FilterOptionSortItems,
  FilterOptionFlavorItems,
} from '@/consts';

import { Sort } from '@/consts';
import { Star, Award, Trophy, Nut } from 'lucide-react';

import { motion, AnimatePresence, useInView, useScroll, useSpring } from 'framer-motion';

const IconsSortOption = {
  rated: <Star className="h-6 w-6 fill-current text-black" />,
  fermented: (
    <img
      src="/icons/fermentado.png"
      alt="fermentado"
      className="size-4 fill-current text-black md:size-5 lg:size-5 xl:size-5"
    />
  ),
  certified: <Award className="h-6 w-6 fill-current text-black" />,
  awarded: <Trophy className="h-6 w-6 fill-current text-black" />,
  creole: <Nut className="h-6 w-6 fill-current text-black" />,
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, children, ...props }, ref) => {
    return (
      <li className="border-b border-gray-400/50">
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block space-y-1 p-3 leading-none no-underline transition-colors outline-none select-none hover:text-black focus:text-black',
              className,
            )}
            {...props}
          >
            <p className="line-clamp-2 text-sm leading-snug">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);

ListItem.displayName = 'ListItem';

export function ChocolateGallery({ lang, trans }: { lang: string; trans: Record<string, any> }) {
  const FlavorsSortOption = trans.world_of_flavors.flavors;
  const TypesSortOption = trans.world_of_flavors.types_options;

  const [sortBy, setSortBy] = useState<SortOption | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorOption | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);

  // const [buttonPositions, setButtonPositions] = useState<Record<string, DOMRect>>({});
  const flavorsSectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isFlavorSectionVisible, setIsFlavorSectionVisible] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isContainerEndVisible, setIsContainerEndVisible] = useState(false);

  // 1. Configurar IntersectionObserver con parámetros optimizados
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Actualizar estado solo cuando cambia la visibilidad
        setIsContainerEndVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Se activa con al menos 10% visible
      }
    );

    const sentinel = sentinelRef.current;
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, []);

  // 2. Calcular posición del panel en modo absoluto
  const [absolutePosition, setAbsolutePosition] = useState({ bottom: 0, right: 0 });
  
  useEffect(() => {
    const calculatePosition = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollBottom = window.scrollY + window.innerHeight;
      
      setAbsolutePosition({
        bottom: scrollBottom - containerRect.bottom + 20,
        right: window.innerWidth - containerRect.right + 20
      });
    };

    // Actualizar posición en eventos relevantes
    window.addEventListener('scroll', calculatePosition);
    window.addEventListener('resize', calculatePosition);
    calculatePosition();

    return () => {
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, []);

  // ... otros estados
  const cocoaData = chocolateBars
    .map((cocoa) => {
      let url;

      if (cocoa.url === '/chuao') {
        url = `/${lang}${cocoa.url}`;
      } else {
        url = lang === 'en' ? `${cocoa.url}/${lang}` : `${cocoa.url}`;
      }

      return {
        ...cocoa,
        url: url,
      };
    })
    .filter((cocoa) => !cocoa.disabled);

  const filteredChocolates = cocoaData
    .filter((item) => {
      const flavorFilter =
        selectedFlavor && item.flavors.includes(selectedFlavor)
          ? item.ingredients[
              selectedFlavor.toLowerCase().replace(' ', '_') as keyof typeof item.ingredients
            ] > 0
          : true;

      const countryFilter = selectedCountry ? item.country === selectedCountry : true;

      const sortFilter = {
        [Sort.rated]: item.rating > 0,
        [Sort.fermented]: item.fermented > 0,
        [Sort.certified]: item.certified,
        [Sort.awarded]: item.awarded,
        [Sort.creole]: item.creole > 0,
      }[sortBy];

      return (flavorFilter && countryFilter && sortFilter) || true;
    })
    .sort((a, b) => {
      // Sorting by selected flavor if any
      if (selectedFlavor) {
        const flavorKey = selectedFlavor
          .toLowerCase()
          .replace(' ', '_') as keyof typeof a.ingredients;
        return b.ingredients[flavorKey] - a.ingredients[flavorKey];
      }

      // Default sorting by selected criteria
      return (
        sortBy &&
        {
          [Sort.rated]: b.rating - a.rating,
          [Sort.fermented]: b.fermented - a.fermented,
          [Sort.certified]: b.certified ? 1 : -1,
          [Sort.awarded]: b.awarded ? 1 : -1,
          [Sort.creole]: b.creole - a.creole,
        }[sortBy]
      );
    });

  const handleSortSelect = (sort: SortOption) => {
    setSortBy((current) => (current === sort ? null : sort));
    setSelectedFlavor(null);
    setSelectedCountry(null);
  };

  const handleFlavorSelect = (flavor: FlavorOption) => {
    setSelectedFlavor((current) => (current === flavor ? null : flavor));
    setSortBy(null);
    setSelectedCountry(null);
  };

  const isFlavorSectionInView = useInView(flavorsSectionRef, {
    margin: '0px 0px -50px 0px',
    amount: 'some',
  });

  const isContainerInView = useInView(containerRef, {
    margin: '0px 0px -50px 0px',
    amount: 'some',
  });
  // Configurar Intersection Observer
  const [sectionEntry] = useIntersectionObserver(flavorsSectionRef, {
    threshold: 0.1,
    rootMargin: '0px',
  });

  useEffect(() => {
    const isSectionVisible = sectionEntry?.isIntersecting ?? true;
    const shouldShow = !isSectionVisible && isContainerInView;
    
    setIsFlavorSectionVisible(isSectionVisible);
    setIsPanelOpen(shouldShow); // Forzar estado basado en condiciones
  
    // Ocultar si el contenedor no es visible
    if (!isContainerInView) {
      setIsPanelOpen(false);
    }
  }, [sectionEntry, isContainerInView]);
  

  return (
    <div className="p-5 relative" ref={containerRef}>
      <div className="space-y-4 py-5">
        <div className="hidden flex-col justify-center gap-10 p-3 md:flex lg:flex xl:flex">
          <h2 className="flex items-center gap-2 pb-5 text-center text-xl font-semibold text-white before:block before:h-px before:w-full before:border-t before:border-gray-100/20 before:content-[''] after:block after:h-px after:w-full after:border-t after:border-gray-100/20 after:content-['']">
            <span className="w-80">{trans.order_by}</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(TypesSortOption as FilterOptionSortItems[]).map(({ value, label, key }) => {
              return (
                <motion.div key={value} layoutId={`flavor-${value}`}>
                  <Button
                    key={value}
                    variant={sortBy === value ? 'default' : 'ghost'}
                    onClick={() => handleSortSelect(value as SortOption)}
                    size="sm"
                    className={
                      sortBy === value
                        ? 'bg-gray-500 text-black hover:bg-white/90'
                        : 'bg-gray-300 text-black hover:bg-gray-400'
                    }
                  >
                    {IconsSortOption[key]}
                    <span className="ml-2">{label.charAt(0).toUpperCase() + label.slice(1)}</span>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex-col justify-center gap-10 p-3 md:flex lg:flex xl:flex">
          <h2 className="flex items-center gap-2 pb-5 text-center text-xl font-semibold text-white before:block before:h-px before:w-full before:border-t before:border-gray-100/20 before:content-[''] after:block after:h-px after:w-full after:border-t after:border-gray-100/20 after:content-['']">
            <span className="w-110">{trans.filter_flavor}</span>
          </h2>

          <div className="flex flex-col justify-center gap-10 p-3 md:hidden lg:hidden xl:hidden">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="w-45">{trans.order_by}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid h-auto w-45 p-0 lg:grid-cols-1">
                        {(TypesSortOption as FilterOptionSortItems[]).map((option) => (
                          <ListItem
                            key={option.value}
                            onClick={() => handleSortSelect(option.value as SortOption)}
                            className={
                              sortBy === option.value
                                ? 'bg-gray-500 text-black shadow-none'
                                : 'bg-none text-black shadow-none'
                            }
                          >
                            <div className="flex items-center gap-5 p-2">
                              {IconsSortOption[option.key]}
                              <p>{option.label.charAt(0).toUpperCase() + option.label.slice(1)}</p>
                            </div>
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div ref={flavorsSectionRef} className="flex flex-wrap items-center justify-center gap-2">
            <AnimatePresence>
            {(FlavorsSortOption as FilterOptionFlavorItems[]).map((flavor) => (
              <motion.div
                key={flavor.value}
                layoutId={`flavor-${flavor.value}`} // Identificador único para la animación
              >
                <Button
                  data-value={flavor.value}
                  variant={selectedFlavor === flavor.value ? 'default' : 'ghost'}
                  onClick={() => handleFlavorSelect(flavor.value as FlavorOption)}
                  size="sm"
                  className={cn(
                    selectedFlavor === flavor.value ? `${flavor.className}` : `${flavor.className}`,
                  )}
                >
                  <img
                    className="size-4"
                    loading="eager"
                    src={flavor.iconWhite}
                    alt={flavor.label}
                  />
                  {flavor.label.charAt(0).toUpperCase() + flavor.label.slice(1)}
                </Button>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>
        </div>
    
      </div>

      {/* Sentinel para detectar el final del contenedor */}
      <div ref={sentinelRef} className="absolute bottom-[-1px] left-0 h-1 w-full pointer-events-none"/>

      {/* Panel flotante */}
      <motion.div 
         ref={panelRef} 
         className="z-[60]"
         style={{
           position: isContainerEndVisible ? 'absolute' : 'fixed',
           right: isContainerEndVisible ? 'calc(var(--spacing) * 6)' : 'calc(var(--spacing) * 5)',
           bottom: isContainerEndVisible ? 'calc(var(--spacing) * 25)' : 'calc(var(--spacing) * 20)', 
         }}
         transition={{ type: 'spring', stiffness: 200, damping: 25 }}>
        <motion.div className="flex flex-col items-end gap-2">
          <AnimatePresence>
            {isPanelOpen || (!isFlavorSectionInView && isContainerInView) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex flex-col gap-2"
              >
                {(FlavorsSortOption as FilterOptionFlavorItems[]).map((flavor) => (
                  <motion.div
                    key={flavor.value}
                    layoutId={`flavor-${flavor.value}`} // Mismo layoutId que en la sección original
                    transition={{ stiffness: 300, damping: 20 }}
                  >
                    <Button
                      onClick={() => {
                        handleFlavorSelect(flavor.value as FlavorOption);
                        // setIsPanelOpen(false);
                      }}
                      className={cn(
                        'h-10 w-10 rounded-full p-2',
                        flavor.className,
                        selectedFlavor === flavor.value && 'ring-2 ring-black',
                      )}
                    >
                      <img
                        src={flavor.iconWhite}
                        className="size-5"
                        alt={flavor.label}
                      />
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón del filtro */}
          {(!isFlavorSectionInView && isContainerInView) && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.button
                onClick={() => setIsPanelOpen(!isPanelOpen)}
                className="bg-cocoa-dark flex h-11 w-11 items-center justify-center rounded-full p-3 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Filter className="size-5 text-white" />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      <FloatingButtonPanel
        items={TypesSortOption.map((option) => ({
          icon: IconsSortOption[option.key],
          onClick: () => handleSortSelect(option.value as SortOption),
        }))}
        buttonClassName={`bg-cocoa-dark text-white ${isContainerEndVisible ? 'absolute right-0' : 'fixed'}`}
        panelClassName={`gap-4 ${isContainerEndVisible ? 'absolute' : 'fixed'}`}
        panelItemClassName=""
        panelVisible={false}
        buttonVisible={!isFlavorSectionInView}
        direction="left"
      >
        <motion.div
          className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-3 xl:gap-4"
          layout
        >
          <AnimatePresence initial={false}>
            {filteredChocolates.map((chocolate) => (
              <motion.div
                key={chocolate.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, type: 'spring' }}
              >
                <ChocolateCard
                  chocolate={chocolate}
                  sortBy={sortBy}
                  flavors={selectedFlavor}
                  trans={trans}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </FloatingButtonPanel>
    </div>
  );
}
