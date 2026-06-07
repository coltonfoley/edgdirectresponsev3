'use client';

import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import { trackConversion } from '@/lib/analytics';

interface TrackedLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  conversionName?: string;
  eventValue?: number;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function TrackedLink({
  children,
  conversionName = 'book_call_click',
  eventValue = 0,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    trackConversion({
      conversionName,
      value: eventValue,
      linkUrl: target.href,
      linkText: target.textContent?.trim(),
    });
    if (onClick) onClick(e);
  };

  return (
    <Link onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
