import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: { index: false },
};

// Draft text. Have it reviewed before going live.
export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" text="Datenschutzerklärung – how we handle your data." />
      <section className="section-tight">
        <div className="container prose">
          <h2>Who is responsible</h2>
          <p>
            Taj Mahal Schweinfurt, {site.street}, {site.zip} {site.city}. Email:{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>, phone {site.phone}.
          </p>

          <h2>Forms on this website</h2>
          <p>
            When you send an order, a table request, a message or a rewards sign-up, we receive the
            details you enter (such as name, phone, email, address and order). We use them only to
            handle your request and, for rewards members, to manage your points. The forms are
            delivered through our form provider <span className="todo">[e.g. Formspree, Inc.]</span>.
          </p>

          <h2>Map</h2>
          <p>
            Our contact and home pages embed Google Maps. When the map loads, Google receives your IP
            address. See Google&apos;s privacy policy for details.
          </p>

          <h2>Fonts and hosting</h2>
          <p>
            Fonts are served from our own server; no font requests go to Google. Our host stores
            standard server logs (IP address, time, page requested) for security.
          </p>

          <h2>Your rights</h2>
          <ul>
            <li>Access, correction and deletion of your data</li>
            <li>Restriction of processing and data portability</li>
            <li>Objection to processing and withdrawal of consent</li>
            <li>Complaint to a data protection authority</li>
          </ul>
          <p>To use any of these rights, email us at the address above.</p>
        </div>
      </section>
    </>
  );
}
