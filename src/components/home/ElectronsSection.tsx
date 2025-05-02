'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import logoFundacionProsperi from '@/images/global/logo-fundacion-prosperi.webp';
import logoViveroWilfriedMerle from '@/images/global/logo-wilfried-merle.webp';
import logoRegresoAlAgro from '@/images/global/logo-regreso-al-agro.webp';
import logoRegresoDelAgua from '@/images/global/logo-regreso-al-agua.webp';
import logoElectronReligion from '@/images/global/logo-electron-religion.png';
import logoElectronMusicaDanza from '@/images/global/logo-electron-musica-y-dansa.png';
import logoElectronDeporte from '@/images/global/logo-electron-deporte.png';

import { cn } from '@/lib/cn';

const logos = [
  {
    name: 'Fundación Prosperi',
    src: logoFundacionProsperi.src,
    link: '#card-3',
    style: 'top-[48%] left-[26.5%] xl:top-[50%] xl:left-[42%] w-50 xl:w-70 bg-white',
  },
  {
    name: 'Vivero Wilfried Merle',
    src: logoViveroWilfriedMerle.src,
    link: '#card-1',
    style: 'top-[18%] left-[35%] xl:top-10 xl:left-[42%] w-30 xl:w-60',
  },
  {
    name: 'Regreso al Agro',
    src: logoRegresoAlAgro.src,
    link: '#card-2',
    style: 'top-[29%] right-[10%] xl:top-[22%] xl:right-[12%] w-34 xl:w-60',
  },
  {
    name: 'Regreso del Agua',
    src: logoRegresoDelAgua.src,
    link: '#card-0',
    style: 'top-[29%] left-[10%] xl:top-[22%] xl:left-[12%] w-30 xl:w-60',
  },
  {
    name: 'Electrón Religión',
    src: logoElectronReligion.src,
    link: '#card-4',
    style: 'bottom-[30%] left-[10%] xl:bottom-[22%] xl:left-[12%] w-30 xl:w-60',
  },
  {
    name: 'Electrón Música & Danza',
    src: logoElectronMusicaDanza.src,
    link: '#card-5',
    style: 'bottom-[25%] left-[35%] xl:bottom-10 xl:left-[42%] w-30 xl:w-60',
  },
  {
    name: 'Electrón Deporte',
    src: logoElectronDeporte.src,
    link: '#card-6',
    style: 'bottom-[30%] right-[10%] xl:bottom-[22%] xl:right-[12%] w-30 xl:w-60',
  },
];

export default function ElectronsAtomScroll() {
  // Referencia al contenedor
  const containerRef = useRef(null);
  // Extraemos el progreso del scroll del contenedor (0 a 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Define longitudes aproximadas de cada path (puedes ajustar si es necesario)
  const lengths = [1500, 1600, 1700]; // valores personalizados por path

  // Crear transforms para cada path
  const offsets = lengths.map((length) => useTransform(scrollYProgress, [0, 1], [length, 0]));

  return (
    // Contenedor alto que genera el efecto de scroll
    <div ref={containerRef} className="relative h-[300vh] w-full">
      {/* Contenedor "sticky" para mantener el fondo y los logos en vista durante 100vh */}
      <div className="fle x sticky top-0 h-screen w-full items-center justify-center bg-white">
        <div className="relative flex h-screen w-full items-center justify-center">
          {/* <img
            src={atomo.src}
            alt="Electrones FQP"
            className="w-360 h-180 rounded-xl object-fill object-center"
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 377.51 429.02"
            className="h-180 w-460"
          >
            <motion.path
              d="M249.69,214.75c-.1,38.64-2.2,77.34-8.66,115.49-3.3,19.1-7.65,38.09-14.59,56.26-5.38,13.51-11.75,27.68-23.37,37.15-15,11.71-29.31,2.58-38.46-11.23-36.48-57.22-41.07-187.65-35.93-255.65,3.46-42.76,11.54-104.18,35.33-140.11,9.35-13.82,24.04-23.16,39.28-11.09,11.61,9.6,17.96,23.8,23.31,37.37,6.88,18.2,11.2,37.2,14.49,56.31,6.43,38.16,8.54,76.87,8.6,115.5h0ZM249.29,214.75c.66-50.08-10.37-172.93-48.57-205.88-22.79-17.14-39.21,18.15-46.1,35.52-6.93,17.86-11.5,36.62-15.09,55.44-8.68,47.29-11.47,95.74-10.12,143.83,1.87,47.91,7.07,96.76,24.3,141.8,10.03,25.96,31.88,60.56,56.54,25.14,30.68-48.33,38.83-138.63,39.03-195.85h0Z"
              stroke="#432a18"
              strokeWidth={1}
              fill="none"
              strokeDasharray={lengths[0]}
              strokeDashoffset={offsets[0]}
            />
            <motion.path
              d="M219.22,267.53c-33.51,19.24-68.07,36.77-104.35,50.24-18.19,6.69-36.81,12.42-56.02,15.5-14.39,2.1-29.84,3.66-43.86-1.66-17.64-7.13-16.89-24.1-9.5-38.92,31.31-60.2,141.97-129.39,203.43-158.94,38.76-18.39,95.99-42.1,139.01-39.46,16.64,1.19,32.08,9.24,29.24,28.47-2.51,14.85-11.64,27.45-20.71,38.87-12.32,15.06-26.61,28.3-41.52,40.71-29.83,24.64-62.3,45.83-95.73,65.2h0ZM219.02,267.18c43.77-24.54,144.49-95.36,154.01-145,3.45-28.31-35.32-24.89-53.81-22.16-18.93,2.93-37.46,8.35-55.56,14.65-45.29,16.13-88.65,37.93-129.63,63.15-40.56,25.58-80.26,54.51-110.65,91.95-17.46,21.66-36.51,57.89,6.5,61.54,57.2,2.41,139.47-35.69,189.13-64.12h0Z"
              stroke="#432a18"
              strokeWidth={1}
              fill="none"
              strokeDasharray={lengths[1]}
              strokeDashoffset={offsets[1]}
            />
            <motion.path
              d="M219.22,161.96c33.41,19.4,65.88,40.57,95.69,65.24,14.89,12.41,29.16,25.67,41.43,40.76,9.01,11.41,18.09,24.01,20.49,38.82,2.64,18.84-12.43,26.68-28.96,27.69-67.79,2.98-183.05-58.25-239.36-96.71-35.3-24.37-84.45-62.08-103.68-100.65-7.29-15-8.04-32.4,10.04-39.56,14.11-5.25,29.59-3.65,44.02-1.5,19.2,3.14,37.81,8.9,56.01,15.6,36.26,13.51,70.84,31.03,104.33,50.3h0ZM219.02,162.31c-43.09-25.62-154.89-77.47-202.58-60.87-26.24,11.17-3.89,43.03,7.71,57.68,12,14.93,25.97,28.27,40.47,40.79,36.61,31.16,77.17,57.81,119.5,80.68,42.43,22.34,87.34,42.26,134.95,49.85,27.49,4.29,68.39,2.67,50.04-36.4-26.51-50.74-100.65-102.94-150.1-131.73h0Z"
              stroke="#432a18"
              strokeWidth={1}
              fill="none"
              strokeDasharray={lengths[2]}
              strokeDashoffset={offsets[2]}
            />
          </svg>

          {logos.map((logo, index) => {
            const total = logos.length;
            const start = index / total;
            const end = (index + 0.5) / total;
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            const scale = useTransform(scrollYProgress, [start, end], [0, 0.8]);

            return (
              <motion.a
                key={logo.name}
                href={logo.link}
                style={{ opacity, scale }}
                className={cn(`absolute ${logo.style}`)}
              >
                <img src={logo.src} alt={logo.name} className="w-full" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
