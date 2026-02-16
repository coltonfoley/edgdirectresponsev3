import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

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
        'focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center rounded-none font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-edg-brand text-edg-dark hover:bg-edg-brand/90':
            variant === 'primary',
          'border-edg-gray/30 hover:bg-edg-gray/10 text-foreground border bg-transparent':
            variant === 'secondary',
          'hover:bg-edg-gray/10 text-foreground hover:text-foreground/80':
            variant === 'ghost',
          'h-9 px-4 text-sm': size === 'sm',
          'h-10 px-6 py-2': size === 'md',
          'h-12 px-8 text-lg': size === 'lg',
          'h-10 w-10 p-0': size === 'icon',
        },
        className
      )}
      {...props}
    />
  );
};

export { Button };
