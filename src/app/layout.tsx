import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Taj Mahal Schweinfurt – Indian Restaurant',
    template: '%s – Taj Mahal Schweinfurt',
  },
  description:
    'Taj Mahal in Schweinfurt – Indian specialties, freshly prepared. Order online, pickup or delivery. Am Zeughaus 28.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}