import Link from 'next/link';
import React from 'react';

interface IconButtonProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  colorClass?: string; // Optional Tailwind color class
  ariaLabel: string; // adding Aria label for accessibility

}

export default function IconButton({ href, icon: Icon, colorClass, ariaLabel: ariaLabel }: IconButtonProps) {
  return (
    <Link href={href} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer" className="flex items-center" aria-label={ariaLabel}>
        <Icon className={`mr-2 ${colorClass}`} />
      </a>
    </Link>
  );
}
