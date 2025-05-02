'use client';

import { chocolateBars } from '@/data/home/cocoa';
import { Sort, type SortOption, type FlavorOption } from '@/types/home';

export const useFilteredChocolates = (
  lang: string,
  sortBy: SortOption | null,
  selectedFlavor: FlavorOption | null,
) => {
  const processedData = chocolateBars
    .map((cocoa) => {
      let url = cocoa.url;

      if (typeof url !== 'string') url = '';

      if (!url.startsWith('http://')) {
        url = `/${lang}/${url}`;
      }

      console.log(url)

      return { ...cocoa, url };
    })
    .filter((cocoa) => !cocoa.disabled);

  const filteredData = processedData
    .filter((item) => {
      const flavorFilter =
        selectedFlavor && item.flavors.includes(selectedFlavor)
          ? item.ingredients[
              selectedFlavor.toLowerCase().replace(' ', '_') as keyof typeof item.ingredients
            ] > 0
          : true;

      const sortFilter = {
        [Sort.rated]: item.rating > 0,
        [Sort.fermented]: item.fermented > 0,
        [Sort.certified]: item.certified,
        [Sort.awarded]: item.awarded,
        [Sort.creole]: item.creole > 0,
      }[sortBy];

      return (flavorFilter && sortFilter) || true;
    })
    .sort((a, b) => {
      if (selectedFlavor) {
        const flavorKey = selectedFlavor
          .toLowerCase()
          .replace(' ', '_') as keyof typeof a.ingredients;
        return b.ingredients[flavorKey] - a.ingredients[flavorKey];
      }

      return sortBy
        ? {
            [Sort.rated]: b.rating - a.rating,
            [Sort.fermented]: b.fermented - a.fermented,
            [Sort.certified]: b.certified ? 1 : -1,
            [Sort.awarded]: b.awarded ? 1 : -1,
            [Sort.creole]: b.creole - a.creole,
          }[sortBy]
        : 0;
    });

  return filteredData;
};
