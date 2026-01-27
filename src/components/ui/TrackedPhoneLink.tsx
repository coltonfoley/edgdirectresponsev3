"use client";

import { ReactNode } from "react";

interface TrackedPhoneLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    conversionName?: string;
}

export function TrackedPhoneLink({
    children,
    conversionName = "phone_click",
    onClick,
    ...props
}: TrackedPhoneLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (typeof window !== "undefined" && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: "conversion_event",
                conversion_name: conversionName,
                value: 0,
            });
        }
        if (onClick) onClick(e);
    };

    return (
        <a onClick={handleClick} {...props}>
            {children}
        </a>
    );
}
