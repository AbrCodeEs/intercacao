"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import type { ChocolateBar } from '@/data/chocolateBars'
import { Cherry as Fruit, Citrus, Flower, Coffee, SpadeIcon as Spices, TreePine as Tree, Star, Leaf, Award, Trophy, Circle, Search } from 'lucide-react'
import type { SortOption } from '@/consts'
import { Sort, } from '@/consts'

import { motion } from 'framer-motion'
const iconMap: { [key: string]: React.ReactNode } = {
  fruity_sweet: <Fruit className="w-4 h-4" />,
  fruity_citrus: <Citrus className="w-4 h-4" />,
  flowers: <Flower className="w-4 h-4" />,
  cocoa: <Coffee className="w-4 h-4" />,
  spices: <Spices className="w-4 h-4" />,
  wood: <Tree className="w-4 h-4" />,
  citrus: <Fruit className="w-4 h-4" />,
  creole: <Circle className="w-4 h-4" />
}

const IconTraslation = {
  fruity_sweet: 'Afrutado dulce',
  fruity_citrus: 'Afrutado cítrico',
  flowers: 'Aflorado',
  creole: 'Acriollado',
  cocoa: 'Cacao',
  wood: 'Boscoso',
  spices: 'Especias'
}

export function ChocolateCard({ chocolate, sortBy }: { chocolate: ChocolateBar, sortBy: SortOption }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <Card
        className="w-full overflow-hidden relative group bg-chocolate-lightest"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative aspect-square"
          >
            <img
              src={chocolate.image || "/placeholder.svg"}
              alt={chocolate.name}
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t text-xl from-primary/80 to-transparent p-4 flex flex-col justify-start">

              {sortBy === Sort.rated && (
                <div className="flex items-center text-white">
                  <Star className="w-6 h-6 mr-1 fill-current text-amber-400" />
                  <span>{chocolate.rating.toFixed(1)}</span>
                </div>
              )}
              {sortBy === Sort.fermented && (
                <div className="flex items-center text-white">
                  <Leaf className="w-6 h-6 mr-1 fill-current text-green-400" />
                  <span>{chocolate.fermented.toFixed(1)}%</span>
                </div>
              )}
              {sortBy === Sort.certified && (
                <div className="flex items-center text-white">
                  <Award className="w-6 h-6 mr-1 fill-current text-amber-400" />
                  <span>{chocolate.certified}</span>
                </div>
              )}
              {sortBy === Sort.awarded && (
                <div className="flex items-center text-white">
                  <Trophy className="w-6 h-6 mr-1 fill-current text-amber-400" />
                  <span>{chocolate.awarded} Premios</span>
                </div>
              )}

              {sortBy === Sort.creole && (
                <div className="flex items-center text-white">
                  <Circle className="w-6 h-6 mr-1 fill-current text-amber-400" />
                  <span>{chocolate.creole}%</span>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div
            className="absolute inset-0 xl:bg-primary/55 lg:bg-primary/55 md:bg-primary/55 bg-primary/90 p-4 flex flex-col justify-center items-center text-secondary-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >

            <div className="space-y-2 text-center xl:w-3/4 lg:w-3/4 md:w-11/12 w-full">
              <div className="flex flex-wrap justify-center gap-1 mb-2 xl:block lg:block md:hidden hidden">
                <h3 className="text-3xl font-semibold text-white mb-1 ">{chocolate.name}</h3>
              </div>
              <p className="text-white text-md pt-2 xl:block lg:block md:hidden hidden">{chocolate.country}</p>
              <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                {Object.entries(chocolate.ingredients).map(([ingredient, amount]: [string, number]) => (
                  <div key={ingredient} className='flex gap-2 justify-start items-center'>
                    <div key={ingredient} className="flex flex-col items-center justify-center font-bold">
                      <p className={`bg-${ingredient.replace(/_/g, '-')} rounded-full text-black xl:size-20 lg:size-20 md:size-10 size-5 flex flex-col items-center justify-center`}>
                        {iconMap[ingredient] || ingredient}
                        <span className="text-md mt-1 text-center xl:block lg:block md:hidden hidden">{amount}%</span>
                      </p>
                    </div>
                    <div className='text-white text-md xl:block lg:block md:hidden hidden'>{IconTraslation[ingredient] || ingredient}</div>
                    <div className='text-white text-md xl:hidden lg:hidden md:block block'>{amount}%</div>
                  </div>
                ))}
                <a href="/es/chuao">
                  <div className='flex gap-2 justify-start items-center'>
                    <div className="flex flex-col items-center justify-center font-bold">
                      <p className='bg-red-500 rounded-full text-black xl:size-20 lg:size-20 md:size-10 size-5 flex flex-col items-center justify-center'>
                        <Search className="w-6 h-6" />
                      </p>
                    </div>
                    <div className='text-white text-md xl:block lg:block md:hidden hidden'>Ver mas</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
