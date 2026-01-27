"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface TrackedLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
    conversionName?: string;
    eventValue?: number;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function TrackedLink({
    children,
    conversionName = "book_call_click",
    eventValue = 0,
    onClick,
    ...props
}: TrackedLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (typeof window !== "undefined" && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: "conversion_event",
                conversion_name: conversionName,
                value: eventValue,
            });
        }
        if (onClick) onClick(e);
    };

    return (
        <Link onClick={handleClick} {...props}>
            {children}
        </Link>
    );
}
