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
import { TimelineDemo } from '@/components/ui/timeline/TimelineDemo';
import carouselHistoria3 from '@/images/home/carousels/historia/03.jpeg';

export function MorphingDialogBasicOne() {
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
          borderRadius: '8px',
        }}
        className="mx-5 my-10 flex xl:w-3/5 lg:w-3/5 md:w-3/5 w-90 flex-col overflow-hidden bg-white p-2 transition-colors duration-100 ease-out hover:bg-zinc-100 md:mx-10 md:flex-row lg:mx-10 lg:flex-row xl:mx-10 xl:flex-row"
      >
        <MorphingDialogImage
          src={carouselHistoria3.src}
          alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
          className="size-auto rounded-lg object-cover md:size-30 lg:size-40 xl:size-50"
        />
        <div className="flex grow flex-row items-start justify-between px-3 py-2">
          <div>
            <MorphingDialogTitle className="text-xl font-bold text-zinc-950 md:text-2xl lg:text-2xl xl:text-2xl">
              QUIRICO PROSPERI BOSCHETI
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700">
              Nacio en Brustico Corsica Francia 🇫🇷 el 24 de Octubre 1850 - Murio 1919 New York
            </MorphingDialogSubtitle>

            <div className="mt-5 flex w-full items-center justify-start">
              <button
                type="button"
                className="relative flex h-10 w-10 shrink-0 scale-100 appearance-none items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 transition-colors select-none hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
                aria-label="Open dialog"
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '12px',
          }}
          className="pointer-events-auto relative flex h-11/12 w-11/12 flex-col overflow-hidden border border-zinc-950/10 bg-white pb-10"
        >
          <div className="p-6 pt-12">
            <div className="flex items-start justify-between gap-4 md:justify-start lg:justify-start xl:justify-start">
              <MorphingDialogImage
                src={carouselHistoria3.src}
                alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                className="size-17 rounded-lg object-cover object-center md:size-10 lg:size-20 xl:size-30"
              />
              <div className="flex flex-col">
                <MorphingDialogTitle className="text-2xl font-bold text-zinc-950 md:text-3xl lg:text-3xl xl:text-3xl">
                  QUIRICO PROSPERI BOSCHETI
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700">
                  Nacio en Brustico Corsica Francia 🇫🇷 el 24 de Octubre 1850 - Murio 1919 New York
                </MorphingDialogSubtitle>
              </div>
            </div>
          </div>

          <TimelineDemo />
          <MorphingDialogClose />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
