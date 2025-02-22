'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { ChocolateBar } from '@/data/chocolateBars';
import {
  Cherry as Fruit,
  Citrus,
  Flower,
  Coffee,
  SpadeIcon as Spices,
  TreePine as Tree,
  Star,
  Leaf,
  Award,
  Trophy,
  Circle,
  Search,
} from 'lucide-react';
import type { SortOption } from '@/consts';
import { Sort } from '@/consts';

import { motion } from 'framer-motion';
const iconMap: { [key: string]: React.ReactNode } = {
  fruity_sweet: <Fruit className="h-4 w-4" />,
  fruity_citrus: <Citrus className="h-4 w-4" />,
  flowers: <Flower className="h-4 w-4" />,
  cocoa: <Coffee className="h-4 w-4" />,
  spices: <Spices className="h-4 w-4" />,
  wood: <Tree className="h-4 w-4" />,
  citrus: <Fruit className="h-4 w-4" />,
  creole: <Circle className="h-4 w-4" />,
};

const IconTraslation = {
  fruity_sweet: 'Afrutado dulce',
  fruity_citrus: 'Afrutado cítrico',
  flowers: 'Aflorado',
  creole: 'Acriollado',
  cocoa: 'Cacao',
  wood: 'Boscoso',
  spices: 'Especias',
};

export function ChocolateCard({
  chocolate,
  sortBy,
}: {
  chocolate: ChocolateBar;
  sortBy: SortOption;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card
        className="group relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative aspect-square"
          >
            <img
              src={chocolate.image}
              alt={chocolate.name}
              loading="lazy"
              decoding="async"
              width={1000}
              height={1000}
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="from-primary/80 absolute inset-0 flex flex-col justify-start bg-gradient-to-t to-transparent p-2 text-xl md:p-4 lg:p-4 xl:p-6">
              {sortBy === Sort.rated && (
                <div className="flex items-center text-white">
                  <Star className="mr-1 h-6 w-6 fill-current text-amber-400" />
                  <span>{chocolate.rating.toFixed(1)}</span>
                </div>
              )}
              {sortBy === Sort.fermented && (
                <div className="flex items-center text-white">
                  <Leaf className="mr-1 h-6 w-6 fill-current text-green-400" />
                  <span>{chocolate.fermented.toFixed(1)}%</span>
                </div>
              )}
              {sortBy === Sort.certified && (
                <div className="flex items-center text-white">
                  <Award className="mr-1 h-6 w-6 fill-current text-amber-400" />
                  <span>{chocolate.certified}</span>
                </div>
              )}
              {sortBy === Sort.awarded && (
                <div className="flex items-center text-white">
                  <Trophy className="mr-1 h-6 w-6 fill-current text-amber-400" />
                  <span>{chocolate.awarded} Premios</span>
                </div>
              )}

              {sortBy === Sort.creole && (
                <div className="flex items-center text-white">
                  <Circle className="mr-1 h-6 w-6 fill-current text-amber-400" />
                  <span>{chocolate.creole}%</span>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div
            className="xl:bg-primary/65 lg:bg-primary/65 md:bg-primary/65 bg-primary/90 text-secondary-foreground absolute inset-0 flex flex-col items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full space-y-2 text-center md:w-11/12 lg:w-3/4 xl:w-3/4">
              <div className="mb-2 flex hidden flex-wrap justify-center gap-1 md:hidden lg:block xl:block">
                <h3 className="mb-1 text-3xl font-semibold text-white">{chocolate.name}</h3>
              </div>
              <p className="text-md hidden pt-2 text-white md:hidden lg:block xl:block">
                {chocolate.country}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm md:mt-4 md:gap-3 lg:mt-4 lg:gap-3 xl:mt-4 xl:gap-3">
                {Object.entries(chocolate.ingredients).map(
                  ([ingredient, amount]: [string, number]) => (
                    <div key={ingredient} className="flex items-center justify-start gap-2">
                      <div
                        key={ingredient}
                        className="flex flex-col items-center justify-center font-bold"
                      >
                        <p
                          className={`bg-${ingredient.replace(/_/g, '-')} flex size-6 flex-col items-center justify-center rounded-full text-black md:size-10 lg:size-20 xl:size-20`}
                        >
                          {iconMap[ingredient] || ingredient}
                          <span className="md:text-md mt-1 hidden text-center text-xs md:hidden lg:block lg:text-lg xl:block xl:text-lg">
                            {amount}%
                          </span>
                        </p>
                      </div>
                      <div className="md:text-md hidden text-xs text-white md:hidden lg:block lg:text-lg xl:block xl:text-lg">
                        {IconTraslation[ingredient] || ingredient}
                      </div>
                      <div className="md:text-md block text-xs text-white md:block lg:hidden lg:text-lg xl:hidden xl:text-lg">
                        {amount}%
                      </div>
                    </div>
                  ),
                )}
                <a href="/es/chuao">
                  <div className="flex items-center justify-start gap-2">
                    <div className="flex flex-col items-center justify-center font-bold">
                      <p className="flex size-6 flex-col items-center justify-center rounded-full bg-red-500 text-black md:size-10 lg:size-20 xl:size-20">
                        <Search className="h-4 w-4" />
                      </p>
                    </div>
                    <div className="md:text-md text-xs text-white lg:text-lg xl:text-lg">
                      Ver mas
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
