'use client';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { useEffect, useState } from 'react';
import { ScrollArea } from '@radix-ui/react-scroll-area';

import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTrigger,
} from '@/components/ui/morphing-dialog';

import { AnimatePresence, motion } from 'motion/react';

import { getPostsBySort } from '@/api/post';

import type { Post } from '@/types/actions';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const NewsSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api_url = import.meta.env.PUBLIC_STRAPI_URL;

  // server actions
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPostsBySort({
          limit: 5,
        });

        setPosts(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await getPostsBySort({
        limit: 5,
      });

      setPosts(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="news">
      <div className="relative grid grid-cols-3 p-0 text-start md:gap-4 md:px-5 xl:gap-4 xl:px-5">
        {loading ? (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={`loader-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="border-primary/30 col-span-1 flex h-[20vh] w-full items-center justify-center rounded-lg border md:h-[50vh] xl:h-[50vh]"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative h-12 w-12">
                    <motion.div
                      className="border-primary/30 absolute inset-0 h-full w-full rounded-full border-4"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="bg-primary/60 absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      animate={{
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                  <motion.span
                    className="text-muted-foreground text-center text-sm font-medium"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    Cargando contenido...
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </>
        ) : (
          <>
            <AnimatePresence mode="popLayout">
              {posts.map((post) => (
                <MorphingDialog
                  key={post.documentId}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 24,
                  }}
                >
                  <MorphingDialogTrigger
                    style={{
                      borderRadius: '4px',
                    }}
                  >
                    <div className="group flex flex-col text-start">
                      <div className="flex overflow-clip border border-white md:rounded-lg md:border-none xl:mb-5 xl:rounded-lg xl:border-none">
                        <div className="h-full w-full transition duration-300 group-hover:scale-105">
                          <MorphingDialogImage
                            src={`${api_url}${post.banner.url}`}
                            alt={post.banner.documentId}
                            className="aspect-[4/5] h-full w-full object-cover object-center md:aspect-[3/2] lg:aspect-[3/2] xl:aspect-[3/2]"
                          />
                        </div>
                      </div>
                      <div className="text-md mb-2 line-clamp-3 hidden pt-2 text-start font-medium break-words md:mb-3 md:block md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl xl:block">
                        {post.title}
                      </div>
                      <div className="text-muted-foreground mb-4 line-clamp-2 hidden text-start text-xs md:mb-5 md:block md:text-base xl:block">
                        {post.description}
                      </div>
                    </div>
                  </MorphingDialogTrigger>

                  <MorphingDialogContainer>
                    <MorphingDialogContent
                      style={{
                        borderRadius: '12px',
                        zIndex: 70,
                      }}
                      className="relative h-auto w-full xl:w-4/5"
                    >
                      <ScrollArea className="block h-[100vh] justify-center md:flex md:h-[90vh] md:items-center lg:flex lg:items-center xl:flex xl:h-[90vh] xl:items-center">
                        <div className="size-screen relative flex flex-col items-center justify-center overflow-hidden rounded-lg xl:flex-row xl:items-stretch">
                          <div className="relative flex w-full items-end justify-center bg-white md:w-3/4 md:items-center lg:items-center xl:w-1/2 xl:items-center">
                            <Carousel className="w-full">
                              <CarouselContent>
                                {post.media.map((media, i) => (
                                  <CarouselItem key={i} className="aspect-[4/5]">
                                    <div className="flex !aspect-[4/5] items-center justify-center">
                                      {media.ext === '.mp4' ? (
                                        <MediaPlayer
                                          src={`${api_url}${media.url}`}
                                          viewType="video"
                                          streamType="on-demand"
                                          logLevel="warn"
                                          crossOrigin
                                          playsInline
                                          title="Sprite Fight"
                                          className="!aspect-[4/5]"
                                        >
                                          <MediaProvider className="!aspect-[4/5]">
                                            <Poster className="vds-poster" />
                                          </MediaProvider>
                                          <DefaultVideoLayout
                                            icons={defaultLayoutIcons}
                                            className="!aspect-[4/5]"
                                          />
                                        </MediaPlayer>
                                      ) : (
                                        <img
                                          src={`${api_url}${media.url}`}
                                          alt={media.name as string}
                                          width={1000}
                                          height={1000}
                                          className="object-cover object-center"
                                        />
                                      )}
                                    </div>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              <CarouselPrevious className="-left-10 disabled:!opacity-1 md:left-7 lg:left-7 xl:left-7" />
                              <CarouselNext className="-right-10 disabled:!opacity-1 md:right-7 lg:right-7 xl:right-7" />
                            </Carousel>
                          </div>
                          <div className="relative flex min-h-[50vh] w-full items-start justify-start bg-white md:w-3/4 md:items-center md:py-10 lg:items-center xl:w-1/2 xl:items-stretch xl:py-10">
                            <div className="p-12 md:p-10 xl:px-8">
                              <h2 className="mb-4 text-start text-3xl font-bold">{post.title}</h2>
                              <div
                                className={`${
                                  post.description.length > 100 ? 'overflow-y-scroll' : ''
                                } h-full max-h-[80vh] w-full max-w-full min-w-[77vh] py-10`}
                              >
                                <p className="text-muted-foreground text-start">
                                  {post.description}
                                </p>
                              </div>
                            </div>
                            <MorphingDialogClose className="text-zinc-500 xl:top-20" />
                          </div>
                        </div>
                      </ScrollArea>
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>
              ))}
            </AnimatePresence>

            <a href="/posts" className="group flex flex-col">
              <div className="flex overflow-clip border border-gray-300 md:rounded-lg xl:mb-5 xl:rounded-lg">
                <div className="flex aspect-[4/5] h-full w-full items-center justify-center transition duration-300 group-hover:scale-105 hover:bg-gray-100 md:aspect-[3/2] lg:aspect-[3/2] xl:aspect-[3/2]">
                  <span className="text-zinc-500 group-hover:underline">Ver mas</span>
                </div>
              </div>
            </a>
          </>
        )}

        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="group border-destructive bg-destructive/5 relative col-span-1 h-[50vh] overflow-hidden rounded-lg border p-6"
          >
            <div className="animate-tilt absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,hsla(0,100%,50%,0.1)_5px,hsla(0,100%,50%,0.1)_10px)] opacity-20" />

            <div className="relative flex h-full w-full flex-col items-center justify-center space-y-2">
              <h3 className="text-destructive text-lg font-medium">Error al cargar el contenido</h3>
              <p className="text-destructive/80 text-sm">{error}</p>
              <button
                className="hover:text-destructive/80 mt-4 text-sm font-medium underline underline-offset-4 transition-colors"
                onClick={() => fetchData()}
              >
                Intentar de nuevo →
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
