'use client';

import { useState, memo, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { CocoaBar, SortOption, FlavorOption } from '@/types/home';
import { Sort } from '@/types/home';
import { Star, Award, Trophy, Nut, CornerRightUp } from 'lucide-react';
import { motion } from 'motion/react';
import { OptimizedImage } from '../ui/OptimizedImage';

import watermarkEs from '@/images/global/agotado.webp';
import watermarkEn from '@/images/global/soldout.webp';

const watermark = {
  es: watermarkEs,
  eng: watermarkEn,
} as const;

const IconTraslation = {
  fruity_sweet: 'afrutado_dulces',
  fruity_citrus: 'afrutado_citricos',
  flower: 'aflorado',
  creole: 'acriollado',
  cocoa: 'cacao',
  wood: 'boscoso',
  spices: 'especias',
} as const;

const FlavorIcon = memo(function FlavorIcon({
  flavor,
  value,
}: {
  flavor: keyof typeof IconTraslation;
  value: number;
}) {
  const iconPath = `/icons/${IconTraslation[flavor]}-white-icon.svg`;
  const altText = {
    fruity_sweet: 'afrutado dulces',
    fruity_citrus: 'afrutado citricos',
    flower: 'aflorados',
    creole: 'acriollado',
    cocoa: 'cacao',
    wood: 'boscoso',
    spices: 'especias',
  }[flavor];

  return (
    <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
      <img
        className="mr-1 size-3 md:size-5 lg:size-5 xl:size-5"
        loading="eager"
        src={iconPath}
        alt={altText}
      />
      <span>{value.toFixed(1)}</span>
    </div>
  );
});

const SortIcon = memo(function SortIcon({ sortBy, value }: { sortBy: SortOption; value: number }) {
  switch (sortBy) {
    case Sort.rated:
      return (
        <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
          <Star className="mr-1 size-3 fill-current text-white md:size-5 lg:size-5 xl:size-5" />
          <span>{value.toFixed(1)}</span>
        </div>
      );
    case Sort.fermented:
      return (
        <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
          <img
            src="/icons/fermentado.png"
            alt="fermentado"
            loading="eager"
            className="mr-1 h-5 w-5 brightness-100 contrast-100 invert filter transition-all hover:opacity-80"
          />
          <span>{value.toFixed(1)}%</span>
        </div>
      );
    case Sort.certified:
      return (
        <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
          <Award className="mr-1 size-3 fill-current text-white md:size-5 lg:size-5 xl:size-5" />
          <span>{value}</span>
        </div>
      );
    case Sort.awarded:
      return (
        <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
          <Trophy className="mr-1 size-3 fill-current text-white md:size-5 lg:size-5 xl:size-5" />
          <span>{value}</span>
        </div>
      );
    case Sort.creole:
      return (
        <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
          <Nut className="mr-1 size-3 fill-current text-white md:size-5 lg:size-5 xl:size-5" />
          <span>{value.toFixed(1)}%</span>
        </div>
      );
    default:
      return null;
  }
});

export const ChocolateCard = memo(function ChocolateCard({
  chocolate,
  sortBy,
  flavors,
  trans,
  lang,
}: {
  chocolate: CocoaBar;
  sortBy: SortOption | null;
  flavors: FlavorOption[] | string | null;
  trans: Record<string, any>;
  lang: 'es' | 'eng';
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const renderIcon = useCallback(() => {
    if (!flavors && !sortBy) return null;

    if (typeof flavors === 'string') {
      const flavorKey = flavors.toLowerCase().replace(' ', '_') as keyof typeof IconTraslation;
      if (flavorKey in IconTraslation) {
        return <FlavorIcon flavor={flavorKey} value={chocolate.ingredients[flavorKey]} />;
      }
    }

    if (sortBy) {
      const value = {
        [Sort.rated]: chocolate.rating,
        [Sort.fermented]: chocolate.fermented,
        [Sort.certified]: chocolate.certified,
        [Sort.awarded]: chocolate.awarded,
        [Sort.creole]: chocolate.creole,
      }[sortBy];

      return <SortIcon sortBy={sortBy} value={value} />;
    }

    return null;
  }, [chocolate, flavors, sortBy]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card
        className="group relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent className="p-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative aspect-square bg-gray-500"
          >
            {chocolate.image && (
              <OptimizedImage
                src={typeof chocolate.image === 'string' ? chocolate.image : chocolate.image.src}
                alt={chocolate.name}
                className={`object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 ${isHovered ? 'blur' : ''}`}
                priority={chocolate.rating >= 4}
                quality={85}
              />
            )}

            {chocolate.soldout && (
              <img
                className="absolute top-0 left-0 size-12 md:size-14 lg:size-16 xl:size-20"
                src={typeof watermark[lang] === 'string' ? watermark[lang] : watermark[lang].src}
                alt="soldout"
                loading="eager"
              />
            )}

            {chocolate.watermark && (
              <div className="absolute inset-x-0 bottom-5 flex items-center justify-center">
                <h3 className="mb-1 text-center font-semibold text-gray-600 xl:text-4xl">
                  {chocolate.name}
                </h3>
              </div>
            )}

            <div className="absolute inset-0 flex flex-col justify-start p-2 text-xl md:p-4 lg:p-4 xl:p-6">
              <div className="flex grow items-start justify-start">
                {(flavors || sortBy) && (
                  <div className="bg-primary rounded-xl p-2">{renderIcon()}</div>
                )}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="xl:bg-primary/70 lg:bg-primary/70 md:bg-primary/70 bg-primary/90 text-secondary-foreground absolute inset-0 flex flex-col items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative flex w-10/12 flex-col justify-between space-y-2 text-center">
              <div className="mb-2 hidden flex-wrap justify-center gap-1 md:hidden lg:flex xl:flex">
                <h3 className="mb-1 text-4xl font-semibold text-white">{chocolate.name}</h3>
              </div>

              <p className="hidden pt-2 text-white md:hidden md:text-sm lg:block lg:text-lg xl:block xl:text-lg">
                {chocolate.country}
              </p>

              <div className="flex items-center justify-center gap-x-0 gap-y-5 text-sm md:mt-4 md:gap-3 lg:gap-4 xl:gap-4">
                <div className="flex flex-col gap-2 md:w-20 md:gap-5 lg:w-20 lg:gap-5 xl:w-20 xl:gap-5">
                  <div className="flex items-center justify-start gap-1 text-center text-white md:gap-2 lg:gap-5 xl:gap-5">
                    <Star className="size-3 fill-current text-white md:size-5 lg:size-5 xl:size-5" />
                    <span>{chocolate.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center justify-start gap-1 text-center text-white md:gap-2 lg:gap-5 xl:gap-5">
                    <img
                      src="/icons/fermentado.png"
                      alt="fermentado"
                      loading="eager"
                      className="size-4 brightness-100 contrast-100 invert filter transition-all hover:opacity-80 md:size-6 lg:size-6 xl:size-6"
                    />
                    <span>{chocolate.fermented.toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center justify-start gap-1 text-center text-white md:gap-2 lg:gap-5 xl:gap-5">
                    <Award className="size-3 fill-current text-white md:size-5 lg:size-5 xl:size-5" />
                    <span>{chocolate.certified}</span>
                  </div>
                  <div className="flex items-center justify-start gap-1 text-center text-white md:gap-2 lg:gap-5 xl:gap-5">
                    <Trophy className="size-3 fill-current text-white md:size-5 lg:size-5 xl:size-5" />
                    <span>{chocolate.awarded}</span>
                  </div>
                  <div className="flex items-center justify-start gap-1 text-center text-white md:gap-2 lg:gap-5 xl:gap-5">
                    <Nut className="size-3 fill-current text-white md:size-5 lg:size-5 xl:size-5" />
                    <span>{chocolate.creole}%</span>
                  </div>
                </div>
              </div>

              <div className="mb-2 hidden items-center justify-end pt-0 md:mb-2 md:hidden md:pt-0 lg:mb-2 lg:flex lg:pt-8 xl:mb-2 xl:flex xl:pt-9">
                <a
                  href={chocolate.url}
                  target="_blank"
                  className="mt-12 flex w-27 items-center justify-between rounded-lg bg-gray-300 px-3 py-2"
                >
                  <p className="md:text-md text-xs text-black lg:text-base xl:text-base">
                    {trans.link}
                  </p>
                  <CornerRightUp className="size-4 text-black" />
                </a>
              </div>

              <a
                href={chocolate.url}
                target="_blank"
                className="absolute right-0 bottom-0 flex w-auto items-center justify-start gap-2 rounded-lg bg-gray-300 p-2 md:block lg:hidden xl:hidden"
              >
                <CornerRightUp className="size-2 text-black" />
              </a>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
});
