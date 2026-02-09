import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  icon: LucideIcon;
  variant?: 'default' | 'brand' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * IconWrapper Component - Editorial/Sharp Design
 * 
 * Consistent icon container for feature lists, cards, and sections.
 * All variants use sharp corners (rounded-none).
 * 
 * Variants:
 * - default: Bordered square, hover invert effect
 * - brand: Mint accent background
 * - dark: For use on dark backgrounds
 * 
 * Sizes:
 * - sm: 2rem (32px) - Compact lists
 * - md: 2.5rem (40px) - Standard features
 * - lg: 3rem (48px) - Prominent icons
 */
const IconWrapper = ({
  icon: Icon,
  variant = 'default',
  size = 'md',
  className,
}: IconWrapperProps) => {
  return (
    <div
      className={cn(
        // Base styles - sharp corners, flex center
        'flex items-center justify-center shrink-0 rounded-none transition-all duration-200',
        
        // Variant styles
        {
          // Default: Bordered with hover invert
          'border border-border-strong hover:bg-edg-dark hover:border-edg-dark hover:text-white':
            variant === 'default',
          
          // Brand: Mint accent
          'bg-edg-brand/10 border border-edg-brand/20':
            variant === 'brand',
          
          // Dark: For dark backgrounds
          'bg-white/10 border border-white/20 text-white':
            variant === 'dark',
        },
        
        // Size styles
        {
          'h-8 w-8': size === 'sm',
          'h-10 w-10': size === 'md',
          'h-12 w-12': size === 'lg',
        },
        
        className
      )}
    >
      <Icon 
        className={cn(
          'transition-colors duration-200',
          {
            'h-4 w-4': size === 'sm',
            'h-5 w-5': size === 'md',
            'h-6 w-6': size === 'lg',
          }
        )} 
      />
    </div>
  );
};

export { IconWrapper };
