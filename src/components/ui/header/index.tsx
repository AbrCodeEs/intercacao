'use client';
import { useState, useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';

import Nav from '@/components/ui/nav';

function Header({
  children,
  items,
}: {
  children: React.ReactNode;
  items: { title: string; href: string }[];
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
      <div className='absolute top-0 right-0 z-50'>
        <ul className="flex flex-col w-full justify-end gap-1 px-5 py-5">
          <li
            onClick={() => changeLanguage('es')}
            className={`cursor-pointer py-2 px-2.5 rounded-lg ${currentLang === 'es' ? 'font-bold bg-black text-white' : 'bg-gray-400 opacity-50'}`}
          >
            es
          </li>
          <li
            onClick={() => changeLanguage('en')}
            className={`cursor-pointer py-2 px-2.5 rounded-lg ${currentLang === 'en' ? 'font-bold bg-black text-white' : 'bg-gray-400 opacity-50'}`}
          >
            en
          </li>
        </ul>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <Nav setIsActive={setIsActive} items={items}>
            {children}
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
}

export { Header };
