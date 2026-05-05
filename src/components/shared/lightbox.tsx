"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex = 0, open, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Sync currentIndex when initialIndex changes and lightbox opens
  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentIndex(initialIndex);
    }
  }, [open, initialIndex]);

  // Focus management
  useEffect(() => {
    if (open) {
      // Store current focus element
      previousFocusRef.current = document.activeElement as HTMLElement;
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll
      document.body.style.overflow = "";
      // Restore focus
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  // Render placeholder image for MVP
  const renderPlaceholder = (name: string) => (
    <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/30">
      <span className="text-4xl font-serif font-bold text-primary/40">
        {name}
      </span>
    </div>
  );

  const currentImage = images[currentIndex];
  const isPlaceholder = !currentImage || currentImage.startsWith("placeholder:");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="relative flex h-full w-full items-center justify-center"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Закрыть"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous button */}
            {images.length > 1 && (
              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 sm:left-6"
                aria-label="Предыдущее изображение"
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            )}

            {/* Image container */}
            <div className="relative flex max-h-[80vh] max-w-[90vw] items-center justify-center">
              {isPlaceholder ? (
                renderPlaceholder("Project")
              ) : (
                <Image
                  src={currentImage}
                  alt={`Image ${currentIndex + 1} of ${images.length}`}
                  width={1200}
                  height={800}
                  className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain"
                  sizes="90vw"
                />
              )}
            </div>

            {/* Next button */}
            {images.length > 1 && (
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-6"
                aria-label="Следующее изображение"
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            )}

            {/* Image counter */}
            {images.length > 1 && (
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1 text-sm text-white">
                {currentIndex + 1} / {images.length}
              </div>
            )}

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative h-12 w-16 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                      index === currentIndex
                        ? "ring-2 ring-primary"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`Перейти к изображению ${index + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`Миниатюра ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
