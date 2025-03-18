import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';
import { PlusIcon } from 'lucide-react';

import ruedaMundoDeSabores from '@/images/home/rueda-mundo-de-sabores-es.png';

export function DialogFlavours() {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className="flex flex-col overflow-hidden border border-zinc-950/10 bg-white"
      >
        <div className="flex grow flex-row items-end justify-between px-5 py-4">
          <div>
            <MorphingDialogTitle className="text-zinc-950">
              <PlusIcon size={12} />
            </MorphingDialogTitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '12px',
          }}
          className="pointer-events-auto relative flex xl:h-200 lg:h-200 xl:w-300 lg:w-300 md:w-200 w-100 xl:flex-row lg:flex-row flex-col overflow-hidden border border-zinc-950/10 bg-white p-5"
        >
            <div className="xl:w-1/2 lg:w-1/2 w-full flex items-center justify-center">

          <MorphingDialogImage
            src={ruedaMundoDeSabores.src}
            alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
            className="size-auto p-5"
          />
            </div>
          <div className="p-5 flex flex-col items-center justify-center gap-3 xl:w-1/2 lg:w-1/2 w-full">
            <MorphingDialogTitle className="text-3xl text-zinc-950 font-bold">Mundo de Sabores</MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-2xl text-zinc-600">Destacamos los más deliciosos sabores en cada uno de nuestros cacaos:</MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element">
                  <div className="wpb_wrapper">
                    <div className="positive-chart">
                      <p className="p1 list-icon sweet_fruit">
                        <strong>AFRUTADO DULCE:</strong> Frutas secas, frutas tropicales, higos,
                        pasas, ciruelas pasas, melocotones, plátanos.
                      </p>
                      <p className="p1 list-icon soar_fruit">
                        <strong>AFRUTADOS CÍTRICOS:</strong> Naranjas, mandarinas, frutas rojas,
                        piñas, frambuesas, moras, frutas de la pasión.
                      </p>
                      <p className="p1 list-icon floral">
                        <strong>AFLORADO:</strong> Flores silvestres, jazmines, rosas, lavandas.
                      </p>
                      <p className="p1 list-icon criollo">
                        <strong>ACRIOLLADO:</strong> Malta, cereales, panela, caramelo, miel,
                        macadamias, almendras, nueces.
                      </p>
                      <p className="p1 list-icon cocoa">
                        <strong>CACAO:</strong> Predomina sabor pronunciado a cacao bien fermentado,
                        barras de chocolate.
                      </p>
                      <p className="p1 list-icon forest">
                        <strong>BOSCOSO:</strong> Corteza, madera fresca, pinos, tabaco, té verde.
                      </p>
                      <p className="p1 list-icon herbs">
                        <strong>ESPECIAS:</strong> Canela, clavo, nuez moscada, jengibre, vainilla
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
