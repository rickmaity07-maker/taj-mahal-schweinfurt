'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { categories: { id: string; label: string }[] };

/** Sticky category chips that highlight the section currently in view. */
export default function MenuNav({ categories }: Props) {
  const [active, setActive] = useState(categories[0]?.id);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    categories.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [categories]);

  useEffect(() => {
    const chip = barRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    chip?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, [active]);

  return (
    <nav className="menu-nav" aria-label="Menu sections">
      <div className="container menu-nav-inner" ref={barRef}>
        {categories.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            data-id={c.id}
            className={`chip${active === c.id ? ' active' : ''}`}
            aria-current={active === c.id ? 'true' : undefined}
          >
            {c.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
