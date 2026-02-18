'use client';

import { useState, useEffect } from 'react';
import type { PageImage } from '@/sanity/lib/pageImages';

interface UsePageImageResult {
  image: PageImage | null;
  url: string | null;
  isLoading: boolean;
  error: Error | null;
}

/**
 * React hook to fetch a single page image by key
 */
export function usePageImage(key: string | null): UsePageImageResult {
  const [image, setImage] = useState<PageImage | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!key) {
      setImage(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    fetch(`/api/page-images/${key}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch image');
        return res.json();
      })
      .then((data) => {
        setImage(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [key]);

  return {
    image,
    url: image?.image ? `/api/page-images/${key}/url` : null,
    isLoading,
    error,
  };
}

interface UsePageImagesResult {
  images: Record<string, PageImage>;
  isLoading: boolean;
  error: Error | null;
}

/**
 * React hook to fetch multiple page images by keys
 */
export function usePageImages(keys: string[]): UsePageImagesResult {
  const [images, setImages] = useState<Record<string, PageImage>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (keys.length === 0) {
      setImages({});
      return;
    }

    setIsLoading(true);
    setError(null);

    fetch('/api/page-images/batch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keys }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch images');
        return res.json();
      })
      .then((data) => {
        setImages(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [keys.join(',')]);

  return { images, isLoading, error };
}