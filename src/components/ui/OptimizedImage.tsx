'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/cn';
import { motion, AnimatePresence } from 'motion/react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  quality?: number;
  placeholder?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  width,
  height,
  quality = 75,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWUiLz48L3N2Zz4='
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder);

  useEffect(() => {
    if (priority) {
      setImageSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px 0px',
        threshold: 0.1
      }
    );

    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (isInView) {
        setImageSrc(src);
      }
    };

    const currentImg = document.querySelector(`[data-src="${src}"]`);
    if (currentImg) {
      observer.observe(currentImg);
    }

    return () => observer.disconnect();
  }, [src, priority, isInView]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        data-src={src}
        className={cn(
          'transition-all duration-500',
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        )}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
} 