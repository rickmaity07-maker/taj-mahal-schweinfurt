import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false },
};

// Fields marked "todo" must be filled in by the restaurant owner before going live.
export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Impressum" text="Angaben gemäß § 5 DDG" />
      <section className="section-tight">
        <div className="container prose">
          <h2>Anbieter</h2>
          <p>
            Taj Mahal Schweinfurt
            <br />
            Inhaber: <span className="todo">[Name des Inhabers eintragen]</span>
            <br />
            {site.street}
            <br />
            {site.zip} {site.city}
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: <a href={site.phoneHref}>{site.phone}</a>
            <br />
            E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>

          <h2>Umsatzsteuer</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:{' '}
            <span className="todo">[USt-IdNr. eintragen]</span>
          </p>

          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </section>
    </>
  );
}
