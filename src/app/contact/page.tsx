import MapEmbed from '@/components/MapEmbed';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import OpenStatus from '@/components/OpenStatus';
import PageHero from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Taj Mahal Schweinfurt – address, phone, opening hours and map.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Say <em>hello</em>
          </>
        }
        text="Questions about an order, a booking or an allergy? Call us, write to us, or drop by."
        meta={<OpenStatus />}
      />

      <section className="section-tight">
        <div className="container contact-grid">
          <dl className="contact-list" data-reveal>
            <div>
              <dt>Address</dt>
              <dd>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {site.street}
                  <br />
                  {site.zip} {site.city}
                </a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={site.phoneHref}>{site.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt>Opening hours · every day</dt>
              <dd>
                <ul className="hours">
                  <li>
                    <span>Lunch</span>
                    <span>
                      {site.hours[0].open} – {site.hours[0].close}
                    </span>
                  </li>
                  <li>
                    <span>Dinner</span>
                    <span>
                      {site.hours[1].open} – {site.hours[1].close}
                    </span>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
          <MapEmbed light />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Write to us</span>
              <h2 className="h2">
                Send a <em>message</em>
              </h2>
            </div>
            <p className="lede">We usually reply within a day. For same-day orders, calling is quickest.</p>
          </div>
          <div className="contact-form-wrap">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
