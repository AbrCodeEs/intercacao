'use client';

import { CardPost } from '@/components/ui/card/Post';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

export function CarouselPost({
  posts,
  ...props
}: {
  posts: {
    title: string;
    description: string;
    image: { src: string; alt: string };
    url?: string;
  }[];
}) {
  return (
    <Carousel {...props} className='w-10/12'>
      <CarouselContent classNameWrapper="w-full">
        {posts.map((post, index) => (
          <CarouselItem key={index} className="basis-xs p-5 md:basis-full lg:basis-1/3 xl:basis-1/3">
            <CardPost {...post} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="disabled:!opacity-50" />
      <CarouselNext className="disabled:!opacity-50" />
    </Carousel>
  );
}
