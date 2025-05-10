'use client';

import { useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useChocolateFilters } from '@/hooks/useChocolateFilters';
import { ChocolateCard } from '@/components/home/ChocolateCard';
import { IconsSortOption } from '@/components/home/FilterElements';
import { FilterControls } from '@/components/home/FilterControls';
import { FloatingControls } from '@/components/home/FloatingControls';
import { ImagePreloader } from '@/components/home/ImagePreloader';
import { useContainerPosition } from '@/hooks/useContainerPosition';
import { useSectionVisibility } from '@/hooks/useSectionVisibility';
import { useFilteredChocolates } from '@/hooks/useFilteredChocolates';
import worldMap from '@/images/global/mapa_mundo.webp';

export function ChocolateGallery({
  lang,
  trans,
}: {
  lang: 'es' | 'eng';
  trans: Record<string, any>;
}) {
  const {
    sortBy,
    selectedFlavor,
    isFlavorPanelOpen,
    isTypePanelOpen,
    togglePanel,
    handleSortSelect,
    handleFlavorSelect,
  } = useChocolateFilters();

  const { containerRef, sentinelRef, absolutePosition, isContainerEndVisible } =
    useContainerPosition();
  const flavorsSectionRef = useRef<HTMLDivElement>(null);

  const { isFlavorSectionInView, isContainerInView } = useSectionVisibility(
    flavorsSectionRef,
    containerRef,
  );

  const filteredChocolates = useFilteredChocolates(lang, sortBy, selectedFlavor);

  // Extraer URLs de imágenes para precarga
  const imageUrls = useMemo(() => {
    const urls = new Set<string>();

    // Agregar mapa del mundo
    if (worldMap && typeof worldMap === 'object' && 'src' in worldMap) {
      urls.add(worldMap.src);
    }

    // Agregar imágenes de chocolates
    filteredChocolates.forEach((chocolate) => {
      if (chocolate.image) {
        const imageUrl =
          typeof chocolate.image === 'string' ? chocolate.image : chocolate.image.src;
        if (imageUrl) urls.add(imageUrl);
      }
      if (chocolate.flavorIcon) {
        const iconUrl =
          typeof chocolate.flavorIcon === 'string'
            ? chocolate.flavorIcon
            : chocolate.flavorIcon.src;
        if (iconUrl) urls.add(iconUrl);
      }
    });

    return Array.from(urls).filter((url) => url && url.startsWith('/'));
  }, [filteredChocolates]);

  // Pasar las URLs al BaseHead a través de un atributo data
  useEffect(() => {
    const head = document.head;
    const preloadMeta = document.createElement('meta');
    preloadMeta.setAttribute('name', 'preload-images');
    preloadMeta.setAttribute('content', JSON.stringify(imageUrls));
    head.appendChild(preloadMeta);

    return () => {
      head.removeChild(preloadMeta);
    };
  }, [imageUrls]);

  return (
    <>
      <ImagePreloader images={imageUrls} />
      <div className="relative p-5" ref={containerRef}>
        <FilterControls
          trans={trans}
          sortBy={sortBy}
          selectedFlavor={selectedFlavor}
          handleSortSelect={handleSortSelect}
          handleFlavorSelect={handleFlavorSelect}
          flavorsSectionRef={flavorsSectionRef}
        />
        <div>
          <div
            ref={sentinelRef}
            className="pointer-events-none absolute bottom-[-1px] left-0 h-1 w-full"
          />

          <motion.div
            className="mb-0 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-3 xl:gap-4"
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
                    lang={lang}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          <FloatingControls
            isContainerEndVisible={isContainerEndVisible}
            absolutePosition={absolutePosition}
            isFlavorPanelOpen={isFlavorPanelOpen}
            isTypePanelOpen={isTypePanelOpen}
            togglePanel={togglePanel}
            flavorItems={trans.world_of_flavors.flavors.map((flavor: any) => ({
              value: flavor.value,
              icon: <img src={flavor.iconWhite} className="size-5" alt={flavor.label} />,
              className: flavor.className,
            }))}
            typeItems={trans.world_of_flavors.types_options.map((type: any) => ({
              value: type.value,
              icon: IconsSortOption[type.key],
              className: 'bg-gray-300 hover:bg-gray-500',
            }))}
            selectedFlavor={selectedFlavor}
            selectedType={sortBy}
            onFlavorSelect={handleFlavorSelect}
            onTypeSelect={handleSortSelect}
            isVisible={!isFlavorSectionInView && isContainerInView}
          />
        </div>
      </div>

      <div className="flex justify-center py-8">
        <a
          href="/pdf/Venezuelan Cocoa Beans Japanese clients presentation 2025 protected.pdf"
          download
          className="rounded-lg bg-neutral-800 px-4 py-2 text-base font-semibold text-white transition-all hover:bg-neutral-700"
        >
          Cocoa presentation 
        </a>
      </div>

      <div className="relative flex h-auto w-full flex-col items-center justify-center gap-5 py-15">
        <img
          src={worldMap.src}
          alt="Intercacao banner principal"
          className="w-full object-fill object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="block w-full rounded-lg p-2 text-center text-2xl font-bold text-gray-200 capitalize backdrop-blur-[3px] md:w-1/2 lg:w-1/2 lg:text-3xl xl:w-1/2 xl:text-4xl">
            {trans.title}
          </h1>
        </div>
      </div>
    </>
  );
}
