'use client';

export function VainillaBar({
  trans,
}: {
  trans: any;
}) {
  return (
    <div className="container mx-auto flex w-full flex-col p-10 bg-[#3c5548] rounded-[3rem] -translate-y-11">
      <div className="flex flex-col items-center gap-5 text-zinc-950 md:text-center xl:text-center">
        <div className="flex h-auto w-full flex-col items-center justify-center gap-5">
          <img
            loading="eager"
            src={trans.bar.img.src}
            alt={trans.bar.img.alt}
            className="size-50 rounded-full md:size-50 xl:size-60"
            width="1000"
            height="1000"
          />

          <h1 className="w-1/2 text-center text-2xl font-bold capitalize lg:text-3xl xl:text-4xl">
            {trans.bar.title}
          </h1>

          <p className="text-center text-lg">
            {trans.bar.description.map((description: string, index: number) => (
              <span key={index}>{description}</span>
            ))}
          </p>

          <img
            loading="eager"
            src={trans.bar.banner.src}
            alt={trans.bar.banner.alt}
            className="size-90 rounded-2xl xl:size-130"
            width="1000"
            height="1000"
          />
        </div>
      </div>
    </div>
  );
}
