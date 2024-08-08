import Link from 'next/link';
import React from 'react';

interface IconButtonProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  colorClass?: string; // Optional Tailwind color class
}

export default function IconButton({ href, icon: Icon, colorClass }: IconButtonProps) {
  return (
    <Link href={href} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer" className="flex items-center">
        <Icon className={`mr-2 ${colorClass}`} />
      </a>
    </Link>
  );
}
