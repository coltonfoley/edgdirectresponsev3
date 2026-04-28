import Image, { type StaticImageData } from 'next/image';

interface HeroBackgroundMediaProps {
  poster: StaticImageData | string;
  alt: string;
}

export function HeroBackgroundMedia({
  poster,
  alt,
}: HeroBackgroundMediaProps) {
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

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
    </>
  );
}
