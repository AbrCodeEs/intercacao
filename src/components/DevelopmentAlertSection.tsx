'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

export const DevelopmentAlertSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="relative mb-6 overflow-hidden border-2 border-yellow-500">
      <div className="flex h-[50vh] items-center justify-center gap-4 p-6">
        <div className="flex flex-1 flex-col items-center justify-center">
          <h3 className="mb-2 text-3xl font-semibold text-yellow-800">
            Nuevo contenido en desarrollo
          </h3>
          <p className="text-lg text-yellow-700">
            Esta sección está siendo activamente desarrollada y puede contener cambios frecuentes.
          </p>
        </div>
      </div>
    </div>
  );
};
