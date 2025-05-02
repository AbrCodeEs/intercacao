'use client';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { useEffect, useState } from 'react';

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
  CarouselNavigation,
  CarouselIndicator,
} from '@/components/ui/carousel/carousel';
import { Badge } from '@/components/ui/badge';

const NewItems = ({ posts }: { posts: Post[] }) => {
  const api_url = import.meta.env.PUBLIC_STRAPI_URL;

  return (
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
                    className="aspect-[4/5] h-full w-full object-cover object-center md:aspect-[4/5] lg:aspect-[4/5] xl:aspect-[4/5]"
                  />
                </div>
              </div>
              <h1 className="text-md mb-2 leading-10 truncate hidden pt-2 text-start font-medium break-words md:mb-3 md:block md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl xl:block">
                {post.title}
              </h1>
              <div className="text-muted-foreground mb-4 hidden text-start text-xs md:mb-5 md:block md:text-base xl:block dark:text-gray-400">
                <p className="line-clamp-2 leading-6">{post.description}</p>
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
              <div
                className="relative flex h-screen min-h-screen w-full flex-col items-stretch justify-between bg-white md:min-h-[90vh] md:flex-row lg:min-h-[90vh] lg:flex-row xl:min-h-[90vh] xl:flex-row"
                style={{ overflowY: 'scroll' }}
              >
                <div className="sticky top-0 xl:pb-0 lg:pb-0 md:pb-0 pb-10 w-full grow">
                  <Carousel classNameWrapper="md:h-full lg:h-screen xl:h-screen" className="md:h-full lg:h-screen xl:h-screen">
                    <CarouselContent className="md:h-full lg:h-screen xl:h-screen">
                      {post.media.map((media, i) => (
                        <CarouselItem key={i} className="h-full">
                          <div className="flex h-full xl:h-screen lg:h-screen md:h-screen w-full items-start justify-start">
                            {media.ext === '.mp4' ? (
                              <div className="relative flex aspect-[4/5] h-full w-full items-center justify-center overflow-hidden">
                                <MediaPlayer
                                  src={`${api_url}${media.url}`}
                                  viewType="video"
                                  streamType="on-demand"
                                  logLevel="warn"
                                  crossOrigin
                                  playsInline
                                  title="Sprite Fight"
                                  className="object-fit h-full w-full object-center"
                                >
                                  <MediaProvider className="!aspect-[4/5] h-full w-full">
                                    <Poster className="vds-poster" />
                                  </MediaProvider>
                                  <DefaultVideoLayout
                                    icons={defaultLayoutIcons}
                                    className="bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent pt-6"
                                  />
                                </MediaPlayer>
                              </div>
                            ) : (
                              <img
                                src={`${api_url}${media.url}`}
                                alt={media.name as string}
                                width={1000}
                                height={1000}
                                className="object-cover object-center h-full xl:h-screen lg:h-screen md:h-screen"
                              />
                            )}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {post.media.length > 1 && (
                      <CarouselNavigation
                        className="absolute top-1/2 md:top-1/2 xl:top-1/2"
                        alwaysShow
                      />
                    )}
                    <CarouselIndicator className="-bottom-6.5 px-15 xl:bottom-5" />
                  </Carousel>
                </div>

                <div className="relative w-full grow bg-white p-10 flex flex-col gap-3">
                  <h2 className="text-start text-3xl font-bold">{post.title}</h2>
                  <div>
                    <div className="line-clamp-3 pb-2 break-words">
                      <Badge>{post.category?.name}</Badge>
                    </div>
                    <p className="text-muted-foreground text-start">{post.description}</p>
                  </div>
                  <MorphingDialogClose className="rounded-full bg-black p-2 text-white xl:top-5" />
                </div>
              </div>
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
      ))}
    </AnimatePresence>
  );
};

export const NewsSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div id="news" className="py-16">
      <div className="pb-8 xl:px-0 lg:px-0 md:px-0 px-5">
        <h1 className="mb-4 w-full p-0 text-3xl font-medium md:mb-5 md:px-5 lg:mb-6 xl:px-5 uppercase text-neutral-600">
          Últimas Noticias
        </h1>

        <p className="p-0 md:px-5 xl:px-5 text-muted-foreground text-lg">
          Las últimas noticias y actualizaciones sobre las actividades de la Fundación Quirico
          Prosperi y sus programas Electrones.
        </p>
      </div>
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
            <NewItems posts={posts} />

            <a href="https://fqp.intercacao.com/posts" className="group flex flex-col">
              <div className="flex overflow-clip border border-gray-300 md:rounded-lg xl:mb-5 xl:rounded-lg">
                <div className="flex aspect-[4/5] h-full w-full items-center justify-center transition duration-300 group-hover:scale-105 hover:bg-gray-100 md:aspect-[4/5] lg:aspect-[4/5] xl:aspect-[4/5]">
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
