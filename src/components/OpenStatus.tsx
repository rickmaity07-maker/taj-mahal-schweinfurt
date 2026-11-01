'use client';

import { useEffect, useState } from 'react';
import { getOpenStatus } from '@/lib/site';

/** Live "open now" indicator. Renders after mount to avoid server/client time mismatch. */
export default function OpenStatus({ fallback = 'Open daily' }: { fallback?: string }) {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`status${status?.open ? ' is-open' : ''}`} aria-live="polite">
      {status ? status.label : fallback}
    </span>
  );
}
