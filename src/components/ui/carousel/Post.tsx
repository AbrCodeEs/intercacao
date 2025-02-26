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
  posts: { title: string; description: string; image: { src: string; alt: string }, url?: string }[];
}) {
  return (
    <Carousel {...props}>
      <CarouselContent>
        {posts.map((post, index) => (
          <CarouselItem key={index} className="basis-xs p-5 md:basis-1/3 lg:basis-1/3 xl:basis-1/3">
            <CardPost {...post} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
