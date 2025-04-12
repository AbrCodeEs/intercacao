"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { PROJECT_ITEMS } from "@/data/electrones";

import { StickyScroll } from "@/components/home/StickyScrollReveal";

export const ProjectsSection = () => {
  const projects = PROJECT_ITEMS.map((item) => {
    return {
      title: item.title,
      description: item.description,
      url: item.url || false,
      icon: item.icon,
      content: (
        <Carousel className="overflow-hidden md:rounded-lg lg:rounded-lg xl:rounded-lg h-full">
          <CarouselContent
            className="-ml-0 w-full h-full xl:min-h-[90vh]"
          >
            {!!item.images.length &&
              item.images?.map((image: { src: string; alt: string }, index: number) => (
                <CarouselItem
                  key={index}
                  className="basis-full p-0 xl:min-h-[90vh]"
                >
                  <div className="flex aspect-[4/5] xl:min-h-[90vh] items-center justify-center">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="eager"
                      className="aspect-[4/5] xl:min-h-[90vh] object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="-left-10 disabled:!opacity-1 md:left-7 lg:left-7 xl:left-7" />
          <CarouselNext className="-right-10 disabled:!opacity-1 md:right-7 lg:right-7 xl:right-7" />
        </Carousel>
      ),
    };
  });
  return (
    <>
      <div className="w-full">
        <StickyScroll content={projects} />
      </div>
    </>
  );
};
export default ProjectsSection;
