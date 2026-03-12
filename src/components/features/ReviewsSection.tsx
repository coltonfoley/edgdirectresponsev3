'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

const reviews = [
  {
    id: '1',
    author: 'Emma S.',
    rating: 5,
    text: 'We have worked with EDG for the past few years now and have nothing but positive things to say about the company. The employees at EDG are responsive, friendly, and quick to resolve any issues that come up during our projects. We will continue to work with EDG on our future projects!',
  },
  {
    id: '2',
    author: 'Edward R.',
    rating: 5,
    text: "Jake & his team at EDG Patio & Shade did an incredible job installing the louvered roof system on my beer garden at Ike & Oak Brewing Co. in Woodridge, IL. Start to finish, A++!",
  },
  {
    id: '3',
    author: 'Heather B.',
    rating: 5,
    text: 'We used EDG patio and Shade for our outdoor pergola and it was a wonderful experience. They were extremely communicative, helpful, and experienced. Our pergola and fire pits turned out beautiful!',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <Section className="bg-edg-dark py-20 md:py-28">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-edg-brand text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="h-px w-8 bg-edg-brand" />
              Customer Reviews
              <span className="h-px w-8 bg-edg-brand" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            
            {/* Google Rating Badge */}
            <div className="mt-6 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-white font-bold text-lg">5.0</span>
              </div>
              <div className="text-left">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-zinc-300 text-xs">Google Reviews</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <FadeIn key={review.id} delay={index * 0.1}>
              <div className="bg-white/5 border border-white/10 p-6 h-full flex flex-col">
                <Quote className="h-8 w-8 text-edg-brand/30 mb-4" />
                <StarRating rating={review.rating} />
                <p className="text-gray-300 mt-4 mb-6 flex-grow leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-semibold">{review.author}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>


      </Container>
    </Section>
  );
}
