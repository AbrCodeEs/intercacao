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
import atomo from '@/images/home/atomo.png';

import { cn } from '@/lib/cn';

// const logos = [
//   {
//     name: 'Fundación Prosperi',
//     src: logoFundacionProsperi.src,
//     link: '#card-3',
//     style: 'xl:top-[50%] xl:left-[45%] w-70',
//   },
//   {
//     name: 'Vivero Wilfried Merle',
//     src: logoViveroWilfriedMerle.src,
//     link: '#card-1',
//     style: 'xl:top-10 xl:left-[45%] top-5',
//   },
//   {
//     name: 'Regreso al Agro',
//     src: logoRegresoAlAgro.src,
//     link: '#card-2',
//     style: 'xl:top-[22%] xl:right-50 top-20 right-2',
//   },
//   {
//     name: 'Regreso del Agua',
//     src: logoRegresoDelAgua.src,
//     link: '#card-0',
//     style: 'xl:top-[22%] xl:left-50 top-20 left-2',
//   },
//   {
//     name: 'Electrón Religión',
//     src: logoElectronReligion.src,
//     link: '#card-4',
//     style: 'xl:bottom-[22%] xl:left-50 bottom-20 left-2',
//   },
//   {
//     name: 'Electrón Música & Danza',
//     src: logoElectronMusicaDanza.src,
//     link: '#card-5',
//     style: 'xl:bottom-10 xl:left-[45%] bottom-10',
//   },
//   {
//     name: 'Electrón Deporte',
//     src: logoElectronDeporte.src,
//     link: '#card-6',
//     style: 'xl:bottom-[22%] xl:right-50 bottom-20 right-2',
//   },
// ];

const logos = [
  {
    name: 'Fundación Prosperi',
    src: logoFundacionProsperi.src,
    link: '#card-3',
    style: 'top-[48%] left-[30%] xl:top-[50%] xl:left-[42%] w-40 xl:w-70 bg-white',
  },
  {
    name: 'Vivero Wilfried Merle',
    src: logoViveroWilfriedMerle.src,
    link: '#card-1',
    style: 'top-[18%] left-[32%] xl:top-10 xl:left-[42%] w-40 xl:w-60',
  },
  {
    name: 'Regreso al Agro',
    src: logoRegresoAlAgro.src,
    link: '#card-2',
    style: 'top-[30%] right-[10%] xl:top-[22%] xl:right-[12%] w-36 xl:w-60',
  },
  {
    name: 'Regreso del Agua',
    src: logoRegresoDelAgua.src,
    link: '#card-0',
    style: 'top-[29%] left-[10%] xl:top-[22%] xl:left-[12%] w-40 xl:w-64',
  },
  {
    name: 'Electrón Religión',
    src: logoElectronReligion.src,
    link: '#card-4',
    style: 'bottom-[30%] left-[10%] xl:bottom-[22%] xl:left-[12%] w-40 xl:w-64',
  },
  {
    name: 'Electrón Música & Danza',
    src: logoElectronMusicaDanza.src,
    link: '#card-5',
    style: 'bottom-[25%] left-[35%] xl:bottom-10 xl:left-[42%] w-36 xl:w-60',
  },
  {
    name: 'Electrón Deporte',
    src: logoElectronDeporte.src,
    link: '#card-6',
    style: 'bottom-[30%] right-[10%] xl:bottom-[22%] xl:right-[12%] w-36 xl:w-60',
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

  return (
    // Contenedor alto que genera el efecto de scroll
    <div ref={containerRef} className="relative h-[300vh] w-full">
      {/* Contenedor "sticky" para mantener el fondo y los logos en vista durante 100vh */}
      <div className="fle x sticky top-0 h-screen w-full items-center justify-center bg-white">
        <div className="relative h-screen w-full flex items-center justify-center">
          <img
            src={atomo.src}
            alt="Electrones FQP"
            className="w-360 h-180 rounded-xl object-fill object-center"
          />
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
