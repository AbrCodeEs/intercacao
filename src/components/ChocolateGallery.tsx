"use client"

import { useState } from 'react'
import { chocolateBars, type ChocolateBar } from '@/data/chocolateBars'
import { ChocolateCard } from '@/components/ChocolateCard'
import { Button } from "@/components/ui/button"

import type { SortOption, FlavorOption, CountryOption, FilterOptionSortItems, FilterOptionFlavorItems, FilterOptionCountryItems } from '@/consts'
import { Sort, Flavor, Country } from '@/consts'
import { Cherry as Fruit, Citrus, Flower, Coffee, SpadeIcon as Spices, TreePine as Tree, Star, Leaf, Award, Trophy, Circle, icons } from 'lucide-react'

import { motion, AnimatePresence } from 'framer-motion'

const TypesSortOption = [{
  label: 'Valorado',
  value: 'rated',
  icon: <Star className="w-6 h-6 mr-1 fill-current text-amber-400" />
}, {
  label: 'Fermentado',
  value: 'fermented',
  icon: <Leaf className="w-6 h-6 mr-1 fill-current text-green-400" />
}, {
  label: 'Certificado',
  value: 'certified',
  icon: <Award className="w-6 h-6 mr-1 fill-current text-yellow-400" />
}, {
  label: 'Premiado',
  value: 'awarded',
  icon: <Trophy className="w-6 h-6 mr-1 fill-current text-yellow-400" />
},
{
  label: 'Criollo',
  value: 'creole',
  icon: <Circle className="w-6 h-6 mr-1 fill-current text-yellow-400" />
}]

const CountriesSortOption = [{
  label: 'Colombia',
  value: 'Colombia'
}, {
  label: 'Peru',
  value: 'Peru'
}, {
  label: 'Venezuela',
  value: 'Venezuela'
}]

const FlavorsSortOption = [{
  label: 'Afrutado dulce',
  value: 'Fruity Sweet',
  className: 'bg-fruity-sweet',
  icon: <Fruit className="w-4 h-4" />,
}, {
  label: 'Afrutado cítrico',
  value: 'Fruity Citrus',
  className: 'bg-fruity-citrus',
  icon: <Citrus className="w-4 h-4" />,
}, {
  label: 'Aflorado',
  value: 'Flower',
  className: 'bg-flower',
  icon: <Flower className="w-4 h-4" />,
}, {
  label: 'Acriollado',
  value: 'Creole',
  className: 'bg-creole',
  icon: <Circle className="w-4 h-4" />,
}, {
  label: 'Cacao',
  value: 'Cocoa',
  className: 'bg-cocoa',
  icon: <Coffee className="w-4 h-4" />,
}, {
  label: 'Boscoso',
  value: 'Wood',
  className: 'bg-wood',
  icon: <Tree className="w-4 h-4" />,
}, {
  label: 'Especias',
  value: 'Spices',
  className: 'bg-spices',
  icon: <Spices className="w-4 h-4" />,
}]

export function ChocolateGallery() {
  const [sortBy, setSortBy] = useState<SortOption>('rated')
  const [selectedFlavors, setSelectedFlavors] = useState<FlavorOption[]>([])
  const [selectedCountries, setSelectedCountries] = useState<CountryOption[]>([])

  const filteredChocolates = chocolateBars
    .filter(chocolate =>
    { 
      if (selectedFlavors.length) {
        return selectedFlavors.some(flavor => chocolate.flavors.includes(flavor))
      }

      if (selectedCountries.length) {
        return selectedCountries.includes(chocolate.country as CountryOption)
      }

      return true
    }
    )
    .sort((a, b) => {
      if (sortBy === Sort.rated)  return b.rating - a.rating
      if (sortBy === Sort.fermented)  return b.fermented - a.fermented
      if (sortBy === Sort.certified)  return b.certified - a.certified
      if (sortBy === Sort.awarded)   return b.awarded - a.awarded
      if (sortBy === Sort.creole) return b.creole - a.creole
      return 0
    })

  const handleFlavorToggle = (flavor: FlavorOption) => {
    setSelectedFlavors(prev =>
      prev.includes(flavor) ? prev.filter(f => f !== flavor) : [...prev, flavor]
    )
  }

  const handleCountryToggle = (country: CountryOption) => {
    setSelectedCountries(prev =>
      prev.includes(country) ? prev.filter(c => c !== country) : [...prev, country]
    )
  }

  const getFilteredChocolates = (cocoaItems: ChocolateBar[]) => {
    // Primero aplicamos todos los filtros necesarios
    let filtered = cocoaItems.filter(items => {
      // Filtrado basado en el criterio de ordenamiento seleccionado

      if (selectedFlavors.includes(Flavor.Fruity_Sweet)) 
        return items.ingredients.fruity_sweet > 0
      if (selectedFlavors.includes(Flavor.Fruity_Citrus)) 
        return items.ingredients.fruity_citrus > 0
      if (selectedFlavors.includes(Flavor.Floral))  
        return items.ingredients.floral > 0
      if (selectedFlavors.includes(Flavor.Criollo))   
        return items.ingredients.criollo > 0
      if (selectedFlavors.includes(Flavor.Cocoa))  
        return items.ingredients.cocoa > 0
      if (selectedFlavors.includes(Flavor.Wood))  
        return items.ingredients.wood > 0
      if (selectedFlavors.includes(Flavor.Spices))  
        return items.ingredients.spices > 0

      if (sortBy === Sort.rated)  
        return items.rating > 0
      if (sortBy === Sort.fermented)  
        return items.fermented > 0
      if (sortBy === Sort.certified)  
        return items.certified > 0
      if (sortBy === Sort.awarded)   
        return items.awarded > 0
      if (sortBy === Sort.creole) 
        return items.creole > 0

      if (selectedCountries.includes(Country.Colombia)) 
        return items.country === Country.Colombia
      if (selectedCountries.includes(Country.Peru)) 
        return items.country === Country.Peru
      if (selectedCountries.includes(Country.Venezuela))   
        return items.country === Country.Venezuela

      return true
    })

    // Aseguramos que los filtros se aplican correctamente
    return filtered
  }

  return (
    <div className="p-5">

      <div className="space-y-4 py-5">
        <div className='flex flex-col justify-center items-center gap-10 p-3 border-t border-gray-100/20'>
          <h2 className="text-xl text-center text-white font-semibold flex items-center gap-2">
            Ordenar por:
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-2">
            {(TypesSortOption as FilterOptionSortItems[]).map(option => (
              <Button
                key={option.value}
                variant={sortBy === option.value ? "default" : "ghost"}
                onClick={() => setSortBy(option.value as SortOption)}
                size="sm"
                className={sortBy === option.value ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90 hover:text-white"}
              >
                {option.icon}
                {option.label.charAt(0).toUpperCase() + option.label.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-10 p-3 border-t border-gray-100/20'>
          <h2 className="text-xl text-center text-white font-semibold  flex items-center gap-2">
            Mundo de sabores
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-2">
            {(FlavorsSortOption as FilterOptionFlavorItems[]).map(flavor => (
              <Button
                key={flavor.value}
                variant={selectedFlavors.includes(flavor.value) ? "default" : "ghost"}
                onClick={() => handleFlavorToggle(flavor.value as FlavorOption)}
                size="sm"
                className={selectedFlavors.includes(flavor.value) ? `${flavor.className} text-black` : "bg-black text-white hover:bg-black/90 hover:text-white"}
              >
                {flavor.icon}
                {flavor.label.charAt(0).toUpperCase() + flavor.label.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-10 p-3 border-t border-gray-100/20'>
          <h2 className="text-xl text-center text-white font-semibold flex items-center gap-2">
            País
          </h2>
          <div className="flex flex-wrap gap-2">
            {(CountriesSortOption as FilterOptionCountryItems[]).map(country => (
              <Button
                key={country.value}
                variant={selectedCountries.includes(country.value) ? "default" : "ghost"}
                onClick={() => handleCountryToggle(country.value as CountryOption)}
                size="sm"
                className={selectedCountries.includes(country.value) ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90 hover:text-white"}
              >
                {country.label.charAt(0).toUpperCase() + country.label.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>
       
      <motion.div 
        className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 xl:gap-4 lg:gap-4 md:gap-4 gap-2"
        layout
      >
        <AnimatePresence initial={false}>
          {getFilteredChocolates(filteredChocolates).map(chocolate => (
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
  )
}
