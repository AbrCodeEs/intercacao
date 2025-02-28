'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

export function CarouselImages({ images, ...props }: { images: { src: string; alt: string }[] }) {
  return (
    <Carousel {...props} className="mx-12">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="overflow-hidden rounded-lg">
            <div className="overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="transform rounded-lg object-fill object-center transition-all duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="disabled:!opacity-1" />
      <CarouselNext className="disabled:!opacity-1" />
    </Carousel>
  );
}
