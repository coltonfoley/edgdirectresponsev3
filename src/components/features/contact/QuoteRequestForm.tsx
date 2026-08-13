'use client';

import { useEffect, useId, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  Camera,
  Check,
  ChevronRight,
  CloudRain,
  HelpCircle,
  Home,
  Loader2,
  Shield,
  Snowflake,
  Sun,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';
import { pushAnalyticsEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

const interestOptions = [
  { value: 'pergola', label: 'Motorized pergola' },
  { value: 'shades', label: 'Motorized patio screens or shades' },
  { value: 'enclosure', label: 'Glass enclosure' },
  { value: 'appliances', label: 'Outdoor kitchen or appliances' },
  { value: 'sauna', label: 'Sauna' },
  { value: 'multiple', label: 'Complete outdoor room or multiple products' },
  { value: 'commercial', label: 'Commercial project' },
  { value: 'trade', label: 'Trade or builder project' },
  { value: 'showroom', label: 'Showroom visit' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const;

const goalOptions = [
  { value: 'shade', label: 'Add shade', icon: Sun },
  { value: 'rain', label: 'Stay usable in rain', icon: CloudRain },
  {
    value: 'comfort',
    label: 'Block insects, wind, or neighbors',
    icon: Shield,
  },
  { value: 'seasons', label: 'Use it in more seasons', icon: Snowflake },
  {
    value: 'outdoor-room',
    label: 'Create a complete outdoor room',
    icon: Home,
  },
  {
    value: 'not-sure',
    label: 'I’m still figuring it out',
    icon: HelpCircle,
  },
] as const;

const stepCount = 4;

const allowedPhotoTypes = ['image/jpeg', 'image/png', 'image/webp'];
const maxPhotoCount = 4;
const maxSourcePhotoBytes = 12 * 1024 * 1024;
const maxPreparedPhotoBytes = 900 * 1024;
const maxTotalPhotoBytes = 3.4 * 1024 * 1024;
const photoTargetWidth = 1600;
const compressionQualities = [0.78, 0.68, 0.58];

type QuoteRequestTheme = 'light' | 'dark';
type CustomerType = 'homeowner' | 'pro' | 'commercial';
type QuoteRequestLayout = 'standard' | 'compact';

interface QuoteRequestFormProps {
  source: string;
  defaultInterest?: string;
  defaultLocation?: string;
  customerType?: CustomerType;
  theme?: QuoteRequestTheme;
  heading?: string;
  intro?: string;
  ctaPosition?: string;
  contextMessage?: string;
  metadata?: Record<string, unknown>;
  prefillFromQuery?: boolean;
  layout?: QuoteRequestLayout;
  className?: string;
}

type QuoteFormData = {
  fullName: string;
  email: string;
  phone: string;
  goals: string[];
  interest: string[];
  location: string;
  details: string;
  fax: string;
};

function normalizeInterest(value: string | null | undefined): string {
  const normalized = value
    ?.trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-');

  if (!normalized) return '';

  if (
    [
      'screen',
      'screens',
      'shade',
      'shades',
      'motorized-screen',
      'motorized-screens',
      'motorized-shade',
      'motorized-shades',
      'retractable-screens',
      'magnatrack-screens',
      'lanai',
      'modern-lanai',
      'lanai-replacement',
      'pool-cage',
    ].includes(normalized)
  ) {
    return 'shades';
  }

  if (
    ['pergola', 'pergolas', 'motorized-pergola', 'louvered-pergolas'].includes(
      normalized
    )
  ) {
    return 'pergola';
  }

  if (
    ['enclosure', 'enclosures', 'glass-enclosure', 'glass-enclosures'].includes(
      normalized
    )
  ) {
    return 'enclosure';
  }

  if (
    ['appliance', 'appliances', 'outdoor-kitchen', 'outdoor-kitchens'].includes(
      normalized
    )
  ) {
    return 'appliances';
  }

  if (['sauna', 'saunas', 'outdoor-sauna'].includes(normalized)) {
    return 'sauna';
  }

  if (
    [
      'commercial',
      'restaurant-patio-enclosure',
      'restaurant-patio-enclosures',
      'commercial-patio-enclosure',
      'commercial-patio-enclosures',
      'restaurant-enclosure',
      'restaurant-enclosures',
      'restaurant-patio-solutions',
      'hotel-roof-deck-systems',
      'hotel-pergolas',
      'country-club-outdoor-spaces',
      'chicago-hospitality-outdoor-living',
      'hospitality-outdoor-living',
      'west-loop',
      'west-loop-projects',
    ].includes(normalized)
  ) {
    return 'commercial';
  }

  if (['pro', 'trade', 'builder', 'contractor'].includes(normalized)) {
    return 'trade';
  }

  if (['showroom', 'showroom-visit'].includes(normalized)) {
    return 'showroom';
  }

  if (
    [
      'multiple',
      'outdoor-room',
      'outdoor-rooms',
      'planning',
      'permit',
      'permit-guide',
      'zoning-guide',
      'permitting',
      'pergola-material-comparison',
    ].includes(normalized)
  ) {
    return 'multiple';
  }

  return interestOptions.some((option) => option.value === normalized)
    ? normalized
    : '';
}

function normalizeLocation(value: string | null | undefined): string {
  const location = value?.trim();
  if (!location) return '';

  const normalized = location.toLowerCase().replace(/[\s_]+/g, '-');
  const knownLocations: Record<string, string> = {
    algonquin: 'Algonquin, IL',
    barrington: 'Barrington, IL',
    chicago: 'Chicago, IL',
    deerfield: 'Deerfield, IL',
    hinsdale: 'Hinsdale, IL',
    'lake-county': 'Lake County, IL',
    'lake-forest': 'Lake Forest, IL',
    'lake-geneva': 'Lake Geneva, WI',
    'lake-geneva-wi': 'Lake Geneva, WI',
    'mchenry-county': 'McHenry County, IL',
    milwaukee: 'Milwaukee, WI',
    'milwaukee-wi': 'Milwaukee, WI',
    naperville: 'Naperville, IL',
    'north-shore': 'North Shore Chicago',
    northbrook: 'Northbrook, IL',
    'oak-brook': 'Oak Brook, IL',
    sanibel: 'Sanibel, FL',
    'southeast-wisconsin': 'Southeast Wisconsin',
    'southwest-florida': 'Southwest Florida',
    'spring-grove': 'Spring Grove, IL',
    wilmette: 'Wilmette, IL',
    winnetka: 'Winnetka, IL',
  };

  return knownLocations[normalized] || location;
}

function resolveCustomerType(
  interests: string[],
  fallback: CustomerType
): CustomerType {
  if (interests.includes('commercial')) return 'commercial';
  if (interests.includes('trade')) return 'pro';
  return fallback;
}

function getProjectType(interests: string[]) {
  if (interests.length === 1) return interests[0];
  return interests.length > 1 ? 'multiple' : '';
}

function getInterestLabels(interests: string[]) {
  return interests
    .map(
      (interest) =>
        interestOptions.find((option) => option.value === interest)?.label ||
        interest
    )
    .join(', ');
}

function getGoalLabels(goals: string[]) {
  return goals
    .map(
      (goal) =>
        goalOptions.find((option) => option.value === goal)?.label || goal
    )
    .join(', ');
}

function splitFullName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || '',
    lastName: parts.slice(1).join(' ') || undefined,
  };
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getPhotoFilename(file: File) {
  const safeName = file.name
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9_-]+/gi, '-');
  return `${safeName || 'edg-project-photo'}.jpg`;
}

function loadImage(file: File) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Photo could not be read.'));
    };
    image.src = url;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
          return;
        }
        reject(new Error('Photo could not be prepared.'));
      },
      'image/jpeg',
      quality
    );
  });
}

async function preparePhoto(file: File) {
  if (!allowedPhotoTypes.includes(file.type)) {
    throw new Error(`${file.name} must be a JPG, PNG, or WebP image.`);
  }
  if (file.size > maxSourcePhotoBytes) {
    throw new Error(
      `${file.name} is larger than ${formatBytes(maxSourcePhotoBytes)}.`
    );
  }

  const image = await loadImage(file);
  const scale = Math.min(1, photoTargetWidth / image.naturalWidth);
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  const context = canvas.getContext('2d');

  if (!context) throw new Error('Photo could not be prepared.');
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  let prepared: Blob | null = null;
  for (const quality of compressionQualities) {
    prepared = await canvasToBlob(canvas, quality);
    if (prepared.size <= maxPreparedPhotoBytes) break;
  }

  if (!prepared || prepared.size > maxPreparedPhotoBytes) {
    throw new Error(
      `${file.name} is still too large after compression. Try a smaller photo.`
    );
  }

  return new File([prepared], getPhotoFilename(file), {
    type: 'image/jpeg',
    lastModified: Date.now(),
  });
}

function getPhotoErrorType(error: unknown) {
  if (!(error instanceof Error)) return 'photo_processing_error';
  const message = error.message.toLowerCase();
  if (message.includes('jpg, png, or webp')) return 'photo_type_error';
  if (message.includes('upload up to')) return 'photo_count_error';
  if (message.includes('large')) return 'photo_size_error';
  if (message.includes('read')) return 'photo_read_error';
  return 'photo_processing_error';
}

function getNativeValidationErrorType(input: HTMLInputElement) {
  const safeFieldNames: Record<string, string> = {
    fullName: 'name',
    email: 'email',
    phone: 'phone',
  };
  const field = safeFieldNames[input.name];
  if (!field) return null;
  const reason = input.validity.typeMismatch ? 'format' : 'required';
  return `${field}_${reason}`;
}

function buildMessage(
  formData: QuoteFormData,
  photos: File[],
  contextMessage?: string
) {
  return [
    contextMessage?.trim() || null,
    formData.goals.length ? `Goals: ${getGoalLabels(formData.goals)}` : null,
    formData.interest.length
      ? `Interests: ${getInterestLabels(formData.interest)}`
      : null,
    formData.location.trim()
      ? `Project location: ${formData.location.trim()}`
      : null,
    formData.details.trim()
      ? `Project details: ${formData.details.trim()}`
      : null,
    photos.length ? `Project photos attached: ${photos.length}` : null,
  ]
    .filter(Boolean)
    .join('\n');
}

export function QuoteRequestForm({
  source,
  defaultInterest,
  defaultLocation,
  customerType = 'homeowner',
  theme = 'light',
  heading = 'Request a Quote',
  intro = 'Tell us what you are interested in. We will contact you to learn more and discuss next steps.',
  ctaPosition,
  contextMessage,
  metadata,
  prefillFromQuery = false,
  layout = 'standard',
  className,
}: QuoteRequestFormProps) {
  const id = useId();
  const [leadSource, setLeadSource] = useState(source);
  const [leadMarket, setLeadMarket] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState('');
  const [photoStatus, setPhotoStatus] = useState('');
  const [formStarted, setFormStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [goalError, setGoalError] = useState('');
  const [interestError, setInterestError] = useState('');
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const previousStepRef = useRef<number | null>(null);
  const normalizedDefaultInterest = normalizeInterest(defaultInterest);
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    goals: [],
    interest: normalizedDefaultInterest ? [normalizedDefaultInterest] : [],
    location: normalizeLocation(defaultLocation),
    details: '',
    fax: '',
  });
  const { submitLead, trackFormStart, loading, error, success } =
    useLeadSubmission();
  const isDark = theme === 'dark';
  const isCompact = layout === 'compact';
  const primaryInterestValues = [
    'pergola',
    'shades',
    'enclosure',
    'appliances',
    'sauna',
    'not-sure',
  ];
  const displayedInterestOptions = interestOptions.filter(
    (option) =>
      primaryInterestValues.includes(option.value) ||
      formData.interest.includes(option.value)
  );
  const photoUploadDisabled =
    loading || photos.length >= maxPhotoCount || Boolean(photoStatus);

  useEffect(() => {
    if (!prefillFromQuery) return;

    const searchParams = new URLSearchParams(window.location.search);
    const intent = searchParams.get('type');
    const product = searchParams.get('product') || searchParams.get('project');
    const area = searchParams.get('area') || searchParams.get('market');
    const queryInterest =
      normalizeInterest(product) || normalizeInterest(intent) || '';
    const queryLocation = normalizeLocation(
      searchParams.get('location') || area
    );
    const querySource = searchParams.get('source')?.trim();

    const frame = requestAnimationFrame(() => {
      if (querySource) setLeadSource(querySource);
      if (area) setLeadMarket(area);
      if (queryInterest || queryLocation) {
        setFormData((current) => ({
          ...current,
          interest:
            queryInterest && !current.interest.includes(queryInterest)
              ? [...current.interest, queryInterest]
              : current.interest,
          location: current.location || queryLocation,
        }));
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [prefillFromQuery]);

  useEffect(() => {
    if (previousStepRef.current === currentStep) return;

    previousStepRef.current = currentStep;
    requestAnimationFrame(() => stepHeadingRef.current?.focus());
    pushAnalyticsEvent({
      event: 'lead_form_step_view',
      form_id: 'quote_request',
      form_variant: 'quote_request_multistep_v1',
      step_id: `step_${currentStep}`,
      step_number: currentStep,
      step_count: stepCount,
      source: leadSource,
      cta_position: ctaPosition,
    });
  }, [currentStep, ctaPosition, leadSource]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setInterestError('');
    setFormData((current) => ({
      ...current,
      interest: checked
        ? [...new Set([...current.interest, value])]
        : current.interest.filter((interest) => interest !== value),
    }));
  };

  const toggleGoal = (goal: string) => {
    setGoalError('');
    setFormData((current) => ({
      ...current,
      goals: current.goals.includes(goal)
        ? current.goals.filter((item) => item !== goal)
        : [...current.goals, goal],
    }));
  };

  const analyticsMetadata = {
    ...metadata,
    cta_label: 'Request a Quote',
    cta_position: ctaPosition,
    form_id: 'quote_request',
    form_variant: 'quote_request_multistep_v1',
    market: leadMarket || metadata?.market,
  };

  const handleFormStart = () => {
    if (formStarted) return;
    setFormStarted(true);
    trackFormStart({
      source: leadSource,
      customerType: resolveCustomerType(formData.interest, customerType),
      projectType: getProjectType(formData.interest),
      metadata: analyticsMetadata,
    });
  };

  const handlePhotoChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = Array.from(event.target.files || []);
    event.target.value = '';
    if (!selectedFiles.length) return;

    setPhotoError('');
    setPhotoStatus('Preparing photos...');

    try {
      if (photos.length + selectedFiles.length > maxPhotoCount) {
        throw new Error(`Upload up to ${maxPhotoCount} photos.`);
      }

      const nextPhotos = [...photos];
      for (const file of selectedFiles) {
        const preparedPhoto = await preparePhoto(file);
        const totalBytes =
          nextPhotos.reduce((total, photo) => total + photo.size, 0) +
          preparedPhoto.size;

        if (totalBytes > maxTotalPhotoBytes) {
          throw new Error(
            `The selected photos are too large together. Keep uploads under ${formatBytes(maxTotalPhotoBytes)} total.`
          );
        }
        nextPhotos.push(preparedPhoto);
      }
      setPhotos(nextPhotos);
    } catch (photoPreparationError: unknown) {
      pushAnalyticsEvent({
        event: 'lead_form_step_error',
        form_id: 'quote_request',
        form_variant: 'quote_request_multistep_v1',
        step_id: 'step_3',
        step_number: 3,
        step_count: stepCount,
        error_type: getPhotoErrorType(photoPreparationError),
        source: leadSource,
        cta_position: ctaPosition,
      });
      setPhotoError(
        photoPreparationError instanceof Error
          ? photoPreparationError.message
          : 'Photo upload failed. Please try again.'
      );
    } finally {
      setPhotoStatus('');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.interest.length) {
      setInterestError('Choose at least one product or select “Not sure yet.”');
      setCurrentStep(2);
      return;
    }

    const { firstName, lastName } = splitFullName(formData.fullName);
    const projectType = getProjectType(formData.interest);
    await submitLead({
      firstName,
      lastName,
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      location: formData.location.trim() || undefined,
      projectType,
      customerType: resolveCustomerType(formData.interest, customerType),
      source: leadSource,
      message: buildMessage(formData, photos, contextMessage) || undefined,
      fax: formData.fax,
      attachments: photos,
      metadata: {
        ...analyticsMetadata,
        selected_goals: formData.goals.join('|'),
        goal_count: formData.goals.length,
        selected_interests: formData.interest.join('|'),
        interest_count: formData.interest.length,
        photo_count: photos.length,
        has_optional_details: Boolean(
          formData.location.trim() || formData.details.trim() || photos.length
        ),
      },
    });
  };

  const handleInvalid = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    const errorType = getNativeValidationErrorType(target);
    if (!errorType) return;

    pushAnalyticsEvent({
      event: 'lead_form_step_error',
      form_id: 'quote_request',
      form_variant: 'quote_request_multistep_v1',
      step_id: 'step_4',
      step_number: 4,
      step_count: stepCount,
      error_type: errorType,
      source: leadSource,
      cta_position: ctaPosition,
    });
  };

  const trackStepComplete = (step: number) => {
    pushAnalyticsEvent({
      event: 'lead_form_step_complete',
      form_id: 'quote_request',
      form_variant: 'quote_request_multistep_v1',
      step_id: `step_${step}`,
      step_number: step,
      step_count: stepCount,
      source: leadSource,
      cta_position: ctaPosition,
    });
  };

  const continueFromStep = () => {
    if (currentStep === 1 && !formData.goals.length) {
      setGoalError('Choose at least one goal.');
      pushAnalyticsEvent({
        event: 'lead_form_step_error',
        form_id: 'quote_request',
        form_variant: 'quote_request_multistep_v1',
        step_id: 'step_1',
        error_type: 'required_goal',
        source: leadSource,
      });
      return;
    }

    if (currentStep === 2 && !formData.interest.length) {
      setInterestError('Choose at least one product or select “Not sure yet.”');
      pushAnalyticsEvent({
        event: 'lead_form_step_error',
        form_id: 'quote_request',
        form_variant: 'quote_request_multistep_v1',
        step_id: 'step_2',
        error_type: 'required_interest',
        source: leadSource,
      });
      return;
    }

    trackStepComplete(currentStep);
    setCurrentStep((step) => Math.min(stepCount, step + 1));
  };

  const goBack = () => {
    pushAnalyticsEvent({
      event: 'lead_form_back',
      form_id: 'quote_request',
      form_variant: 'quote_request_multistep_v1',
      from_step: currentStep,
      to_step: currentStep - 1,
      source: leadSource,
    });
    setCurrentStep((step) => Math.max(1, step - 1));
  };

  const inputClassName = cn(
    'w-full rounded-none border px-4 text-base transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-60',
    isCompact ? 'py-2.5' : 'py-3',
    isDark
      ? 'border-white/15 bg-white/5 text-white placeholder:text-zinc-400 focus:border-edg-brand'
      : 'border-black/15 bg-white text-black placeholder:text-gray-500 focus:border-black'
  );
  const labelClassName = cn(
    'mb-2 block text-xs font-bold tracking-widest uppercase',
    isDark ? 'text-zinc-300' : 'text-gray-600'
  );

  if (success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn(
          'border p-8 text-center',
          isDark
            ? 'border-white/20 bg-white/10 text-white'
            : 'border-black/10 bg-white text-black',
          className
        )}
      >
        <div className="bg-edg-brand mx-auto mb-5 flex h-12 w-12 items-center justify-center text-black">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mb-3 text-2xl font-bold">
          Thanks — we received your quote request.
        </h2>
        <p className={isDark ? 'text-zinc-300' : 'text-gray-600'}>
          An EDG team member will contact you to learn more about the project
          and discuss next steps.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'border',
        isCompact ? 'p-5 md:p-6' : 'p-6 md:p-8',
        isDark
          ? 'border-white/10 bg-black/80 text-white backdrop-blur-sm'
          : 'border-black/10 bg-white text-black',
        className
      )}
    >
      <div
        className={cn(
          'border-b border-current/10',
          isCompact ? 'mb-4 pb-3' : 'mb-5 pb-4'
        )}
      >
        <h2
          id={`${id}-title`}
          className="text-sm font-bold tracking-[0.18em] uppercase"
        >
          {heading}
        </h2>
        <p
          id={`${id}-description`}
          className={cn(
            'mt-1.5 text-xs leading-relaxed',
            isDark ? 'text-zinc-300' : 'text-gray-600'
          )}
        >
          {intro}
        </p>
      </div>

      <form
        data-lead-form-id="quote_request"
        data-current-step={currentStep}
        onSubmit={handleSubmit}
        onInvalidCapture={handleInvalid}
        onFocusCapture={handleFormStart}
        aria-labelledby={`${id}-title`}
        aria-describedby={
          error ? `${id}-description ${id}-error` : `${id}-description`
        }
        aria-busy={loading}
        className="space-y-5"
      >
        <div
          className="pointer-events-none absolute -z-50 opacity-0"
          aria-hidden="true"
        >
          <label htmlFor={`${id}-fax`}>Fax number</label>
          <input
            id={`${id}-fax`}
            name="fax"
            tabIndex={-1}
            autoComplete="off"
            value={formData.fax}
            onChange={handleChange}
          />
        </div>

        <div
          className="flex gap-1.5"
          role="progressbar"
          aria-label={`Step ${currentStep} of ${stepCount}`}
          aria-valuemin={1}
          aria-valuemax={stepCount}
          aria-valuenow={currentStep}
        >
          {Array.from({ length: stepCount }, (_, index) => (
            <span
              key={index}
              aria-hidden="true"
              className={cn(
                'h-1 flex-1',
                index < currentStep
                  ? 'bg-edg-brand'
                  : isDark
                    ? 'bg-white/20'
                    : 'bg-black/15'
              )}
            />
          ))}
        </div>

        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Step {currentStep} of {stepCount}
        </div>

        {currentStep === 1 && (
          <fieldset
            aria-required="true"
            aria-describedby={goalError ? `${id}-goal-error` : undefined}
          >
            <legend className="sr-only">
              What would you like your outdoor space to do?
            </legend>
            <p className="mb-1 text-[11px] font-bold tracking-widest uppercase opacity-60">
              Step 1 of {stepCount}
            </p>
            <h3
              ref={stepHeadingRef}
              tabIndex={-1}
              className={cn(
                'leading-[1.02] font-bold tracking-tight outline-none',
                isCompact
                  ? 'mb-4 text-2xl md:text-3xl'
                  : 'mb-5 text-3xl md:text-4xl'
              )}
            >
              What would you like your outdoor space to do?
            </h3>
            <div className={cn('grid gap-2', isCompact && 'sm:grid-cols-2')}>
              {goalOptions.map((option) => {
                const Icon = option.icon;
                const checked = formData.goals.includes(option.value);
                return (
                  <button
                    type="button"
                    key={option.value}
                    aria-pressed={checked}
                    onClick={() => toggleGoal(option.value)}
                    disabled={loading}
                    className={cn(
                      'flex w-full items-center gap-3 border text-left font-bold transition-colors',
                      isCompact
                        ? 'min-h-12 px-3 py-2.5 text-xs'
                        : 'min-h-14 px-4 py-3 text-sm',
                      checked
                        ? isDark
                          ? 'border-edg-brand bg-edg-brand/15 text-white'
                          : 'border-edg-brand bg-edg-brand/10 text-black'
                        : isDark
                          ? 'border-white/20 bg-white/5 hover:border-white/45'
                          : 'border-black/15 bg-white hover:border-black/45'
                    )}
                  >
                    <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span className="flex-1">{option.label}</span>
                    {checked && (
                      <span className="bg-edg-brand flex h-5 w-5 items-center justify-center text-black">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            {goalError && (
              <p
                id={`${id}-goal-error`}
                role="alert"
                className="mt-3 text-sm text-red-500"
              >
                {goalError}
              </p>
            )}
          </fieldset>
        )}

        {currentStep === 2 && (
          <fieldset
            data-interest-group
            aria-required="true"
            aria-describedby={
              interestError ? `${id}-interest-error` : undefined
            }
          >
            <legend className="sr-only">What are you considering?</legend>
            <p className="mb-1 text-[11px] font-bold tracking-widest uppercase opacity-60">
              Step 2 of {stepCount}
            </p>
            <h3
              ref={stepHeadingRef}
              tabIndex={-1}
              className={cn(
                'leading-[1.02] font-bold tracking-tight outline-none',
                isCompact
                  ? 'mb-4 text-2xl md:text-3xl'
                  : 'mb-5 text-3xl md:text-4xl'
              )}
            >
              What are you considering?
            </h3>
            <div className={cn('grid gap-2', isCompact && 'sm:grid-cols-2')}>
              {displayedInterestOptions.map((option) => (
                <label
                  key={option.value}
                  className={cn(
                    'flex cursor-pointer items-center gap-3 border font-bold transition-colors',
                    isCompact
                      ? 'min-h-12 px-3 py-2.5 text-xs'
                      : 'min-h-14 px-4 py-3 text-sm',
                    formData.interest.includes(option.value)
                      ? isDark
                        ? 'border-edg-brand bg-edg-brand/15'
                        : 'border-edg-brand bg-edg-brand/10'
                      : isDark
                        ? 'border-white/20 bg-white/5 hover:border-white/45'
                        : 'border-black/15 bg-white hover:border-black/45',
                    loading && 'cursor-not-allowed opacity-60'
                  )}
                >
                  <input
                    type="checkbox"
                    name="interest"
                    value={option.value}
                    checked={formData.interest.includes(option.value)}
                    onChange={handleInterestChange}
                    disabled={loading}
                    className="accent-edg-brand h-5 w-5 shrink-0"
                  />
                  <span className="flex-1">{option.label}</span>
                </label>
              ))}
            </div>
            {interestError && (
              <p
                id={`${id}-interest-error`}
                role="alert"
                className="mt-3 text-sm text-red-500"
              >
                {interestError}
              </p>
            )}
          </fieldset>
        )}

        {currentStep === 3 && (
          <section aria-labelledby={`${id}-step-3-title`}>
            <p className="mb-1 text-[11px] font-bold tracking-widest uppercase opacity-60">
              Step 3 of {stepCount}
            </p>
            <h3
              id={`${id}-step-3-title`}
              ref={stepHeadingRef}
              tabIndex={-1}
              className="mb-5 text-3xl leading-[1.02] font-bold tracking-tight outline-none md:text-4xl"
            >
              Anything that would help us understand the project?
            </h3>
            <div className="space-y-5">
              <div>
                <label htmlFor={`${id}-location`} className={labelClassName}>
                  Project location (optional)
                </label>
                <input
                  id={`${id}-location`}
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  autoComplete="postal-code"
                  disabled={loading}
                  placeholder="City, ZIP, or address"
                  className={inputClassName}
                />
              </div>
              <div>
                <label htmlFor={`${id}-details`} className={labelClassName}>
                  Project details (optional)
                </label>
                <textarea
                  id={`${id}-details`}
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  maxLength={600}
                  disabled={loading}
                  placeholder="Tell us about your space, goals, or must-haves."
                  className={cn(inputClassName, 'resize-y')}
                />
              </div>
              <div>
                <input
                  id={`${id}-photos`}
                  type="file"
                  accept={allowedPhotoTypes.join(',')}
                  multiple
                  onChange={handlePhotoChange}
                  disabled={photoUploadDisabled}
                  className="sr-only"
                />
                <label
                  htmlFor={`${id}-photos`}
                  aria-disabled={photoUploadDisabled}
                  className={cn(
                    'flex min-h-14 cursor-pointer items-center justify-center gap-3 border px-4 py-3 text-sm font-bold transition-colors',
                    isDark
                      ? 'hover:border-edg-brand border-white/35 text-white'
                      : 'hover:border-edg-brand border-black/40 text-black',
                    photoUploadDisabled && 'cursor-not-allowed opacity-50'
                  )}
                >
                  <Camera className="h-5 w-5" aria-hidden="true" />
                  Add photos (optional)
                </label>
                <p className="mt-2 text-center text-xs opacity-60">
                  Up to four JPG, PNG, or WebP photos.
                </p>
                {photos.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {photos.map((photo) => (
                      <li
                        key={`${photo.name}-${photo.lastModified}`}
                        className={cn(
                          'flex items-center justify-between gap-3 border px-3 py-2 text-sm',
                          isDark ? 'border-white/15' : 'border-black/10'
                        )}
                      >
                        <span className="min-w-0 truncate">
                          {photo.name} ({formatBytes(photo.size)})
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setPhotos((current) =>
                              current.filter((item) => item !== photo)
                            )
                          }
                          disabled={loading}
                          aria-label={`Remove ${photo.name}`}
                          className="p-2"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {photoStatus && <p className="mt-3 text-sm">{photoStatus}</p>}
                {photoError && (
                  <p role="alert" className="mt-3 text-sm text-red-500">
                    {photoError}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}

        {currentStep === 4 && (
          <section aria-labelledby={`${id}-step-4-title`}>
            <p className="mb-1 text-[11px] font-bold tracking-widest uppercase opacity-60">
              Step 4 of {stepCount}
            </p>
            <h3
              id={`${id}-step-4-title`}
              ref={stepHeadingRef}
              tabIndex={-1}
              className="mb-5 text-3xl leading-[1.02] font-bold tracking-tight outline-none md:text-4xl"
            >
              Where should we follow up?
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor={`${id}-full-name`} className={labelClassName}>
                  Full name
                </label>
                <input
                  id={`${id}-full-name`}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  disabled={loading}
                  placeholder="Enter your full name"
                  className={inputClassName}
                />
              </div>
              <div>
                <label htmlFor={`${id}-email`} className={labelClassName}>
                  Email
                </label>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  disabled={loading}
                  placeholder="Enter your email"
                  className={inputClassName}
                />
              </div>
              <div>
                <label htmlFor={`${id}-phone`} className={labelClassName}>
                  Phone
                </label>
                <input
                  id={`${id}-phone`}
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                  disabled={loading}
                  placeholder="Enter your phone number"
                  className={inputClassName}
                />
              </div>
            </div>
            <p
              className={cn(
                'mt-5 text-center text-xs',
                isDark ? 'text-zinc-400' : 'text-gray-500'
              )}
            >
              We use your information only to respond to your request.
            </p>
          </section>
        )}

        {error && (
          <div
            id={`${id}-error`}
            role="alert"
            className="flex items-start gap-2 text-sm text-red-500"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        {currentStep === 3 && (
          <button
            type="button"
            onClick={continueFromStep}
            className="text-edg-brand mx-auto block min-h-11 px-4 text-sm font-bold underline underline-offset-4"
          >
            Skip for now
          </button>
        )}

        {currentStep === 1 && (
          <Button
            type="button"
            size="lg"
            onClick={continueFromStep}
            className="w-full"
          >
            Continue
            <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        )}

        {(currentStep === 2 || currentStep === 3) && (
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={goBack}
              disabled={loading}
              className={cn(
                'flex min-h-12 items-center justify-center gap-2 border px-5 text-sm font-bold tracking-wider uppercase',
                isDark
                  ? 'border-white/35 text-white hover:border-white'
                  : 'border-black/40 text-black hover:border-black'
              )}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </button>
            <Button
              type="button"
              size="lg"
              onClick={continueFromStep}
              className="w-full"
            >
              Continue
              <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        )}

        {currentStep === 4 && (
          <div className="grid gap-3">
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Request a Quote'
              )}
            </Button>
            <button
              type="button"
              onClick={goBack}
              disabled={loading}
              className={cn(
                'flex min-h-12 items-center justify-center gap-2 border px-5 text-sm font-bold tracking-wider uppercase',
                isDark
                  ? 'border-white/35 text-white hover:border-white'
                  : 'border-black/40 text-black hover:border-black'
              )}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
