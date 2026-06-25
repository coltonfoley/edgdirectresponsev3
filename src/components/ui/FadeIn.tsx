'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  /**
   * If true, animation runs immediately without scroll trigger.
   * Use for above-the-fold content to avoid hydration issues.
   */
  immediate?: boolean;
}

/**
 * CSS-only fade-in animation component.
 * Replaces Framer Motion for better INP performance.
 * Uses Intersection Observer for scroll-triggered animations.
 */
export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  immediate = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(immediate);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (immediate) {
      return;
    }

    // Set up Intersection Observer for scroll-triggered animations
    const element = ref.current;
    if (!element || prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after triggering to avoid re-animation
          observer.disconnect();
        }
      },
      {
        // Trigger when element is 50px from entering viewport
        rootMargin: '-50px',
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [immediate, prefersReducedMotion]);

  // Respect user's motion preferences - render without animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Build className with animation state
  const animationClasses = [
    'animate-on-scroll',
    isVisible ? 'is-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={ref}
      className={animationClasses}
      data-direction={direction}
      style={{ '--animation-delay': `${delay}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

/**
 * Server-safe version that renders content immediately.
 * Use this for above-the-fold content to avoid hydration mismatches.
 */
export function FadeInServer({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Omit<FadeInProps, 'immediate'>) {
  // On server, render without animation classes
  // Client will hydrate and JS will take over
  return (
    <div
      className={`animate-on-scroll is-visible ${className}`}
      data-direction={direction}
      style={{ '--animation-delay': `${delay}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
