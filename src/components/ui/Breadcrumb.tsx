import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { generateBreadcrumbSchema } from '@/lib/schema';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  includeSchema?: boolean; // Option to include JSON-LD schema (default: true)
}

/**
 * Breadcrumb Component - Server Component
 * 
 * Navigation breadcrumb showing page hierarchy.
 * Includes JSON-LD structured data for SEO.
 * 
 * UX Impact:
 * - Clear navigation path for users
 * - Clickable parent pages for easy back-navigation
 * - Screen reader accessible
 * 
 * SEO Impact:
 * - BreadcrumbList schema for rich snippets
 * - Internal linking for crawlability
 * - Site structure clarity for search engines
 * 
 * AI Impact:
 * - Clear page hierarchy helps AI understand content relationships
 * - Structured data enables better entity extraction
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
export function Breadcrumb({ items, className, includeSchema = true }: BreadcrumbProps) {
  // Build schema items (including Home)
  const schemaItems = [
    { name: 'Home', url: '/' },
    ...items.map(item => ({ name: item.label, url: item.href })),
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(schemaItems);

  return (
    <>
      {/* JSON-LD Structured Data */}
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {/* Visual Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={cn(
          'flex flex-wrap items-center gap-2 text-sm text-inherit',
          className
        )}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* Home Link */}
        <div itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link
            href="/"
            itemProp="item"
            className="flex items-center gap-1 transition-colors hover:text-edg-brand-text"
          >
            <Home className="h-4 w-4" />
            <span itemProp="name" className="sr-only">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </div>

        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight className="h-4 w-4 text-current opacity-60" />
            {item.href ? (
              <Link
                href={item.href}
                itemProp="item"
                className="transition-colors hover:text-edg-brand-text"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name" className="font-medium text-current" aria-current="page">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </div>
        ))}
      </nav>
    </>
  );
}
