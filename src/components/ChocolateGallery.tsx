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
// navigationMenuTriggerStyle,

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

import type {
  SortOption,
  FlavorOption,
  CountryOption,
  FilterOptionSortItems,
  FilterOptionFlavorItems,
  FilterOptionCountryItems,
} from '@/consts';
import { Sort, Flavor, Country } from '@/consts';
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
  Nut,
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

const TypesSortOption = [
  {
    label: 'Valorado',
    value: 'rated',
    icon: <Star className="mr-1 h-6 w-6 fill-current text-amber-400" />,
  },
  {
    label: 'Fermentado',
    value: 'fermented',
    icon: <Leaf className="mr-1 h-6 w-6 fill-current text-green-400" />,
  },
  {
    label: 'Certificado',
    value: 'certified',
    icon: <Award className="mr-1 h-6 w-6 fill-current text-yellow-400" />,
  },
  {
    label: 'Premiado',
    value: 'awarded',
    icon: <Trophy className="mr-1 h-6 w-6 fill-current text-yellow-400" />,
  },
  {
    label: 'Criollo',
    value: 'creole',
    icon: <Nut className="mr-1 h-6 w-6 fill-current text-yellow-400" />,
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
    className: 'bg-fruity-sweet text-white',
    icon: <Fruit className="h-4 w-4 text-white" />,
  },
  {
    label: 'Afrutado cítrico',
    value: 'Fruity Citrus',
    className: 'bg-fruity-citrus',
    icon: <Citrus className="h-4 w-4" />,
  },
  {
    label: 'Aflorado',
    value: 'Flower',
    className: 'bg-flower text-white',
    icon: <Flower className="h-4 w-4 text-white" />,
  },
  {
    label: 'Acriollado',
    value: 'Creole',
    className: 'bg-creole',
    icon: <Nut className="h-4 w-4" />,
  },
  {
    label: 'Cacao',
    value: 'Cocoa',
    className: 'bg-cocoa text-white',
    icon: <Coffee className="h-4 w-4 text-white" />,
  },
  {
    label: 'Boscoso',
    value: 'Wood',
    className: 'bg-wood text-white',
    icon: <Tree className="h-4 w-4 text-white" />,
  },
  {
    label: 'Especias',
    value: 'Spices',
    className: 'bg-spices',
    icon: <Spices className="h-4 w-4" />,
  },
];

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'hover:bg-accent focus:bg-accent block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:text-black focus:text-black',
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

export function ChocolateGallery() {
  const [sortBy, setSortBy] = useState<SortOption>('rated');
  const [selectedFlavors, setSelectedFlavors] = useState<FlavorOption[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<CountryOption[]>([]);

  const filteredChocolates = chocolateBars
    .filter((chocolate) => {
      if (selectedFlavors.length) {
        return selectedFlavors.some((flavor) => chocolate.flavors.includes(flavor));
      }

      if (selectedCountries.length) {
        return selectedCountries.includes(chocolate.country as CountryOption);
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === Sort.rated) return b.rating - a.rating;
      if (sortBy === Sort.fermented) return b.fermented - a.fermented;
      if (sortBy === Sort.certified) return b.certified - a.certified;
      if (sortBy === Sort.awarded) return b.awarded - a.awarded;
      if (sortBy === Sort.creole) return b.creole - a.creole;
      return 0;
    });

  const handleFlavorToggle = (flavor: FlavorOption) => {
    setSelectedFlavors((prev) =>
      prev.includes(flavor) ? prev.filter((f) => f !== flavor) : [...prev, flavor],
    );
  };

  const handleCountryToggle = (country: CountryOption) => {
    setSelectedCountries((prev) =>
      prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country],
    );
  };

  const getFilteredChocolates = (cocoaItems: ChocolateBar[]) => {
    // Primero aplicamos todos los filtros necesarios
    let filtered = cocoaItems.filter((items) => {
      // Filtrado basado en el criterio de ordenamiento seleccionado

      if (selectedFlavors.includes(Flavor.Fruity_Sweet)) return items.ingredients.fruity_sweet > 0;
      if (selectedFlavors.includes(Flavor.Fruity_Citrus))
        return items.ingredients.fruity_citrus > 0;
      if (selectedFlavors.includes(Flavor.Floral)) return items.ingredients.floral > 0;
      if (selectedFlavors.includes(Flavor.Criollo)) return items.ingredients.criollo > 0;
      if (selectedFlavors.includes(Flavor.Cocoa)) return items.ingredients.cocoa > 0;
      if (selectedFlavors.includes(Flavor.Wood)) return items.ingredients.wood > 0;
      if (selectedFlavors.includes(Flavor.Spices)) return items.ingredients.spices > 0;

      if (sortBy === Sort.rated) return items.rating > 0;
      if (sortBy === Sort.fermented) return items.fermented > 0;
      if (sortBy === Sort.certified) return items.certified > 0;
      if (sortBy === Sort.awarded) return items.awarded > 0;
      if (sortBy === Sort.creole) return items.creole > 0;

      if (selectedCountries.includes(Country.Colombia)) return items.country === Country.Colombia;
      if (selectedCountries.includes(Country.Peru)) return items.country === Country.Peru;
      if (selectedCountries.includes(Country.Venezuela)) return items.country === Country.Venezuela;

      return true;
    });

    // Aseguramos que los filtros se aplican correctamente
    return filtered;
  };

  return (
    <div className="p-5">
      <div className="space-y-4 py-5">
        <div className="flex hidden flex-col justify-center gap-10 p-3 md:block lg:block xl:block">
          <h2 className="flex items-center gap-2 pb-5 text-center text-xl font-semibold text-white before:block before:h-px before:w-full before:border-t before:border-gray-100/20 before:content-[''] after:block after:h-px after:w-full after:border-t after:border-gray-100/20 after:content-['']">
            <span className="w-80">Ordenar por:</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(TypesSortOption as FilterOptionSortItems[]).map((option) => (
              <Button
                key={option.value}
                variant={sortBy === option.value ? 'default' : 'ghost'}
                onClick={() => setSortBy(option.value as SortOption)}
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
            <span className="w-110">Mundo de sabores</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(FlavorsSortOption as FilterOptionFlavorItems[]).map((flavor) => (
              <Button
                key={flavor.value}
                variant={selectedFlavors.includes(flavor.value) ? 'default' : 'ghost'}
                onClick={() => handleFlavorToggle(flavor.value as FlavorOption)}
                size="sm"
                className={
                  selectedFlavors.includes(flavor.value)
                    ? `${flavor.className}`
                    : `${flavor.className}`
                }
              >
                {flavor.icon}
                {flavor.label.charAt(0).toUpperCase() + flavor.label.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex hidden flex-col justify-center gap-10 p-3 md:block lg:block xl:block">
          <h2 className="flex items-center gap-2 pb-5 text-center text-xl font-semibold text-white before:block before:h-px before:w-full before:border-t before:border-gray-100/20 before:content-[''] after:block after:h-px after:w-full after:border-t after:border-gray-100/20 after:content-['']">
            <span className="w-50">País</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(CountriesSortOption as FilterOptionCountryItems[]).map((country) => (
              <Button
                key={country.value}
                variant={selectedCountries.includes(country.value) ? 'default' : 'ghost'}
                onClick={() => handleCountryToggle(country.value as CountryOption)}
                size="sm"
                className={
                  selectedCountries.includes(country.value)
                    ? // ? 'bg-white text-black hover:bg-white/90'
                      // : 'bg-black text-white hover:bg-black/90 hover:text-white'
                      'bg-gray-500 text-black hover:bg-white/90'
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
        </div>
        <div className="block flex flex-col justify-center gap-10 p-3 md:hidden lg:hidden xl:hidden">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Ordenar por</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid h-auto w-75 gap-3 p-4 lg:grid-cols-1">
                      {(TypesSortOption as FilterOptionSortItems[]).map((option) => (
                        <ListItem
                          key={option.value}
                          onClick={() => setSortBy(option.value as SortOption)}
                          className="bg-none text-black shadow-none"
                        >
                          <div className="flex gap-5">
                            <p> {option.icon}</p>
                            <p>{option.label.charAt(0).toUpperCase() + option.label.slice(1)}</p>
                          </div>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Mundo de sabores</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid h-auto w-75 gap-3 p-4 lg:grid-cols-1">
                      {(FlavorsSortOption as FilterOptionFlavorItems[]).map((flavor) => (
                        <ListItem
                          key={flavor.value}
                          onClick={() => handleFlavorToggle(flavor.value as FlavorOption)}
                          className={
                            selectedFlavors.includes(flavor.value)
                              ? `${flavor.className} text-black`
                              : `text-black`
                          }
                        >
                          <div className="flex gap-5">
                            <p>{flavor.icon}</p>
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
          {getFilteredChocolates(filteredChocolates).map((chocolate) => (
            <motion.div
              key={chocolate.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, type: 'spring' }}
            >
              <ChocolateCard chocolate={chocolate} sortBy={sortBy} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
