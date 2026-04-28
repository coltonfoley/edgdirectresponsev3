import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { assets } from '@/lib/images';

const logos = [
  { src: assets.clientLogos.carmines, alt: "Carmine's" },
  { src: assets.clientLogos.chicagoWinery, alt: 'Chicago Winery' },
  { src: assets.clientLogos.louMalnatis, alt: "Lou Malnati's" },
  { src: assets.clientLogos.rosebud, alt: 'Rosebud Restaurants' },
  { src: assets.clientLogos.theDistrict, alt: 'The District' },
  { src: assets.clientLogos.theElm, alt: 'The Elm' },
  { src: assets.clientLogos.palmSpringsAirport, alt: 'Palm Springs Airport' },
  { src: assets.clientLogos.ikeAndOak, alt: 'Ike and Oak' },
  { src: assets.clientLogos.hyattRegencyChicago, alt: 'Hyatt Regency Chicago' },
];

export function ClientLogoBar() {
  return (
    <section className="border-t border-black/5 bg-white py-12">
      <style>{`
        @keyframes scroll-logos {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .logo-track {
          animation: scroll-logos 35s linear infinite;
        }
        .logo-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <Container>
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
          Trusted by leading brands
        </p>
      </Container>

      <div className="overflow-hidden">
        <div className="logo-track flex w-max items-center">
          {/* Render twice for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="relative mx-10 h-10 w-44 flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain grayscale opacity-50 transition-opacity duration-200 hover:opacity-80"
                sizes="144px"
                quality={60}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
