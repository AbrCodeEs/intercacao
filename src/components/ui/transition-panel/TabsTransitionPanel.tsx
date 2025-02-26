'use client';

import React, { useState } from 'react';
import { TransitionPanel } from '@/components/ui/transition-panel';

import logoRegresoAlAgua from '@/images/global/logo-regreso-al-agua.webp';
import logoWilfriedMerle from '@/images/global/logo-wilfried-merle.webp';
import logoRegresoAlAgro from '@/images/global/logo-regreso-al-agro.webp';
import logoFundacionProsperi from '@/images/global/logo-fundacion-prosperi.webp';
import logoElectronDeporte from '@/images/global/logo-electron-deporte.png';
import logoElectronMusica from '@/images/global/logo-electron-musica-y-dansa.png';
import logoElectronReligion from '@/images/global/logo-electron-religion.png';

const ITEMS = [
  {
    title: 'Regreso al Agua',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoRegresoAlAgua.src,
      alt: 'Regreso al Agua',
    },
  },
  {
    title: 'Vivero Wilfried Merle',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoWilfriedMerle.src,
      alt: 'Regreso al Agua',
    },
  },
  {
    title: 'Regreso al Agro',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoRegresoAlAgro.src,
      alt: 'Regreso al Agua',
    },
  },
  {
    title: 'Electro Deporte',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoElectronDeporte.src,
      alt: 'Regreso al Agua',
    },
  },
  {
    title: 'Electro Religioso',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoElectronReligion.src,
      alt: 'Regreso al Agua',
    },
  },
  {
    title: 'Electro Musica y Danza',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoElectronMusica.src,
      alt: 'Regreso al Agua',
    },
  },
  {
    title: 'Fundación Quirico Prosperi',
    content:
      'La Fundacion Quirico Prosperi, es una organizacion no lucrativa, que tiene el compromiso de difundir los valores historicos, culturales y agricolas de venezuela a traves de su programa educacional "Regreso al Agro", probando que la siembra de cacao es una profesion rentable que genera cambios sociales. El objetivo principal es el de colaborar con la comunidad, enriqueciendo y promoviendo las buenas practicas agricolas para las generaciones futuras de Chuao.',
    img: {
      src: logoFundacionProsperi.src,
      alt: 'Regreso al Agua',
    },
  },
];

export function TabsTransitionPanel() {
  const [activeIndex, setActiveIndex] = useState(ITEMS.length - 1);

  return (
    <div className="container mx-auto flex flex-col items-center justify-between gap-10">
      <div className="w-full grow overflow-hidden">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          variants={{
            enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
            center: { opacity: 1, y: 0, filter: 'blur(0px)' },
            exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
          }}
        >
          {ITEMS.map((item, index) => (
            <div key={index} className="py-2">
              <h1 className="py-2 text-4xl font-bold text-neutral-600 uppercase">{item.title}</h1>
              <p className="text-lg">{item.content}</p>
            </div>
          ))}
        </TransitionPanel>
      </div>

      <div className="flex w-4/5 grow flex-row flex-wrap justify-center gap-y-6">
        {ITEMS.map((item, index) => (
          <div key={index} className="flex w-1/3 items-center justify-center group">
            <button key={index} onClick={() => setActiveIndex(index)}>
              <img
                src={item.img.src}
                alt={item.img.alt}
                loading="lazy"
                className="block h-full w-80 cursor-pointer object-fill object-center transition-all duration-500 ease-out group-hover:scale-105"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
