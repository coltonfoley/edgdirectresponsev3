'use client';

import VisualEditing from 'next-sanity/visual-editing/client-component';
import { useEffect } from 'react';

export default function SanityVisualEditing() {
    useEffect(() => {
        // Optional: Add any client-side logic if needed
    }, []);

    return <VisualEditing />;
}
