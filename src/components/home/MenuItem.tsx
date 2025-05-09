import { memo, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Coffee } from 'lucide-react';
import type { BeeBar } from '@/types/actions';
import yeih from '@/images/global/logo-yeih.webp';

interface MenuItemProps {
  item: BeeBar;
  apiUrl: string;
}

const cardVariants = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
};

const MenuItem = memo(({ item, apiUrl }: MenuItemProps) => {
  const getCategoryIcon = useCallback(() => {
    if (!item.bee_bar_category) return null;
    const categoryName = item.bee_bar_category.name.toLowerCase();

    if (categoryName.includes('frio')) {
      return <Snowflake className="text-3xl text-blue-400" />;
    }
    if (categoryName.includes('caliente')) {
      return <Coffee className="text-3xl text-red-400" />;
    }
    if (categoryName.includes('Yeih producto')) {
      return <img src={yeih.src} alt="Yeih" className="text-3xl text-red-400" />;
    }
    return null;
  }, [item.bee_bar_category]);

  const imageUrl = useMemo(() => {
    return `${apiUrl}${item.media[0]?.url || item.media[0].url}`;
  }, [apiUrl, item.media]);

  const imageAlt = useMemo(() => {
    return item.media[0].alternativeText || item.name;
  }, [item.media, item.name]);

  return (
    <motion.div
      className="relative flex w-full flex-shrink-0 flex-col gap-4 px-2 xl:basis-1/3"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative flex flex-col gap-4">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="aspect-square w-full rounded-xl object-cover xl:aspect-[16/12]"
          loading="lazy"
          decoding="async"
          width={400}
          height={400}
        />
        {item.bee_bar_category && getCategoryIcon() && (
          <div className="absolute right-5 bottom-5 rounded-full bg-[#3c5548]/20 p-2 backdrop-blur-sm">
            {getCategoryIcon()}
          </div>
        )}
      </div>

      <div className="px-5 xl:px-2">
        <div className="flex items-center justify-between">
          <h1 className="text-start text-2xl font-bold text-gray-300">{item.name}</h1>
        </div>
        <p className="text-start text-gray-100">{item.description}</p>
      </div>
    </motion.div>
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
