import { useState } from 'react';
import { type SortOption, type FlavorOption } from '@/consts';

import type { CountryOption } from '@/consts';
export const useChocolateFilters = () => {
  const [sortBy, setSortBy] = useState<SortOption | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorOption | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);
  const [isFlavorPanelOpen, setIsFlavorPanelOpen] = useState(false);
  const [isTypePanelOpen, setIsTypePanelOpen] = useState(false);

  const handleSortSelect = (sort: SortOption) => {
    setSortBy(current => (current === sort ? null : sort));
    setSelectedFlavor(null);
    setSelectedCountry(null);
    setIsTypePanelOpen(false);
  };

  const handleFlavorSelect = (flavor: FlavorOption) => {
    setSelectedFlavor(current => (current === flavor ? null : flavor));
    setSortBy(null);
    setSelectedCountry(null);
    setIsFlavorPanelOpen(false);
  };

  return {
    sortBy,
    selectedFlavor,
    isFlavorPanelOpen,
    isTypePanelOpen,
    setIsFlavorPanelOpen,
    setIsTypePanelOpen,
    handleSortSelect,
    handleFlavorSelect,
    selectedCountry,
    setSelectedCountry
  };
};