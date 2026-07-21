'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { QuoteRequestForm } from '@/components/features/contact/QuoteRequestForm';
import { trackConversion } from '@/lib/analytics';
import {
  Check,
  ChevronLeft,
  Loader2,
  X,
  RotateCcw,
  Sun,
  Moon,
} from 'lucide-react';

// ─── Dynamic import (no SSR — Three.js is browser-only) ──────────────────────
const PergolaCanvas = dynamic(
  () => import('./PergolaCanvas').then((m) => m.PergolaCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-[#0F1014]">
        <div className="text-center">
          <Loader2 className="text-edg-brand mx-auto mb-3 h-8 w-8 animate-spin" />
          <p className="text-xs font-bold tracking-widest text-white/55 uppercase">
            Loading 3D Model
          </p>
        </div>
      </div>
    ),
  }
);

// ─── Types ────────────────────────────────────────────────────────────────────
interface Config {
  width: number;
  depth: number;
  mountType: 'freestanding' | 'wall-mounted';
  frameColor: string;
  louverAngleDeg: number;
  showLED: boolean;
  showScreens: boolean;
  showHeater: boolean;
  showWindSensor: boolean;
  smartControl: boolean;
}

// ─── Representative louvered-system color options ────────────────────────────
const COLORS = [
  { name: 'Traffic White', hex: '#E8E6E2', ral: 'RAL 9016' },
  { name: 'Jet Black', hex: '#1A1A1A', ral: 'RAL 9005' },
  { name: 'Anthracite', hex: '#3C4043', ral: 'RAL 7016' },
  { name: 'Sparkle Grey', hex: '#7E848C', ral: 'RAL 9007' },
] as const;

// ─── Add-on options ───────────────────────────────────────────────────────────
const ADDONS = [
  { key: 'showLED', label: 'Integrated LED Lighting' },
  { key: 'showScreens', label: 'Motorized Zip Screens' },
  { key: 'showHeater', label: 'Infrared Heater' },
  { key: 'showWindSensor', label: 'Wind & Rain Sensors' },
  { key: 'smartControl', label: 'Smart Home Integration' },
] as const;

type AddonKey = (typeof ADDONS)[number]['key'];

// ─── Defaults ─────────────────────────────────────────────────────────────────
const DEFAULT: Config = {
  width: 12,
  depth: 16,
  mountType: 'freestanding',
  frameColor: '#3C4043',
  louverAngleDeg: 45,
  showLED: false,
  showScreens: false,
  showHeater: false,
  showWindSensor: false,
  smartControl: false,
};

// ─── Louver label helper ──────────────────────────────────────────────────────
function louverLabel(deg: number): string {
  if (deg === 0) return 'Fully Closed — Rain Protection';
  if (deg <= 20) return 'Nearly Closed';
  if (deg <= 40) return 'Partial Shade';
  if (deg <= 60) return 'Filtered Light';
  if (deg <= 80) return 'Mostly Open';
  return 'Fully Open — Max Airflow';
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
        {children}
      </span>
      <div className="h-px flex-1 bg-white/8" />
    </div>
  );
}

// ─── Slider field ─────────────────────────────────────────────────────────────
function SliderField({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  const inputId = useId();

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label
          htmlFor={inputId}
          className="text-xs font-bold tracking-wider text-white/65 uppercase"
        >
          {label}
        </label>
        <span className="text-lg font-bold text-white">
          {value}
          <span className="ml-1 text-xs font-normal text-white/60">{unit}</span>
        </span>
      </div>
      <input
        id={inputId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="config-slider w-full"
      />
      <div className="mt-1 flex justify-between text-[10px] text-white/50">
        <span>
          {min} {unit}
        </span>
        <span>
          {max} {unit}
        </span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function ConfiguratorApp() {
  const [config, setConfig] = useState<Config>(DEFAULT);
  const [showModal, setShowModal] = useState(false);
  const [mobileTab, setMobileTab] = useState<'configure' | 'view'>('view');
  const [nightMode, setNightMode] = useState(false);
  const mobileTabsId = useId();
  const configureTabId = `${mobileTabsId}-configure-tab`;
  const viewTabId = `${mobileTabsId}-view-tab`;
  const configurePanelId = `${mobileTabsId}-configure-panel`;
  const viewPanelId = `${mobileTabsId}-view-panel`;

  const selectedColor =
    COLORS.find((c) => c.hex === config.frameColor) ?? COLORS[2];
  const sqFt = config.width * config.depth;

  function set<K extends keyof Config>(key: K, value: Config[K]) {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }

  function buildSummary(): string {
    const activeAddons = ADDONS.filter(
      (a) => config[a.key as keyof Config] === true
    ).map((a) => a.label);
    return [
      '-- Pergola Visualizer Configuration --',
      `Size:        ${config.width}′ × ${config.depth}′  (${sqFt} sq ft)`,
      `Mount:       ${config.mountType === 'freestanding' ? 'Freestanding (4-post)' : 'Wall-Mounted (2-post)'}`,
      `Color:       ${selectedColor.name}  ${selectedColor.ral}`,
      `Louvers:     ${config.louverAngleDeg}°  ${louverLabel(config.louverAngleDeg)}`,
      `Add-ons:     ${activeAddons.length ? activeAddons.join(', ') : 'None selected'}`,
    ].join('\n');
  }

  return (
    <>
      {/* Full-screen layout — dvh accounts for mobile browser chrome */}
      <div className="flex h-[100dvh] flex-col overflow-hidden bg-[#0F1014]">
        {/* Mobile tab bar — appears below fixed navbar */}
        <div
          className="flex flex-shrink-0 border-b border-white/10 pt-16 lg:hidden"
          role="tablist"
          aria-label="Pergola configurator mobile view"
        >
          {(['view', 'configure'] as const).map((tab) => (
            <button
              key={tab}
              id={tab === 'configure' ? configureTabId : viewTabId}
              type="button"
              role="tab"
              onClick={() => setMobileTab(tab)}
              aria-selected={mobileTab === tab}
              aria-controls={
                tab === 'configure' ? configurePanelId : viewPanelId
              }
              tabIndex={mobileTab === tab ? 0 : -1}
              className={`flex-1 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors ${
                mobileTab === tab
                  ? 'border-edg-brand text-edg-brand border-b-2'
                  : 'text-white/60'
              }`}
            >
              {tab === 'configure' ? 'Configure' : 'View 3D'}
            </button>
          ))}
        </div>

        <div className="flex min-h-0 flex-1 overflow-hidden">
          {/* ── Left: config panel ── */}
          <aside
            id={configurePanelId}
            role="tabpanel"
            aria-labelledby={configureTabId}
            className={`flex w-full flex-shrink-0 flex-col border-r border-white/18 bg-[#13151A] lg:w-[390px] ${
              mobileTab !== 'configure' ? 'hidden lg:flex' : 'flex'
            }`}
          >
            {/* ── Header shared across desktop and mobile to keep a single page H1 ── */}
            <div className="flex-shrink-0 border-b border-white/18 px-5 pt-6 pb-4 lg:px-6 lg:pt-24">
              <Link
                href="/systems/pergolas"
                className="mb-4 flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-white/60 uppercase transition-colors hover:text-white/85"
              >
                <ChevronLeft className="h-3 w-3" />
                Back to Pergolas
              </Link>
              <div className="text-edg-brand mb-0.5 text-[10px] font-bold tracking-[0.25em] uppercase">
                Pergola Configurator
              </div>
              <h1 className="text-xl font-bold tracking-tight text-white lg:text-2xl">
                Design Your Pergola
              </h1>
            </div>

            {/* Scrollable options */}
            <div className="flex-1 overflow-y-auto px-5 pt-5 pb-6 lg:px-6 lg:pt-6">
              <div className="space-y-8">
                {/* Dimensions */}
                <section>
                  <SectionLabel>Dimensions</SectionLabel>
                  <div className="space-y-5">
                    <SliderField
                      label="Width"
                      value={config.width}
                      min={8}
                      max={16}
                      step={1}
                      unit="ft"
                      onChange={(v) => set('width', v)}
                    />
                    <SliderField
                      label="Depth"
                      value={config.depth}
                      min={8}
                      max={23}
                      step={1}
                      unit="ft"
                      onChange={(v) => set('depth', v)}
                    />
                  </div>
                  <p className="mt-3 text-[10px] text-white/50">
                    Max single-zone: 16&apos; wide × 23&apos; deep. Multi-zone
                    available for larger spaces.
                  </p>
                </section>

                {/* Mount Type */}
                <section>
                  <SectionLabel>Mount Type</SectionLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {(['freestanding', 'wall-mounted'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => set('mountType', type)}
                        aria-pressed={config.mountType === type}
                        className={`min-h-[52px] border p-3 text-left transition-all ${
                          config.mountType === type
                            ? 'border-edg-brand bg-edg-brand/10 text-edg-brand'
                            : 'border-white/22 text-white/65 hover:border-white/30 hover:text-white/90'
                        }`}
                      >
                        <div className="text-xs font-bold tracking-wider uppercase">
                          {type === 'freestanding' ? '4-Post' : '2-Post'}
                        </div>
                        <div className="mt-0.5 text-[10px] tracking-normal text-white/55 normal-case">
                          {type === 'freestanding'
                            ? 'Standalone'
                            : 'Wall-attached'}
                        </div>
                      </button>
                    ))}
                  </div>
                </section>

                {/* Frame Color */}
                <section>
                  <SectionLabel>Frame Color</SectionLabel>
                  <div className="grid grid-cols-4 gap-2">
                    {COLORS.map((color) => (
                      <button
                        key={color.hex}
                        type="button"
                        onClick={() => set('frameColor', color.hex)}
                        aria-pressed={config.frameColor === color.hex}
                        title={`${color.name} (${color.ral})`}
                        className={`relative min-h-[64px] border p-2 transition-all ${
                          config.frameColor === color.hex
                            ? 'border-edg-brand'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div
                          className="mx-auto mb-1.5 h-8 w-8 border border-white/15"
                          style={{ backgroundColor: color.hex }}
                        />
                        {config.frameColor === color.hex && (
                          <div className="bg-edg-brand absolute top-1 right-1 p-0.5">
                            <Check className="h-2.5 w-2.5 text-black" />
                          </div>
                        )}
                        <div className="text-center text-[11px] font-bold tracking-wide text-white/65 uppercase">
                          {color.name.split(' ')[0]}
                        </div>
                      </button>
                    ))}
                  </div>
                  <p className="mt-2 text-[10px] text-white/55">
                    {selectedColor.name} — {selectedColor.ral}
                  </p>
                </section>

                {/* Louver Angle */}
                <section>
                  <SectionLabel>Louver Position</SectionLabel>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-white/55">Closed</span>
                      <span className="text-xl font-bold text-white">
                        {config.louverAngleDeg}°
                      </span>
                      <span className="text-[10px] text-white/55">Open</span>
                    </div>
                    <input
                      aria-label="Louver position"
                      type="range"
                      min={0}
                      max={90}
                      step={5}
                      value={config.louverAngleDeg}
                      onChange={(e) =>
                        set('louverAngleDeg', Number(e.target.value))
                      }
                      className="config-slider w-full"
                    />
                    <p className="text-edg-brand text-center text-[10px] font-bold tracking-wider uppercase">
                      {louverLabel(config.louverAngleDeg)}
                    </p>
                  </div>
                </section>

                {/* Add-ons */}
                <section>
                  <SectionLabel>Add-Ons</SectionLabel>
                  <div className="space-y-1.5">
                    {ADDONS.map((addon) => {
                      const isOn = config[addon.key as AddonKey] === true;
                      return (
                        <button
                          key={addon.key}
                          type="button"
                          onClick={() =>
                            set(
                              addon.key as keyof Config,
                              !isOn as Config[keyof Config]
                            )
                          }
                          aria-pressed={isOn}
                          className={`flex min-h-[48px] w-full items-center border p-3 text-left transition-all ${
                            isOn
                              ? 'border-edg-brand/60 bg-edg-brand/8 text-edg-brand'
                              : 'border-white/18 text-white/65 hover:border-white/22 hover:text-white/85'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`h-3.5 w-3.5 flex-shrink-0 border transition-colors ${
                                isOn
                                  ? 'border-edg-brand bg-edg-brand'
                                  : 'border-white/25'
                              }`}
                            >
                              {isOn && (
                                <Check className="h-3.5 w-3.5 text-black" />
                              )}
                            </div>
                            <span className="text-[11px] font-bold tracking-wide uppercase">
                              {addon.label}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>

                {/* Config summary */}
                <section className="border border-white/18 bg-white/3 p-4">
                  <SectionLabel>Your Configuration</SectionLabel>
                  <div className="space-y-2">
                    {[
                      ['Size', `${config.width}′ × ${config.depth}′`],
                      ['Coverage', `${sqFt} sq ft`],
                      [
                        'Mount',
                        config.mountType === 'freestanding'
                          ? 'Freestanding'
                          : 'Wall-Mounted',
                      ],
                      ['Color', selectedColor.name],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between text-xs">
                        <span className="text-white/60">{label}</span>
                        <span className="font-bold text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Sticky CTA */}
            <div className="flex-shrink-0 border-t border-white/10 bg-[#13151A] px-6 py-5">
              <Button
                type="button"
                className="w-full"
                size="lg"
                onClick={() => {
                  trackConversion({
                    conversionName: 'pergola_configurator_review_open',
                    linkText: 'Request a Quote',
                  });
                  setShowModal(true);
                }}
              >
                Request a Quote →
              </Button>
              <p className="mt-2.5 text-center text-[10px] text-white/50">
                Your configuration will be included with the quote request.
              </p>
            </div>
          </aside>

          {/* ── Right: 3D canvas ── */}
          <div
            id={viewPanelId}
            role="tabpanel"
            aria-labelledby={viewTabId}
            className={`relative min-h-0 flex-1 ${
              mobileTab !== 'view' ? 'hidden lg:block' : 'block'
            }`}
          >
            <div className="h-full w-full">
              <PergolaCanvas
                width={config.width}
                depth={config.depth}
                mountType={config.mountType}
                frameColor={config.frameColor}
                louverAngleDeg={config.louverAngleDeg}
                showLED={config.showLED}
                showScreens={config.showScreens}
                nightMode={nightMode}
              />
            </div>

            {/* Controls hint */}
            <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 border border-white/10 bg-black/55 px-4 py-2 backdrop-blur-sm">
                <RotateCcw className="h-3 w-3 text-white/60" />
                <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">
                  Drag to rotate · Scroll to zoom
                </span>
              </div>
            </div>

            {/* Night mode toggle */}
            <button
              type="button"
              onClick={() => setNightMode((n) => !n)}
              aria-pressed={nightMode}
              title={nightMode ? 'Switch to day mode' : 'Switch to night mode'}
              className={`absolute right-5 bottom-5 flex items-center gap-2 border px-3 py-2 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm transition-all ${
                nightMode
                  ? 'border-edg-brand/60 bg-edg-brand/15 text-edg-brand'
                  : 'border-white/22 bg-black/55 text-white/65 hover:text-white/90'
              }`}
            >
              {nightMode ? (
                <>
                  <Sun className="h-3 w-3" />
                  Day
                </>
              ) : (
                <>
                  <Moon className="h-3 w-3" />
                  Night
                </>
              )}
            </button>

            {/* Mobile: visible context when the 3D preview is the first view */}
            <div className="pointer-events-none absolute top-4 right-32 left-4 border border-white/10 bg-black/60 p-3 backdrop-blur-sm lg:hidden">
              <div className="text-edg-brand text-[10px] font-bold tracking-[0.2em] uppercase">
                Pergola Configurator
              </div>
              <h1 className="mt-1 text-sm leading-tight font-bold text-white">
                Design your pergola in 3D.
              </h1>
              <p className="mt-1 text-[11px] leading-snug text-white/60">
                Representative preview. EDG confirms final system fit after site
                review.
              </p>
            </div>

            {/* Mobile: switch to config */}
            <button
              type="button"
              className="absolute top-4 right-4 flex items-center gap-1.5 border border-white/22 bg-black/60 px-3 py-2 text-[10px] font-bold tracking-widest text-white/65 uppercase backdrop-blur-sm transition-colors hover:text-white/90 lg:hidden"
              onClick={() => setMobileTab('configure')}
            >
              <ChevronLeft className="h-3 w-3" />
              Configure
            </button>
          </div>
        </div>
      </div>

      {/* ── Quote modal ── */}
      {showModal && (
        <QuoteModal
          summary={buildSummary()}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

// ─── Quote capture modal ──────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: 'Worth every penny. We use it rain or shine, all season long.',
    name: 'M. Kowalski',
    location: 'Barrington, IL',
  },
  {
    quote: 'The LED lighting at night completely transformed our backyard.',
    name: 'T. Reyes',
    location: 'Lake Forest, IL',
  },
  {
    quote:
      'EDG handled permits, delivery, and install. Seamless start to finish.',
    name: 'S. Patel',
    location: 'Naperville, IL',
  },
];

function QuoteModal({
  summary,
  onClose,
}: {
  summary: string;
  onClose: () => void;
}) {
  const dialogTitleId = useId();
  const dialogDescriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [testimonialIdx] = useState(() =>
    Math.floor(Math.random() * TESTIMONIALS.length)
  );
  const testimonial = TESTIMONIALS[testimonialIdx];

  useEffect(() => {
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={dialogTitleId}
        aria-describedby={dialogDescriptionId}
        className="relative max-h-[92dvh] w-full overflow-y-auto border-t border-white/10 bg-[#13151A] sm:max-h-[85dvh] sm:max-w-lg sm:border"
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close configuration review form"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/55 transition-colors hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="text-edg-brand mb-1 text-[10px] font-bold tracking-[0.25em] uppercase">
            Your pergola configuration
          </div>
          <h2 id={dialogTitleId} className="mb-1 text-2xl font-bold text-white">
            Request a Quote
          </h2>
          <p id={dialogDescriptionId} className="mb-5 text-xs text-white/60">
            Your selected size, mount type, color, and options will be included
            automatically.
          </p>

          <div className="border-edg-brand mb-5 border-l-2 pl-4">
            <p className="text-xs leading-relaxed text-white/75 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="mt-1 text-[10px] font-bold tracking-wider text-white/55 uppercase">
              — {testimonial.name}, {testimonial.location}
            </p>
          </div>

          <div className="mb-5 border border-white/18 bg-black/30 p-4">
            <pre className="font-mono text-[11px] leading-relaxed whitespace-pre-wrap text-white/65">
              {summary}
            </pre>
          </div>

          <QuoteRequestForm
            source="pergola-configurator"
            defaultInterest="pergola"
            theme="dark"
            heading="Contact information"
            intro="Name, email, phone, and interest are all we need."
            ctaPosition="pergola_configurator"
            contextMessage={summary}
            metadata={{
              configurator_summary: summary,
              pilot_name: 'pergola_system_fit',
              pilot_version: 'v2_standard_quote',
            }}
            className="border-0 bg-transparent p-0 backdrop-blur-none"
          />
        </div>
      </div>
    </div>
  );
}
