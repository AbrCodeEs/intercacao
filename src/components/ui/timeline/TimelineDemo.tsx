import React from 'react';
import { Timeline } from '@/components/ui/timeline';

export function TimelineDemo() {
  const data = [
    {
      title: '1882',
      content: (
        <div>
          <h1 className="text-xl font-bold text-neutral-800">Quirico Prosperi Boscheti</h1>
          <p className="mb-8 text-base font-normal text-neutral-800">
            Llega a Venezuela y adquiere la plantación de cacao y café "El Rincón" en el estado
            Sucre. Junto a su hermano Ambrosio, funda la empresa "Prosperi Hermanos".
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
            <div className="size-60 rounded-lg bg-neutral-200 md:size-70 lg:size-80 xl:size-90"></div>
          </div>
        </div>
      ),
    },

    {
      title: '1886',
      content: (
        <div>
          <h1 className="text-xl font-bold text-neutral-800"> Antonio Martín Prosperi </h1>
          <p className="mb-8 text-base font-normal text-neutral-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
            <div className="size-60 rounded-lg bg-neutral-200 md:size-70 lg:size-80 xl:size-90"></div>
          </div>
        </div>
      ),
    },
    {
      title: '1919',
      content: (
        <div>
          <h1 className="text-xl font-bold text-neutral-800">Pablo Prosperi</h1>
          <p className="mb-8 text-base font-normal text-neutral-800">
            Cofunda el Caracas Country Club, símbolo de desarrollo social y económico. Ese año, tras
            la muerte de Quirico, los hermanos Pablo y Martín deciden separar sus negocios.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
            <div className="size-60 rounded-lg bg-neutral-200 md:size-70 lg:size-80 xl:size-90"></div>
          </div>
        </div>
      ),
    },
    {
      title: '1960',
      content: (
        <div>
          <h1 className="text-xl font-bold text-neutral-800"> Jaime Martín Prosperi Luria </h1>
          <p className="mb-8 text-base font-normal text-neutral-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
            <div className="size-60 rounded-lg bg-neutral-200 md:size-70 lg:size-80 xl:size-90"></div>
          </div>
        </div>
      ),
    },
    {
      title: '1993',
      content: (
        <div>
          <h1 className="text-xl font-bold text-neutral-800">Alejandro Prosperi </h1>
          <p className="mb-8 text-base font-normal text-neutral-800">
            Fundador de "Cacao Flor de Baba", recupera el negocio familiar y restablece la calidad
            del cacao venezolano en mercados internacionales.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              class1995Name="rounded-lg object-cover size-auto"
            /> */}
            <div className="size-60 rounded-lg bg-neutral-200 md:size-70 lg:size-80 xl:size-90"></div>
          </div>
        </div>
      ),
    },
    {
      title: '1995',
      content: (
        <div>
          <h1 className="text-xl font-bold text-neutral-800">Alejandro Prosperi </h1>
          <p className="mb-8 text-base font-normal text-neutral-800">
            Crea la Cámara Venezolana del Cacao (CAPEC), defendiendo los intereses de productores y
            exportadores.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
            <div className="size-60 rounded-lg bg-neutral-200 md:size-70 lg:size-80 xl:size-90"></div>
          </div>
        </div>
      ),
    },
    {
      title: '1997',
      content: (
        <div>
          <h1 className="text-xl font-bold text-neutral-800">Alejandro Prosperi </h1>
          <p className="mb-8 text-base font-normal text-neutral-800">
            Adquiere la plantación de café "Santo Domingo" en Caripe, incursionando en la producción
            y exportación de café premium.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
            <div className="size-60 rounded-lg bg-neutral-200 md:size-70 lg:size-80 xl:size-90"></div>
          </div>
        </div>
      ),
    },
    {
      title: '2006',
      content: (
        <div>
          <h1 className="text-xl font-bold text-neutral-800">Alejandro Prosperi </h1>
          <p className="mb-8 text-base font-normal text-neutral-800">
            Expande el negocio a Colombia con "Gran Colombia Trading Ltda.", promoviendo el cacao
            colombiano a nivel global.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
            <div className="size-60 rounded-lg bg-neutral-200 md:size-70 lg:size-80 xl:size-90"></div>
          </div>
        </div>
      ),
    },
    {
      title: '2008',
      content: (
        <div>
          <h1 className="text-xl font-bold text-neutral-800">Alejandro Prosperi </h1>
          <p className="mb-8 text-base font-normal text-neutral-800">
            Impulsa la creación de la Asociación Nacional de Productores de Cacao y se integra a
            FEDEAGRO para defender al sector agrícola.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
            <div className="size-60 rounded-lg bg-neutral-200 md:size-70 lg:size-80 xl:size-90"></div>
          </div>
        </div>
      ),
    },
    {
      title: '2012',
      content: (
        <div>
          <h1 className="text-xl font-bold text-neutral-800">Alejandro Prosperi </h1>
          <p className="mb-8 text-base font-normal text-neutral-800">
            Funda la Fundación Quirico Prosperi para rescatar valores históricos y agrícolas de
            Venezuela. Adquiere la Casa del Cable en Carúpano, símbolo de la conexión histórica
            entre Venezuela y Europa. Crea ASOCAFVEN para proteger a los caficultores nacionales.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
            <div className="size-60 rounded-lg bg-neutral-200 md:size-70 lg:size-80 xl:size-90"></div>
          </div>
        </div>
      ),
    },
    {
      title: '',
      content: (
        <div>
          <h1 className="text-xl font-bold text-neutral-800">Alessia Prosperi </h1>
          <h1 className="text-xl font-bold text-neutral-800">Anabella Prosperi </h1>
          <p className="mb-8 text-base font-normal text-neutral-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
            <div className="size-60 rounded-lg bg-neutral-200 md:size-70 lg:size-80 xl:size-90"></div>
          </div>
        </div>
      ),
    },
  ];
  return <Timeline data={data} />;
}
