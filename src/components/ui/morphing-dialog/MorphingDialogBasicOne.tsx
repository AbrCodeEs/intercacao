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
import { TimelineDemo } from "@/components/ui/timeline/TimelineDemo";


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
          borderRadius: '12px',
        }}
        className="flex flex-col overflow-hidden border border-zinc-950/10 bg-white "
      >
        {/* <MorphingDialogImage
          src="/eb-27-lamp-edouard-wilfrid-buquet.jpg"
          alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
          className="h-48 w-full object-cover"
        /> */}
        <div className="flex grow flex-row items-end justify-between px-3 py-2">
          <div>
            <MorphingDialogTitle className="text-zinc-950 ">
              EB27
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-zinc-700 ">
              Edouard Wilfrid Buquet
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
          className="pointer-events-auto relative flex w-11/12 h-11/12 pb-10 flex-col overflow-hidden border border-zinc-950/10 bg-white"
        >
          {/* <MorphingDialogImage
            src="/eb-27-lamp-edouard-wilfrid-buquet.jpg"
            alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
            className="h-full w-full"
          /> */}
            <div className="p-6">
                <MorphingDialogTitle className="text-5xl text-zinc-950 ">
                EB27
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 ">
                Edouard Wilfrid Buquet
                </MorphingDialogSubtitle>
                {/* <MorphingDialogDescription
                disableLayoutAnimation
                variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
                >   
                </MorphingDialogDescription> */}
            </div>

            <TimelineDemo />
          <MorphingDialogClose className="text-zinc-50" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
