'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/cn';

const useInView = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [isInView, setIsInView] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '50px 0px',
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, hasAnimated]);

  return isInView;
};

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value = 0, children, ...props }, ref) => {
  const [animatedValue, setAnimatedValue] = React.useState(0);
  const finalValue = value ?? 0;
  const progressRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(progressRef);
  const animationRef = React.useRef<number | undefined>(undefined);

  React.useEffect(() => {
    if (!isInView) {
      setAnimatedValue(0);
      return;
    }

    const duration = 1500; // Aumentamos la duración para una animación más suave
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Función de easing para una animación más suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (finalValue - startValue) * easeOutQuart;

      setAnimatedValue(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [finalValue, isInView]);

  return (
    <ProgressPrimitive.Root
      ref={(node) => {
        progressRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      className={cn('relative h-14 w-full overflow-hidden rounded-lg bg-neutral-400', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-[#432918] transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${100 - animatedValue}%)` }}
      />
      <div className="absolute inset-0">{children}</div>
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
