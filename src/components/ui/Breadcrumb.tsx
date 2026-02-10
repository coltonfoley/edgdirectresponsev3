import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb Component - Server Component
 * 
 * Navigation breadcrumb showing page hierarchy.
 * Use on nested pages to show path from home.
 * 
 * @example
 * <Breadcrumb
 *   items={[
 *     { label: 'Systems', href: '/systems' },
 *     { label: 'Pergolas', href: '/systems/pergolas' },
 *     { label: 'Motorized Pergolas' },
 *   ]}
 * />
 */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'flex items-center gap-2 text-sm text-gray-500 flex-wrap',
        className
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-edg-brand-text transition-colors"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-gray-400" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-edg-brand-text transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
