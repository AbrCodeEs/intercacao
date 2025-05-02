type SortOption = 'rated' | 'fermented' | 'certified' | 'awarded' | 'creole';

type FlavorOption =
  | 'Fruity Sweet'
  | 'Fruity Citrus'
  | 'Flower'
  | 'Criollo'
  | 'Cocoa'
  | 'Wood'
  | 'Spices';

type CountryOption = 'Colombia' | 'Peru' | 'Venezuela';

enum Flavor {
  Fruity_Sweet = 'Fruity Sweet',
  Fruity_Citrus = 'Fruity Citrus',
  Floral = 'Flower',
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

/**
 * An object representing a type of chocolate bar.
 *
 * @property {string} id - Unique identifier for the bar.
 * @property {string} name - Name of the bar.
 * @property {string} image - URL of the bar's image.
 * @property {number} rating - Average user rating of the bar out of 5.
 * @property {number} fermented - Number of days the bar's cocoa beans were fermented.
 * @property {number} certified - Number of certifications the bar has received.
 * @property {number} awarded - Number of awards the bar has received.
 * @property {number} creole - Percentage of creole cocoa in the bar.
 * @property {string[]} flavors - List of flavor notes in the bar.
 * @property {string} country - Country of origin of the bar.
 * @property {string} url - URL to the bar's webpage.
 * @property {boolean} [disabled] - Whether or not the bar is available for purchase.
 * @property {Object.<string, number>} ingredients - Object of ingredients and their
 *   respective percentages.
 */
interface CocoaBar {
  id: string;
  name: string;
  image: string;
  rating: number;
  fermented: number;
  certified: number;
  awarded: number;
  creole: number;
  flavors: string[];
  country: string;
  url: string;
  disabled?: boolean;
  ingredients: {
    [key: string]: number;
  };
  watermark?: boolean;
}

export type {
  SortOption,
  FlavorOption,
  CountryOption,
  FilterOptionSortItems,
  FilterOptionFlavorItems,
  FilterOptionCountryItems,
  CocoaBar,
};

export { Sort, Flavor, Country };
