'use client';

import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
}

export const ImagePreloader = ({ images = [] }: ImagePreloaderProps) => {
  useEffect(() => {
    if (!Array.isArray(images) || images.length === 0) {
      return;
    }

    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map((src) => {
            if (!src) return Promise.resolve();
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = reject;
              img.src = src;
            });
          }),
        );
      } catch (error) {
        console.warn('Error preloading images:', error);
      }
    };

    preloadImages();
  }, [images]);

  return null;
};
