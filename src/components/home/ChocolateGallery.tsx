'use client';

import { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useChocolateFilters } from '@/hooks/useChocolateFilters';
import { ChocolateCard } from '@/components/home/ChocolateCard';
import { IconsSortOption } from '@/components/home/FilterElements';
import { FilterControls } from '@/components/home/FilterControls';
import { FloatingControls } from '@/components/home/FloatingControls';

import { useContainerPosition } from '@/hooks/useContainerPosition';
import { useSectionVisibility } from '@/hooks/useSectionVisibility';
import { useFilteredChocolates } from '@/hooks/useFilteredChocolates';
import { WorldMap } from '@/components/ui/world-map';

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


      {/* <Gallery /> */}

      <div className="relative flex h-auto w-full flex-col items-center justify-center gap-5 py-15">
        {/* <WorldMap
          // dots={[
          //   {
          //     start: { lat: -10.4238, lng: -66.5897 },
          //     end: {
          //       lat: 34.0522,
          //       lng: -118.2437,
          //     }, // Los Angeles
          //   },
          //   {
          //     start: { lat: -10.4238, lng: -66.5897 },
          //     end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          //   },
          //   {
          //     start: { lat: -10.4238, lng: -66.5897 },
          //     end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          //   },
          //   {
          //     start: { lat: -10.4238, lng: -66.5897 },
          //     end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          //   },
          //   {
          //     start: { lat: -10.4238, lng: -66.5897 },
          //     end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          //   },
          //   {
          //     start: { lat: -10.4238, lng: -66.5897 },
          //     end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          //   },
          // ]}
        /> */}
        {/* absolute inset-0  */}
        <div className="flex items-center justify-center">
          {/* bg-black/50 */}
          <h1 className="block w-1/2 rounded-lg p-2 text-center text-2xl font-bold text-gray-200 capitalize backdrop-blur-[3px] lg:text-3xl xl:text-4xl">
            {trans.title}
          </h1>
        </div>
      </div>
    </>
  );
}

function Gallery() {
  return (
    <div className="relative min-h-screen">
      {/* Grid Gallery */}
      <div  className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-3 xl:gap-4">
        {/* Ejemplo de 9 elementos - puedes reemplazar con tus imágenes/content */}
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="h-48 rounded-lg bg-gray-200 shadow-md transition-shadow hover:shadow-lg"
          >
            {i}
            {/* Contenido del grid item */}
            {/* <img src="..." className="w-full h-full object-cover rounded-lg" /> */}
          </div>
        ))}
      </div>

      {/* Sección Sticky */}
      <div className="sticky right-4 bottom-4 z-50 flex justify-end">
        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-xl">
          <button className="rounded-md bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600">
            Botón Sticky
          </button>
        </div>
      </div>
    </div>
  );
}
