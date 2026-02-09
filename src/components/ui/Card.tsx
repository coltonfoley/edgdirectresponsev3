import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'muted' | 'dark' | 'outline';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  ref?: React.RefObject<HTMLDivElement | null>;
}

/**
 * Card Component - Editorial/Sharp Design
 * 
 * Standardized card component for consistent styling across pages.
 * All variants use sharp corners (rounded-none).
 * 
 * Variants:
 * - default: White background, subtle border
 * - muted: Light gray background (zinc-50)
 * - dark: Dark background for contrast sections
 * - outline: Transparent background, visible border only
 * 
 * Padding:
 * - none: No padding
 * - sm: 1rem (16px)
 * - md: 1.5rem (24px)
 * - lg: 2rem (32px)
 */
const Card = ({
  className,
  variant = 'default',
  padding = 'md',
  ref,
  ...props
}: CardProps) => {
  return (
    <div
      ref={ref}
      className={cn(
        // Base styles - sharp corners
        'rounded-none transition-all duration-200',
        
        // Variant styles
        {
          // Default: White background
          'bg-surface border border-border':
            variant === 'default',
          
          // Muted: Light gray background
          'bg-surface-muted border border-border':
            variant === 'muted',
          
          // Dark: For contrast sections
          'bg-surface-dark-elevated border border-border-inverse text-text-inverse':
            variant === 'dark',
          
          // Outline: Border only
          'bg-transparent border border-border-strong':
            variant === 'outline',
        },
        
        // Padding styles
        {
          'p-0': padding === 'none',
          'p-4': padding === 'sm',
          'p-6': padding === 'md',
          'p-8': padding === 'lg',
        },
        
        className
      )}
      {...props}
    />
  );
};

export { Card };
