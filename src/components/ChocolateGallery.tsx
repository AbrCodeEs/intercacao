'use client';

import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useChocolateFilters } from '@/hooks/useChocolateFilters';
import { FilterPanel } from '@/components/FilterPanel';
import { ChocolateCard } from '@/components/ChocolateCard';
import { IconsSortOption, ListItem, type FilterOption } from '@/components/FilterElements';
import { FilterControls } from '@/components/FilterControls';
import { FloatingControls } from '@/components/FloatingControls';

import { useContainerPosition } from '@/hooks/useContainerPosition';
import { useSectionVisibility } from '@/hooks/useSectionVisibility';
import { useFilteredChocolates } from '@/hooks/useFilteredChocolates';

export function ChocolateGallery({ lang, trans }: { lang: string; trans: Record<string, any> }) {
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

  return (
    <>
      <div className="p-5" ref={containerRef}>
        <FilterControls
          trans={trans}
          sortBy={sortBy}
          selectedFlavor={selectedFlavor}
          handleSortSelect={handleSortSelect}
          handleFlavorSelect={handleFlavorSelect}
          flavorsSectionRef={flavorsSectionRef}
        />

        <div className="relative overflow-hidden">
          <div
            ref={sentinelRef}
            className="pointer-events-none absolute bottom-[-1px] left-0 h-1 w-full"
          />

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
            isVisible={!isFlavorSectionInView && !isFlavorSectionInView && isContainerInView}
          />

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
        </div>
      </div>

      <div className="h-100 w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white w-1/2 text-center capitalize">Más de un siglo cultivando y exportando el mejor cacao fino de aroma del mundo.</h1>
      </div>
    </>
  );
}
