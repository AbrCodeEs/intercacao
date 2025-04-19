'use client';

import { motion, AnimatePresence } from 'motion/react';
import { FilterButtons } from '@/components/home/FilterButtons';
import { FilterPanel } from '@/components/home/FilterPanel';

type FloatingControlsProps = {
  isContainerEndVisible: boolean;
  absolutePosition: { bottom: number; right: number };
  isFlavorPanelOpen: boolean;
  isTypePanelOpen: boolean;
  setIsFlavorPanelOpen: (open: boolean) => void;
  setIsTypePanelOpen: (open: boolean) => void;
  flavorItems: Array<any>;
  typeItems: Array<any>;
  selectedFlavor: string | null;
  selectedType: string | null;
  onFlavorSelect: (value: string) => void;
  onTypeSelect: (value: string) => void;
  isVisible: boolean;
  togglePanel: (panelType: 'flavor' | 'type') => void;
};

export const FloatingControls = ({
  isContainerEndVisible,
  isFlavorPanelOpen,
  isTypePanelOpen,
  togglePanel,
  flavorItems,
  typeItems,
  selectedFlavor,
  selectedType,
  onFlavorSelect,
  onTypeSelect,
  isVisible,
}: FloatingControlsProps) => {
  const isOpen = !isTypePanelOpen;
  return (
    <motion.div
      className="!z-[90]"
      style={{
        position: isContainerEndVisible ? 'absolute' : 'fixed',
        bottom: 'calc(var(--spacing) * 5)',
        right: isContainerEndVisible ? 'calc(var(--spacing) * 0)' : 'calc(var(--spacing) * 5)',
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        layout: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
      layout
    >
      <div className="flex flex-col items-end gap-4">
        <AnimatePresence mode="popLayout">
          {isVisible && (
            <motion.div
              key="controls-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.3 }}
            >
              <FilterPanel
                isOpen={isFlavorPanelOpen || isOpen}
                items={flavorItems}
                selectedValue={selectedFlavor}
                onSelect={onFlavorSelect}
              />

              <FilterPanel
                isOpen={isTypePanelOpen}
                items={typeItems}
                selectedValue={selectedType}
                onSelect={onTypeSelect}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <FilterButtons
          isVisible={isVisible}
          onFlavorClick={() => togglePanel('flavor')}
          onTypeClick={() => togglePanel('type')}
        />
      </div>
    </motion.div>
  );
};
