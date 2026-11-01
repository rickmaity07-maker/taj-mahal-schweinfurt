'use client';

import Link from 'next/link';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="nf">
      <div>
        <p className="nf-num">Oh.</p>
        <h1>Something went wrong on our side</h1>
        <p>Please try again. If it keeps happening, call us on +49 9721 24747 and we&apos;ll take your order by phone.</p>
        <div className="actions">
          <button type="button" className="btn btn-ink" onClick={reset}>
            Try again
          </button>
          <Link href="/" className="btn btn-ghost">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
