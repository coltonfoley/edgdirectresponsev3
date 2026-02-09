import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

/**
 * Button Component - Editorial/Sharp Design
 * 
 * All buttons use sharp corners (rounded-none) for consistent
 * editorial/technical aesthetic across the site.
 * 
 * Variants:
 * - primary: Mint green background, black text (main CTAs)
 * - secondary: Bordered, transparent background
 * - ghost: No border, hover highlight only
 * - outline: Border with current color, for dark backgrounds
 * - dark: Black background, white text (for light backgrounds)
 * 
 * Sizes:
 * - sm: Compact buttons
 * - md: Standard buttons
 * - lg: Hero/prominent CTAs
 * - icon: Square icon buttons
 */
const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  ref,
  ...props
}: ButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) => {
  return (
    <button
      ref={ref}
      className={cn(
        // Base styles - sharp corners, uppercase tracking
        'inline-flex cursor-pointer items-center justify-center font-bold uppercase tracking-wider transition-all duration-200',
        'focus-visible:ring-2 focus-visible:ring-edg-brand focus-visible:outline-none',
        'disabled:pointer-events-none disabled:opacity-50',
        
        // Variant styles
        {
          // Primary: Mint brand color
          'bg-edg-brand text-edg-dark hover:bg-edg-brand/90':
            variant === 'primary',
          
          // Secondary: Bordered
          'border border-border-strong bg-transparent text-text-primary hover:bg-surface-muted':
            variant === 'secondary',
          
          // Ghost: Minimal
          'bg-transparent text-text-primary hover:bg-surface-muted':
            variant === 'ghost',
          
          // Outline: For dark backgrounds
          'border border-white/20 bg-transparent text-white hover:bg-white/10':
            variant === 'outline',
          
          // Dark: Black bg for light surfaces
          'bg-edg-dark text-white hover:bg-edg-dark/90':
            variant === 'dark',
        },
        
        // Size styles
        {
          'h-9 px-4 text-xs': size === 'sm',
          'h-11 px-6 py-2 text-sm': size === 'md',
          'h-14 px-8 text-base': size === 'lg',
          'h-11 w-11 p-0': size === 'icon',
        },
        
        // Editorial/Sharp: No border radius
        'rounded-none',
        
        className
      )}
      {...props}
    />
  );
};

export { Button };
