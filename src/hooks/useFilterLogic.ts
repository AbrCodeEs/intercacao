import { useState, useMemo, useCallback } from 'react';
import type { BeeBar, BeeBarTypes, BeeBarCategories } from '@/types/actions';

export const useFilterLogic = (bar: BeeBar[], types: BeeBarTypes[]) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<BeeBarCategories[]>([]);

  const filteredItems = useMemo(() => {
    return bar.filter((item) => {
      const typeMatch =
        selectedTypes.length === 0 ||
        (item.bee_bar_type && selectedTypes.includes(item.bee_bar_type.name));

      const categoryMatch =
        selectedCategories.length === 0 ||
        (item.bee_bar_category && selectedCategories.includes(item.bee_bar_category.name));

      return typeMatch && categoryMatch;
    });
  }, [bar, selectedTypes, selectedCategories]);

  const toggleFilter = useCallback((type: 'type' | 'category', value: string) => {
    const setState = type === 'type' ? setSelectedTypes : setSelectedCategories;
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  }, []);

  const updateAvailableCategories = useCallback(() => {
    const tiposSeleccionados = types.filter((type) => {
      const hasCategories = (type.bee_bar_categories?.length || 0) > 0;
      const isSelected = selectedTypes.includes(type.name);
      return isSelected && hasCategories;
    });

    const nuevasCategorias = tiposSeleccionados
      .flatMap((type) => type.bee_bar_categories || [])
      .reduce<BeeBarCategories[]>((acc, current) => {
        if (!acc.some((item) => item.name === current.name)) {
          acc.push(current);
        }
        return acc;
      }, []);

    setAvailableCategories(nuevasCategorias);
    setSelectedCategories((prev) =>
      prev.filter((cat) => nuevasCategorias.some((newCat) => newCat.name === cat)),
    );
  }, [selectedTypes, types]);

  return {
    filteredItems,
    selectedTypes,
    selectedCategories,
    availableCategories,
    toggleFilter,
    updateAvailableCategories,
  };
}; 