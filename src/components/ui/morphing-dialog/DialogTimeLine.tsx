'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';
import { PlusIcon } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';
import carouselHistoria3 from '@/images/home/carousels/historia/03.jpeg';
import carouselHistoria4 from '@/images/home/carousels/historia/04.jpeg';
import carouselHistoria5 from '@/images/home/carousels/historia/05.jpeg';
import carouselHistoria6 from '@/images/home/carousels/historia/06.jpeg';
import ProsperiyCia from '@/images/home/timeLine/ProsperiyCia.jpg';
import MartinPROSPERI from '@/images/home/timeLine/JMartinPROSPERILyMartinPROSPERI.jpg';
import ExpulsionCorsos from '@/images/home/timeLine/Expulsion Corsos.png';
import SecadoCacao from '@/images/home/timeLine/Secado de Cacao Solariega.png';
import AlejandroPROSPERI from '@/images/home/timeLine/Alejandro,PROSPERI.jpg';
import CasaSolariega1882 from '@/images/home/timeLine/Casa Solariega 1882.png';
import fproperi from '@/images/home/timeLine/fproperi.jpg';
import CasaDelCable from '@/images/home/timeLine/CasaCableNueva.jpg';
import Vivero from '@/images/home/timeLine/Vivero.jpg';

const timelineData = [
  {
    title: '1850',
    name: 'Quirico Prosperi Boscheti',
    content:
      'Nació el 24 de octubre de 1850 en Brustico, una pequeña aldea en las montañas de Córcega, Francia, donde creció rodeado de castaños y aprendiendo los secretos de la agricultura.',
    img: [{ src: carouselHistoria3.src, alt: 'Quirico Prosperi Boscheti' }],
    img_toggle: true
  },
  {
    title: '1870 - 1871',
    name: 'Quirico Prosperi Boscheti',
    content: (
      <>
        <ul className="list-disc">
          <li>
            Participa en la Guerra Franco-Prusiana como soldado de la Guardia Nacional Móvil Corsa.
          </li>
          <li>
            Recibe la medalla “Legión de Honor” por su participación en el conflicto entre Francia y
            Prusia.
          </li>
        </ul>
      </>
    ),
    img: [
      { src: carouselHistoria5.src, alt: 'Quirico Prosperi Boscheti' },
      { src: carouselHistoria5.src, alt: 'Quirico Prosperi Boscheti' },
    ],
  },

  {
    title: '1872',
    name: 'Quirico Prosperi Boscheti',
    content:
      'Finalizada la guerra, Francia derrotada y económicamente deprimida, Quirico Prosperi, con 21 años, regresa a Brustico, Córcega, para casarse con Marie Luccioni Paoli.',
    img: [{ src: carouselHistoria6.src, alt: 'Quirico Prosperi Boscheti' }],
  },
  {
    title: '1873-1874',
    name: 'Quirico Prosperi Boscheti',
    content:
      'Nace su primer hijo, Paul Prosperi, y en 1874, amigos corsos en Venezuela lo convencen de viajar para trabajar en Carúpano, estado Sucre.',
    img: [{ src: carouselHistoria4.src, alt: 'Paul Prosperi' }],
  },
  {
    title: '1882',
    name: 'Quirico Prosperi Boscheti',
    content: (
      <>
        <ul className="list-disc">
          <li>Adquiere la plantación de cacao y café llamada "El Rincón".</li>
          <li>Constituye, junto a su hermano Ambrosio, la empresa "Prosperi Hermanos".</li>
          <li>
            El 1 de Julio de 1882, compra la Casa Solariega, hoy en día sede de la Fundación Quirico
            Prosperi, lugar que se se convertiría en el corazón de un imperio agrícola de producción
            y comercialización de cacao, café y sarrapia, en El Rincón, municipio Benítez, Edo.
            Sucre.
          </li>
        </ul>
      </>
    ),
    img: [{ src: CasaSolariega1882.src, alt: 'Casa Solariega 1882' }],
  },
  {
    title: '1886',
    name: 'Quirico Prosperi Boscheti',
    content:
      'Nace su hijo Jaime Martin Prosperi  en la casa de la plantación de cacao. El Rincon, Edo Sucre',
    img: [{ src: SecadoCacao.src, alt: 'Secado de Cacao' }],
  },

  {
    title: '1890',
    name: 'Quirico Prosperi Boscheti',
    content: 'Funda "Prosperi & Cía" tras comprar la participación de su hermano Ambrosio.',
    img: [{ src: ProsperiyCia.src, alt: 'Prosperi & Cía' }],
  },
  {
    title: '1892',
    name: 'Quirico Prosperi Boscheti',
    content:
      'Cambia la denominación de "El Rincón" a "Prosperi y Cía". tras comprar la participación de su hermano Ambrosio.',
  },
  {
    title: '1900',
    name: 'Pablo y Martín Prosperi',
    content:
      'A finales del siglo XIX, su hijo Pablo se incorporó al negocio, posteriormente Martín a comienzos del XX.',
    img: [{ src: MartinPROSPERI.src, alt: 'Martín Prosperi' }],
  },
  {
    title: '1902',
    name: 'Jaime Martin Prosperi ',
    content:
      'Se da la batalla de San Agustín, en las montañas entre El Rincón y El Pilar por el antiguo camino de los españoles, conocida como la Revolución Libertadora., donde los progresistas derrotan al gobierno de Cipriano Castro.',
  },
  {
    title: '1908',
    name: 'Jaime Martin Prosperi ',
    content: (
      <>
        <ul className="list-disc">
          <li>
            Es expulsado de Venezuela junto a otros corsos por orden del dictador Cipriano Castro.
          </li>
          <li>
            Se refugia en Trinidad, dejando a sus hijos mayores a cargo de la familia y los
            negocios. A finales del siglo XIX, su hijo Pablo se incorporó al negocio, posteriormente
            Martín a comienzos del XX.
          </li>
        </ul>
        <p>
          En 1908, durante la dictadura de Cipriano Castro, fue expulsado del país junto a otros
          corsos, un golpe duro que no lo detuvo. Desde Trinidad, dirigió a su familia y negocios, y
          al regresar a Venezuela, consolidó su empresa como un referente en el oriente del país.
        </p>
      </>
    ),
    img: [{ src: ExpulsionCorsos.src, alt: 'Expulsion Corsos' }],
  },
  {
    title: '1910',
    name: 'Jaime Martin Prosperi ',
    content:
      'Regresa a Venezuela y consolida su empresa como la mayor exportadora de cacao en el oriente venezolano.',
  },
  {
    title: '1915',
    name: 'Jaime Martin Prosperi ',
    content: (
      <>
        <ul className="list-disc">
          <li>Se convierte en el principal exportador de cacao en Venezuela.</li>
        </ul>
        <p>
          Quirico no solo se dedicó a la producción de cacao y café, sino que también impulsó el
          comercio internacional, exportando estos productos a Europa y estableciendo sucursales en
          ciudades como Caracas, Cumaná y La Guaira. Su visión y tenacidad lo llevaron a
          convertirse, en 1915, en el principal exportador de cacao de Venezuela. Sin embargo, su
          camino no estuvo exento de obstáculos.
        </p>
      </>
    ),
  },
  {
    title: '1919',
    name: 'Jaime Martin Prosperi ',
    content: (
      <>
        <ul className="list-disc">
          <li>Fallece en Nueva York, Estados Unidos.</li>
          <li>
            Sus restos reposan junto a su esposa Marie Luccioni Paoli en el Panteón de la Familia
            Prosperi en Carúpano, Venezuela.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '1933',
    name: 'Jaime Martin Prosperi',
    content:
      'La iglesia original del Rincón fue destruida por el huracán que entró por el delta el 28 de junio de 1933, saliendo por el norte vía Carúpano-Margarita. Este ciclón dejó una devastación de las plantaciones de cacao y café del Rincón y zonas adyacentes.',
  },
  {
    title: '1940-1950',
    name: 'Jaime Martin Prosperi',
    content:
      'La iglesia actual del Rincón es reconstruida por el hijo y nieto de Quirico Prosperi, Jaime Martin Prosperi  Luccioni, y Francisco Raffalli-Prosperi.',
  },
  {
    title: '1960',
    name: 'Jaime Martin Prosperi ',
    content:
      'Jaime Martín Prosperi Luria, hijo de Martín Prosperi y Consuelo Luria Urdaneta fundó "Mercantil Prosperi S.A." y "Prosperi Caracas, C.A.", empresas dedicadas principalmente a la exportación de Cacao y Café.',
  },
  {
    title: '1975',
    name: 'Jaime Martin Prosperi ',
    content:
      'Prosperi Caracas, C.A. se mantuvo como principal empresa exportadora hasta la Nacionalización de la Comercialización del Cacao, que, junto a las industrias del petróleo, el hierro y el café, pasaron a manos del Estado en 1975, por mandato del presidente Carlos Andrés Pérez.',
  },
  {
    title: '1991',
    name: 'Jaime Martin Prosperi ',
    content:
      'La familia Prosperi tuvo que abandonar el negocio del cacao y café por una decisión política que, definitivamente, afectó la calidad y la producción de "El Mejor Cacao del Mundo". En el segundo gobierno de Carlos Andrés Pérez, en 1991, se desmontó el monopolio y se abrió a las empresas privadas para la exportación de cacao y café.',
  },
  {
    title: '1993',
    name: 'Alejandro Prosperi',
    content:
      'Alejandro Prosperi, hijo de Jaime Martín Prosperi, decidió recuperar el negocio de exportación de**"El Mejor Cacao del Mundo"** y, junto a Martín Urrutia, principal productor de cacao de Barlovento, constituyó la empresa "Cacao Flor de Baba, C.A.", incorporando al negocio a sus hermanos Martín y Pablo.',
    img: [{ src: AlejandroPROSPERI.src, alt: 'Alejandro Prosperi' }],
  },
  {
    title: '2006',
    name: 'Alejandro Prosperi',
    content:
      'Expandió el negocio de Cacao y Café más allá de las fronteras Venezolanas e inició en Colombia, junto a don Álvaro Afanador, la empresa "Gran Colombia Trading Ltda.", con sede en Bogotá, convirtiéndose en la primera empresa exportadora de Cacao Colombiano.',
  },
  {
    title: '2008',
    name: 'Alejandro Prosperi',
    content:
      'Trabajó y apoyó incondicionalmente la conformación de la "Asociación Nacional de Productores de Cacao Venezolano". Se incorporó de manera integral a favor de los productores agrícolas; igualmente, se involucró a través de los gremios en la lucha y defensa de los productores y del agro. Fue nombrado director de Cacao en "La Confederación Nacional de Asociaciones de Productores Agropecuarios" (FEDEAGRO)',
  },
  {
    title: '2012',
    name: 'Alejandro Prosperi',
    content: (
      <>
        <p>
          Su legado no solo se refleja en la prosperidad agrícola y comercial que impulsó, sino
          también en la Fundación Quirico Prosperi, creada en 2012 por su bisnieto Alejandro también
          en la Fundación Quirico Prosperi, creada en 2012 por su bisnieto Alejandro Prosperi. Esta
          organización sin fines de lucro honra su memoria promoviendo la agricultura, la
          reforestación y la conservación de los valores históricos y culturales de Venezuela,
          especialmente en la zona de Paria.
        </p>
        <h1 className="text-xl font-bold text-neutral-600">Fundación Quirico Prosperi</h1>
        <p>
          La Fundación Quirico Prosperi trabaja incansablemente para rescatar y difundir el legado
          de Quirico, fomentando el desarrollo sostenible y el sentido de pertenencia entre los
          venezolanos. Desde programas de música y danza hasta la siembra de árboles frutales y la
          preservación de la fauna, la fundación continúa escribiendo la historia de un hombre que,
          con esfuerzo y dedicación, transformó el destino de su familia y de toda una región.
        </p>
      </>
    ),
  },
  {
    tile: '2012',
    name: 'Alejandro Prosperi',
    content: 'Compra la Casa del Cable Frances a su gran amigo de Wilfried Merle,',
    img: [{ src: fproperi.src, alt: 'Fproperi' }],
  },
  {
    title: '2014',
    name: 'Alejandro Prosperi',
    content:
      'La Casa del Cable Frances fue restaurada por el Arquitecto Jorge Thielen, En esta casa Vivio Wilfried, gran amigo de Alejandro Prosperi.',
    img: [{ src: CasaDelCable.src, alt: 'Casa del Cable' }],
  },
  {
    title: '2023',
    name: 'Alejandro Prosperi',
    content:
      'La fundación inauguró el vivero Wilfried Merle en honor a este gran ecologista-conservacionista alemán-venezolano, quien entregó su vida por la flora y la fauna de Paria, estado Sucre. Así, cada árbol frutal y maderable que sembremos, estaremos dejando su legado y su huella de amor y espíritu en toda Paria.',
    img: [{ src: Vivero.src, alt: 'Vivero' }],
  },
  {
    title: '2024',
    name: 'Alejandro Prosperi',
    content:
      'Se cumplieron 150 años de haber pisado tierra carupanera (Quirico Prosperi) y de haber visto lo que cambiaría el destino de él y su familia: El Cacao.',
  },
  {
    title: '2025',
    name: 'Alessia y Anabella Prosperi',
    content:
      'Se cumplieron 150 años de haber pisado tierra carupanera (Quirico Prosperi) y de haber visto lo que cambiaría el destino de él y su familia: El Cacao.',
  },
];

export function DialogTimeLine() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentEntry, setCurrentEntry] = useState<TimelineEntry>(timelineData[0]);
  const lastValidImage = useRef<string | null>(null);
  const [currentImage, setCurrentImage] = useState(lastValidImage.current);

  
  const handleIndexChange = useCallback((index: number) => {
    // const newEntry = timelineData[index];
    // setCurrentEntry(newEntry); // Actualiza directamente el currentEntry
    // setActiveIndex(index);
    const newEntry = timelineData[index].img_toggle && timelineData[index];
    const newImage = newEntry.img?.[0]?.src;
  
    // Si no hay imagen, usa la última imagen válida
    const imageToUse = newImage || lastValidImage.current;
  
    setCurrentEntry({
      ...newEntry,
      img: newEntry.img || currentEntry.img,
    });
  
    setActiveIndex(index);
    
    // Actualiza currentImage para el renderizado
    setCurrentImage(imageToUse);
  
    if (newImage) {
      lastValidImage.current = newImage;
    }
  }, [currentImage]);
  

  useEffect(() => {
    if (timelineData[0]?.img?.[0]?.src) {
      lastValidImage.current = timelineData[0].img[0].src;
    }
  }, []);

  return (
    <MorphingDialog transition={{ type: 'spring', bounce: 0.05, duration: 0.25 }}>
      <MorphingDialogTrigger className="mx-5 my-10 flex flex-col overflow-hidden bg-white p-2 transition-colors duration-100 ease-out hover:bg-zinc-100 md:mx-10 md:flex-row lg:mx-20 lg:flex-row xl:mx-20 xl:flex-row">
        <DialogTriggerContent />
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{ borderRadius: '12px' }}
          className="pointer-events-auto relative flex h-11/12 w-11/12 flex-col overflow-hidden border border-zinc-950/10 bg-white pb-10"
        >
          <div className="p-6 pt-5">
            <div className="flex items-center justify-start gap-4">
              {currentImage && (
                <img
                  src={currentImage}
                  alt="Timeline entry"
                  className="size-10 rounded-lg object-cover object-center md:size-10 lg:size-20 xl:size-30"
                />
              )}
              <div className="flex flex-col">
                <MorphingDialogTitle className="text-xl font-bold text-zinc-950 md:text-3xl lg:text-3xl xl:text-3xl">
                  {currentEntry.name || 'Nombre no disponible'}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700">
                  {currentEntry.title}
                </MorphingDialogSubtitle>
              </div>
            </div>
          </div>

          <Timeline data={timelineData} onActiveIndexChange={handleIndexChange} />
          <MorphingDialogClose />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

const DialogTriggerContent = () => (
  <>
    <MorphingDialogImage
      src={carouselHistoria3.src}
      alt="Quirico Prosperi Boscheti"
      className="size-auto rounded-lg object-cover md:size-100 lg:size-70 xl:size-150"
    />
    <div className="flex grow flex-row items-start justify-between px-3 py-2">
      <div>
        <MorphingDialogTitle className="text-xl font-bold text-zinc-950 md:text-2xl lg:text-2xl xl:text-2xl">
          QUIRICO PROSPERI BOSCHETI
        </MorphingDialogTitle>
        <DialogTriggerSubtitle />
        <TimelineHighlights />
      </div>
    </div>
  </>
);

const DialogTriggerSubtitle = () => (
  <MorphingDialogSubtitle className="text-zinc-700">
    Nació el 24 de octubre de <b>1850</b> en Brustico, una pequeña aldea en las montañas de{' '}
    <b>Córcega</b>, Francia, donde creció rodeado de castaños ...
  </MorphingDialogSubtitle>
);

const TimelineHighlights = () => (
  <div className="py-3 pl-5 text-zinc-700">
    <TimelineHighlightItem
      year="1882"
      title="Quirico Prosperi Boschetti"
      content="Adquiere la plantación de Cacao y Café llamada 'El Rincón'"
    />
    <ExpandButton />
    <TimelineHighlightItem
      year="2012"
      title="Alejandro Prosperi"
      content="Fundación Quirico Prosperi"
    />
    <TimelineHighlightItem
      year="2025"
      title="Alejandro Prosperi"
      content="La Fundación Quirico Prosperi trabaja incansablemente"
    />
  </div>
);

const TimelineHighlightItem = ({
  year,
  title,
  content,
}: {
  year: string;
  title: string;
  content: string;
}) => (
  <div className="flex flex-col border-l-2 border-zinc-800 pt-3">
    <h1 className="pl-3 text-xl font-bold">{year}</h1>
    <h2 className="pl-3 text-lg font-bold text-neutral-600">{title}</h2>
    <p className="pl-3 text-sm">{content}</p>
  </div>
);

const ExpandButton = () => (
  <div className="my-5 flex w-full items-center justify-start pl-3">
    <button
      type="button"
      className="relative flex h-10 w-10 shrink-0 scale-100 appearance-none items-center justify-center rounded-lg border-2 border-zinc-800 text-zinc-500 transition-colors select-none hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
      aria-label="Open dialog"
    >
      <PlusIcon size={12} />
    </button>
  </div>
);
