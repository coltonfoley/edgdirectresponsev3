'use client';

import Image from 'next/image';
import { usePageImage } from '@/hooks/usePageImages';
import { urlFor } from '@/sanity/lib/image';
import { cn } from '@/lib/utils';

interface PageImageProps {
  imageKey: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * PageImage Component
 * 
 * Renders an image from Sanity CMS that can be easily swapped by content editors.
 * 
 * @example
 * ```tsx
 * <PageImage
 *   imageKey="homepage-hero-bg"
 *   fallbackSrc="/images/hero-default.jpg"
 *   alt="Hero background"
 *   fill
 *   className="object-cover"
 *   priority
 * />
 * ```
 */
export function PageImage({
  imageKey,
  fallbackSrc,
  alt,
  className,
  fill,
  width,
  height,
  priority,
  sizes,
  objectFit = 'cover',
  onLoad,
  onError,
}: PageImageProps) {
  const { image, isLoading } = usePageImage(imageKey);

  // Show loading state or fallback
  if (isLoading || !image) {
    if (fallbackSrc) {
      return (
        <Image
          src={fallbackSrc}
          alt={alt || 'Loading...'}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          className={cn(
            'transition-opacity duration-300',
            isLoading ? 'opacity-50' : 'opacity-100',
            className
          )}
          style={{ objectFit }}
          priority={priority}
          sizes={sizes}
          onLoad={onLoad}
          onError={onError}
        />
      );
    }
    return (
      <div
        className={cn(
          'bg-gray-200 animate-pulse',
          fill ? 'absolute inset-0' : '',
          className
        )}
        style={{ width, height }}
      />
    );
  }

  // Build Sanity image URL
  const imageUrl = image.image
    ? urlFor(image.image).width(width || 1200).height(height || 800).url()
    : fallbackSrc;

  if (!imageUrl) {
    return (
      <div
        className={cn(
          'bg-gray-100 flex items-center justify-center text-gray-400',
          fill ? 'absolute inset-0' : '',
          className
        )}
        style={{ width, height }}
      >
        No image
      </div>
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt || image.image?.alt || image.title}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={cn('transition-opacity duration-300', className)}
      style={{ objectFit }}
      priority={priority}
      sizes={sizes}
      onLoad={onLoad}
      onError={onError}
    />
  );
}

interface PageBackgroundImageProps {
  imageKey: string;
  fallbackSrc?: string;
  className?: string;
  children?: React.ReactNode;
  overlay?: boolean;
  overlayClassName?: string;
}

/**
 * PageBackgroundImage Component
 * 
 * Renders a background image from Sanity CMS.
 * 
 * @example
 * ```tsx
 * <PageBackgroundImage
 *   imageKey="homepage-hero-bg"
 *   fallbackSrc="/images/hero-default.jpg"
 *   overlay
 *   overlayClassName="bg-black/50"
 * >
 *   <div className="relative z-10">Content here</div>
 * </PageBackgroundImage>
 * ```
 */
export function PageBackgroundImage({
  imageKey,
  fallbackSrc,
  className,
  children,
  overlay,
  overlayClassName = 'bg-black/40',
}: PageBackgroundImageProps) {
  const { image } = usePageImage(imageKey);

  const imageUrl = image?.image
    ? urlFor(image.image).width(1920).height(1080).quality(80).url()
    : fallbackSrc;

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={
        imageUrl
          ? {
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {overlay && <div className={cn('absolute inset-0', overlayClassName)} />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}