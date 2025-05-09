'use client';

import { useEffect, useRef, useState } from 'react';

export const useContainerPosition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [absolutePosition, setAbsolutePosition] = useState({ bottom: 20, right: 20 });
  const [isContainerEndVisible, setIsContainerEndVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContainerEndVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    );

    const currentSentinel = sentinelRef.current;
    if (currentSentinel) observer.observe(currentSentinel);

    return () => {
      if (currentSentinel) observer.unobserve(currentSentinel);
    };
  }, []);

  useEffect(() => {
    const calculatePosition = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      setAbsolutePosition({
        right: window.innerWidth - containerRect.right + 20,
        bottom: scrollY + viewportHeight - containerRect.bottom + 20,
      });
    };

    window.addEventListener('scroll', calculatePosition);
    window.addEventListener('resize', calculatePosition);
    calculatePosition();

    return () => {
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, []);

  return { containerRef, sentinelRef, absolutePosition, isContainerEndVisible };
};
