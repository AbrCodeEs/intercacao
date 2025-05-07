'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/cn';

const useInView = (ref: React.RefObject<HTMLDivElement>) => {
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

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

  React.useEffect(() => {
    if (!isInView) {
      setAnimatedValue(0);
      return;
    }

    const duration = 1000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = finalValue / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setAnimatedValue(Math.min(increment * currentStep, finalValue));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [finalValue, isInView]);

  return (
    <ProgressPrimitive.Root
      ref={(node) => {
        // @ts-ignore
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
        className="h-full w-full flex-1 bg-[#432918] transition-all"
        style={{ transform: `translateX(-${100 - animatedValue}%)` }}
      />
      <div className="absolute inset-0">{children}</div>
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
