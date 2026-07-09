import Link from 'next/link';
import type { ButtonHTMLAttributes, ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type ButtonStyleProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  className?: string;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonStyleProps['variant'];
  size?: ButtonStyleProps['size'];
}

export interface LinkButtonProps
  extends Omit<ComponentProps<typeof Link>, 'className'>,
    ButtonStyleProps {}

export function buttonClassName({
  className,
  variant = 'primary',
  size = 'md',
}: ButtonStyleProps = {}) {
  return cn(
    'inline-flex cursor-pointer items-center justify-center font-bold uppercase tracking-wider transition-all duration-200',
    'focus-visible:ring-2 focus-visible:ring-edg-brand-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none',
    'disabled:pointer-events-none disabled:opacity-50',
    {
      'bg-edg-brand text-edg-dark hover:bg-edg-brand/90': variant === 'primary',
      'border border-border-strong bg-transparent text-text-primary hover:bg-surface-muted':
        variant === 'secondary',
      'bg-transparent text-text-primary hover:bg-surface-muted': variant === 'ghost',
      'border border-white/20 bg-transparent text-white hover:bg-white/10':
        variant === 'outline',
      'bg-edg-dark text-white hover:bg-edg-dark/90': variant === 'dark',
    },
    {
      'h-9 px-4 text-xs': size === 'sm',
      'h-11 px-6 py-2 text-sm': size === 'md',
      'h-14 px-8 text-base': size === 'lg',
      'h-11 w-11 p-0': size === 'icon',
    },
    'rounded-none',
    className
  );
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
      className={buttonClassName({ className, variant, size })}
      {...props}
    />
  );
};

function LinkButton({ className, variant, size, ...props }: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={buttonClassName({ className, variant, size })}
    />
  );
}

export { Button, LinkButton };
