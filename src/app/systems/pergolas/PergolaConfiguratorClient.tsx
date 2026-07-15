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
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Color Selection */}
      <div className="lg:col-span-2">
        <h3 className="label-editorial-brand mb-6">Color Options</h3>
        <p className="text-text-secondary mb-8">
          Finish availability, coating systems, custom-color options, and
          manufacturing lead times vary by manufacturer. EDG confirms samples,
          warranty terms, maintenance requirements, and expected production
          timing before order.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colorOptions.map((color) => (
            <button
              key={color.name}
              type="button"
              onClick={() => setSelectedColor(color)}
              className={`group relative bg-surface border p-6 text-center transition-all rounded-none ${
                selectedColor.name === color.name
                  ? 'border-edg-brand ring-1 ring-edg-brand'
                  : 'border-border hover:border-border-strong'
              }`}
            >
              <div
                className="w-16 h-16 mx-auto mb-4 border border-border"
                style={{ backgroundColor: color.hex }}
              />
              <div className="font-bold text-sm text-text-primary">{color.name}</div>
              {color.ral && (
                <div className="text-xs text-text-muted mt-1">{color.ral}</div>
              )}
              {selectedColor.name === color.name && (
                <div className="absolute top-2 right-2">
                  <div className="bg-edg-brand p-1 text-edg-dark">
                    <Check className="h-3 w-3" />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 p-6 bg-surface-muted border border-border">
          <h4 className="font-bold mb-2">Selected: {selectedColor.name}</h4>
          <p className="text-sm text-text-secondary">
            Final coating, durability, care requirements, and warranty coverage
            depend on the selected manufacturer and finish package.
          </p>
        </div>
      </div>

      {/* Included Features */}
      <div>
        <Card variant="dark" padding="lg" className="h-full">
          <h3 className="label-editorial-brand mb-6 text-edg-brand">Every Project Includes</h3>
          <ul className="space-y-4">
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-text-inverse">
                <div className="bg-edg-brand/20 p-1">
                  <Check className="h-4 w-4 text-edg-brand" />
                </div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-border-inverse mt-8 pt-8">
            <p className="text-sm text-text-inverse-muted mb-4">
              Not sure which color works best with your home? Schedule a consultation and 
              we will bring samples to your site.
            </p>
            <TrackedLink href={configuratorConsultationHref}>
              <Button variant="outline" className="w-full">
                Book Consultation
              </Button>
            </TrackedLink>
          </div>
        </Card>
      </div>
    </div>
  );
}
