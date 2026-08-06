import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="hero-subtitle">Welcome to</p>
          <h1 className="hero-title">Taj Mahal</h1>
          <p className="hero-tagline">Indian specialties in Schweinfurt</p>
          <div className="hero-buttons">
            <Link href="/menu" className="btn btn-primary">
              View Menu
            </Link>
            <Link href="/order" className="btn btn-outline">
              Order Online
            </Link>
          </div>
        </div>
      </section>

      <section className="about section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-label">Our Story</span>
              <h2 className="section-title">A Place of Warmth &amp; Flavor</h2>
              <p>
                We are pleased to welcome you. Through years of experience we know which
                high-quality ingredients work best. All our meals are prepared completely fresh
                with premium ingredients.
              </p>
              <p>
                Visit us at Am Zeughaus 28 in Schweinfurt, or order online for pickup (~30 min) or
                delivery (~45 min). Delivery fee: €0.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">4.3</span>
                  <span className="stat-label">Google</span>
                </div>
                <div className="stat">
                  <span className="stat-number">0 €</span>
                  <span className="stat-label">Delivery</span>
                </div>
                <div className="stat">
                  <span className="stat-number">45</span>
                  <span className="stat-label">Min delivery</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80"
                alt="Indian dishes at Taj Mahal"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="specials section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">This Week</span>
            <h2 className="section-title">Chef&apos;s Specials</h2>
            <p className="section-desc">Popular dishes from our kitchen.</p>
          </div>
          <div className="specials-grid">
            <article className="special-card">
              <div className="special-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae958?w=600&q=80"
                  alt="Butter Chicken"
                />
                <span className="special-badge">Classic</span>
              </div>
              <div className="special-card-body">
                <h3>Butter Chicken</h3>
                <p>Grilled chicken breast in tomato-butter cream sauce</p>
                <span className="special-price">9,50 €</span>
              </div>
            </article>
            <article className="special-card">
              <div className="special-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80"
                  alt="Lamb Korma"
                />
                <span className="special-badge">Popular</span>
              </div>
              <div className="special-card-body">
                <h3>Lamb Korma</h3>
                <p>Roasted lamb in coconut sauce, Mughlai style</p>
                <span className="special-price">9,90 €</span>
              </div>
            </article>
            <article className="special-card">
              <div className="special-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80"
                  alt="Shahi Paneer"
                />
                <span className="special-badge">Vegetarian</span>
              </div>
              <div className="special-card-body">
                <h3>Shahi Paneer</h3>
                <p>Homemade cheese in coconut, almond and cream sauce</p>
                <span className="special-price">14,50 €</span>
              </div>
            </article>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/menu" className="btn btn-outline-dark">
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Coming Up</span>
            <h2 className="section-title">Events &amp; Experiences</h2>
            <p className="section-desc">Private dining and special occasions.</p>
          </div>
          <div className="events-grid">
            <article className="event-card">
              <div className="event-date">
                <span className="day">—</span>
                <span className="month">Book</span>
              </div>
              <div className="event-body">
                <h3>Private Parties</h3>
                <p>Larger groups and special occasions – contact us for a custom offer.</p>
                <span className="event-meta">Call +49 9721 24747</span>
              </div>
            </article>
            <article className="event-card">
              <div className="event-date">
                <span className="day">—</span>
                <span className="month">Daily</span>
              </div>
              <div className="event-body">
                <h3>Lunch &amp; Dinner</h3>
                <p>Open daily 11:00–14:30 and 17:00–22:30. Pickup and delivery available.</p>
                <span className="event-meta">Am Zeughaus 28, Schweinfurt</span>
              </div>
            </article>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/events" className="btn btn-outline-dark">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      <section className="loyalty section">
        <div className="container">
          <span className="section-label">Rewards</span>
          <h2 className="section-title">Taj Mahal Rewards</h2>
          <p className="section-desc">
            Earn points with every visit. Unlock free dishes and exclusive offers.
          </p>
          <div className="loyalty-perks">
            <div className="perk">
              <div className="perk-icon">★</div>
              <h4>Earn Points</h4>
              <p>1 point for every €1 spent on food &amp; drinks</p>
            </div>
            <div className="perk">
              <div className="perk-icon">🎁</div>
              <h4>Free Dishes</h4>
              <p>Redeem points for complimentary menu items</p>
            </div>
            <div className="perk">
              <div className="perk-icon">🎂</div>
              <h4>Birthday Treat</h4>
              <p>Special dessert on your birthday</p>
            </div>
            <div className="perk">
              <div className="perk-icon">✦</div>
              <h4>VIP Access</h4>
              <p>Early access to offers and events</p>
            </div>
          </div>
          <div className="loyalty-cta">
            <Link href="/loyalty" className="btn btn-gold">
              Join Free Today
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to dine with us?</h2>
          <p>
            Am Zeughaus 28, 97421 Schweinfurt ·{' '}
            <a href="tel:+49972124747">+49 9721 24747</a>
          </p>
          <div className="hero-buttons" style={{ justifyContent: 'center' }}>
            <Link href="/order" className="btn btn-primary">
              Order / Reserve
            </Link>
            <Link href="/contact" className="btn btn-outline-dark">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}