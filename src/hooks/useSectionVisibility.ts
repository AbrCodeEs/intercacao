'use client';

import { useInView } from 'motion/react';
import React from 'react';

export const useSectionVisibility = (
  sectionRef: React.RefObject<HTMLElement>,
  containerRef: React.RefObject<HTMLElement>,
) => {
  const isFlavorSectionInView = useInView(sectionRef, {
    margin: '0px 0px -50px 0px',
    amount: 'some',
  });

  const isContainerInView = useInView(containerRef, {
    margin: '0px 0px -90% 0px',
    amount: 'some',
  });

  return { isFlavorSectionInView, isContainerInView };
};
