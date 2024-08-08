// ui/navigation/main-nav.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { DocumentDuplicateIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/outline';

// Define links here
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: DocumentDuplicateIcon },
  { name: 'Dashboard', href: '/dashboard', icon: UserGroupIcon },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center gap-2 p-3 text-sm font-medium',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
