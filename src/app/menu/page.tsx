import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from '@/components/Icons';
import MenuNav from '@/components/MenuNav';
import PageHero from '@/components/PageHero';
import { menuCategories, tagLabels } from '@/lib/menu-data';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'The full Taj Mahal Schweinfurt menu – starters, chicken, lamb, vegetarian, breads and desserts.',
};

export default function MenuPage() {
  const count = menuCategories.reduce((n, c) => n + c.items.length, 0);

  return (
    <>
      <PageHero
        eyebrow="The menu"
        title={
          <>
            Our <em>menu</em>
          </>
        }
        text="Fresh ingredients, spices ground in-house, and sauces made every morning."
        meta={
          <>
            <span>{count} dishes</span>
            <span>
              <span className="tag tag-veg">Vegetarian</span>{' '}
              <span className="tag tag-spicy">Spicy</span>
            </span>
          </>
        }
      />

      <MenuNav categories={menuCategories.map(({ id, label }) => ({ id, label }))} />

      {menuCategories.map((cat) => (
        <section key={cat.id} id={cat.id} className="menu-section" aria-labelledby={`h-${cat.id}`}>
          <div className="container">
            <header className="menu-section-head" data-reveal>
              <h2 id={`h-${cat.id}`}>
                {cat.label}
                <span>{String(cat.items.length).padStart(2, '0')}</span>
              </h2>
              <p>{cat.intro}</p>
            </header>
            <div className="menu-list">
              {cat.items.map((item) => (
                <article key={item.name} className="menu-row" data-reveal>
                  <div className="menu-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div>
                    <div className="menu-line">
                      <h3>{item.name}</h3>
                      <span className="dots" aria-hidden="true" />
                      <span className="price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                    {item.tags && (
                      <div className="tags">
                        {item.tags.map((t) => (
                          <span key={t} className={`tag tag-${t}`}>
                            {tagLabels[t]}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="container" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="menu-cta" data-reveal>
          <div>
            <h2>Hungry already?</h2>
            <p>Pickup in about 30 minutes, free delivery in about 45.</p>
          </div>
          <Link href="/order" className="btn btn-accent">
            Start an order <ArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
}
