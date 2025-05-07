'use client';

import { useEffect } from 'react';
import { chocolateBars } from '@/data/home/cocoa';

export function ImagePreloader() {
  useEffect(() => {
    // Preload images for the first 4 chocolates (most important ones)
    const importantImages = chocolateBars.slice(0, 4).map(chocolate => chocolate.image);
    
    importantImages.forEach(imageUrl => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);

  return null; // Este componente no renderiza nada visualmente
} 