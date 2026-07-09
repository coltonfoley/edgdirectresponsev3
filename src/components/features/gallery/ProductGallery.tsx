'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string; // For video thumbnails
}

interface ProductGalleryProps {
  items: MediaItem[];
  className?: string;
}

export function ProductGallery({ items, className }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const lightboxTitleId = useId();
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const activeItem = items[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    lightboxCloseRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setLightboxOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  if (!activeItem) {
    return null;
  }

  return (
    <div className={cn('space-y-4', className)}>
      {/* Main Viewport */}
      <div className="group relative aspect-[4/3] w-full overflow-hidden border border-border bg-surface-muted">
        {activeItem.type === 'image' ? (
          <Image
            src={activeItem.src}
            alt={activeItem.alt || 'Product image'}
            fill
            className="cursor-zoom-in object-cover"
            onClick={() => setLightboxOpen(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        ) : (
          <div className="relative h-full w-full">
            <video
              src={activeItem.src}
              poster={activeItem.poster}
              className="h-full w-full object-cover"
              controls
            />
          </div>
        )}

        {/* Navigation Arrows */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between p-4 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
          <Button
            variant="secondary"
            size="icon"
            type="button"
            aria-label="Previous media item"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="pointer-events-auto h-10 w-10 border-white/70 bg-white/85 text-edg-dark backdrop-blur"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            type="button"
            aria-label="Next media item"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="pointer-events-auto h-10 w-10 border-white/70 bg-white/85 text-edg-dark backdrop-blur"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Counter Badge */}
        <div className="pointer-events-none absolute right-4 bottom-4 z-10 bg-black/75 px-3 py-1 text-xs font-bold tracking-wider text-white backdrop-blur">
          {activeIndex + 1} / {items.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="scrollbar-hide flex gap-3 overflow-x-auto pb-2">
        {items.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show media item ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            className={cn(
              'relative h-20 w-20 flex-shrink-0 overflow-hidden border-2 transition-all focus-visible:ring-2 focus-visible:ring-edg-brand focus-visible:ring-offset-2 focus-visible:outline-none',
              index === activeIndex
                ? 'border-edg-brand opacity-100'
                : 'border-border opacity-70 hover:border-edg-brand/60 hover:opacity-100'
            )}
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt || `Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
                unoptimized
              />
            ) : (
              <div className="relative h-full w-full bg-zinc-900">
                {item.poster && (
                  <Image
                    src={item.poster}
                    alt="Video thumbnail"
                    fill
                    className="object-cover opacity-50"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-6 w-6 fill-white text-white" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Simple Lightbox (Overlay) */}
      {lightboxOpen && items[activeIndex].type === 'image' && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={lightboxTitleId}
          className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <h2 id={lightboxTitleId} className="sr-only">
            Product image preview
          </h2>
          <button
            type="button"
            ref={lightboxCloseRef}
            aria-label="Close media preview"
            className="absolute top-4 right-4 z-50 p-2 text-zinc-300 transition-colors hover:text-white"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>

          <div className="relative h-full max-h-[90vh] w-full max-w-[90vw]">
            <Image
              src={activeItem.src}
              alt={activeItem.alt || 'Product image'}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}
