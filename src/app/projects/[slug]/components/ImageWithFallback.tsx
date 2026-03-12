'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  fallbackType?: 'gradient' | 'pattern' | 'placeholder';
  priority?: boolean;
  sizes?: string;
}

/**
 * Image component with graceful fallback for missing/broken images
 */
export function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className,
  containerClassName,
  fallbackType = 'gradient',
  priority,
  sizes,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  const showFallback = !src || error;

  const fallbackStyles = {
    gradient:
      'bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-800 dark:to-zinc-700',
    pattern:
      'bg-zinc-100 dark:bg-zinc-900 bg-[radial-gradient(circle,_#ccc_1px,_transparent_1px)] [background-size:16px_16px]',
    placeholder:
      'bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center',
  };

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      {/* Actual image or fallback */}
      {showFallback ? (
        <div className={cn('h-full w-full', fallbackStyles[fallbackType])}>
          {fallbackType === 'placeholder' && (
            <span className="text-sm text-zinc-400">{alt}</span>
          )}
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          className={cn('object-cover', className)}
          onError={() => setError(true)}
          priority={priority}
          sizes={sizes}
        />
      )}
    </div>
  );
}
