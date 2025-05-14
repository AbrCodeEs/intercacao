'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from '@/components/ui/carousel/carousel';

export function CarouselImages({ images, ...props }: { images: { src: string | ImageMetadata; alt: string, type?: "image" | "video"; title?: string | undefined; }[] }) {
  console.log(images)
  return (
    <Carousel
      {...props}
      initialIndex={0}
      className="h-full overflow-hidden rounded-lg pb-10 md:h-full lg:h-full xl:h-full xl:min-h-screen"
    >
      <CarouselContent itemsPerPage={1} className="relative -ml-0 h-full w-full xl:min-h-screen">
        {images?.map((image, index) => (
          <CarouselItem
            key={index}
            className="basis-full p-0 xl:min-h-[90vh]"
          >
            <div className='relative flex aspect-[4/5] items-stretch justify-between'>

              <img
                src={image.src.src}
                alt={image.alt}
                loading="eager"
                className="aspect-[4/5] rounded-lg object-cover xl:min-h-[90vh]"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNavigation className="absolute top-1/2 md:top-1/2 xl:top-1/2" alwaysShow />
      <CarouselIndicator className="bottom-0 px-15 md:-bottom-6.5 lg:-bottom-6.5 xl:-bottom-6.5" />
    </Carousel>
  );
}
