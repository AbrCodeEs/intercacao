'use client';

import { Card, CardHeader, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function CardPost({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description: string;
  image: { src: string; alt: string };
  url?: string;
}) {
  return (
    <Card className="overflow-hidden">
      <img src={image.src} alt={image.alt} className='w-full' />
      <CardHeader>{title}</CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      {url && (
        <CardFooter>
          <a href={url} target='_blank'>
            <Button variant="outline">Ver mas ...</Button>
          </a>
        </CardFooter>
      )}
    </Card>
  );
}
