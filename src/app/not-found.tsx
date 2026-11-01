import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="nf">
      <div>
        <p className="nf-num">404</p>
        <h1>This page isn&apos;t on the menu</h1>
        <p>The link may be old or mistyped. Here are some places to go instead.</p>
        <div className="actions">
          <Link href="/" className="btn btn-ink">
            Back to home
          </Link>
          <Link href="/menu" className="btn btn-ghost">
            See the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
