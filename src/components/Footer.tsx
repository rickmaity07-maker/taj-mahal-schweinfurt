import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-big" aria-hidden="true">
          Taj <em>Mahal</em>
        </p>
        <div className="footer-grid">
          <div>
            <p className="footer-lede">
              Indian cooking in the heart of Schweinfurt. Fresh every day, served at the table, at
              your door, or ready to pick up.
            </p>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>{site.street}</li>
              <li>
                {site.zip} {site.city}
              </li>
              <li>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Get directions ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              <li>Every day</li>
              {site.hours.map((h) => (
                <li key={h.open}>
                  {h.open} – {h.close}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Link href="/order">Order online</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Taj Mahal Schweinfurt</p>
          <nav aria-label="Legal">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Privacy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
