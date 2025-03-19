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
import { cn } from '@/assets/lib/utils';

export function DialogFlavours({ trans }: { trans: Record<string, any> }) {
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
          className="pointer-events-auto relative flex h-190 w-100 flex-col overflow-auto border border-zinc-950/10 bg-white p-5 md:h-150 md:w-200 lg:h-150 lg:w-300 lg:flex-row xl:h-150 xl:w-300 xl:flex-row"
        >
          <div className="flex w-full items-center justify-center lg:w-1/2 xl:w-1/2">
            <MorphingDialogImage
              src={ruedaMundoDeSabores.src}
              alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
              className="size-auto p-5"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 p-5 lg:w-1/2 xl:w-1/2">
            <MorphingDialogTitle className="text-3xl font-bold text-zinc-950">
              {trans.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-2xl text-zinc-600">
              {trans.description}
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <div className="flex flex-col gap-2">
                {trans.items.map((profile, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className='w-10'>
                        <div className={cn("flex items-center justify-center rounded-full size-10", profile.icon.className)}>
                            <img className="size-5" src={profile.icon.src} loading="eager"  alt={profile.title}  />
                        </div>
                    </div>
                    <p>
                      <b>{profile.title}: </b>
                      {profile.description}
                    </p>
                  </div>
                ))}
              </div>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="absolute top-5 right-5" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
