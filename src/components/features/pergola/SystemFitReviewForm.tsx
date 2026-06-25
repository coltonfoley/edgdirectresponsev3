'use client';

import { useState } from 'react';
import { ArrowRight, Check, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';

const featureOptions = [
  'Adjustable louvers',
  'Integrated screens',
  'Lighting',
  'Heaters',
  'Privacy walls',
  'Smart controls',
  'Fans',
  'Drainage planning',
];

const concernOptions = [
  'HOA review',
  'Permit path',
  'Deck structure',
  'Roof deck wind exposure',
  'Snow load',
  'Drainage',
  'Electrical routing',
  'Budget fit',
];

const allowedPhotoTypes = ['image/jpeg', 'image/png', 'image/webp'];
const maxPhotoCount = 4;
const maxSourcePhotoBytes = 12 * 1024 * 1024;
const maxPreparedPhotoBytes = 900 * 1024;
const maxTotalPhotoBytes = 3.4 * 1024 * 1024;
const photoTargetWidth = 1600;
const compressionQualities = [0.78, 0.68, 0.58];

type ReviewFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  customerType: string;
  projectSurface: string;
  roughSize: string;
  budgetRange: string;
  timeline: string;
  features: string[];
  concerns: string[];
  photoLinks: string;
  projectGoal: string;
};

const initialFormData: ReviewFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  customerType: 'homeowner',
  projectSurface: '',
  roughSize: '',
  budgetRange: '',
  timeline: '',
  features: [],
  concerns: [],
  photoLinks: '',
  projectGoal: '',
};

function toggleValue(list: string[], value: string) {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

function optionId(group: string, value: string) {
  return `${group}-${value.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
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
  return `${safeName || 'edg-site-photo'}.jpg`;
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
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement('canvas');

  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Photo could not be prepared.');
  }

  context.drawImage(image, 0, 0, width, height);

  let bestBlob: Blob | null = null;

  for (const quality of compressionQualities) {
    const blob = await canvasToBlob(canvas, quality);
    bestBlob = blob;

    if (blob.size <= maxPreparedPhotoBytes) break;
  }

  if (!bestBlob || bestBlob.size > maxPreparedPhotoBytes) {
    throw new Error(
      `${file.name} is still too large after compression. Paste a Drive link for that photo instead.`
    );
  }

  return new File([bestBlob], getPhotoFilename(file), {
    type: 'image/jpeg',
    lastModified: Date.now(),
  });
}

function buildMessage(
  data: ReviewFormData,
  inboundContext: string | undefined,
  photos: File[]
) {
  return [
    'Pergola System Fit Review request',
    '',
    inboundContext ? `Inbound context: ${inboundContext}` : null,
    `Project surface: ${data.projectSurface || 'Not provided'}`,
    `Rough size: ${data.roughSize || 'Not provided'}`,
    `Budget range: ${data.budgetRange || 'Not provided'}`,
    `Timeline: ${data.timeline || 'Not provided'}`,
    `Desired features: ${data.features.length ? data.features.join(', ') : 'Not provided'}`,
    `Site concerns: ${data.concerns.length ? data.concerns.join(', ') : 'Not provided'}`,
    photos.length
      ? `Uploaded photos: ${photos.length} included with the Rainmaker lead (${photos
          .map((photo) => `${photo.name}, ${formatBytes(photo.size)}`)
          .join('; ')})`
      : 'Uploaded photos: None',
    `Photo links or notes: ${data.photoLinks || 'Not provided'}`,
    '',
    'What the space needs to do:',
    data.projectGoal || 'Not provided',
  ]
    .filter(Boolean)
    .join('\n');
}

export function SystemFitReviewForm() {
  const [formData, setFormData] = useState<ReviewFormData>(initialFormData);
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState('');
  const [photoStatus, setPhotoStatus] = useState('');
  const { submitLead, loading, error, success } = useLeadSubmission();
  const photoUploadDisabled =
    loading || photos.length >= maxPhotoCount || photoStatus.length > 0;

  const handleFieldChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (name: 'features' | 'concerns', value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: toggleValue(prev[name], value),
    }));
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
      const nextPhotos = [...photos];

      if (nextPhotos.length + selectedFiles.length > maxPhotoCount) {
        throw new Error(`Upload up to ${maxPhotoCount} photos.`);
      }

      for (const file of selectedFiles) {
        const preparedPhoto = await preparePhoto(file);
        const nextTotalBytes =
          nextPhotos.reduce((total, photo) => total + photo.size, 0) +
          preparedPhoto.size;

        if (nextTotalBytes > maxTotalPhotoBytes) {
          throw new Error(
            `The selected photos are too large together. Keep uploads under ${formatBytes(maxTotalPhotoBytes)} total or paste a Drive link.`
          );
        }

        nextPhotos.push(preparedPhoto);
      }

      setPhotos(nextPhotos);
    } catch (err: unknown) {
      setPhotoError(
        err instanceof Error
          ? err.message
          : 'Photo upload failed. Please try again.'
      );
    } finally {
      setPhotoStatus('');
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, photoIndex) => photoIndex !== index));
    setPhotoError('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inboundContext =
      typeof window !== 'undefined'
        ? window.location.search.replace(/^\?/, '')
        : '';

    await submitLead({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      projectType: 'pergola',
      customerType: formData.customerType,
      source: 'pergola_system_fit_review',
      message: buildMessage(formData, inboundContext, photos),
      attachments: photos,
    });
  };

  if (success) {
    return (
      <div className="border border-black/10 bg-white p-8 text-center shadow-xl">
        <div className="bg-edg-brand text-edg-dark mx-auto mb-6 flex h-16 w-16 items-center justify-center">
          <Check className="h-8 w-8" />
        </div>
        <h2 className="mb-3 text-3xl font-bold text-black">
          Review request received.
        </h2>
        <p className="text-text-secondary mx-auto max-w-lg">
          EDG will review the site details and follow up with the likely system
          direction, budget range, and next step for the project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="system-fit-first-name"
            className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase"
          >
            First name
          </label>
          <input
            id="system-fit-first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleFieldChange}
            required
            disabled={loading}
            autoComplete="given-name"
            className="focus:border-edg-brand w-full border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="system-fit-last-name"
            className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase"
          >
            Last name
          </label>
          <input
            id="system-fit-last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleFieldChange}
            required
            disabled={loading}
            autoComplete="family-name"
            className="focus:border-edg-brand w-full border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="system-fit-email"
            className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase"
          >
            Email
          </label>
          <input
            id="system-fit-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFieldChange}
            required
            disabled={loading}
            autoComplete="email"
            className="focus:border-edg-brand w-full border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="system-fit-phone"
            className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase"
          >
            Phone
          </label>
          <input
            id="system-fit-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleFieldChange}
            disabled={loading}
            autoComplete="tel"
            className="focus:border-edg-brand w-full border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="system-fit-location"
            className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase"
          >
            Project city or ZIP
          </label>
          <input
            id="system-fit-location"
            name="location"
            value={formData.location}
            onChange={handleFieldChange}
            required
            disabled={loading}
            autoComplete="postal-code"
            className="focus:border-edg-brand w-full border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
            placeholder="Barrington, IL"
          />
        </div>
        <div>
          <label
            htmlFor="system-fit-customer-type"
            className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase"
          >
            Project type
          </label>
          <select
            id="system-fit-customer-type"
            name="customerType"
            value={formData.customerType}
            onChange={handleFieldChange}
            disabled={loading}
            className="focus:border-edg-brand w-full appearance-none border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          >
            <option value="homeowner">Homeowner</option>
            <option value="pro">Builder / Designer</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="system-fit-project-surface"
            className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase"
          >
            Where will it go?
          </label>
          <select
            id="system-fit-project-surface"
            name="projectSurface"
            value={formData.projectSurface}
            onChange={handleFieldChange}
            required
            disabled={loading}
            className="focus:border-edg-brand w-full appearance-none border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          >
            <option value="">Select one...</option>
            <option value="Patio on grade">Patio on grade</option>
            <option value="Existing deck">Existing deck</option>
            <option value="Roof deck">Roof deck</option>
            <option value="Pool area">Pool area</option>
            <option value="Outdoor kitchen">Outdoor kitchen</option>
            <option value="Restaurant or hospitality patio">
              Restaurant or hospitality patio
            </option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="system-fit-rough-size"
            className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase"
          >
            Rough size
          </label>
          <input
            id="system-fit-rough-size"
            name="roughSize"
            value={formData.roughSize}
            onChange={handleFieldChange}
            disabled={loading}
            className="focus:border-edg-brand w-full border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
            placeholder="Example: 14 x 18"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="system-fit-budget-range"
            className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase"
          >
            Budget range
          </label>
          <select
            id="system-fit-budget-range"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleFieldChange}
            required
            disabled={loading}
            className="focus:border-edg-brand w-full appearance-none border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          >
            <option value="">Select one...</option>
            <option value="Under $25K">Under $25K</option>
            <option value="$25K-$50K">$25K-$50K</option>
            <option value="$50K-$100K">$50K-$100K</option>
            <option value="$100K+">$100K+</option>
            <option value="Need guidance">Need guidance</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="system-fit-timeline"
            className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase"
          >
            Timing
          </label>
          <select
            id="system-fit-timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleFieldChange}
            disabled={loading}
            className="focus:border-edg-brand w-full appearance-none border-b-2 border-black/10 bg-transparent py-3 text-lg font-bold text-black transition-colors outline-none"
          >
            <option value="">Select one...</option>
            <option value="Ready to move now">Ready to move now</option>
            <option value="Planning for the next 1-3 months">
              Planning for the next 1-3 months
            </option>
            <option value="Planning for the next 3-6 months">
              Planning for the next 3-6 months
            </option>
            <option value="Early research">Early research</option>
          </select>
        </div>
      </div>

      <fieldset className="border-0 p-0">
        <legend className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase">
          Desired features
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {featureOptions.map((feature) => {
            const id = optionId('system-fit-feature', feature);

            return (
              <label
                key={feature}
                htmlFor={id}
                className="flex cursor-pointer items-center gap-3 border border-black/10 p-3 text-sm font-medium text-black transition-colors hover:border-black"
              >
                <input
                  id={id}
                  type="checkbox"
                  checked={formData.features.includes(feature)}
                  onChange={() => handleToggle('features', feature)}
                  disabled={loading}
                  className="h-4 w-4 accent-black"
                />
                {feature}
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="border-0 p-0">
        <legend className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase">
          Known concerns
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {concernOptions.map((concern) => {
            const id = optionId('system-fit-concern', concern);

            return (
              <label
                key={concern}
                htmlFor={id}
                className="flex cursor-pointer items-center gap-3 border border-black/10 p-3 text-sm font-medium text-black transition-colors hover:border-black"
              >
                <input
                  id={id}
                  type="checkbox"
                  checked={formData.concerns.includes(concern)}
                  onChange={() => handleToggle('concerns', concern)}
                  disabled={loading}
                  className="h-4 w-4 accent-black"
                />
                {concern}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label
          htmlFor="system-fit-photo-upload"
          className="mb-2 flex items-center gap-2 text-xs font-bold tracking-widest text-gray-500 uppercase"
        >
          <Upload className="h-4 w-4" />
          Upload site photos
        </label>
        <div className="border border-dashed border-black/20 bg-white p-4">
          <input
            id="system-fit-photo-upload"
            type="file"
            accept={allowedPhotoTypes.join(',')}
            multiple
            onChange={handlePhotoChange}
            disabled={photoUploadDisabled}
            className="sr-only"
          />
          <label
            htmlFor="system-fit-photo-upload"
            aria-disabled={photoUploadDisabled}
            className={`inline-flex items-center gap-2 border border-black px-4 py-3 text-sm font-bold text-black transition-colors ${
              photoUploadDisabled
                ? 'cursor-not-allowed opacity-50'
                : 'cursor-pointer hover:bg-black hover:text-white'
            }`}
          >
            <Upload className="h-4 w-4" />
            Choose photos
          </label>
          <p className="mt-3 text-sm text-gray-600">
            Add up to {maxPhotoCount} JPG, PNG, or WebP photos. Larger plan sets
            can still be shared with a link below.
          </p>
        </div>

        {photos.length > 0 && (
          <ul className="mt-3 space-y-2">
            {photos.map((photo, index) => (
              <li
                key={`${photo.name}-${photo.lastModified}-${index}`}
                className="flex items-center justify-between gap-3 border border-black/10 bg-white px-3 py-2 text-sm text-black"
              >
                <span className="min-w-0 truncate">
                  {photo.name} ({formatBytes(photo.size)})
                </span>
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  disabled={loading}
                  className="flex h-8 w-8 shrink-0 items-center justify-center border border-black/10 text-black transition-colors hover:border-black"
                  aria-label={`Remove ${photo.name}`}
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}

        {photoStatus && (
          <p className="mt-3 text-sm font-medium text-gray-600">
            {photoStatus}
          </p>
        )}

        {photoError && (
          <p className="mt-3 text-sm font-medium text-red-700">{photoError}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="system-fit-photo-links"
          className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase"
        >
          Photo links or plan notes
        </label>
        <textarea
          id="system-fit-photo-links"
          name="photoLinks"
          value={formData.photoLinks}
          onChange={handleFieldChange}
          disabled={loading}
          rows={3}
          className="focus:border-edg-brand w-full resize-none border-b-2 border-black/10 bg-transparent py-3 text-base text-black transition-colors outline-none"
          placeholder="Paste links to photos, plans, a Drive folder, or note what photos you can send next."
        />
      </div>

      <div>
        <label
          htmlFor="system-fit-project-goal"
          className="mb-2 block text-xs font-bold tracking-widest text-gray-500 uppercase"
        >
          What does the space need to do?
        </label>
        <textarea
          id="system-fit-project-goal"
          name="projectGoal"
          value={formData.projectGoal}
          onChange={handleFieldChange}
          required
          disabled={loading}
          rows={4}
          className="focus:border-edg-brand w-full resize-none border-b-2 border-black/10 bg-transparent py-3 text-base text-black transition-colors outline-none"
          placeholder="Shade a west-facing patio, cover an outdoor kitchen, make a pool area usable in rain, solve bugs and privacy, etc."
        />
      </div>

      {error && (
        <div className="border-l-4 border-red-500 bg-red-50 p-4 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full justify-between px-8"
      >
        {loading ? 'Sending...' : 'Request System Fit Review'}
        {!loading && <ArrowRight className="h-5 w-5" />}
      </Button>
    </form>
  );
}
