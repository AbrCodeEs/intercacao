'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { chocolateBars, type ChocolateBar } from '@/data/chocolateBars';
import { ChocolateCard } from '@/components/ChocolateCard';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import type {
  SortOption,
  FlavorOption,
  CountryOption,
  FilterOptionSortItems,
  FilterOptionFlavorItems,
  FilterOptionCountryItems,
} from '@/consts';
import { Sort, Flavor, Country } from '@/consts';
import { SpadeIcon as Spices, TreePine as Tree, Star, Award, Trophy, Nut } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

const TypesSortOption = [
  {
    label: 'Valorado',
    value: 'rated',
    icon: <Star className="mr-1 h-6 w-6 fill-current text-black" />,
  },
  {
    label: 'Fermentado',
    value: 'fermented',
    icon: (
      <img
        src="/icons/fermentado.png"
        alt="fermentado"
        className="size-4 fill-current text-black md:size-5 lg:size-5 xl:size-5"
      />
    ),
  },
  {
    label: 'Certificado',
    value: 'certified',
    icon: <Award className="mr-1 h-6 w-6 fill-current text-black" />,
  },
  {
    label: 'Premiado',
    value: 'awarded',
    icon: <Trophy className="mr-1 h-6 w-6 fill-current text-black" />,
  },
  {
    label: 'Criollo',
    value: 'creole',
    icon: <Nut className="mr-1 h-6 w-6 fill-current text-black" />,
  },
];

const CountriesSortOption = [
  {
    label: 'Colombia',
    value: 'Colombia',
  },
  {
    label: 'Peru',
    value: 'Peru',
  },
  {
    label: 'Venezuela',
    value: 'Venezuela',
  },
];

const FlavorsSortOption = [
  {
    label: 'Afrutado dulce ',
    value: 'Fruity Sweet',
    className: 'bg-fruity-sweet   text-white hover:text-white',
    icon: (
      <img
        className="size-4"
        loading="eager"
        src="/icons/afrutado_dulces-icon.svg"
        alt="afrutado dulces"
      />
    ),
    iconWhite: (
      <img
        className="size-4"
        loading="eager"
        src="/icons/afrutado_dulces-white-icon.svg"
        alt="afrutado dulces"
      />
    ),
  },
  {
    label: 'Afrutado cítrico',
    value: 'Fruity Citrus',
    className: 'bg-fruity-citrus',
    icon: (
      <img
         className="size-4"
        loading="eager"
        src="/icons/afrutado_citricos-icon.svg"
        alt="afrutado citricos"
      />
    ),
    iconWhite: (
      <img
       className="size-4"
        loading="eager"
        src="/icons/afrutado_citricos-white-icon.svg"
        alt="afrutado citricos"
      />
    ),
  },
  {
    label: 'Aflorado',
    value: 'Flower',
    className: 'bg-flower text-white hover:text-white',
    icon: (
      <img
        className="size-4"
        loading="eager"
        src="/icons/aflorado-icon.svg"
        alt="aflorados"
      />
    ),
    iconWhite: (
      <img
        className="size-4"
        loading="eager"
        src="/icons/aflorado-white-icon.svg"
        alt="aflorados"
      />
    ),
  },
  {
    label: 'Acriollado',
    value: 'Creole',
    className: 'bg-creole',
    icon: (
      <img
        className="size-4"
        loading="eager"
        src="/icons/acriollado-icon.svg"
        alt="acriollado"
      />
    ),
    iconWhite: (
      <img
        className="size-4"
        loading="eager"
        src="/icons/acriollado-white-icon.svg"
        alt="acriollado"
      />
    ),
  },
  {
    label: 'Cacao',
    value: 'Cocoa',
    className: 'bg-cocoa text-white hover:text-white',
    icon: (
      <img className="size-4" loading="eager" src="/icons/cacao-icon.svg" alt="cacao" />
    ),
    iconWhite: (
      <img className="size-4" loading="eager" src="/icons/cacao-white-icon.svg" alt="cacao" />
    ),
  },
  {
    label: 'Boscoso',
    value: 'Wood',
    className: 'bg-wood text-white hover:text-white',
    icon: <img className="size-4" loading="eager" src="/icons/boscoso-icon.svg" alt="boscoso" />,
    iconWhite: (
      <img className="size-4" loading="eager" src="/icons/boscoso-white-icon.svg" alt="boscoso" />
    ),
  },
  {
    label: 'Especias',
    value: 'Spices',
    className: 'bg-spices',
    icon: (
      <img
        className="size-4 text-white"
        loading="eager"
        src="/icons/especias-icon.svg"
        alt="especias"
      />
    ),
    iconWhite: (
      <img className="size-4" loading="eager" src="/icons/especias-icon.svg" alt="especias" />
    ),
  },
];

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, children, ...props }, ref) => {
    return (
      <li className='border-b border-gray-400/50'>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              ' block space-y-1 p-3 leading-none no-underline transition-colors outline-none select-none hover:text-black focus:text-black',
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

export function ChocolateGallery({ lang, trans }: { lang: string; trans: Record<string, any> }) {
  const [sortBy, setSortBy] = useState<SortOption | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorOption | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);

  const cocoaData = chocolateBars.map((cocoa) => ({
    ...cocoa,
    url: lang === 'en' ? `${cocoa.url}/${lang}` : `${cocoa.url}`,
  }));


  const filteredChocolates = cocoaData
    .filter((item) => {
      const flavorFilter =
        selectedFlavor && item.flavors.includes(selectedFlavor)
          ? item.ingredients[
              selectedFlavor.toLowerCase().replace(' ', '_') as keyof typeof item.ingredients
            ] > 0
          : true;

      const countryFilter = selectedCountry ? item.country === selectedCountry : true;

      const sortFilter = {
        [Sort.rated]: item.rating > 0,
        [Sort.fermented]: item.fermented > 0,
        [Sort.certified]: item.certified,
        [Sort.awarded]: item.awarded,
        [Sort.creole]: item.creole > 0,
      }[sortBy];

      return (flavorFilter && countryFilter && sortFilter) || true;
    })
    .sort((a, b) => {
      // Sorting by selected flavor if any
      if (selectedFlavor) {
        const flavorKey = selectedFlavor
          .toLowerCase()
          .replace(' ', '_') as keyof typeof a.ingredients;
        return b.ingredients[flavorKey] - a.ingredients[flavorKey];
      }

      // Default sorting by selected criteria
      return (
        sortBy &&
        {
          [Sort.rated]: b.rating - a.rating,
          [Sort.fermented]: b.fermented - a.fermented,
          [Sort.certified]: b.certified ? 1 : -1,
          [Sort.awarded]: b.awarded ? 1 : -1,
          [Sort.creole]: b.creole - a.creole,
        }[sortBy]
      );
    });

  const handleSortSelect = (sort: SortOption) => {
    setSortBy((current) => (current === sort ? null : sort));
    setSelectedFlavor(null);
    setSelectedCountry(null);
  };

  const handleFlavorSelect = (flavor: FlavorOption) => {
    setSelectedFlavor((current) => (current === flavor ? null : flavor));
    setSortBy(null);
    setSelectedCountry(null);
  };

  const handleCountrySelect = (country: CountryOption) => {
    setSelectedCountry((current) => (current === country ? null : country));
  };

  return (
    <div className="p-5">
      <div className="space-y-4 py-5">
        <div className="flex hidden flex-col justify-center gap-10 p-3 md:block lg:block xl:block">
          <h2 className="flex items-center gap-2 pb-5 text-center text-xl font-semibold text-white before:block before:h-px before:w-full before:border-t before:border-gray-100/20 before:content-[''] after:block after:h-px after:w-full after:border-t after:border-gray-100/20 after:content-['']">
            <span className="w-80">{trans.order_by}</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(TypesSortOption as FilterOptionSortItems[]).map((option) => (
              <Button
                key={option.value}
                variant={sortBy === option.value ? 'default' : 'ghost'}
                onClick={() => handleSortSelect(option.value as SortOption)}
                size="sm"
                className={
                  sortBy === option.value
                    ? 'bg-gray-500 text-black hover:bg-white/90'
                    : 'bg-gray-300 text-black hover:bg-gray-400'
                }
              >
                {option.icon}
                {option.label.charAt(0).toUpperCase() + option.label.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex hidden flex-col justify-center gap-10 p-3 md:block lg:block xl:block">
          <h2 className="flex items-center gap-2 pb-5 text-center text-xl font-semibold text-white before:block before:h-px before:w-full before:border-t before:border-gray-100/20 before:content-[''] after:block after:h-px after:w-full after:border-t after:border-gray-100/20 after:content-['']">
            <span className="w-110">{trans.filter_flavor}</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(FlavorsSortOption as FilterOptionFlavorItems[]).map((flavor) => (
              <Button
                key={flavor.value}
                variant={selectedFlavor === flavor.value ? 'default' : 'ghost'}
                onClick={() => handleFlavorSelect(flavor.value as FlavorOption)}
                size="sm"
                className={
                  selectedFlavor === flavor.value ? `${flavor.className}` : `${flavor.className}`
                }
              >
                {flavor.iconWhite}
                {flavor.label.charAt(0).toUpperCase() + flavor.label.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        {/* <div className="flex hidden flex-col justify-center gap-10 p-3 md:block lg:block xl:block">
          <h2 className="flex items-center gap-2 pb-5 text-center text-xl font-semibold text-white before:block before:h-px before:w-full before:border-t before:border-gray-100/20 before:content-[''] after:block after:h-px after:w-full after:border-t after:border-gray-100/20 after:content-['']">
            <span className="w-50">País</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(CountriesSortOption as FilterOptionCountryItems[]).map((country) => (
              <Button
                key={country.value}
                variant={selectedCountry === country.value ? 'default' : 'ghost'}
                onClick={() => handleCountrySelect(country.value as CountryOption)}
                size="sm"
                className={
                  selectedCountry === country.value
                    ? 'bg-gray-500 text-black hover:bg-white/90'
                    : 'bg-gray-300 text-black hover:bg-gray-400'
                }
              >
                <div className="flex size-5 items-center gap-2 overflow-hidden rounded-full">
                  <img src={`/icons/${country.value}.png`} className="size-5" alt="" />
                </div>
                {country.label.charAt(0).toUpperCase() + country.label.slice(1)}
              </Button>
            ))}
          </div>
        </div> */}
        <div className="flex flex-col justify-center gap-10 p-3 md:hidden lg:hidden xl:hidden">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{trans.order_by}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid h-auto w-65 p-0 lg:grid-cols-1">
                      {(TypesSortOption as FilterOptionSortItems[]).map((option) => (
                        <ListItem
                          key={option.value}
                          onClick={() => handleSortSelect(option.value as SortOption)}
                          className={sortBy === option.value ? "bg-gray-500 text-black shadow-none" : "bg-none text-black shadow-none"}
                        >
                          <div className="flex gap-5 items-center p-2">
                            <p>{option.icon}</p>
                            <p>{option.label.charAt(0).toUpperCase() + option.label.slice(1)}</p>
                          </div>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{trans.filter_flavor}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid h-auto w-65 p-0 lg:grid-cols-1">
                      {(FlavorsSortOption as FilterOptionFlavorItems[]).map((flavor) => (
                        <ListItem
                          key={flavor.value}
                          onClick={() => handleFlavorSelect(flavor.value as FlavorOption)}
                          className={
                            selectedFlavor === flavor.value
                              ? `${flavor.className} text-black`
                              : `text-black`
                          }
                        >
                          <div className="flex gap-5 items-center">
                            <p className={`${flavor.className} text-black p-2 rounded-lg`}>{flavor.iconWhite}</p>
                            <p>{flavor.label.charAt(0).toUpperCase() + flavor.label.slice(1)}</p>
                          </div>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-3 xl:gap-4"
        layout
      >
        <AnimatePresence initial={false}>
          {filteredChocolates.map((chocolate) => (
            <motion.div
              key={chocolate.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, type: 'spring' }}
            >
              <ChocolateCard chocolate={chocolate} sortBy={sortBy} flavors={selectedFlavor} trans={trans} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
