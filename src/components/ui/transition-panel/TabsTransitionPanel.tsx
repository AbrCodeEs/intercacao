'use client';

import logoFundacionProsperi from '@/images/global/logo-fundacion-prosperi.webp';

import { DialogTimeLine } from '@/components/ui/morphing-dialog/DialogTimeLine';
// import HorizontalScrollSection from '@/components/ui/carousel/HorizontalScrollSection';
import ProjectsSection from '@/components/home/ProjectsSection';

// import electronesFqp from '@/images/home/electrones-fqp.jpg';
import ElectronsSection from '@/components/home/ElectronsSection';

interface TabsTransitionPanelProps {
  trans: {
    description: string;
    tabs_transition_panel: {
      vainilla_bar: {
        title: string;
        description: string;
      };
    };
  };
  items: { title: string; icon: string; images: { src: string; alt: string }[] }[];
}

export function TabsTransitionPanel({ trans, items }: TabsTransitionPanelProps) {
  return (
    <>
      <div className="flex h-full w-full flex-col gap-10 px-10 pt-20 md:container md:px-20 lg:container lg:px-10 xl:container xl:px-10">
        <div className="h-full">
          <div className="py-2">
            <div className="flex items-center justify-center">
              <img
                src={logoFundacionProsperi.src}
                alt="Fundacion Prosperi"
                className="w-100 pb-3"
              />
            </div>
            <p className="text-lg md:text-center xl:text-center">{trans.description}</p>
          </div>
        </div>
      </div>

      <DialogTimeLine trans={trans} />

      <ElectronsSection />

      <ProjectsSection items={items} />
    </>
  );
}
