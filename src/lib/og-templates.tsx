/**
 * OG Image Templates for EDG Patio & Shade
 * 
 * Used by opengraph-image.tsx files to generate dynamic social preview images
 * 
 * UX Impact:
 * - Unique, professional images for each page type
 * - Consistent brand representation across social platforms
 * - Higher click-through rates from social shares
 * 
 * Second-order effects:
 * - Better social media engagement
 * - Improved brand recognition
 * - Higher quality traffic from social referrals
 */

import { ImageResponse } from 'next/og';

// Brand colors from globals.css
const COLORS = {
  brand: '#42ffc1',
  dark: '#000000',
  light: '#ffffff',
  muted: '#a1a1aa',
  surface: '#18181b',
};

export type OGImageProps = {
  title: string;
  subtitle?: string;
  tagline?: string;
  image?: string;
};

/**
 * Base OG Image Template - Editorial/Sharp Design
 * 1200x630px - Standard OG image size
 */
export function generateOGImage({ title, subtitle, tagline, image }: OGImageProps): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: COLORS.dark,
          fontFamily: 'Barlow, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Pattern - Subtle grid */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(66, 255, 193, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(66, 255, 193, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Brand Accent Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: `linear-gradient(90deg, ${COLORS.brand}, transparent)`,
          }}
        />

        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            padding: '60px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Top - Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: COLORS.brand,
              }}
            />
            <span
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: COLORS.brand,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              }}
            >
              EDG Patio & Shade
            </span>
          </div>

          {/* Middle - Title Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '700px' }}>
            {tagline && (
              <span
                style={{
                  fontSize: '16px',
                  color: COLORS.brand,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: 500,
                }}
              >
                {tagline}
              </span>
            )}
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 700,
                color: COLORS.light,
                lineHeight: 1.05,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  fontSize: '28px',
                  color: COLORS.muted,
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Bottom - CTA/Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '1px',
                backgroundColor: COLORS.muted,
              }}
            />
            <span
              style={{
                fontSize: '16px',
                color: COLORS.muted,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Chicago to Milwaukee • Nationwide Design & Supply
            </span>
          </div>
        </div>

        {/* Right Side - Visual Element (if no background image) */}
        {!image && (
          <div
            style={{
              position: 'absolute',
              right: '60px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '300px',
              height: '300px',
              border: `1px solid rgba(66, 255, 193, 0.2)`,
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '200px',
                height: '200px',
                border: `1px solid ${COLORS.brand}`,
                opacity: 0.3,
              }}
            />
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

/**
 * Product Page OG Template
 * Highlights product name and key benefit
 */
export function generateProductOG({
  product,
  category,
  benefit,
}: {
  product: string;
  category: string;
  benefit: string;
}): ImageResponse {
  return generateOGImage({
    title: product,
    subtitle: benefit,
    tagline: category,
  });
}

/**
 * Service Area OG Template
 * Emphasizes location for local SEO
 */
export function generateServiceAreaOG({
  location,
  service,
}: {
  location: string;
  service: string;
}): ImageResponse {
  return generateOGImage({
    title: `${service} in ${location}`,
    subtitle: 'Professional Design & Installation',
    tagline: 'Service Area',
  });
}

/**
 * Guide/Education OG Template
 * For blog posts and guides
 */
export function generateGuideOG({
  title,
  category,
}: {
  title: string;
  category: string;
}): ImageResponse {
  return generateOGImage({
    title,
    subtitle: 'Expert Insights & Advice',
    tagline: category,
  });
}
