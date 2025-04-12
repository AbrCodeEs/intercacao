'use client';

import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/cn';

type FilterPanelProps = {
  isOpen: boolean;
  items: Array<{
    value: string;
    icon: React.ReactNode;
    className?: string;
  }>;
  selectedValue: string | null;
  onSelect: (value: string) => void;
};

export const FilterPanel = ({ isOpen, items, selectedValue, onSelect }: FilterPanelProps) => {
  // Función de manejo de clic mejorada
  const handleSelect = (value: string) => {
    onSelect(value);
  };

  return (
    <motion.div
      className="flex flex-col items-end gap-2"
      layout="position" // Animación suave de posición
    >
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="panel-content"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 25,
                mass: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.95,
              transition: {
                duration: 0.15,
                ease: 'easeInOut',
              },
            }}
            className="flex flex-col gap-2"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400 }}
                onClick={() => handleSelect(item.value)}
              >
                <motion.button
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full p-2',
                    item.className,
                    selectedValue === item.value && 'ring-2 ring-black',
                  )}
                >
                  {item.icon}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
