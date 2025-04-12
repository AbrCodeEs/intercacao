'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ListItem, IconsSortOption } from '@/components/home/FilterElements';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

type FilterControlsProps = {
  trans: any;
  sortBy: string | null;
  selectedFlavor: string | null;
  handleSortSelect: (sort: string) => void;
  handleFlavorSelect: (flavor: string) => void;
  flavorsSectionRef?: React.RefObject<HTMLDivElement>;
};

export const FilterControls = ({
  trans,
  sortBy,
  selectedFlavor,
  handleSortSelect,
  handleFlavorSelect,
  flavorsSectionRef
}: FilterControlsProps) => (
  <div className="space-y-4 py-5">
    {/* Desktop Sort Controls */}
    <div className="hidden flex-col justify-center gap-10 p-3 md:flex lg:flex xl:flex">
      <h2 className="flex items-center gap-2 pb-5 text-center text-xl font-semibold text-white before:block before:h-px before:w-full before:border-t before:border-gray-100/20 before:content-[''] after:block after:h-px after:w-full after:border-t after:border-gray-100/20 after:content-['']">
        <span className="w-80">{trans.order_by}</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {(trans.world_of_flavors.types_options as Array<any>).map(({ value, label, key }) => (
          <motion.div key={value} layoutId={`sort-${value}`}>
            <Button
              variant={sortBy === value ? 'default' : 'ghost'}
              onClick={() => handleSortSelect(value)}
              size="sm"
              className={
                sortBy === value
                  ? 'bg-gray-500 text-black hover:bg-white/90'
                  : 'bg-gray-300 text-black hover:bg-gray-400'
              }
            >
                
              {IconsSortOption[key]}
              <span className="ml-2">{label.charAt(0).toUpperCase() + label.slice(1)}</span>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Mobile Sort Controls */}
    <div className="flex flex-col justify-center gap-10 p-3 md:hidden lg:hidden xl:hidden">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-45">{trans.order_by}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid h-auto w-45 p-0 lg:grid-cols-1">
                  {(trans.world_of_flavors.types_options as Array<any>).map((option) => (
                    <ListItem
                      key={option.value}
                      onClick={() => handleSortSelect(option.value)}
                      className={
                        sortBy === option.value
                          ? 'bg-gray-500 text-black shadow-none'
                          : 'bg-none text-black shadow-none'
                      }
                    >
                      <div className="flex items-center gap-5 p-2">
                        {IconsSortOption[option.key]}
                        <p>{option.label.charAt(0).toUpperCase() + option.label.slice(1)}</p>
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

    {/* Flavor Filters */}
    <div className="flex-col justify-center gap-10 p-3 md:flex lg:flex xl:flex">
      <h2 className="flex items-center gap-2 pb-5 text-center text-xl font-semibold text-white before:block before:h-px before:w-full before:border-t before:border-gray-100/20 before:content-[''] after:block after:h-px after:w-full after:border-t after:border-gray-100/20 after:content-['']">
        <span className="w-110">{trans.filter_flavor}</span>
      </h2>
      <div ref={flavorsSectionRef} className="flex flex-wrap items-center justify-center gap-2">
        <AnimatePresence>
          {(trans.world_of_flavors.flavors as Array<any>).map((flavor) => (
            <motion.div
              key={flavor.value}
              layoutId={`flavor-${flavor.value}`}
            >
              <Button
                variant={selectedFlavor === flavor.value ? 'default' : 'ghost'}
                onClick={() => handleFlavorSelect(flavor.value)}
                size="sm"
                className={flavor.className}
              >
                <img
                  className="size-4"
                  loading="eager"
                  src={flavor.iconWhite}
                  alt={flavor.label}
                />
                {flavor.label.charAt(0).toUpperCase() + flavor.label.slice(1)}
              </Button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  </div>
);