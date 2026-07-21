'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TrackedLink } from '@/components/ui/TrackedLink';
import { buildContactHref } from '@/lib/contact-links';
import { Check } from 'lucide-react';

interface ColorOption {
  name: string;
  hex: string;
  ral?: string;
}

const colorOptions: ColorOption[] = [
  { name: 'Traffic White', hex: '#FFFFFF', ral: 'RAL 9016' },
  { name: 'Jet Black', hex: '#000000', ral: 'RAL 9005' },
  { name: 'Anthracite', hex: '#2D3748', ral: 'RAL 7016' },
  { name: 'Sparkle Grey', hex: '#718096', ral: 'RAL 9007' },
];

const includedFeatures = [
  'Site Laser Measure',
  'Permit Packet Creation',
  'Freight & Delivery',
  'White-Glove Installation',
];

const configuratorConsultationHref = buildContactHref({
  type: 'consultation',
  product: 'pergola',
  source: 'pergola_configurator_color_panel',
});

export function PergolaConfiguratorClient() {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(
    colorOptions[0]
  );

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Color Selection */}
      <div className="lg:col-span-2">
        <h3 className="label-editorial-brand mb-6">Color Options</h3>
        <p className="text-text-secondary mb-8">
          Finish availability, coating systems, custom-color options, and
          manufacturing lead times vary by manufacturer. EDG confirms samples,
          warranty terms, maintenance requirements, and expected production
          timing before order.
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {colorOptions.map((color) => (
            <button
              key={color.name}
              type="button"
              onClick={() => setSelectedColor(color)}
              className={`group bg-surface relative rounded-none border p-6 text-center transition-all ${
                selectedColor.name === color.name
                  ? 'border-edg-brand ring-edg-brand ring-1'
                  : 'border-border hover:border-border-strong'
              }`}
            >
              <div
                className="border-border mx-auto mb-4 h-16 w-16 border"
                style={{ backgroundColor: color.hex }}
              />
              <div className="text-text-primary text-sm font-bold">
                {color.name}
              </div>
              {color.ral && (
                <div className="text-text-muted mt-1 text-xs">{color.ral}</div>
              )}
              {selectedColor.name === color.name && (
                <div className="absolute top-2 right-2">
                  <div className="bg-edg-brand text-edg-dark p-1">
                    <Check className="h-3 w-3" />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="bg-surface-muted border-border mt-8 border p-6">
          <h4 className="mb-2 font-bold">Selected: {selectedColor.name}</h4>
          <p className="text-text-secondary text-sm">
            Final coating, durability, care requirements, and warranty coverage
            depend on the selected manufacturer and finish package.
          </p>
        </div>
      </div>

      {/* Included Features */}
      <div>
        <Card variant="dark" padding="lg" className="h-full">
          <h3 className="label-editorial-brand text-edg-brand mb-6">
            Every Project Includes
          </h3>
          <ul className="space-y-4">
            {includedFeatures.map((feature) => (
              <li
                key={feature}
                className="text-text-inverse flex items-center gap-3"
              >
                <div className="bg-edg-brand/20 p-1">
                  <Check className="text-edg-brand h-4 w-4" />
                </div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="border-border-inverse mt-8 border-t pt-8">
            <p className="text-text-inverse-muted mb-4 text-sm">
              Not sure which color works best with your home? Schedule a
              consultation and we will bring samples to your site.
            </p>
            <TrackedLink href={configuratorConsultationHref}>
              <Button variant="outline" className="w-full">
                Request a Quote
              </Button>
            </TrackedLink>
          </div>
        </Card>
      </div>
    </div>
  );
}
