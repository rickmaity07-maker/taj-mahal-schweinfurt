import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Taj Mahal Schweinfurt – address, phone, hours and map.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-block">
                <h3>Address</h3>
                <p>
                  Am Zeughaus 28
                  <br />
                  97421 Schweinfurt
                </p>
              </div>
              <div className="contact-block">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+49972124747">+49 9721 24747</a>
                </p>
              </div>
              <div className="contact-block">
                <h3>Email</h3>
                <p>
                  <a href="mailto:tajmahal2022@gmail.com">tajmahal2022@gmail.com</a>
                </p>
              </div>
              <div className="contact-block">
                <h3>Opening Hours</h3>
                <ul className="hours-list">
                  <li>
                    <span>Mon – Sun</span> <span>11:00 – 14:30</span>
                  </li>
                  <li>
                    <span></span> <span>17:00 – 22:30</span>
                  </li>
                </ul>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Delivery ~45 min · Pickup ~30 min · Delivery fee €0
                </p>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps?q=Am+Zeughaus+28,+97421+Schweinfurt&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Taj Mahal Schweinfurt on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream-dark)', paddingTop: 0 }}>
        <div className="container">
          <div className="section-header" style={{ paddingTop: '3rem' }}>
            <span className="section-label">Message</span>
            <h2 className="section-title">Send us a message</h2>
            <p className="section-desc">Questions about orders, reservations or events?</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}