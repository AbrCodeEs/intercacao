'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import type { CocoaBar, SortOption, FlavorOption } from '@/types/home';
import { Sort } from '@/types/home';
import { Star, Award, Trophy, Nut, CornerRightUp } from 'lucide-react';
import miel from '@/images/home/beeBar/MIEL.webp';

import { motion } from 'motion/react';

const IconTraslation = {
  fruity_sweet: 'fruity_sweet',
  fruity_citrus: 'fruity_citrus',
  flower: 'flower',
  creole: 'creole',
  cocoa: 'cocoa',
  wood: 'wood',
  spices: 'spices',
};

export function ChocolateCard({
  chocolate,
  sortBy,
  flavors,
  trans,
}: {
  chocolate: CocoaBar;
  sortBy: SortOption | null;
  flavors: FlavorOption[] | string | null;
  trans: Record<string, any>;
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
            className="relative aspect-square bg-gray-500"
          >
            {chocolate.image && (
              <img
                src={chocolate.image}
                alt={chocolate.name}
                loading="eager"
                decoding="async"
                width={1000}
                height={1000}
                className={`object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 ${isHovered && 'blur'}`}
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
                  <div className="bg-primary rounded-xl p-2">
                    {!flavors && sortBy === Sort.rated && (
                      <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
                        <Star className="mr-1 size-3 fill-current text-white md:size-5 lg:size-5 xl:size-5" />
                        <span>{chocolate.rating.toFixed(1)}</span>
                      </div>
                    )}
                    {!flavors && sortBy === Sort.fermented && (
                      <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
                        <img
                          src="/icons/fermentado.png"
                          alt="fermentado"
                          loading="eager"
                          className="mr-1 h-5 w-5 brightness-100 contrast-100 invert filter transition-all hover:opacity-80"
                        />
                        <span>{chocolate.fermented.toFixed(1)}%</span>
                      </div>
                    )}
                    {!flavors && sortBy === Sort.certified && (
                      <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
                        <Award className="mr-1 size-3 fill-current text-white md:size-5 lg:size-5 xl:size-5" />
                        <span>{chocolate.certified}</span>
                      </div>
                    )}
                    {!flavors && sortBy === Sort.awarded && (
                      <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
                        <Trophy className="mr-1 size-3 fill-current text-white md:size-5 lg:size-5 xl:size-5" />
                        <span>{chocolate.awarded}</span>
                      </div>
                    )}

                    {!flavors && sortBy === Sort.creole && (
                      <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
                        <Nut className="mr-1 size-3 fill-current text-white md:size-5 lg:size-5 xl:size-5" />
                        <span>{chocolate.creole.toFixed(1)}%</span>
                      </div>
                    )}

                    {flavors &&
                      flavors.toLowerCase().replace(' ', '_') === IconTraslation.fruity_sweet && (
                        <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
                          <img
                            className="mr-1 size-3 md:size-5 lg:size-5 xl:size-5"
                            loading="eager"
                            src="/icons/afrutado_dulces-white-icon.svg"
                            alt="afrutado dulces"
                          />
                          <span>{chocolate.ingredients.fruity_sweet.toFixed(1)}</span>
                        </div>
                      )}

                    {flavors &&
                      flavors.toLowerCase().replace(' ', '_') === IconTraslation.fruity_citrus && (
                        <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
                          <img
                            className="mr-1 size-3 md:size-5 lg:size-5 xl:size-5"
                            loading="eager"
                            src="/icons/afrutado_citricos-white-icon.svg"
                            alt="afrutado citricos"
                          />
                          <span>{chocolate.ingredients.fruity_citrus.toFixed(1)}</span>
                        </div>
                      )}

                    {flavors &&
                      flavors.toLowerCase().replace(' ', '_') === IconTraslation.flower && (
                        <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
                          <img
                            className="mr-1 size-3 md:size-5 lg:size-5 xl:size-5"
                            loading="eager"
                            src="/icons/aflorado-white-icon.svg"
                            alt="aflorados"
                          />
                          <span>{chocolate.ingredients.flower.toFixed(1)}</span>
                        </div>
                      )}

                    {flavors &&
                      flavors.toLowerCase().replace(' ', '_') === IconTraslation.creole && (
                        <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
                          <img
                            className="mr-1 size-3 md:size-5 lg:size-5 xl:size-5"
                            loading="eager"
                            src="/icons/acriollado-white-icon.svg"
                            alt="acriollado"
                          />
                          <span>{chocolate.ingredients.creole.toFixed(1)}</span>
                        </div>
                      )}

                    {flavors &&
                      flavors.toLowerCase().replace(' ', '_') === IconTraslation.cocoa && (
                        <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
                          <img
                            className="mr-1 size-3 md:size-5 lg:size-5 xl:size-5"
                            loading="eager"
                            src="/icons/cacao-white-icon.svg"
                            alt="cacao"
                          />
                          <span>{chocolate.ingredients.cocoa.toFixed(1)}</span>
                        </div>
                      )}

                    {flavors && flavors.toLowerCase().replace(' ', '_') === IconTraslation.wood && (
                      <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
                        <img
                          className="mr-1 size-3 md:size-5 lg:size-5 xl:size-5"
                          loading="eager"
                          src="/icons/boscoso-white-icon.svg"
                          alt="boscoso"
                        />
                        <span>{chocolate.ingredients.wood.toFixed(1)}</span>
                      </div>
                    )}

                    {flavors &&
                      flavors.toLowerCase().replace(' ', '_') === IconTraslation.spices && (
                        <div className="flex items-center text-xs text-white md:text-base lg:text-base xl:text-base">
                          <img
                            className="mr-1 size-3 md:size-5 lg:size-5 xl:size-5"
                            loading="eager"
                            src="/icons/especias-white-icon.svg"
                            alt="especias"
                          />
                          <span>{chocolate.ingredients.spices.toFixed(1)}</span>
                        </div>
                      )}
                  </div>
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
              <div className="mb-2 flex hidden flex-wrap justify-center gap-1 md:hidden lg:block xl:block">
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
}
