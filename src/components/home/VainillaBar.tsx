'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Snowflake, Coffee } from 'lucide-react';
import { getBeeBarTypes, getBeeBar } from '@/api/post';
import type { BeeBar, BeeBarCategories, BeeBarTypes } from '@/types/actions';
import mandarina from '@/images/home/beeBar/MANDARINA.webp';
import miel from '@/images/home/beeBar/MIEL.webp';
import vainilla from '@/images/home/beeBar/VAINILLA.webp';
import { cn } from '@/lib/cn';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from '@/components/ui/carousel/carousel'; // Asegúrate de tener la ruta correcta

import yeih from '@/images/global/logo-yeih.webp';

interface MenuItemProps {
  item: BeeBar;
  apiUrl: string;
}

interface VainillaBarProps {
  trans: {
    bar: {
      img: { src: string; alt: string };
      title: string;
      description: string[];
    };
  };
}

// Animaciones reutilizables
const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
};

const MotionDiv = motion.div;

interface MenuItemProps {
  item: BeeBar;
  apiUrl: string;
}

const MenuItem = ({ item, apiUrl }: MenuItemProps) => {
  const getCategoryIcon = () => {
    if (!item.bee_bar_category) return null;
    const categoryName = item.bee_bar_category.name.toLowerCase();

    return categoryName.includes('frio') ? (
      <Snowflake className="text-3xl text-blue-400" />
    ) : categoryName.includes('caliente') ? (
      <Coffee className="text-3xl text-red-400" />
    ) : categoryName.includes('Yeih producto') ?
      <img src={yeih.src} alt="Yeih" className="text-3xl text-red-400" />
      : null;
  };

  return (
    <MotionDiv
      className="relative flex w-full flex-shrink-0 flex-col gap-4 px-2 xl:basis-1/3"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative flex flex-col gap-4">
        <img
          src={`${apiUrl}${item.media[0]?.url || item.media[0].url}`}
          alt={item.media[0].alternativeText || item.name}
          className="aspect-square w-full rounded-xl object-cover xl:aspect-[16/12]"
          loading="lazy"
          decoding="async"
        />
        {(item.bee_bar_category && getCategoryIcon()) && (
          <div className="absolute right-5 bottom-5 rounded-full bg-[#3c5548]/20 p-2 backdrop-blur-sm">
            {getCategoryIcon()}
          </div>
        )}
      </div>

      <div className="px-5 xl:px-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-300">{item.name}</h1>
        </div>
        <p className="text-start text-gray-100">{item.description}</p>
      </div>
    </MotionDiv>
  );
};

export const VainillaBar = ({ trans }: VainillaBarProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bar, setBar] = useState<BeeBar[]>([]);
  const [types, setTypes] = useState<BeeBarTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = import.meta.env.PUBLIC_STRAPI_URL;

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  // Estado para categorías disponibles basadas en tipos seleccionados
  const [availableCategories, setAvailableCategories] = useState<BeeBarCategories[]>([]);
  const [deviceType, setDeviceType] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Función de filtrado
  const filteredItems = bar.filter((item) => {
    const typeMatch =
      selectedTypes.length === 0 ||
      (item.bee_bar_type && selectedTypes.includes(item.bee_bar_type.name));

    const categoryMatch =
      selectedCategories.length === 0 ||
      (item.bee_bar_category && selectedCategories.includes(item.bee_bar_category.name));

    return typeMatch && categoryMatch;
  });

  const toggleFilter = (type: 'type' | 'category', value: string) => {
    const setState = type === 'type' ? setSelectedTypes : setSelectedCategories;
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    );
  };

  // Efecto para actualizar categorías disponibles cuando cambian los tipos seleccionados
  useEffect(() => {
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

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
        setItemsPerPage(1);
      } else if (width >= 768 && width < 1024) {
        setDeviceType('tablet');
        setItemsPerPage(2);
      } else {
        setDeviceType('desktop');
        setItemsPerPage(3);
      }
    };

    // Verificar al montar el componente
    checkDevice();

    // Verificar al redimensionar la ventana
    const handleResize = () => {
      checkDevice();
    };

    window.addEventListener('resize', handleResize);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBeeBar();
        const types = await getBeeBarTypes();
        setBar(data);
        setTypes(types);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-10 text-gray-200">Loading...</div>;
  if (error) return <div className="p-10 text-red-400">Error: {error}</div>;

  return (
    // <div className="container mx-auto flex w-full -translate-y-11 flex-col rounded-[2.5rem] bg-[#3c5548] p-10">
    //   <div className="flex flex-col items-center gap-5 text-zinc-950 md:text-center xl:text-center">
    //     <div className="flex h-auto w-full flex-col items-center justify-center gap-5">
    //       <img
    //         loading="eager"
    //         src={trans.bar.img.src}
    //         alt={trans.bar.img.alt}
    //         className="size-50 rounded-full md:size-50 xl:size-60"
    //         width="1000"
    //         height="1000"
    //       />

    //       <h1 className="w-1/2 text-center text-2xl font-bold text-gray-200 capitalize lg:text-3xl xl:text-4xl">
    //         {trans.bar.title}
    //       </h1>

    //       <p className="text-center text-lg text-gray-200">
    //         {trans.bar.description.map((description: string, index: number) => (
    //           <span key={index}>{description}</span>
    //         ))}
    //       </p>

    //       <img
    //         loading="eager"
    //         src={trans.bar.banner.src}
    //         alt={trans.bar.banner.alt}
    //         className="size-90 rounded-2xl xl:size-130"
    //         width="1000"
    //         height="1000"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="relative flex w-full -translate-y-11 flex-col rounded-[2.5rem] bg-[#3c5548] py-10 xl:p-10">
      <div className="flex flex-col items-center gap-5 text-zinc-950 md:text-center xl:text-center">
        <div className="flex h-auto w-full flex-col items-center justify-center gap-5">
          <motion.img
            loading="eager"
            src={trans.bar.img.src}
            alt={trans.bar.img.alt}
            className="size-50 rounded-full md:size-50 xl:size-60"
            width={1000}
            height={1000}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.h1
            className="w-1/2 text-center text-2xl font-bold text-gray-200 lg:text-3xl xl:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {trans.bar.title}
          </motion.h1>

          <motion.p
            className="px-10 text-center text-lg text-gray-200 xl:p-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {trans.bar.description.join(' ')}
          </motion.p>

          {/* Filtros */}
          <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4">
            <h2 className="flex w-full items-center gap-2 text-center text-xl font-semibold text-white before:block before:h-px before:w-full before:border-t before:border-gray-100/20 before:content-[''] after:block after:h-px after:w-full after:border-t after:border-gray-100/20 after:content-['']">
              <span className="w-80">Order by type:</span>
            </h2>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={`type-${type.name}`}
                    onClick={() => toggleFilter('type', type.name)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 transition-colors ${selectedTypes.includes(type.name)
                        ? 'bg-yellow-300 text-gray-800'
                        : 'bg-gray-700/50 text-gray-200 hover:bg-gray-700'
                      }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro de categorías (solo si hay tipos seleccionados) */}
            {availableCategories.length > 0 && (
              <>
                <h2 className="flex w-full items-center gap-2 text-center text-xl font-semibold text-white before:block before:h-px before:w-full before:border-t before:border-gray-100/20 before:content-[''] after:block after:h-px after:w-full after:border-t after:border-gray-100/20 after:content-['']">
                  <span className="w-120">Order by category:</span>
                </h2>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-wrap gap-2">
                    {availableCategories.map((category) => (
                      <button
                        key={`category-${category.name}`}
                        onClick={() => toggleFilter('category', category.name)}
                        className={`flex items-center gap-2 rounded-full px-4 py-2 transition-colors ${selectedCategories.includes(category.name)
                            ? 'bg-yellow-300 text-gray-800'
                            : 'bg-gray-700/50 text-gray-200 hover:bg-gray-700'
                          }`}
                      >
                        {category.name.toLowerCase() === 'frio' && <Snowflake />}
                        {category.name.toLowerCase() === 'caliente' && <Coffee />}
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <div
            ref={containerRef}
            className="hide-scrollbar container m-auto flex w-full gap-4 overflow-x-auto overflow-y-hidden py-5 xl:p-5"
            style={{ scrollBehavior: 'smooth' }}
          >
            <Carousel initialIndex={0} className="relative w-full">
              <CarouselContent dataCount={filteredItems.length} itemsPerPage={itemsPerPage} className="py-4">
                {filteredItems.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="h-130 w-full lg:basis-1/3" // 3 items por fila
                  >
                    <MenuItem item={item} apiUrl={apiUrl} />
                  </CarouselItem>
                ))}
                {filteredItems.length === 0 && (
                  <div className="w-full py-8 text-center text-gray-400">
                    No se encontraron productos con los filtros seleccionados
                  </div>
                )}
              </CarouselContent>

              {/* Controles de navegación */}
              {deviceType === 'mobile' ? (
                <CarouselNavigation
                  dataCount={filteredItems.length}
                  classNameButton="bg-[#3c5548] hover:bg-[#2d4035] mx-3 xl:opacity-100 lg:opacity-100 md:opacity-100 opacity-0"
                />
              ) : (
                <CarouselNavigation classNameButton="bg-[#3c5548] hover:bg-[#2d4035] mx-3 xl:opacity-100 lg:opacity-100 md:opacity-100 opacity-0" />
              )}

              {/* Indicadores */}
              {deviceType === 'mobile' ? (
                <CarouselIndicator dataCount={filteredItems.length} className="-bottom-5" />
              ) : (
                <CarouselIndicator className="-bottom-5" />
              )}
            </Carousel>
          </div>
        </div>
      </div>

      <DecorativeImage
        src={mandarina.src}
        alt="Mandarina"
        positionClass="right-2 -bottom-18 w-20"
      />
      <DecorativeImage src={miel.src} alt="Miel" positionClass="top-65 right-10 w-20" />
      <DecorativeImage
        src={vainilla.src}
        alt="Vainilla"
        positionClass="xl:top-105 top-190 left-10 w-20"
      />
    </div>
  );
};

const DecorativeImage = ({
  src,
  alt,
  positionClass,
}: {
  src: string;
  alt: string;
  positionClass: string;
}) => (
  <motion.img
    loading="eager"
    src={src}
    alt={alt}
    className={cn('absolute h-auto xl:w-30', positionClass)}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: 'spring', stiffness: 100 }}
  />
);
