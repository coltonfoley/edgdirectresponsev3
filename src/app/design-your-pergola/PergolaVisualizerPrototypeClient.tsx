'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';
import { cn } from '@/lib/utils';
import * as images from '@/lib/images';
import { CheckCircle2, Loader2, Mail } from 'lucide-react';
import { useMotionValue, animate } from 'framer-motion';
import type { Group } from 'three';

// ─── Types ───────────────────────────────────────────────────────────────────

type InstallationType = 'freestanding' | 'attached';
type ColorOptionId =
  | 'traffic-white'
  | 'jet-black'
  | 'anthracite'
  | 'gray-bronze'
  | 'wood-grain'
  | 'custom';
type SideTreatment = 'open' | 'screen' | 'privacy-wall';

interface PergolaMaterial {
  color: string;
  metalness: number;
  roughness: number;
}

interface ColorOption {
  id: ColorOptionId;
  label: string;
  note: string;
  swatch: string;
  material: PergolaMaterial;
}

interface PergolaConfig {
  installationType: InstallationType;
  width: number;
  depth: number;
  height: number;
  roofAngle: number;
  frameColor: ColorOptionId;
  louverColor: ColorOptionId;
  frameCustomColor: string;
  louverCustomColor: string;
  frontTreatment: SideTreatment;
  backTreatment: SideTreatment;
  leftTreatment: SideTreatment;
  rightTreatment: SideTreatment;
  lighting: boolean;
  heating: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const colorOptions: ColorOption[] = [
  {
    id: 'traffic-white',
    label: 'Traffic White',
    note: 'Standard bright white',
    swatch: '#f6f7f4',
    material: { color: '#f3f2ee', metalness: 0.35, roughness: 0.32 },
  },
  {
    id: 'jet-black',
    label: 'Jet Black',
    note: 'Standard deep black',
    swatch: '#171717',
    material: { color: '#1c1c1c', metalness: 0.45, roughness: 0.3 },
  },
  {
    id: 'anthracite',
    label: 'Anthracite',
    note: 'RAL 7016 charcoal',
    swatch: '#3b4148',
    material: { color: '#3e4349', metalness: 0.42, roughness: 0.35 },
  },
  {
    id: 'gray-bronze',
    label: 'Gray Bronze',
    note: 'Warm bronze-gray',
    swatch: '#7d7267',
    material: { color: '#7d7267', metalness: 0.38, roughness: 0.4 },
  },
  {
    id: 'wood-grain',
    label: 'Wood Grain',
    note: 'Wood-look premium finish',
    swatch: '#8b6a49',
    material: { color: '#8b6a49', metalness: 0.15, roughness: 0.72 },
  },
  {
    id: 'custom',
    label: 'Custom',
    note: 'Custom color request',
    swatch: 'linear-gradient(135deg, #b6d4f5, #f5e6a4, #d5b3ff)',
    material: { color: '#6d7783', metalness: 0.36, roughness: 0.38 },
  },
] as const;

const treatmentOptions: Array<{ id: SideTreatment; label: string }> = [
  { id: 'open', label: 'Open' },
  { id: 'screen', label: 'Screen' },
  { id: 'privacy-wall', label: 'Privacy Wall' },
];

const defaultConfig: PergolaConfig = {
  installationType: 'freestanding',
  width: 16,
  depth: 12,
  height: 8.5,
  roofAngle: 28,
  frameColor: 'anthracite',
  louverColor: 'traffic-white',
  frameCustomColor: '',
  louverCustomColor: '',
  frontTreatment: 'open',
  backTreatment: 'open',
  leftTreatment: 'screen',
  rightTreatment: 'open',
  lighting: true,
  heating: false,
};

const referenceImages = [
  {
    src: images.systems.pergolas.blackBladePool,
    alt: 'Black louvered pergola beside a pool',
  },
  {
    src: images.systems.pergolas.grayBronzeWhite,
    alt: 'Gray bronze pergola with white louvers',
  },
  {
    src: images.systems.pergolas.whiteLedStrip,
    alt: 'White pergola with integrated lighting',
  },
] as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getColorOption(id: ColorOptionId) {
  return colorOptions.find((o) => o.id === id) ?? colorOptions[0];
}

function formatColorLabel(id: ColorOptionId, custom: string) {
  if (id === 'custom' && custom.trim()) return `Custom (${custom.trim()})`;
  return getColorOption(id).label;
}

function formatTreatmentLabel(t: SideTreatment) {
  return treatmentOptions.find((o) => o.id === t)?.label ?? 'Open';
}

function buildMessage(config: PergolaConfig, notes: string) {
  const lines = [
    'Pergola visualizer request',
    `Installation: ${config.installationType === 'attached' ? 'Attached / wall-mounted' : 'Freestanding'}`,
    `Size: ${config.width}' W × ${config.depth}' D × ${config.height}' H`,
    `Roof angle: ${config.roofAngle}°`,
    `Frame: ${formatColorLabel(config.frameColor, config.frameCustomColor)}`,
    `Louvers: ${formatColorLabel(config.louverColor, config.louverCustomColor)}`,
    `Front: ${formatTreatmentLabel(config.frontTreatment)}`,
    `Back: ${config.installationType === 'attached' ? 'House connection' : formatTreatmentLabel(config.backTreatment)}`,
    `Left: ${formatTreatmentLabel(config.leftTreatment)}`,
    `Right: ${formatTreatmentLabel(config.rightTreatment)}`,
    `Lighting: ${config.lighting ? 'Yes' : 'No'}`,
    `Heating: ${config.heating ? 'Yes' : 'No'}`,
  ];
  if (notes.trim()) lines.push(`Notes: ${notes.trim()}`);
  return lines.join('\n');
}

function canUseWebGL() {
  if (typeof window === 'undefined') return false;
  try {
    const c = document.createElement('canvas');
    return Boolean(c.getContext('webgl') || c.getContext('experimental-webgl'));
  } catch {
    return false;
  }
}

// ─── Design tokens ────────────────────────────────────────────────────────────

const C = {
  bg: '#050708',
  surface: '#0d1318',
  panel: '#090d11',
  card: '#10161c',
  border: 'rgba(255,255,255,0.09)',
  borderActive: '#42ffc1',
  brand: '#42ffc1',
  text: '#ffffff',
  textMuted: '#d4d4d8',
  textDim: '#71717a',
  activeBtn: 'rgba(66,255,193,0.1)',
  inactiveBtn: '#121920',
  disabledBtn: '#0d1115',
} as const;

// ─── Scoped layout CSS ────────────────────────────────────────────────────────
// Using a <style> tag guarantees these rules are always injected regardless of
// whether Tailwind's scanner has processed this file yet.

const LAYOUT_CSS = `
  .pv-wrap { min-height: 100vh; background-color: ${C.bg}; color: ${C.text}; }
  .pv-hero { background-color: ${C.bg}; border-bottom: 1px solid ${C.border}; padding-top: 7rem; padding-bottom: 2.5rem; }
  .pv-hero-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }
  .pv-hero-grid { display: flex; flex-direction: column; gap: 2.5rem; }
  .pv-hero-card { background-color: rgba(16,22,28,0.92); border: 1px solid ${C.border}; padding: 2rem; }
  .pv-viewer { display: flex; flex-direction: column; }
  .pv-canvas-wrap { position: relative; height: 60vh; overflow: hidden; border-bottom: 1px solid ${C.border}; background-color: #071015; }
  .pv-panel { background-color: ${C.panel}; overflow-y: auto; }
  .pv-panel-inner { max-width: 440px; padding: 1.5rem; margin: 0 auto; }
  @media (min-width: 1280px) {
    .pv-hero-grid { flex-direction: row; align-items: flex-end; }
    .pv-hero-card { width: 360px; flex-shrink: 0; }
    .pv-viewer { flex-direction: row; align-items: stretch; }
    .pv-canvas-wrap { flex: 1; height: 100vh; border-bottom: none; border-right: 1px solid ${C.border}; }
    .pv-panel { width: 440px; flex-shrink: 0; height: 100vh; overflow-y: auto; }
    .pv-panel-inner { padding: 2rem; }
  }
  .pv-breadcrumb { display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; color: ${C.textDim}; flex-wrap: wrap; margin-bottom: 2rem; }
  .pv-breadcrumb a { color: ${C.textDim}; text-decoration: none; transition: color 0.15s; }
  .pv-breadcrumb a:hover { color: ${C.brand}; }
  .pv-breadcrumb span { color: ${C.textMuted}; }
  .pv-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; }
  .pv-section-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: ${C.textDim}; margin-bottom: 0.75rem; }
  .pv-divider { border: none; border-top: 1px solid ${C.border}; margin: 2rem 0; }
  .pv-btn { display: inline-flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; padding: 0.85rem 1.25rem; border: 1px solid; cursor: pointer; transition: background 0.15s, border-color 0.15s, color 0.15s; width: 100%; }
  .pv-btn-primary { background-color: ${C.brand}; border-color: ${C.brand}; color: #000; }
  .pv-btn-primary:hover { background-color: #2eeead; border-color: #2eeead; }
  .pv-btn-outline { background-color: transparent; border-color: rgba(255,255,255,0.25); color: ${C.text}; }
  .pv-btn-outline:hover { border-color: ${C.brand}; color: ${C.brand}; }
  .pv-toggle { flex: 1; padding: 0.85rem 0.75rem; border: 1px solid; cursor: pointer; text-align: left; transition: background 0.15s, border-color 0.15s; }
  .pv-toggle-active { background-color: ${C.activeBtn}; border-color: ${C.borderActive}; }
  .pv-toggle-inactive { background-color: ${C.inactiveBtn}; border-color: ${C.border}; }
  .pv-toggle-inactive:hover { background-color: #182129; }
  .pv-toggle-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: ${C.text}; }
  .pv-toggle-desc { font-size: 0.7rem; color: ${C.textDim}; margin-top: 0.25rem; }
  .pv-treat-btn { flex: 1; padding: 0.6rem 0.4rem; border: 1px solid; cursor: pointer; text-align: center; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; transition: background 0.15s, border-color 0.15s; }
  .pv-treat-active { background-color: ${C.activeBtn}; border-color: ${C.borderActive}; color: ${C.text}; }
  .pv-treat-inactive { background-color: ${C.inactiveBtn}; border-color: ${C.border}; color: ${C.textMuted}; }
  .pv-treat-inactive:hover { background-color: #182129; }
  .pv-treat-disabled { background-color: ${C.disabledBtn}; border-color: rgba(255,255,255,0.05); color: ${C.textDim}; cursor: not-allowed; }
  .pv-swatch-btn { border: 1px solid; padding: 0.6rem; cursor: pointer; transition: border-color 0.15s, background 0.15s; }
  .pv-swatch-active { border-color: ${C.borderActive}; background-color: ${C.activeBtn}; }
  .pv-swatch-inactive { border-color: ${C.border}; background-color: ${C.inactiveBtn}; }
  .pv-swatch-inactive:hover { border-color: rgba(255,255,255,0.3); }
  .pv-range { width: 100%; height: 4px; cursor: pointer; border-radius: 9999px; background: rgba(255,255,255,0.1); accent-color: ${C.brand}; }
  .pv-input { width: 100%; padding: 0.75rem 1rem; font-size: 0.85rem; color: ${C.text}; background-color: #121920; border: 1px solid ${C.border}; outline: none; transition: border-color 0.15s; }
  .pv-input::placeholder { color: ${C.textDim}; }
  .pv-input:focus { border-color: rgba(66,255,193,0.4); }
  .pv-summary-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .pv-summary-row:last-child { border-bottom: none; padding-bottom: 0; }
  .pv-viewer-note { position: absolute; bottom: 1.25rem; right: 1.25rem; z-index: 20; padding: 0.85rem 1rem; background-color: rgba(13,20,25,0.88); border: 1px solid ${C.border}; backdrop-filter: blur(8px); max-width: 16rem; pointer-events: none; }
`;

// ─── Sub-components ───────────────────────────────────────────────────────────

function RangeField({
  id,
  label,
  min,
  max,
  step,
  value,
  suffix,
  onChange,
}: {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label htmlFor={id} style={{ fontSize: '0.8rem', fontWeight: 500, color: C.textMuted }}>
          {label}
        </label>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: C.brand }}>
          {value}{suffix}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="pv-range"
      />
    </div>
  );
}

function ToggleGroup({
  options,
  value,
  onChange,
}: {
  options: Array<{ id: string; label: string; desc?: string }>;
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onChange(opt.id)}
          className={cn('pv-toggle', opt.id === value ? 'pv-toggle-active' : 'pv-toggle-inactive')}
        >
          <div className="pv-toggle-label">{opt.label}</div>
          {opt.desc ? <div className="pv-toggle-desc">{opt.desc}</div> : null}
        </button>
      ))}
    </div>
  );
}

function TreatmentRow({
  label,
  value,
  disabled,
  onChange,
}: {
  label: string;
  value: SideTreatment;
  disabled?: boolean;
  onChange: (v: SideTreatment) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <div className="pv-section-label" style={{ marginBottom: 0 }}>{label}</div>
      <div style={{ display: 'flex', gap: '0.4rem' }}>
        {treatmentOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            disabled={disabled}
            onClick={() => !disabled && onChange(opt.id)}
            className={cn(
              'pv-treat-btn',
              disabled ? 'pv-treat-disabled' : opt.id === value ? 'pv-treat-active' : 'pv-treat-inactive'
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ColorGrid({
  label,
  value,
  customValue,
  onChange,
  onCustomChange,
}: {
  label: string;
  value: ColorOptionId;
  customValue: string;
  onChange: (v: ColorOptionId) => void;
  onCustomChange: (v: string) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ fontSize: '0.8rem', fontWeight: 500, color: C.textMuted }}>{label}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
        {colorOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={cn('pv-swatch-btn', opt.id === value ? 'pv-swatch-active' : 'pv-swatch-inactive')}
          >
            <div
              style={{
                height: '2rem',
                marginBottom: '0.4rem',
                border: '1px solid rgba(0,0,0,0.15)',
                background: opt.id === 'custom' ? opt.swatch : opt.swatch,
                backgroundColor: opt.id === 'custom' ? undefined : opt.swatch,
              }}
            />
            <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.text }}>
              {opt.label}
            </div>
          </button>
        ))}
      </div>
      {value === 'custom' ? (
        <input
          type="text"
          value={customValue}
          onChange={(e) => onCustomChange(e.target.value)}
          placeholder="RAL code or color description"
          className="pv-input"
        />
      ) : null}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

function PergolaVisualizerPrototypeClientInner() {
  const [config, setConfig] = useState<PergolaConfig>(defaultConfig);
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState('');
  const [webglReady, setWebglReady] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', zipCode: '' });
  const [fax, setFax] = useState('');
  const formRef = useRef<HTMLDivElement | null>(null);
  const { submitLead, loading, error, success } = useLeadSubmission();

  useEffect(() => { setWebglReady(canUseWebGL()); }, []);

  const summaryRows = useMemo(() => [
    { label: 'Type', value: config.installationType === 'attached' ? 'Attached' : 'Freestanding' },
    { label: 'Size', value: `${config.width}' W × ${config.depth}' D × ${config.height}' H` },
    { label: 'Roof', value: `${config.roofAngle}° louver angle` },
    { label: 'Frame', value: formatColorLabel(config.frameColor, config.frameCustomColor) },
    { label: 'Louvers', value: formatColorLabel(config.louverColor, config.louverCustomColor) },
    {
      label: 'Extras',
      value: [config.lighting ? 'LED' : null, config.heating ? 'Heating' : null].filter(Boolean).join(' + ') || 'None',
    },
  ], [config]);

  const openForm = () => {
    setShowForm(true);
    requestAnimationFrame(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitLead({
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      location: formData.zipCode.trim(),
      projectType: 'pergola',
      customerType: 'homeowner',
      source: 'pergola_visualizer',
      message: buildMessage(config, notes),
      fax,
    });
  };

  return (
    <>
      <style>{LAYOUT_CSS}</style>
      <div className="pv-wrap">

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="pv-hero">
          <div className="pv-hero-inner">

            {/* Breadcrumb */}
            <nav className="pv-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/systems">Systems</Link>
              <span>/</span>
              <Link href="/systems/pergolas">Motorized Pergolas</Link>
              <span>/</span>
              <span style={{ color: C.textMuted }}>3D Visualizer</span>
            </nav>

            <div className="pv-hero-grid">
              {/* Left: heading */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.brand, marginBottom: '1rem' }}>
                  <span style={{ height: 1, width: '2rem', backgroundColor: C.brand, display: 'block' }} />
                  Interactive Prototype
                </div>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 0.95, fontWeight: 700, letterSpacing: '-0.02em', color: C.text, maxWidth: '36rem' }}>
                  Visualize a louvered roof before you request pricing.
                </h1>
                <p style={{ marginTop: '1.25rem', fontSize: '1.05rem', lineHeight: 1.65, color: C.textMuted, maxWidth: '32rem' }}>
                  Rotate the pergola, test realistic options, and send your preferred
                  setup to EDG for a real-world pricing review.
                </p>
              </div>

              {/* Right: card */}
              <div className="pv-hero-card">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.brand, marginBottom: '0.4rem' }}>Reality-based options</div>
                    <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: C.textDim }}>
                      Colors, side treatments, lighting, and size ranges reflect things EDG can actually spec and install.
                    </p>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.brand, marginBottom: '0.4rem' }}>Brand-neutral on purpose</div>
                    <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: C.textDim }}>
                      This prototype shows visual direction only. Final engineering, attachments, and manufacturer fit are reviewed by EDG.
                    </p>
                  </div>
                  <button type="button" onClick={openForm} className="pv-btn pv-btn-primary">
                    Request Pricing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Viewer + Controls ──────────────────────────────────────────── */}
        <div className="pv-viewer">

          {/* 3D Canvas */}
          <div className="pv-canvas-wrap">
            {webglReady ? (
              <Canvas
                shadows
                dpr={[1, 1.6]}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              >
                <Suspense fallback={null}>
                  <PerspectiveCamera makeDefault position={[14, 10, 14]} fov={34} />
                  <color attach="background" args={['#071015']} />
                  <fog attach="fog" args={['#071015', 16, 34]} />
                  <ambientLight intensity={0.95} />
                  <directionalLight
                    castShadow
                    intensity={2.7}
                    position={[10, 16, 8]}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    shadow-camera-near={0.5}
                    shadow-camera-far={50}
                    shadow-camera-left={-18}
                    shadow-camera-right={18}
                    shadow-camera-top={18}
                    shadow-camera-bottom={-18}
                  />
                  <hemisphereLight intensity={0.6} color="#c8f8ff" groundColor="#1c221f" />
                  <group position={[0, -0.3, 0]}>
                    <PergolaScene config={config} />
                  </group>
                  <ContactShadows position={[0, -0.31, 0]} opacity={0.5} scale={26} blur={2.6} far={18} />
                  <OrbitControls
                    enablePan={false}
                    minDistance={13}
                    maxDistance={24}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI / 2.1}
                    autoRotate
                    autoRotateSpeed={0.55}
                  />
                </Suspense>
              </Canvas>
            ) : (
              <div style={{ position: 'absolute', inset: 0 }}>
                <Image
                  src={images.systems.pergolas.grayBronzeWhite}
                  alt="Pergola preview"
                  fill
                  className="object-cover"
                  style={{ opacity: 0.8 }}
                  sizes="100vw"
                  priority
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #071015 0%, rgba(7,16,21,0.3) 50%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', maxWidth: '22rem', padding: '1rem', backgroundColor: 'rgba(13,20,25,0.88)', border: `1px solid ${C.border}`, backdropFilter: 'blur(8px)' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.brand }}>Fallback Preview</div>
                  <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', lineHeight: 1.6, color: C.textMuted }}>
                    WebGL is unavailable — showing a static reference image. You can still configure options and request pricing.
                  </p>
                </div>
              </div>
            )}

            {/* Viewer note */}
            <div className="pv-viewer-note">
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.brand }}>Visualizer</div>
              <p style={{ marginTop: '0.35rem', fontSize: '0.7rem', lineHeight: 1.55, color: C.textMuted }}>
                Prototype for visual testing. Final system fit reviewed by EDG.
              </p>
            </div>
          </div>

          {/* Control Panel */}
          <div className="pv-panel">
            <div className="pv-panel-inner">

              {/* Header */}
              <div style={{ paddingBottom: '1.5rem', borderBottom: `1px solid ${C.border}`, marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.brand }}>Control Panel</div>
                <p style={{ marginTop: '0.5rem', fontSize: '0.78rem', lineHeight: 1.6, color: C.textDim }}>
                  Adjust the options below. Anything outside these ranges can be reviewed as a custom layout.
                </p>
              </div>

              {/* Installation type */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div className="pv-section-label">Installation Type</div>
                <ToggleGroup
                  value={config.installationType}
                  onChange={(v) => setConfig((c) => ({ ...c, installationType: v as InstallationType, backTreatment: v === 'attached' ? 'open' : c.backTreatment }))}
                  options={[
                    { id: 'freestanding', label: 'Freestanding', desc: 'Independent posts all around' },
                    { id: 'attached', label: 'Wall-Mounted', desc: 'Attached back to the home' },
                  ]}
                />
              </div>

              <hr className="pv-divider" style={{ margin: '0 0 1.75rem' }} />

              {/* Dimensions */}
              <div style={{ marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="pv-section-label">Dimensions</div>
                <RangeField id="width" label="Width" min={10} max={22} step={1} value={config.width} suffix="'" onChange={(v) => setConfig((c) => ({ ...c, width: v }))} />
                <RangeField id="depth" label="Projection" min={10} max={16} step={1} value={config.depth} suffix="'" onChange={(v) => setConfig((c) => ({ ...c, depth: v }))} />
                <RangeField id="height" label="Height" min={8} max={10} step={0.5} value={config.height} suffix="'" onChange={(v) => setConfig((c) => ({ ...c, height: v }))} />
                <p style={{ fontSize: '0.7rem', color: C.textDim, lineHeight: 1.55 }}>
                  Typical range: up to 22&apos; wide × 16&apos; projection. Larger layouts reviewed during pricing.
                </p>
              </div>

              <hr className="pv-divider" style={{ margin: '0 0 1.75rem' }} />

              {/* Louver angle */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div className="pv-section-label">Louver Angle</div>
                <RangeField id="roof-angle" label="Roof Position" min={0} max={90} step={5} value={config.roofAngle} suffix="°" onChange={(v) => setConfig((c) => ({ ...c, roofAngle: v }))} />
              </div>

              <hr className="pv-divider" style={{ margin: '0 0 1.75rem' }} />

              {/* Colors */}
              <div style={{ marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <ColorGrid
                  label="Frame Color"
                  value={config.frameColor}
                  customValue={config.frameCustomColor}
                  onChange={(v) => setConfig((c) => ({ ...c, frameColor: v }))}
                  onCustomChange={(v) => setConfig((c) => ({ ...c, frameCustomColor: v }))}
                />
                <ColorGrid
                  label="Louver Color"
                  value={config.louverColor}
                  customValue={config.louverCustomColor}
                  onChange={(v) => setConfig((c) => ({ ...c, louverColor: v }))}
                  onCustomChange={(v) => setConfig((c) => ({ ...c, louverCustomColor: v }))}
                />
              </div>

              <hr className="pv-divider" style={{ margin: '0 0 1.75rem' }} />

              {/* Side treatments */}
              <div style={{ marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div className="pv-section-label">Side Treatments</div>
                <TreatmentRow label="Front" value={config.frontTreatment} onChange={(v) => setConfig((c) => ({ ...c, frontTreatment: v }))} />
                <TreatmentRow label="Back" value={config.backTreatment} disabled={config.installationType === 'attached'} onChange={(v) => setConfig((c) => ({ ...c, backTreatment: v }))} />
                <TreatmentRow label="Left" value={config.leftTreatment} onChange={(v) => setConfig((c) => ({ ...c, leftTreatment: v }))} />
                <TreatmentRow label="Right" value={config.rightTreatment} onChange={(v) => setConfig((c) => ({ ...c, rightTreatment: v }))} />
              </div>

              <hr className="pv-divider" style={{ margin: '0 0 1.75rem' }} />

              {/* Comfort upgrades */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div className="pv-section-label">Comfort Upgrades</div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setConfig((c) => ({ ...c, lighting: !c.lighting }))}
                    className={cn('pv-toggle', config.lighting ? 'pv-toggle-active' : 'pv-toggle-inactive')}
                  >
                    <div className="pv-toggle-label">LED Lighting</div>
                    <div className="pv-toggle-desc">Integrated perimeter</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfig((c) => ({ ...c, heating: !c.heating }))}
                    className={cn('pv-toggle', config.heating ? 'pv-toggle-active' : 'pv-toggle-inactive')}
                  >
                    <div className="pv-toggle-label">Heating</div>
                    <div className="pv-toggle-desc">Infrared heater bars</div>
                  </button>
                </div>
              </div>

              <hr className="pv-divider" style={{ margin: '0 0 1.75rem' }} />

              {/* Summary */}
              <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, padding: '1.25rem', marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.brand, marginBottom: '1rem' }}>
                  Current Preview
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {summaryRows.map((row) => (
                    <div key={row.label} className="pv-summary-row">
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.textDim }}>{row.label}</div>
                      <div style={{ fontSize: '0.8rem', color: C.textMuted, textAlign: 'right', maxWidth: '55%' }}>{row.value}</div>
                    </div>
                  ))}
                </div>
                <button type="button" onClick={openForm} className="pv-btn pv-btn-primary" style={{ marginTop: '1.25rem' }}>
                  Request Pricing
                </button>
                <p style={{ marginTop: '0.6rem', fontSize: '0.7rem', color: C.textDim, lineHeight: 1.5 }}>
                  We&apos;ll review your setup and come back with a real recommendation.
                </p>
              </div>

              {/* Reference images */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div className="pv-section-label">Real-World References</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {referenceImages.map((img) => (
                    <div key={img.src} style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', border: `1px solid ${C.border}`, backgroundColor: '#000' }}>
                      <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="140px" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead form */}
              {showForm ? (
                <div ref={formRef} style={{ border: `1px solid rgba(66,255,193,0.3)`, backgroundColor: '#0d1419', padding: '1.5rem', marginBottom: '1.75rem' }}>
                  {success ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '3.5rem', height: '3.5rem', borderRadius: '9999px', backgroundColor: 'rgba(66,255,193,0.12)' }}>
                        <CheckCircle2 style={{ width: '1.75rem', height: '1.75rem', color: C.brand }} />
                      </div>
                      <div>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: C.text }}>Pricing request received.</h2>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', lineHeight: 1.6, color: C.textDim }}>
                          A designer will review your layout and contact you with the right next step.
                        </p>
                      </div>
                      <div style={{ border: `1px solid ${C.border}`, backgroundColor: C.card, padding: '1rem' }}>
                        <div className="pv-section-label">Sent to EDG</div>
                        <pre style={{ marginTop: '0.5rem', fontSize: '0.7rem', lineHeight: 1.6, whiteSpace: 'pre-wrap', overflowX: 'auto', color: C.textMuted }}>
                          {buildMessage(config, notes)}
                        </pre>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div>
                        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.brand }}>Request Pricing</div>
                        <h2 style={{ marginTop: '0.6rem', fontSize: '1.3rem', fontWeight: 700, color: C.text }}>Send this configuration to EDG.</h2>
                        <p style={{ marginTop: '0.4rem', fontSize: '0.8rem', lineHeight: 1.6, color: C.textDim }}>
                          We&apos;ll review the layout and come back with real pricing guidance.
                        </p>
                      </div>

                      {/* Honeypot */}
                      <div style={{ position: 'absolute', left: '-9999px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }} aria-hidden>
                        <input name="fax" value={fax} onChange={(e) => setFax(e.target.value)} tabIndex={-1} autoComplete="off" />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                        <input type="text" name="firstName" value={formData.firstName} onChange={(e) => setFormData((d) => ({ ...d, firstName: e.target.value }))} placeholder="First name" required disabled={loading} className="pv-input" />
                        <input type="text" name="lastName" value={formData.lastName} onChange={(e) => setFormData((d) => ({ ...d, lastName: e.target.value }))} placeholder="Last name" required disabled={loading} className="pv-input" />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                        <input type="email" name="email" value={formData.email} onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))} placeholder="Email" required disabled={loading} className="pv-input" />
                        <input type="tel" name="phone" value={formData.phone} onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))} placeholder="Phone" required disabled={loading} className="pv-input" />
                      </div>
                      <input type="text" name="zipCode" value={formData.zipCode} onChange={(e) => setFormData((d) => ({ ...d, zipCode: e.target.value }))} placeholder="ZIP code" required disabled={loading} className="pv-input" />
                      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything we should know about the site, connection, or finish direction?" rows={3} disabled={loading} className="pv-input" style={{ resize: 'vertical' }} />

                      <div style={{ border: `1px solid ${C.border}`, backgroundColor: C.card, padding: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <Mail style={{ width: '0.875rem', height: '0.875rem', color: C.textDim }} />
                          <span className="pv-section-label" style={{ marginBottom: 0 }}>Configuration summary</span>
                        </div>
                        <pre style={{ marginTop: '0.5rem', fontSize: '0.7rem', lineHeight: 1.6, whiteSpace: 'pre-wrap', overflowX: 'auto', color: C.textMuted }}>
                          {buildMessage(config, notes)}
                        </pre>
                      </div>

                      {error ? <p style={{ fontSize: '0.8rem', color: '#f87171' }}>{error}</p> : null}

                      <button type="submit" disabled={loading} className="pv-btn pv-btn-primary">
                        {loading ? (
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Loader2 style={{ width: '1rem', height: '1rem', animation: 'spin 1s linear infinite' }} />
                            Sending Request
                          </span>
                        ) : 'Send My Pricing Request'}
                      </button>
                    </form>
                  )}
                </div>
              ) : null}

              {/* Footer note */}
              <div style={{ paddingTop: '1.5rem', borderTop: `1px solid ${C.border}`, fontSize: '0.72rem', lineHeight: 1.6, color: C.textDim }}>
                Prefer to talk first? Call{' '}
                <a href="tel:+18155810138" style={{ color: C.brand, textDecoration: 'none' }}>815-581-0138</a>
                {' '}or visit{' '}
                <Link href="/systems/pergolas" style={{ color: C.brand, textDecoration: 'none' }}>/systems/pergolas</Link>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── 3D Scene components (unchanged) ─────────────────────────────────────────

function PergolaScene({ config }: { config: PergolaConfig }) {
  const frameColor = getColorOption(config.frameColor).material;
  const louverColor = getColorOption(config.louverColor).material;
  const width = config.width / 2.15;
  const depth = config.depth / 2.2;
  const height = config.height / 1.8;
  const beamThickness = 0.22;
  const postSize = 0.22;
  const louverBladeDepth = 0.24;
  const louverCount = Math.ceil(depth / louverBladeDepth); // ensures blades touch when closed
  const xMin = -width / 2;
  const xMax = width / 2;
  const zMin = -depth / 2;
  const zMax = depth / 2;
  const frontZ = zMax - postSize / 2;
  const backZ = zMin + postSize / 2;

  return (
    <group position={[0, 0, 0]}>
      <mesh position={[0, -0.04, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#1a2224" roughness={0.95} metalness={0.02} />
      </mesh>

      {config.installationType === 'attached' ? (
        <>
          <mesh position={[0, height / 2, zMin - 0.18]} receiveShadow>
            <boxGeometry args={[width + 3, height + 2, 0.3]} />
            <meshStandardMaterial color="#d9d4ca" roughness={0.92} />
          </mesh>
          <mesh position={[0, height - beamThickness / 2, zMin + beamThickness / 2]} castShadow>
            <boxGeometry args={[width + beamThickness, beamThickness, beamThickness]} />
            <meshStandardMaterial {...frameColor} />
          </mesh>
        </>
      ) : (
        <>
          <Post position={[xMin + postSize / 2, height / 2, backZ]} material={frameColor} />
          <Post position={[xMax - postSize / 2, height / 2, backZ]} material={frameColor} />
        </>
      )}

      <Post position={[xMin + postSize / 2, height / 2, frontZ]} material={frameColor} />
      <Post position={[xMax - postSize / 2, height / 2, frontZ]} material={frameColor} />

      <mesh position={[0, height - beamThickness / 2, frontZ]} castShadow>
        <boxGeometry args={[width + beamThickness, beamThickness, beamThickness]} />
        <meshStandardMaterial {...frameColor} />
      </mesh>
      <mesh position={[xMin + postSize / 2, height - beamThickness / 2, 0]} castShadow>
        <boxGeometry args={[beamThickness, beamThickness, depth]} />
        <meshStandardMaterial {...frameColor} />
      </mesh>
      <mesh position={[xMax - postSize / 2, height - beamThickness / 2, 0]} castShadow>
        <boxGeometry args={[beamThickness, beamThickness, depth]} />
        <meshStandardMaterial {...frameColor} />
      </mesh>

      <group position={[0, height - beamThickness / 2, 0]}>
        {Array.from({ length: louverCount }).map((_, i) => {
          const z = zMin + depth / (louverCount + 1) + (i * depth) / (louverCount + 1);
          return (
            <AnimatedLouver key={i} width={width - 0.35} targetAngle={config.roofAngle} position={[0, 0, z]} material={louverColor} />
          );
        })}
      </group>

      {config.lighting ? (
        <>
          <LedStrip position={[0, height - 0.24, frontZ - 0.03]} width={width - 0.4} />
          <LedStrip position={[0, height - 0.24, backZ + 0.03]} width={width - 0.4} />
          <pointLight position={[0, height - 0.35, 0]} intensity={6} distance={12} color="#ffe3a5" />
          <pointLight position={[0, height - 0.35, frontZ - 1]} intensity={2.2} distance={7} color="#fff0bf" />
        </>
      ) : null}

      {config.heating ? (
        <>
          <HeaterBar position={[0, height - 0.38, frontZ - 0.14]} />
          <HeaterBar position={[0, height - 0.38, backZ + 0.14]} />
        </>
      ) : null}

      <TreatmentPanel side="front" treatment={config.frontTreatment} width={width - 0.5} height={height - 0.75} position={[0, (height - 0.75) / 2, frontZ - 0.06]} />
      {config.installationType === 'freestanding' ? (
        <TreatmentPanel side="back" treatment={config.backTreatment} width={width - 0.5} height={height - 0.75} position={[0, (height - 0.75) / 2, backZ + 0.06]} />
      ) : null}
      <TreatmentPanel side="left" treatment={config.leftTreatment} width={depth - 0.45} height={height - 0.75} position={[xMin + 0.06, (height - 0.75) / 2, 0]} />
      <TreatmentPanel side="right" treatment={config.rightTreatment} width={depth - 0.45} height={height - 0.75} position={[xMax - 0.06, (height - 0.75) / 2, 0]} />
    </group>
  );
}

function Post({ position, material }: { position: [number, number, number]; material: PergolaMaterial }) {
  return (
    <mesh castShadow receiveShadow position={position}>
      <boxGeometry args={[0.22, position[1] * 2, 0.22]} />
      <meshStandardMaterial {...material} />
    </mesh>
  );
}

function AnimatedLouver({ position, width, targetAngle, material }: { position: [number, number, number]; width: number; targetAngle: number; material: PergolaMaterial }) {
  const angle = useMotionValue(0);
  const currentValue = useRef(0);

  useEffect(() => {
    const ctrl = animate(angle, targetAngle, {
      duration: 0.45,
      ease: 'easeOut',
      onUpdate(v) { currentValue.current = v; },
    });
    return () => ctrl.stop();
  }, [angle, targetAngle]);

  const groupRef = useRef<Group | null>(null);
  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.x = (-currentValue.current * Math.PI) / 180;
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[width, 0.08, 0.24]} />
        <meshStandardMaterial {...material} />
      </mesh>
    </group>
  );
}

function TreatmentPanel({ side, treatment, width, height, position }: { side: 'front' | 'back' | 'left' | 'right'; treatment: SideTreatment; width: number; height: number; position: [number, number, number] }) {
  if (treatment === 'open') return null;
  const isSide = side === 'left' || side === 'right';
  const rotation: [number, number, number] = isSide ? [0, Math.PI / 2, 0] : [0, 0, 0];

  if (treatment === 'screen') {
    return (
      <mesh position={position} rotation={rotation} receiveShadow castShadow>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial color="#b8b2a2" transparent opacity={0.58} roughness={0.75} metalness={0.03} />
      </mesh>
    );
  }

  const slatCount = Math.max(7, Math.round(height * 3));
  return (
    <group position={position} rotation={rotation}>
      {Array.from({ length: slatCount }).map((_, i) => {
        const y = -height / 2 + 0.12 + (i * height) / slatCount;
        return (
          <mesh key={i} position={[0, y, 0]} castShadow receiveShadow>
            <boxGeometry args={[width, 0.06, 0.06]} />
            <meshStandardMaterial color="#786a58" roughness={0.72} metalness={0.18} />
          </mesh>
        );
      })}
    </group>
  );
}

function LedStrip({ position, width }: { position: [number, number, number]; width: number }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[width, 0.02, 0.05]} />
      <meshStandardMaterial color="#ffd87c" emissive="#ffcc63" emissiveIntensity={1.6} />
    </mesh>
  );
}

function HeaterBar({ position }: { position: [number, number, number] }) {
  return (
    <mesh rotation={[0, 0, Math.PI / 2]} position={position} castShadow>
      <cylinderGeometry args={[0.05, 0.05, 3.4, 20]} />
      <meshStandardMaterial color="#2e3135" metalness={0.74} roughness={0.28} />
    </mesh>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function PergolaVisualizerPrototypeClient() {
  return <PergolaVisualizerPrototypeClientInner />;
}
