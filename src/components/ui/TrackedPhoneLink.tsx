'use client';

import { ReactNode } from 'react';
import { trackConversion } from '@/lib/analytics';

interface TrackedPhoneLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  conversionName?: string;
}

export function TrackedPhoneLink({
  children,
  conversionName = 'phone_click',
  onClick,
  ...props
}: TrackedPhoneLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    trackConversion({
      conversionName,
      linkUrl: target.href,
      linkText: target.textContent?.trim(),
    });
    if (onClick) onClick(e);
  };

  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
