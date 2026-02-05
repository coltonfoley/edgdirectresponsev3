import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  ref?: React.RefObject<HTMLElement | null>;
}

const Section = ({ className, ref, ...props }: SectionProps) => {
  return (
    <section ref={ref} className={cn('py-16 md:py-24', className)} {...props} />
  );
};

export { Section };
