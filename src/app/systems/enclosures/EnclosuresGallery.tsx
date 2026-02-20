'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
}

interface EnclosuresGalleryProps {
  items: MediaItem[];
  className?: string;
}

export function EnclosuresGallery({ items, className }: EnclosuresGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev));
  };

  return (
    <div className={cn('relative h-full w-full', className)}>
      {/* Main Viewport */}
      <div className="group relative h-full w-full overflow-hidden bg-surface-dark">
        {items[activeIndex].type === 'image' ? (
          <Image
            src={items[activeIndex].src}
            alt={items[activeIndex].alt || 'Product image'}
            fill
            className="cursor-zoom-in object-cover transition-transform duration-500 hover:scale-105"
            onClick={() => setLightboxOpen(true)}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="relative h-full w-full">
            <video
              src={items[activeIndex].src}
              poster={items[activeIndex].poster}
              className="h-full w-full object-cover"
              controls
            />
          </div>
        )}

        {/* Navigation Arrows */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <Button
            variant="secondary"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="pointer-events-auto h-10 w-10 rounded-none bg-white/80 shadow-lg backdrop-blur"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="pointer-events-auto h-10 w-10 rounded-none bg-white/80 shadow-lg backdrop-blur"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Counter Badge */}
        <div className="pointer-events-none absolute right-4 bottom-4 z-10 rounded-none bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {activeIndex + 1} / {items.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="scrollbar-hide absolute bottom-0 left-0 right-0 flex gap-2 overflow-x-auto bg-black/50 p-2 backdrop-blur">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'relative h-16 w-16 flex-shrink-0 overflow-hidden border-2 transition-all',
              index === activeIndex
                ? 'border-edg-brand opacity-100'
                : 'border-transparent opacity-60 hover:opacity-100'
            )}
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt || `Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            ) : (
              <div className="relative h-full w-full bg-surface-dark">
                {item.poster && (
                  <Image
                    src={item.poster}
                    alt="Video thumbnail"
                    fill
                    className="object-cover opacity-50"
                  />
                )}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Simple Lightbox (Overlay) */}
      {lightboxOpen && items[activeIndex].type === 'image' && (
        <div
          className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 z-50 p-2 text-zinc-300 transition-colors hover:text-white"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>

          <div className="relative h-full max-h-[90vh] w-full max-w-[90vw]">
            <Image
              src={items[activeIndex].src}
              alt={items[activeIndex].alt || 'Product image'}
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
