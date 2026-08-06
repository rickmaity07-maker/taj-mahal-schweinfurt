import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos of Taj Mahal Schweinfurt – food and atmosphere.',
};

const images = [
  { src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80', alt: 'Indian thali', large: true },
  { src: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae958?w=600&q=80', alt: 'Butter chicken' },
  { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80', alt: 'Curry dishes' },
  { src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80', alt: 'Paneer dish' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', alt: 'Restaurant interior' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80', alt: 'Dining atmosphere', large: true },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80', alt: 'Table setting' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Plated dish' },
  { src: 'https://images.unsplash.com/photo-1579027980758-26928a1f8911?w=600&q=80', alt: 'Private dining' },
];

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>A glimpse into our food and atmosphere</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream-dark)' }}>
        <div className="container">
          <div className="gallery-grid">
            {images.map((img) => (
              <div key={img.src} className={`gallery-item${img.large ? ' large' : ''}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Experience it in person</h2>
          <p>Am Zeughaus 28, 97421 Schweinfurt</p>
          <Link href="/order#reservation" className="btn btn-primary">
            Book a Table
          </Link>
        </div>
      </section>
    </>
  );
}