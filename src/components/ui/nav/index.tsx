import { useState } from 'react';
import { motion } from 'framer-motion';
import { menuSlide } from './anim';
import Link from '@/components/ui/link';
import Curve from '@/components/ui/curve';

interface Props {
  children: React.ReactNode;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  items: { title: string; href: string }[];
}

export default function Index({ children, setIsActive, items }: Props) {
  const [selectedIndicator, setSelectedIndicator] = useState('');

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="menu border-r border-gray-500/50 shadow-lg"
      >
        <nav className="body z-50 justify-start">
          <div className="flex w-full items-center justify-center pt-10">{children}</div>
          <ul className="nav pt-20">
            {items.map((data, index) => (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
                setIsActive={setIsActive}
              />
            ))}
          </ul>
        </nav>
        <div onClick={() => setIsActive(false)}>
          <Curve />
        </div>
      </motion.div>
      <div className="fixed top-0 left-0 z-40 size-full" onClick={() => setIsActive(false)} />
    </>
  );
}
