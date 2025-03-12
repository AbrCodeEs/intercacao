import React from 'react';
import { Timeline } from '@/components/ui/timeline';

export function TimelineDemo({
  data,
  onActiveIndexChange,
}: {
  data: { title: string; content: React.ReactNode }[];
  onActiveIndexChange: (index: number) => void;
}) {
  return <Timeline data={data} onActiveIndexChange={onActiveIndexChange} />;
}
