'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/order', label: 'Order & Reserve' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const headerClass = [
    'header',
    !isHome ? 'solid' : '',
    isHome && scrolled ? 'scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={headerClass}>
        <div className="container header-inner">
          <Link href="/" className="logo">
            Taj Mahal
          </Link>
          <nav className={`nav${open ? ' open' : ''}`}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link${pathname === l.href ? ' active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/loyalty"
              className={`nav-link nav-cta${pathname === '/loyalty' ? ' active' : ''}`}
            >
              Join Rewards
            </Link>
          </nav>
          <button
            className={`nav-toggle${open ? ' active' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <div
        className={`nav-overlay${open ? ' visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
    </>
  );
}