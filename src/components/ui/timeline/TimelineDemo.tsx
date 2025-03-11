import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "1886 ",
      content: (
        <div>
          <h1 className="text-neutral-800 text-xl font-bold"> Antonio Martín Prosperi </h1>
          <p className="text-neutral-800 text-base font-normal mb-8">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
            <div className="xl:size-90 lg:size-80 md:size-70 size-60 bg-neutral-200 rounded-lg"></div>
          </div>
        </div>
      ),
    },
    {
      title: "1960",
      content: (
        <div>
          <h1 className="text-neutral-800 text-xl font-bold"> Jaime Martín Prosperi Luria  </h1>
          <p className="text-neutral-800 text-base font-normal mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
              <div className="xl:size-90 lg:size-80 md:size-70 size-60 bg-neutral-200 rounded-lg"></div>
          </div>
        </div>
      ),
    },
    {
      title: "xxxx",
      content: (
        <div>
          <h1 className="text-neutral-800 text-xl font-bold">Alejandro Prosperi </h1>
          <p className="text-neutral-800 text-base font-normal mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
              <div className="xl:size-90 lg:size-80 md:size-70 size-60 bg-neutral-200 rounded-lg"></div>
          </div>
        </div>
      ),
    },
    {
      title: "xxxx",
      content: (
        <div>
          <h1 className="text-neutral-800 text-xl font-bold">Alessia Prosperi </h1>
          <h1 className="text-neutral-800 text-xl font-bold">Anabella Prosperi </h1>
          <p className="text-neutral-800 text-base font-normal mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
            {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover size-auto"
            /> */}
              <div className="xl:size-90 lg:size-80 md:size-70 size-60 bg-neutral-200 rounded-lg"></div>
          </div>
        </div>
      ),
    },
  ];
  return (
      <Timeline data={data} />
  );
}
