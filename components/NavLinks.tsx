'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav aria-label="Primary" className="flex gap-6">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`hover:text-[var(--color-brand)] ${
            pathname === href ? 'font-bold text-[var(--color-brand)] underline' : ''
          }`}
          aria-current={pathname === href ? 'page' : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
