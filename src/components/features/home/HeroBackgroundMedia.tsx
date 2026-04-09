'use client';

import { useEffect, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';

interface HeroBackgroundMediaProps {
  poster: StaticImageData | string;
  videoSrc: string;
  alt: string;
}

export function HeroBackgroundMedia({
  poster,
  videoSrc,
  alt,
}: HeroBackgroundMediaProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 769px)');

    if (!mediaQuery.matches) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShouldLoadVideo(true);
    }, 250);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="absolute inset-0">
        <Image
          src={poster}
          alt={alt}
          fill
          priority
          quality={65}
          sizes="100vw"
          className="object-cover opacity-60"
        />
      </div>

      {shouldLoadVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          poster={typeof poster === 'string' ? poster : poster.src}
        >
          <source src={videoSrc} type="video/mp4" media="(min-width: 769px)" />
        </video>
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
    </>
  );
}
