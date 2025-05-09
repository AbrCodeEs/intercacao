'use client';

import React, { useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  MotionConfig,
  type Transition,
  type Variant,
  useDragControls,
  type DragControls,
} from 'motion/react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/cn';
import { XIcon } from 'lucide-react';
import useClickOutside from '@/hooks/useClickOutside';

export type MorphingDialogContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uniqueId: string;
  triggerRef: React.RefObject<HTMLDivElement>;
  dragControls: DragControls;
  isDragging: boolean;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
  dragStartY: React.MutableRefObject<number>;
  dragStartX: React.MutableRefObject<number>;
  isVerticalDrag: React.MutableRefObject<boolean>;
};

const MorphingDialogContext = React.createContext<MorphingDialogContextType | null>(null);

function useMorphingDialog() {
  const context = useContext(MorphingDialogContext);
  if (!context) {
    throw new Error('useMorphingDialog must be used within a MorphingDialogProvider');
  }
  return context;
}

export type MorphingDialogProviderProps = {
  children: React.ReactNode;
  transition?: Transition;
};

function MorphingDialogProvider({ children, transition }: MorphingDialogProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const uniqueId = useId();
  const triggerRef = useRef<HTMLDivElement>(null!);
  const dragControls = useDragControls();
  const dragStartY = useRef<number>(0);
  const dragStartX = useRef<number>(0);
  const isVerticalDrag = useRef<boolean>(false);

  const contextValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      uniqueId,
      triggerRef,
      dragControls,
      isDragging,
      setIsDragging,
      dragStartY,
      dragStartX,
      isVerticalDrag,
    }),
    [isOpen, uniqueId, dragControls, isDragging],
  );

  return (
    <MorphingDialogContext.Provider value={contextValue}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </MorphingDialogContext.Provider>
  );
}

export type MorphingDialogProps = {
  children: React.ReactNode;
  transition?: Transition;
};

function MorphingDialog({ children, transition }: MorphingDialogProps) {
  return (
    <MorphingDialogProvider>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </MorphingDialogProvider>
  );
}

export type MorphingDialogTriggerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  triggerRef?: React.RefObject<HTMLDivElement>;
};

function MorphingDialogTrigger({
  children,
  className,
  style,
  triggerRef,
}: MorphingDialogTriggerProps) {
  const { setIsOpen, isOpen, uniqueId } = useMorphingDialog();

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
    },
    [isOpen, setIsOpen],
  );

  return (
    <motion.div
      ref={triggerRef}
      layoutId={`dialog-${uniqueId}`}
      className={cn('relative cursor-pointer', className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={style}
      role="button"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls={`motion-ui-morphing-dialog-content-${uniqueId}`}
      aria-label={`Open dialog ${uniqueId}`}
    >
      {children}
    </motion.div>
  );
}

export type MorphingDialogContentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function MorphingDialogContent({ children, className, style }: MorphingDialogContentProps) {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useMorphingDialog();
  const containerRef = useRef<HTMLDivElement>(null!);
  const [firstFocusableElement, setFirstFocusableElement] = useState<HTMLElement | null>(null);
  const [lastFocusableElement, setLastFocusableElement] = useState<HTMLElement | null>(null);
  const isMobile = true;

  const resetPosition = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.2s ease-out';
      containerRef.current.style.transform = '';
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = '';
        }
      }, 200);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
      if (event.key === 'Tab') {
        if (!firstFocusableElement || !lastFocusableElement) return;

        if (event.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            event.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsOpen, firstFocusableElement, lastFocusableElement]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      const focusableElements = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusableElements && focusableElements.length > 0) {
        setFirstFocusableElement(focusableElements[0] as HTMLElement);
        setLastFocusableElement(focusableElements[focusableElements.length - 1] as HTMLElement);
        (focusableElements[0] as HTMLElement).focus();
      }
    } else {
      document.body.classList.remove('overflow-hidden');
      triggerRef.current?.focus();
    }
  }, [isOpen, triggerRef]);

  useClickOutside(containerRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <motion.div
      ref={containerRef}
      layoutId={`dialog-${uniqueId}`}
      className={cn('overflow-hidden', className)}
      style={style}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </motion.div>
  );
}

const MorphingDialogDragContent = ({ children }: { children: React.ReactNode }) => {
  const { setIsOpen } = useMorphingDialog();
  const dragStartY = useRef<number>(0);
  const dragStartX = useRef<number>(0);
  const isDragging = useRef(false);
  const dragThreshold = 12;
  const containerRef = useRef<HTMLDivElement>(null);
  const isVerticalDrag = useRef(false);

  const resetPosition = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.2s ease-out';
      containerRef.current.style.transform = '';
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = '';
        }
      }, 200);
    }
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.target === containerRef.current || containerRef.current?.contains(e.target as Node)) {
      dragStartY.current = e.clientY;
      dragStartX.current = e.clientX;
      isDragging.current = true;
      isVerticalDrag.current = false;
      if (containerRef.current) {
        containerRef.current.style.transition = '';
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;

    const deltaY = e.clientY - dragStartY.current;
    const deltaX = Math.abs(e.clientX - dragStartX.current);

    // Determinar si es un arrastre vertical o horizontal
    if (!isVerticalDrag.current) {
      if (deltaY > deltaX && deltaY > 5) {
        isVerticalDrag.current = true;
      } else if (deltaX > deltaY && deltaX > 5) {
        isVerticalDrag.current = false;
        isDragging.current = false;
        return;
      }
    }

    // Solo procesar el arrastre si es vertical
    if (isVerticalDrag.current && deltaY > 0) {
      const resistance = Math.min(1, deltaY / 200);
      const resistedDeltaY = deltaY * (1 - resistance * 0.3);

      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(${resistedDeltaY}px)`;
      }

      if (deltaY > dragThreshold) {
        setIsOpen(false);
        isDragging.current = false;
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;

    const deltaY = e.clientY - dragStartY.current;

    if (isVerticalDrag.current && deltaY > dragThreshold) {
      setIsOpen(false);
    } else {
      resetPosition();
    }

    isDragging.current = false;
    isVerticalDrag.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="drag-handle"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ touchAction: 'pan-x' }} // Permite el arrastre horizontal nativo
    >
      {children}
    </div>
  );
};

export type MorphingDialogContainerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function MorphingDialogContainer({ children }: MorphingDialogContainerProps) {
  const { isOpen, uniqueId } = useMorphingDialog();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence initial={false} mode="sync">
      {isOpen && (
        <>
          <motion.div
            key={`backdrop-${uniqueId}`}
            className="fixed inset-0 z-[99] h-full w-full bg-white/40 backdrop-blur-xs dark:bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <div className="fixed inset-0 z-[100] flex items-center justify-center">{children}</div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export type MorphingDialogTitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function MorphingDialogTitle({ children, className, style }: MorphingDialogTitleProps) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.div
      layoutId={`dialog-title-container-${uniqueId}`}
      className={className}
      style={style}
      layout
    >
      {children}
    </motion.div>
  );
}

export type MorphingDialogSubtitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function MorphingDialogSubtitle({ children, className, style }: MorphingDialogSubtitleProps) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.div
      layoutId={`dialog-subtitle-container-${uniqueId}`}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export type MorphingDialogDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  disableLayoutAnimation?: boolean;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
};

function MorphingDialogDescription({
  children,
  className,
  variants,
  disableLayoutAnimation,
}: MorphingDialogDescriptionProps) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.div
      key={`dialog-description-${uniqueId}`}
      layoutId={disableLayoutAnimation ? undefined : `dialog-description-content-${uniqueId}`}
      variants={variants}
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      id={`dialog-description-${uniqueId}`}
    >
      {children}
    </motion.div>
  );
}

export type MorphingDialogImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

function MorphingDialogImage({ src, alt, className, style }: MorphingDialogImageProps) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn(className)}
      layoutId={`dialog-img-${uniqueId}`}
      style={style}
    />
  );
}

export type MorphingDialogCloseProps = {
  children?: React.ReactNode;
  className?: string;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
};

function MorphingDialogClose({ children, className, variants }: MorphingDialogCloseProps) {
  const { setIsOpen, uniqueId } = useMorphingDialog();

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <motion.button
      onClick={handleClose}
      type="button"
      aria-label="Close dialog"
      key={`dialog-close-${uniqueId}`}
      className={cn('absolute top-6 right-6', className)}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children || <XIcon size={24} />}
    </motion.button>
  );
}

export {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogImage,
  MorphingDialogDragContent,
};
