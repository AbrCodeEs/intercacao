'use client';
import { useState, useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';

import Nav from '@/components/ui/nav';

function Header({
  children,
  items,
  isCloseButton = false,
}: {
  children: React.ReactNode;
  items: { title: string; href: string }[];
  isCloseButton?: boolean;
}) {
  const [isActive, setIsActive] = useState(false);

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
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="button !z-[60]"
      >
        <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
      </div>
      <div className="absolute top-0 right-0 z-50">
        <ul className="flex w-full flex-col justify-end gap-1 px-5 py-5">
          <li
            onClick={() => changeLanguage('es')}
            className={`cursor-pointer rounded-lg px-2.5 py-2 ${currentLang === 'es' ? 'bg-black font-bold text-white' : 'bg-gray-400 opacity-50'}`}
          >
            es
          </li>
          <li
            onClick={() => changeLanguage('eng')}
            className={`cursor-pointer rounded-lg px-2.5 py-2 ${currentLang === 'eng' ? 'bg-black font-bold text-white' : 'bg-gray-400 opacity-50'}`}
          >
            en
          </li>
        </ul>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <Nav setIsActive={setIsActive} items={items} isCloseButton={isCloseButton}>
            {children}
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
}

export { Header };
