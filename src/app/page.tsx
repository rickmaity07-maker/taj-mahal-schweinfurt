import Link from 'next/link';
import { ArrowRight, Bowl, Gift, Key, Spark } from '@/components/Icons';
import OpenStatus from '@/components/OpenStatus';
import { site } from '@/lib/site';

const signature = [
  {
    name: 'Butter Chicken',
    price: '9,50 €',
    desc: 'Grilled chicken breast in a tomato-butter cream sauce. The dish most guests order twice.',
    img: '/Butter Chicken.webp',
    tag: 'Guest favourite',
  },
  {
    name: 'Lamb Biryani',
    price: '11,90 €',
    desc: 'Fragrant basmati layered with lamb and whole spices.',
    img: '/Lamb Biryani.webp',
    tag: 'From the pot',
  },
  {
    name: 'Palak Paneer',
    price: '8,90 €',
    desc: 'Homemade cheese folded into creamed spinach.',
    img: '/Palak Paneer.webp',
    tag: 'Vegetarian',
  },
  {
    name: 'Chicken Tikka',
    price: '9,50 €',
    desc: 'Marinated overnight, charred in the clay oven.',
    img: '/Chicken Tikka.webp',
    tag: 'Tandoor',
  },
  {
    name: 'Lasan Naan',
    price: '2,70 €',
    desc: 'Garlic naan, baked to order.',
    img: '/Lasan Naan.webp',
    tag: 'Bread',
  },
];

const strip = ['Butter Chicken', 'Lamb Korma', 'Tandoori', 'Biryani', 'Palak Paneer', 'Garlic Naan', 'Mango Lassi', 'Gulab Jamun'];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=2000&q=80"
            alt=""
            fetchPriority="high"
          />
        </div>
        <div className="container hero-inner">
          <div>
            <p className="hero-kicker" data-reveal>
              Indian kitchen · Schweinfurt
            </p>
            <h1 className="hero-title" data-reveal style={{ ['--d' as string]: 1 }}>
              Taj Mahal
              <em>slow-cooked, fresh daily.</em>
            </h1>
            <p className="hero-text" data-reveal style={{ ['--d' as string]: 2 }}>
              Curries simmered in-house, breads from the clay oven and spices ground for each dish.
              Eat with us at Am Zeughaus, pick up in thirty minutes, or have it delivered free.
            </p>
            <div className="hero-actions" data-reveal style={{ ['--d' as string]: 3 }}>
              <Link href="/order" className="btn btn-accent">
                Order online <ArrowRight />
              </Link>
              <Link href="/menu" className="btn btn-light">
                See the menu
              </Link>
            </div>
          </div>

          <aside className="hero-card" data-reveal style={{ ['--d' as string]: 4 }}>
            <dl>
              <div>
                <dt>Today</dt>
                <dd>
                  <OpenStatus />
                </dd>
              </div>
              <div>
                <dt>Find us</dt>
                <dd>
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {site.street}, {site.city}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Call</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Delivery</dt>
                <dd>Free · about 45 min</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <div className="strip" aria-hidden="true">
        <div className="strip-track">
          {[...strip, ...strip].map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container story-grid">
          <div className="story-media" data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="img-a"
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80"
              alt="Warmly lit dining room set for dinner"
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="img-b" src="/Lamb Korma.webp" alt="Lamb korma in a copper bowl" loading="lazy" />
            <div className="seal">
              <strong>{site.rating}</strong>
              <span>on Google</span>
            </div>
          </div>
          <div className="story-text" data-reveal style={{ ['--d' as string]: 1 }}>
            <span className="eyebrow">Our kitchen</span>
            <h2 className="h2">
              Cooked the way it&apos;s <em>cooked at home.</em>
            </h2>
            <p className="lede">
              Years of cooking have taught us which ingredients matter. Everything is prepared fresh,
              to order, with no shortcuts on the sauces.
            </p>
            <p>
              Come in for a long dinner with friends, a quick weekday lunch, or call ahead and we&apos;ll
              have your order packed and warm when you arrive.
            </p>
            <div className="facts">
              <div className="fact">
                <strong>30</strong>
                <span>min for pickup</span>
              </div>
              <div className="fact">
                <strong>0 €</strong>
                <span>delivery fee</span>
              </div>
              <div className="fact">
                <strong>7</strong>
                <span>days a week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dishes-section">
        <div className="container">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Signature dishes</span>
              <h2 className="h2">
                Where most guests <em>start.</em>
              </h2>
            </div>
            <p className="lede">
              Five plates that show what our kitchen does best. The full menu has more than thirty others.
            </p>
          </div>
          <div className="dish-grid">
            {signature.map((d, i) => (
              <article className="dish" key={d.name} data-reveal style={{ ['--d' as string]: i }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.img} alt={d.name} loading="lazy" />
                <div className="dish-body">
                  <span className="tag">{d.tag}</span>
                  <h3>{d.name}</h3>
                  <div className="dish-row">
                    <p>{d.desc}</p>
                    <span className="dish-price">{d.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="dish-foot">
            <p>Vegetarian and spicy dishes are marked on the menu.</p>
            <Link href="/menu" className="btn btn-ink">
              Browse the full menu <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ways">
          <div className="ways-head" data-reveal>
            <span className="eyebrow">Three ways to eat</span>
            <h2 className="h2">
              At our table, <em>or yours.</em>
            </h2>
            <p className="lede">Same kitchen, same care, whichever you pick.</p>
          </div>
          <ol className="ways-list">
            <li data-reveal>
              <span className="ways-num">i.</span>
              <div>
                <h3>Dine in</h3>
                <p>Lunch and dinner every day. Larger groups, birthdays and family dinners are welcome.</p>
                <Link href="/order#reservation" className="text-link">
                  Reserve a table <ArrowRight className="" />
                </Link>
              </div>
              <span className="ways-time">7 days</span>
            </li>
            <li data-reveal>
              <span className="ways-num">ii.</span>
              <div>
                <h3>Pickup</h3>
                <p>Order online or by phone and collect from Am Zeughaus 28.</p>
                <Link href="/order" className="text-link">
                  Order for pickup
                </Link>
              </div>
              <span className="ways-time">~30 min</span>
            </li>
            <li data-reveal>
              <span className="ways-num">iii.</span>
              <div>
                <h3>Delivery</h3>
                <p>Delivered hot to your door in Schweinfurt, with no delivery fee.</p>
                <Link href="/order" className="text-link">
                  Order delivery
                </Link>
              </div>
              <span className="ways-time">~45 min</span>
            </li>
          </ol>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="rewards-band" data-reveal>
            <div>
              <span className="eyebrow">Taj Mahal Rewards</span>
              <h2 className="h2">
                Every euro <em>counts.</em>
              </h2>
              <p className="lede">
                One point for every euro you spend. Free to join, and your points never expire.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/loyalty" className="btn btn-ink">
                  Join for free <ArrowRight />
                </Link>
              </div>
            </div>
            <div className="perks">
              <div className="perk">
                <h4>
                  <Spark /> Earn points
                </h4>
                <p>1 point per €1 on food and drinks.</p>
              </div>
              <div className="perk">
                <h4>
                  <Bowl /> Free dishes
                </h4>
                <p>Redeem points for dishes from the rewards menu.</p>
              </div>
              <div className="perk">
                <h4>
                  <Gift /> Birthday dessert
                </h4>
                <p>A sweet on us during your birthday month.</p>
              </div>
              <div className="perk">
                <h4>
                  <Key /> Early access
                </h4>
                <p>Hear about seasonal specials first.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section visit" style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container visit-grid">
          <div className="visit-info" data-reveal>
            <div>
              <span className="eyebrow">Visit us</span>
              <h2 className="h2">
                Am Zeughaus, <em>in the old town.</em>
              </h2>
            </div>
            <p className="visit-address">
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                {site.street}
                <br />
                {site.zip} {site.city}
              </a>
            </p>
            <ul className="hours">
              <li>
                <span>Lunch, every day</span>
                <span>
                  {site.hours[0].open} – {site.hours[0].close}
                </span>
              </li>
              <li>
                <span>Dinner, every day</span>
                <span>
                  {site.hours[1].open} – {site.hours[1].close}
                </span>
              </li>
              <li>
                <span>Right now</span>
                <OpenStatus />
              </li>
            </ul>
            <div className="visit-actions">
              <Link href="/order#reservation" className="btn btn-accent">
                Book a table
              </Link>
              <a href={site.phoneHref} className="btn btn-light">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="map-frame" data-reveal style={{ ['--d' as string]: 1 }}>
            <iframe
              src={site.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing Taj Mahal at Am Zeughaus 28, Schweinfurt"
            />
          </div>
        </div>
      </section>
    </>
  );
}
