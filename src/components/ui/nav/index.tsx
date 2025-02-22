import { useState, useEffect } from 'react';
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
  const [currentLang, setCurrentLang] = useState('es');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathSegments = window.location.pathname.split('/');
      setCurrentLang(pathSegments[1] || 'es');
    }
  }, []);

  const changeLanguage = (lang: string) => {
    if (typeof window !== 'undefined') {
      const pathSegments = window.location.pathname.split('/');
      pathSegments[1] = lang;
      const newPath = pathSegments.join('/');

      // Forzar recarga completa
      window.location.href = newPath;
    }
  };

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="menu"
      >
        <nav className="body justify-between">
          <div className="flex w-full items-center justify-center pt-10">{children}</div>
          <ul className="nav">
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

          <ul className="flex w-full justify-end gap-5 p-10">
            <li
              onClick={() => changeLanguage('es')}
              className={`cursor-pointer ${currentLang === 'es' ? 'font-bold' : ''}`}
            >
              es
            </li>
            <li
              onClick={() => changeLanguage('en')}
              className={`cursor-pointer ${currentLang === 'en' ? 'font-bold' : ''}`}
            >
              en
            </li>
          </ul>
        </nav>
        <Curve />
      </motion.div>
      <div className="fixed top-0 left-0 size-full" onClick={() => setIsActive(false)} />
    </>
  );
}
