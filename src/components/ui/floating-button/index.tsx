'use client';
import { cn } from '@/assets/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface FloatingButtonPanelProps {
  items: Array<{
    icon: React.ReactNode;
    onClick: () => void;
  }>;
  children: React.ReactNode;
  mainButtonIcon?: React.ReactNode;
  buttonClassName?: string;
  panelClassName?: string;
  panelItemClassName?: string;
  buttonVisible?: boolean;
  panelVisible?: boolean;
  direction?: 'up' | 'left'; // Nueva prop
}

export const FloatingButtonPanel = ({
  children,
  items,
  mainButtonIcon,
  buttonClassName = '',
  panelClassName = '',
  panelItemClassName = '',
  buttonVisible = true,
  panelVisible = false,
  direction = 'up', // Valor por defecto
}: FloatingButtonPanelProps) => {
  const [isPanelVisible, setIsPanelVisible] = useState(panelVisible);
  const [isButtonVisible, setIsButtonVisible] = useState(buttonVisible);
  const containerRef = useRef(null);
  const hasInitialDisplay = useRef(false);

  const isInView = useInView(containerRef, {
    margin: '0px 0px -50px 0px',
    amount: 'some',
  });

  useEffect(() => {
    if (isInView) {
      setIsButtonVisible(true);
      if (!hasInitialDisplay.current) {
        panelVisible && setIsPanelVisible(true);
        hasInitialDisplay.current = true;
      }
    } else {
      setIsButtonVisible(false);
      setIsPanelVisible(false);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative">
      {children}
      <AnimatePresence>
        {isButtonVisible && (
          <motion.button
            onClick={() => setIsPanelVisible(!isPanelVisible)}
            className={cn(
              `fixed right-4 bottom-4 z-50 flex items-center justify-center rounded-full p-4 shadow-lg ${buttonClassName}`,
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {mainButtonIcon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPanelVisible && (
          <motion.div
            initial={{
              opacity: 0,
              y: direction === 'up' ? 100 : 0,
              x: direction === 'left' ? 100 : 0,
            }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{
              opacity: 0,
              y: direction === 'up' ? 100 : 0,
              x: direction === 'left' ? 100 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={cn(
              `fixed right-5 bottom-20 z-40 flex items-center gap-2 ${panelClassName}`,
              direction === 'up' ? 'flex-col' : 'right-20 bottom-4 flex-row',
            )}
          >
            {items.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  item.onClick();
                  //   setIsPanelVisible(false);
                }}
                className={cn(
                  `rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-zinc-100 ${panelItemClassName}`,
                )}
                initial={{
                  scale: 0,
                  y: direction === 'up' ? 50 : 0,
                  x: direction === 'left' ? 50 : 0,
                }}
                animate={{
                  scale: 1,
                  y: 0,
                  x: 0,
                }}
                exit={{
                  scale: 0,
                  y: direction === 'up' ? 50 : 0,
                  x: direction === 'left' ? 50 : 0,
                }}
                transition={{
                  type: 'spring',
                  delay: index * 0.1,
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="-scale-10">{item.icon}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
