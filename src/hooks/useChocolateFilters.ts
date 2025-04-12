// hooks/useChocolateFilters.ts
import { useState } from 'react';

import type{ SortOption, FlavorOption } from '@/types/home';

export const useChocolateFilters = () => {
  const [sortBy, setSortBy] = useState<SortOption | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorOption | null>(null);
  const [isFlavorPanelOpen, setIsFlavorPanelOpen] = useState(false);
  const [isTypePanelOpen, setIsTypePanelOpen] = useState(false);

  const handleSortSelect = (sort: SortOption) => {
    // Actualización funcional del estado
    setSortBy((currentSort) => {
      const newSort = currentSort === sort ? null : sort;
      // Resetear estados relacionados
      if (newSort !== null) {
        setSelectedFlavor(null);
        setIsFlavorPanelOpen(false);
      }
      return newSort;
    });
  };

  const handleFlavorSelect = (flavor: FlavorOption) => {   
    console.log(flavor);
    // Actualización funcional del estado
    setSelectedFlavor((currentFlavor) => {
      const newFlavor = currentFlavor === flavor ? null : flavor;
      // Resetear estados relacionados
      if (newFlavor !== null) {
        setSortBy(null);
        setIsTypePanelOpen(false);
      }

      return newFlavor;
    });
  };

  const togglePanel = (panelType: 'flavor' | 'type') => {
    if (panelType === 'flavor') {
      setIsFlavorPanelOpen((prev) => !prev);
      setIsTypePanelOpen(false);
    } else {
      setIsTypePanelOpen((prev) => !prev);
      setIsFlavorPanelOpen(false);
    }
  };

  return {
    sortBy,
    selectedFlavor,
    isFlavorPanelOpen,
    isTypePanelOpen,
    handleSortSelect,
    handleFlavorSelect,
    togglePanel,
    setIsFlavorPanelOpen,
    setIsTypePanelOpen,
  };
};
