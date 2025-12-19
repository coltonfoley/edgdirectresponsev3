import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    ({ className, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-16 md:py-24", className)}
                {...props}
            />
        );
    }
);
Section.displayName = "Section";

export { Section };
