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
        className="mx-5 my-10 flex flex-col overflow-hidden bg-white p-2 transition-colors duration-100 ease-out hover:bg-zinc-100 md:mx-10 md:flex-row lg:mx-10 lg:flex-row xl:mx-10 xl:flex-row"
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
          </div>
          <button
            type="button"
            className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors select-none hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-500 dark:focus-visible:ring-zinc-500"
            aria-label="Open dialog"
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '12px',
          }}
          className="pointer-events-auto relative flex h-11/12 w-11/12 flex-col overflow-hidden border border-zinc-950/10 bg-white pb-10"
        >
          <div className="p-6">
            <MorphingDialogTitle className="text-2xl font-bold text-zinc-950 md:text-5xl lg:text-5xl xl:text-5xl">
              QUIRICO PROSPERI BOSCHETI
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700">
              Nacio en Brustico Corsica Francia 🇫🇷 el 24 de Octubre 1850 - Murio 1919 New York
            </MorphingDialogSubtitle>
          </div>

          <TimelineDemo />
          <MorphingDialogClose />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
