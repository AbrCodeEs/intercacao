'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Menu } from 'lucide-react';

export const FilterButtons = ({
  isVisible,
  onFlavorClick,
  onTypeClick,
}: {
  isVisible: boolean;
  onFlavorClick: () => void;
  onTypeClick: () => void;
}) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        layout
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: 'spring', stiffness: 500, damping: 50 }}
      >
        <div className="flex flex-col gap-2">
          <motion.button
            onClick={onFlavorClick}
            className="bg-cocoa-dark flex h-11 w-11 items-center justify-center rounded-full p-2 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/icons/ms.png" alt="" />
          </motion.button>

          <motion.button
            onClick={onTypeClick}
            className="bg-cocoa-dark flex h-11 w-11 items-center justify-center rounded-full p-2 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/icons/bt.png" alt="" />
          </motion.button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
