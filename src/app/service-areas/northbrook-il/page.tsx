import { ServiceAreaLayout } from '@/components/features/service-area/ServiceAreaLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motorized Pergolas & Patio Shades in Northbrook, IL | EDG',
  description:
    'Transform your Northbrook home with hurricane-rated louvered pergolas and retractable screens. Custom designed for 60062 zoning codes and Georgian architecture.',
  alternates: {
    canonical: '/service-areas/northbrook-il',
  },
};

export default function NorthbrookHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Outdoor Living Design & Installation - Northbrook',
            description:
              'Hurricane-rated louvered pergolas and retractable screens custom designed for Northbrook homes.',
            provider: {
              '@id': 'https://www.edgpatioshade.com/#organization',
            },
            areaServed: {
              '@type': 'City',
              name: 'Northbrook',
            },
            url: 'https://www.edgpatioshade.com/service-areas/northbrook-il',
            image:
              'https://www.edgpatioshade.com/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png',
          }),
        }}
      />
      <ServiceAreaLayout
        location="Northbrook"
        state="IL"
        zipCodes={['60062', '60065']}
        tagline="Extend Your Living Space, No Matter the Weather."
        description="In Northbrook, outdoor living means dealing with humid summers and heavy winter snow loads. Our systems are engineered to handle 115mph winds and open automatically to prevent snow buildup, making them the perfect addition to Northbrook's classic brick estates."
        heroImage="/images/pergolas/residential-black-r-blade-outdoor-dining-pool.png"
        challenges={[
          {
            title: 'Wind & Snow Load',
            description:
              'Northbrook code requires 30psf snow ratings. Our louvers open automatically to protect your structure.',
            icon: 'snowflake',
          },
          {
            title: 'Architecture Match',
            description:
              'From Shermer Road to the winding lanes of Techny, we match the classic Georgian and Colonial styles of the village.',
            icon: 'home',
          },
          {
            title: 'Zoning Compliance',
            description:
              'We handle the entire Application for Permit process with the Village of Northbrook, ensuring 15ft height compliance.',
            icon: 'file-check',
          },
        ]}
        links={[
          {
            title: 'Northbrook Zoning Guide',
            href: '/service-areas/northbrook-il/zoning-guide',
          },
          {
            title: 'Louvered Pergolas in Northbrook',
            href: '/service-areas/northbrook-il/motorized-pergolas',
          },
          { title: 'View Local Projects', href: '/projects' },
        ]}
      />
    </>
  );
}
