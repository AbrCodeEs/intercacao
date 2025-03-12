// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Intercacao';
export const SITE_DESCRIPTION = 'Bienvenido a la intercacao';
import type { LucideIcon } from 'lucide-react';

type SortOption = 'rated' | 'fermented' | 'certified' | 'awarded' | 'creole';
type FlavorOption =
  | 'Fruity Sweet'
  | 'Fruity Citrus'
  | 'Floral'
  | 'Criollo'
  | 'Cocoa'
  | 'Wood'
  | 'Spices';
type CountryOption = 'Colombia' | 'Peru' | 'Venezuela';

enum Flavor {
  Fruity_Sweet = 'Fruity Sweet',
  Fruity_Citrus = 'Fruity Citrus',
  Floral = 'Floral',
  Criollo = 'Criollo',
  Cocoa = 'Cocoa',
  Wood = 'Wood',
  Spices = 'Spices',
}

enum Country {
  Colombia = 'Colombia',
  Peru = 'Peru',
  Venezuela = 'Venezuela',
}
enum Sort {
  rated = 'rated',
  fermented = 'fermented',
  certified = 'certified',
  awarded = 'awarded',
  creole = 'creole',
}

interface FilterOptionSortItems {
  label: string;
  value: SortOption;
  key: string;
}

interface FilterOptionFlavorItems {
  label: string;
  value: FlavorOption;
  icon: React.ReactNode;
  className: string;
}

interface FilterOptionCountryItems {
  label: string;
  value: CountryOption;
}

export type {
  SortOption,
  FlavorOption,
  CountryOption,
  FilterOptionSortItems,
  FilterOptionFlavorItems,
  FilterOptionCountryItems,
};

export { Sort, Flavor, Country };
