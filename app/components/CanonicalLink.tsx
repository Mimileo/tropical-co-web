// components/CanonicalLink.tsx
"use client"; 

import { usePathname } from 'next/navigation';

export default function CanonicalLink() {
  const pathname = usePathname(); // Get the current path

  const canonicalUrl = `https://tropicallandscaping.tech${pathname}`;
  

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}
