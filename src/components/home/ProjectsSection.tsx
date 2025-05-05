'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from '@/components/ui/carousel/carousel';
import { StickyScroll } from '@/components/home/StickyScrollReveal';
import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

// Función para precargar imágenes
const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Función para verificar si una imagen está en caché
const isImageCached = async (src: string): Promise<boolean> => {
  try {
    const cache = await caches.open('images-cache-v1');
    const response = await cache.match(src);
    return !!response;
  } catch (error) {
    return false;
  }
};

const ImageWithPlaceholder = ({ src, alt }: ImageProps) => {
  const [retryCount, setRetryCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isCached, setIsCached] = useState(false);
  const maxRetries = 3;

  const loadImage = useCallback(async () => {
    try {
      setIsLoading(true);
      const cached = await isImageCached(src);
      setIsCached(cached);

      if (cached) {
        setIsLoading(false);
        return;
      }

      await preloadImage(src);
      setIsLoading(false);
    } catch (error) {
      if (retryCount < maxRetries) {
        setRetryCount(prev => prev + 1);
      }
    }
  }, [src, retryCount]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

  return (
    <div className="relative flex aspect-[4/5] items-center justify-center xl:min-h-[90vh]">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="flex flex-col items-center gap-2">
            <div className="border-t-primary h-8 w-8 animate-spin rounded-full border-4 border-gray-300"></div>
            <span className="text-sm text-gray-500">
              {isCached ? 'Cargando desde caché...' : 'Cargando imagen...'}
            </span>
          </div>
        </div>
      ) : (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="aspect-[4/5] object-cover xl:min-h-[90vh] rounded-lg"
          onError={() => {
            if (retryCount < maxRetries) {
              setRetryCount(prev => prev + 1);
            }
          }}
        />
      )}
    </div>
  );
};

export const ProjectsSection = ({ items }: { items: any[] }) => {
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  // Precargar las primeras 3 imágenes
  useEffect(() => {
    const preloadImages = async () => {
      const imagesToPreload = items
        .flatMap(item => item.images)
        .slice(0, 3)
        .map(img => img.src);

      try {
        await Promise.all(imagesToPreload.map(preloadImage));
        setPreloadedImages(new Set(imagesToPreload));
      } catch (error) {
        console.error('Error al precargar imágenes:', error);
      }
    };

    preloadImages();
  }, [items]);

  // Precargar imágenes adyacentes cuando cambia el proyecto activo
  const handleProjectChange = useCallback((index: number) => {
    const currentImages = items[index].images.map((img: any) => img.src);
    const nextImages = items[(index + 1) % items.length].images.map((img: any) => img.src);
    const prevImages = items[(index - 1 + items.length) % items.length].images.map((img: any) => img.src);

    const newVisibleImages = new Set([...currentImages, ...nextImages, ...prevImages]);
    setVisibleImages(newVisibleImages);

    // Precargar imágenes que aún no están precargadas
    const imagesToPreload = [...newVisibleImages].filter(src => !preloadedImages.has(src));
    if (imagesToPreload.length > 0) {
      Promise.all(imagesToPreload.map(preloadImage))
        .then(() => {
          setPreloadedImages(prev => new Set([...prev, ...imagesToPreload]));
        })
        .catch(error => console.error('Error al precargar imágenes:', error));
    }
  }, [items, preloadedImages]);

  const projects = items.map((item) => {
    return {
      title: item.title,
      description: item.content,
      url: item.url || false,
      icon: item.icon,
      content: (
        <Carousel initialIndex={0} className="xl:h-[90vh] lg:h-[90vh] md:h-[90vh] overflow-hidden h-full xl:min-h-[90vh] rounded-lg pb-10">
          <CarouselContent itemsPerPage={1} className="-ml-0 h-full w-full xl:min-h-[90vh]">
            {!!item.images.length &&
              item.images?.map((image: { src: string; alt: string }, index: number) => (
                <CarouselItem key={index} className="basis-full p-0 xl:min-h-[90vh]">
                  <ImageWithPlaceholder src={image.src} alt={image.alt} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselNavigation
              className="absolute top-1/2 md:top-1/2 xl:top-1/2"
              alwaysShow
            />
          <CarouselIndicator className="xl:-bottom-6.5 lg:-bottom-6.5 md:-bottom-6.5 bottom-0 px-15 xl:bottom-5" />
        </Carousel>
      ),
    };
  });

  return (
    <div className="min-h-[300vh] w-full">
      <StickyScroll content={projects} onProjectChange={handleProjectChange} />
    </div>
  );
};

export default ProjectsSection;
