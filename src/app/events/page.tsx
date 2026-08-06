import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events & Experiences',
  description: 'Private dining and special occasions at Taj Mahal Schweinfurt.',
};

export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Events &amp; Experiences</h1>
          <p>Private parties and special occasions</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Celebrate</span>
            <h2 className="section-title">Private Dining</h2>
            <p className="section-desc">
              Birthdays, family gatherings and larger groups – we are happy to help.
            </p>
          </div>
          <div className="events-grid">
            <article className="event-card">
              <div className="event-date">
                <span className="day">—</span>
                <span className="month">Book</span>
              </div>
              <div className="event-body">
                <h3>Group Bookings</h3>
                <p>
                  For larger parties and special wishes, contact us for a tailored offer.
                </p>
                <span className="event-meta">+49 9721 24747 · tajmahal2022@gmail.com</span>
              </div>
            </article>
            <article className="event-card">
              <div className="event-date">
                <span className="day">—</span>
                <span className="month">Daily</span>
              </div>
              <div className="event-body">
                <h3>Lunch &amp; Dinner Service</h3>
                <p>
                  Open every day 11:00–14:30 and 17:00–22:30. Pickup and free delivery available.
                </p>
                <span className="event-meta">Am Zeughaus 28, 97421 Schweinfurt</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Want to book an event?</h2>
          <p>Call us or send a message – we will get back to you.</p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}