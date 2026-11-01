import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryGrid, { GalleryImage } from '@/components/GalleryGrid';
import { ArrowRight } from '@/components/Icons';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos of Taj Mahal Schweinfurt – our dishes and dining room.',
};

const images: GalleryImage[] = [
  { src: '/Lamb Biryani.webp', alt: 'Lamb biryani' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80', alt: 'Dining room in the evening' },
  { src: '/Butter Chicken.webp', alt: 'Butter chicken' },
  { src: '/Chicken Kashmiri.webp', alt: 'Chicken Kashmiri' },
  { src: '/Palak Ghost.webp', alt: 'Palak ghost' },
  { src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80', alt: 'A table of curries' },
  { src: '/Lamb Tikka.webp', alt: 'Lamb tikka from the tandoor' },
  { src: '/Mango Sabji.webp', alt: 'Mango sabji' },
  { src: '/Vegetable Pakora.webp', alt: 'Vegetable pakora' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80', alt: 'Table set for dinner' },
  { src: '/Keema Naan.webp', alt: 'Keema naan' },
  { src: '/Lamb Korma.webp', alt: 'Lamb korma' },
  { src: '/Dal Shorba.webp', alt: 'Dal shorba' },
  { src: '/Gulab Jamun.webp', alt: 'Gulab jamun' },
  { src: '/Chicken Bhagwani.webp', alt: 'Chicken Bhagwani' },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            From our <em>kitchen</em>
          </>
        }
        text="A look at the dishes we cook every day and the room you'll eat them in. Tap a photo to see it larger."
      />

      <section className="section-tight">
        <div className="container">
          <GalleryGrid images={images} />
        </div>
      </section>

      <div className="container">
        <div className="menu-cta" data-reveal>
          <div>
            <h2>Better in person.</h2>
            <p>Am Zeughaus 28, Schweinfurt. Open every day for lunch and dinner.</p>
          </div>
          <Link href="/order#reservation" className="btn btn-accent">
            Book a table <ArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
}
