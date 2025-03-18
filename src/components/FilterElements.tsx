'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Star, Award, Trophy, Nut } from 'lucide-react';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';

export const IconsSortOption = {
  rated: <Star className="h-6 w-6 fill-current text-black" />,
  fermented: (
    <img
      src="/icons/fermentado.png"
      alt="fermentado"
      className="size-4 fill-current text-black md:size-5 lg:size-5 xl:size-5"
    />
  ),
  certified: <Award className="h-6 w-6 fill-current text-black" />,
  awarded: <Trophy className="h-6 w-6 fill-current text-black" />,
  creole: <Nut className="h-6 w-6 fill-current text-black" />,
};

export const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, children, ...props }, ref) => {
    return (
      <li className="border-b border-gray-400/50">
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block space-y-1 p-3 leading-none no-underline transition-colors outline-none select-none hover:text-black focus:text-black',
              className,
            )}
            {...props}
          >
            <p className="line-clamp-2 text-sm leading-snug">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);

ListItem.displayName = 'ListItem';

// Opcional: Tipo para los elementos del filtro
export type FilterOption = {
  value: string;
  label: string;
  key: keyof typeof IconsSortOption;
  className?: string;
  iconWhite?: string;
};