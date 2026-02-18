import { ReactNode } from 'react';

interface ProjectSectionProps {
  children: ReactNode;
  condition: boolean;
  id?: string;
  className?: string;
}

/**
 * Conditionally renders a section only if data exists
 * Provides consistent spacing and structure
 */
export function ProjectSection({
  children,
  condition,
  id,
  className = '',
}: ProjectSectionProps) {
  if (!condition) return null;

  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      {children}
    </section>
  );
}
