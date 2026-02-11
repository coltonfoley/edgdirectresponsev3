'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: 'animate-fade-in-up',
    down: 'animate-fade-in-down',
    left: 'animate-fade-in-left',
    right: 'animate-fade-in-right',
  }[direction];

  const delayClass = delay > 0 ? `animation-delay-${Math.round(delay * 1000)}` : '';

  return (
    <div
      ref={ref}
      className={`${isVisible ? directionClass : 'opacity-0'} ${delayClass} ${className}`}
      style={delay > 0 && !delayClass ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
