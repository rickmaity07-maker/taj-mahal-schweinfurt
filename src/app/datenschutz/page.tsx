import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: { index: false },
};

// Draft written to match how this website actually processes data.
// Items marked "todo" must be completed, and the text should be reviewed before going live.
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        text="Datenschutzerklärung – what data this website collects, why, and your rights under the GDPR."
      />
      <section className="section-tight">
        <div className="container prose">
          <h2>1. Controller</h2>
          <p>
            Taj Mahal Schweinfurt, <span className="todo">[owner name]</span>, {site.street}, {site.zip}{' '}
            {site.city}, Germany. Email: <a href={`mailto:${site.email}`}>{site.email}</a>, phone {site.phone}.
          </p>

          <h2>2. Visiting this website</h2>
          <p>
            Our hosting provider <span className="todo">[hosting provider, e.g. Vercel Inc.]</span> processes
            the technical data your browser sends (IP address, date and time, page requested, browser type)
            to deliver the site and keep it secure. Legal basis: Art. 6(1)(f) GDPR (legitimate interest in a
            secure, working website). Server logs are deleted after at most{' '}
            <span className="todo">[14]</span> days.
          </p>
          <p>
            <strong>No cookies, no tracking.</strong> This website sets no cookies and uses no analytics or
            advertising tools. Fonts and all images are served from our own server, so no requests go to
            Google Fonts or image services.
          </p>

          <h2>3. Orders, table requests and messages</h2>
          <p>
            When you send an order, a table request or a message, we process the details you enter: name,
            phone, email, delivery address, the dishes you chose and any notes. We use them only to prepare
            and deliver your order, hold your table, or answer you. Legal basis: Art. 6(1)(b) GDPR
            (performing a contract or steps before one at your request).
          </p>
          <p>
            Your submission is checked by our server and forwarded to us by email through our email provider{' '}
            <span className="todo">[Resend, Inc., USA]</span>, which acts as our processor under a data
            processing agreement. Transfers to the USA rely on the EU–US Data Privacy Framework and/or standard
            contractual clauses. The website itself does not store your submission in a database.
          </p>
          <p>
            We delete order and reservation emails after <span className="todo">[3 months]</span> unless tax
            or commercial law requires us to keep them longer (up to 10 years for accounting records under §
            147 AO / § 257 HGB).
          </p>

          <h2>4. Taj Mahal Rewards</h2>
          <p>
            If you join our rewards programme, we store your name, email, phone number and, if you choose,
            your birthday month, plus the points you collect. Legal basis: your consent, Art. 6(1)(a) GDPR.
            You can withdraw consent at any time by emailing us; we then delete your rewards data. Withdrawal
            does not affect processing that already took place.
          </p>

          <h2>5. Spam protection</h2>
          <p>
            To stop automated spam, our server counts how many forms are sent from the same IP address in a
            short period. This counter is held only in the server&apos;s memory and is discarded after a few
            minutes. Legal basis: Art. 6(1)(f) GDPR.
          </p>

          <h2>6. Google Maps</h2>
          <p>
            Our home and contact pages can show a Google Maps map. It is <strong>not loaded</strong> until you
            click &ldquo;Load map&rdquo;. Only then does your browser connect to Google Ireland Limited, Gordon
            House, Barrow Street, Dublin 4, Ireland, which receives your IP address and may transfer data to
            the USA. Legal basis: your consent, Art. 6(1)(a) GDPR and § 25(1) TDDDG. Details:{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              policies.google.com/privacy
            </a>
            .
          </p>

          <h2>7. Phone and email</h2>
          <p>
            If you call or email us, we use your details to deal with your request. Legal basis: Art. 6(1)(b)
            or (f) GDPR.
          </p>

          <h2>8. Your rights</h2>
          <ul>
            <li>Access to your data (Art. 15 GDPR)</li>
            <li>Correction (Art. 16) and deletion (Art. 17)</li>
            <li>Restriction of processing (Art. 18) and data portability (Art. 20)</li>
            <li>Objection to processing based on legitimate interest (Art. 21)</li>
            <li>Withdrawal of consent at any time (Art. 7(3))</li>
          </ul>
          <p>
            Email <a href={`mailto:${site.email}`}>{site.email}</a> to use any of these rights. You can also
            complain to a supervisory authority. For businesses in Bavaria this is the Bayerisches Landesamt
            für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
          </p>

          <h2>9. Security</h2>
          <p>
            The site is served over HTTPS only. Form data is validated on our server, rate-limited, and never
            written to server logs.
          </p>

          <p style={{ marginTop: '2.5rem', color: 'var(--muted)' }}>
            Last updated: <span className="todo">[date]</span>
          </p>
        </div>
      </section>
    </>
  );
}
