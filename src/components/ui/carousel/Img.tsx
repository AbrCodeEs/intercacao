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
    <Carousel {...props} className="overflow-hidden md:rounded-lg lg:rounded-lg xl:rounded-lg">
      <CarouselContent
        classNameWrapper="w-full xl:overflow-hidden lg:overflow-hidden md:overflow-hidden overflow-visible"
        className="-ml-0 w-full"
      >
        {images?.map((image, index) => (
          <CarouselItem
            key={index}
            className="basis-120 pl-0 md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
          >
            <div className="flex aspect-square items-center justify-center">
              <img
                src={image.src}
                alt={image.alt}
                loading="eager"
                className="aspect-[4/5] object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5 disabled:!opacity-1 md:left-5 lg:left-10 xl:left-10" />
      <CarouselNext className="right-5 disabled:!opacity-1 md:right-5 lg:right-10 xl:right-10" />
    </Carousel>
  );
}
