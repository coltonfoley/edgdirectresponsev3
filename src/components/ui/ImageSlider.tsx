'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number; // seconds between slides
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Lightweight CSS-only image slider with crossfade transitions.
 * Optimized for performance - uses CSS animations, minimal JS.
 */
export function ImageSlider({
  images,
  interval = 5,
  className = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [canLoadAllImages, setCanLoadAllImages] = useState(false);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(new Array(images.length).fill(false));

  useEffect(() => {
    if (prefersReducedMotion || !canLoadAllImages || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [canLoadAllImages, interval, images.length, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || images.length <= 1) {
      return;
    }

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(
        () => {
          setCanLoadAllImages(true);
        },
        { timeout: 2500 }
      );

      return () => window.cancelIdleCallback(idleId);
    }

    const timer = globalThis.setTimeout(() => {
      setCanLoadAllImages(true);
    }, 2500);

    return () => globalThis.clearTimeout(timer);
  }, [images.length, prefersReducedMotion]);

  const handleImageLoad = (index: number) => {
    setIsLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  // If user prefers reduced motion, show only the first image
  if (prefersReducedMotion) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {index === 0 || canLoadAllImages ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-transform duration-700 ${
                index === currentIndex ? 'scale-100' : 'scale-105'
              }`}
              sizes={sizes}
              priority={priority && index === 0}
              quality={65}
              onLoad={() => handleImageLoad(index)}
            />
          ) : null}
        </div>
      ))}

      {/* Slide indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCanLoadAllImages(true);
                setCurrentIndex(index);
              }}
              className="flex h-11 w-11 items-center justify-center"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-white'
                    : 'w-2 bg-white/60 hover:bg-white/80'
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Loading state */}
      {!isLoaded[currentIndex] && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-0" />
      )}
    </div>
  );
}

/**
 * Static grid version - shows multiple images at once (2x2 or 3-up)
 * Server-safe, no JS required
 */
interface ImageGridProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
  sizes?: string;
}

export function ImageGrid({ images, className = '', sizes = '(max-width: 768px) 100vw, 50vw' }: ImageGridProps) {
  // Take first 4 images for 2x2 grid
  const displayImages = images.slice(0, 4);

  return (
    <div className={`grid grid-cols-2 gap-1 ${className}`}>
      {displayImages.map((image) => (
        <div key={image.src} className="relative aspect-square overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes={sizes}
            quality={75}
          />
        </div>
      ))}
    </div>
  );
}
