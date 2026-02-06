import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/FadeIn';

export default function NotFound() {
  return (
    <div className="bg-edg-dark flex min-h-[80vh] items-center justify-center text-white">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-edg-brand mb-4 font-bold tracking-widest uppercase">
              Error 404
            </p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              Lost in the <br />
              <span className="text-edg-brand">Backyard?</span>
            </h1>
            <p className="mx-auto mb-10 max-w-lg text-lg text-gray-400 md:text-xl">
              We can't seem to find the page you're looking for. But don't
              worry, we can still help you design the outdoor space of your
              dreams.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/">
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  Return Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="min-w-[200px] border-white/20 text-white hover:bg-white/10"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>

            <div className="mt-12 border-t border-white/10 pt-12">
              <p className="mb-6 text-sm font-medium tracking-wider text-gray-500 uppercase">
                Explore Our Systems
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-300">
                <Link
                  href="/systems/pergolas"
                  className="hover:text-edg-brand transition-colors"
                >
                  Louvered Pergolas
                </Link>
                <Link
                  href="/systems/shades"
                  className="hover:text-edg-brand transition-colors"
                >
                  Motorized Shades
                </Link>
                <Link
                  href="/systems/enclosures"
                  className="hover:text-edg-brand transition-colors"
                >
                  Glass Enclosures
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Background ambient glow */}
      <div className="from-edg-brand/20 pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr to-blue-500/20 opacity-20 blur-[120px]" />
    </div>
  );
}
