import { motion } from 'framer-motion';

export const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {[1, 2, 3].map((item) => (
        <motion.div
          key={item}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col gap-4 rounded-xl bg-gray-800/50 p-4"
        >
          <div className="aspect-square w-full animate-pulse rounded-xl bg-gray-700" />
          <div className="space-y-2">
            <div className="h-6 w-3/4 animate-pulse rounded bg-gray-700" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-700" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
