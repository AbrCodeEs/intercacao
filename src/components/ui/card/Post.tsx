'use client';

import { Card, CardHeader, CardDescription, CardContent } from '@/components/ui/card';

export function CardPost({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: { src: string; alt: string };
}) {
  return (
    <Card className="overflow-hidden">
      <img src={image.src} alt={image.alt} />
      <CardHeader>{title}</CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
