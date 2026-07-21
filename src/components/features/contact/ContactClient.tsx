'use client';

import { Clock, MapPin } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { TrackedPhoneLink } from '@/components/ui/TrackedPhoneLink';
import { QuoteRequestForm } from '@/components/features/contact/QuoteRequestForm';

export type ContactFormType = 'homeowner' | 'pro' | 'commercial';

interface ContactClientProps {
  initialFormType?: ContactFormType;
  initialSource?: string;
}

function defaultInterestForType(type: ContactFormType) {
  if (type === 'commercial') return 'commercial';
  if (type === 'pro') return 'trade';
  return '';
}

export function ContactClient({
  initialFormType = 'homeowner',
  initialSource = 'contact_page',
}: ContactClientProps) {
  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-2">
      <section className="relative flex flex-col justify-between overflow-hidden bg-black p-12 text-white lg:p-24">
        <div className="relative z-10">
          <div className="mb-8">
            <Breadcrumb items={[{ label: 'Contact' }]} />
          </div>

          <h1 className="mb-8 text-5xl leading-[0.9] font-bold tracking-tighter md:text-7xl">
            Request a <br /> quote.
          </h1>
          <p className="mb-12 max-w-md text-xl leading-relaxed text-zinc-300">
            Tell us what you are interested in. An EDG team member will contact
            you to learn more and discuss the right next step.
          </p>

          <div className="grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
            <div className="flex gap-4">
              <Clock className="text-edg-brand mt-1 h-6 w-6 shrink-0" />
              <div>
                <h2 className="mb-1 text-sm font-bold tracking-wider uppercase">
                  Fast response
                </h2>
                <p className="text-sm text-zinc-300">
                  We review new requests promptly during business hours.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="text-edg-brand mt-1 h-6 w-6 shrink-0" />
              <div>
                <h2 className="mb-1 text-sm font-bold tracking-wider uppercase">
                  Spring Grove showroom
                </h2>
                <p className="text-sm text-zinc-300">
                  1802 Holian Drive, Spring Grove, IL 60081
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-16 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
          <div>
            <div className="mb-2 text-xs font-bold tracking-widest text-zinc-300 uppercase">
              Call EDG
            </div>
            <TrackedPhoneLink
              href="tel:+18155810138"
              className="hover:text-edg-brand text-lg font-bold transition-colors"
            >
              815.581.0138
            </TrackedPhoneLink>
          </div>
          <div>
            <div className="mb-2 text-xs font-bold tracking-widest text-zinc-300 uppercase">
              Email
            </div>
            <div className="text-lg font-bold">sales@edgpatioshade.com</div>
          </div>
        </div>
      </section>

      <section
        id="contact-project-form"
        className="scroll-mt-28 bg-zinc-50 p-6 md:p-12 lg:p-20"
      >
        <QuoteRequestForm
          source={initialSource}
          defaultInterest={defaultInterestForType(initialFormType)}
          customerType={initialFormType}
          heading="Your quote request"
          intro="Name, email, phone, and interest are all we need to start. Add project details or photos only if you want to."
          ctaPosition="contact_page"
          prefillFromQuery
          className="mx-auto max-w-2xl"
        />
      </section>
    </div>
  );
}

export default ContactClient;
