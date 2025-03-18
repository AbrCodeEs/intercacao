'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

export const FilterPanel = ({ isOpen, items, selectedValue, onSelect }: FilterPanelProps) => (
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
              onClick={() => onSelect(item.value)}
            >
              <motion.button
                onClick={() => onSelect(item.value)}
                className={cn(
                  'h-10 w-10 rounded-full p-2 flex items-center justify-center',
                  item.className,
                  selectedValue === item.value && 'ring-2 ring-black',
                )}
                // initial={{ scale: 0, y: 20 }}
                // animate={{ scale: 1, y: 0 }}
                // exit={{ scale: 0, y: 20 }}
                transition={{ type: 'spring', delay: index * 0.1 }}
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
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
