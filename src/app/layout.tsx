import type { Metadata, Viewport } from 'next';
import { Fraunces, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import Reveal from '@/components/Reveal';
import RestaurantJsonLd from '@/components/RestaurantJsonLd';
import { siteUrl } from '@/lib/site';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Taj Mahal Schweinfurt – Indian Restaurant',
    template: '%s – Taj Mahal Schweinfurt',
  },
  description:
    'Taj Mahal in Schweinfurt – Indian specialties, freshly prepared. Dine in, order for pickup or free delivery. Am Zeughaus 28.',
  openGraph: {
    title: 'Taj Mahal Schweinfurt – Indian Restaurant',
    description: 'Indian specialties, freshly prepared every day. Am Zeughaus 28, Schweinfurt.',
    type: 'website',
    locale: 'en_GB',
    images: ['/images/photo-1585937421612-70a008356fbe.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#1b1411',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        <Motion />
        <RestaurantJsonLd />
      </body>
    </html>
  );
}
