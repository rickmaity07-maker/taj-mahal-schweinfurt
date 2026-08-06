import Link from 'next/link';
import { menuCategories } from '@/lib/menu-data';

export default function MenuPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Fresh ingredients · Indian spices · Prepared daily</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream-dark)' }}>
        <div className="container">
          <div className="css-tabs">
            {menuCategories.map((tab, i) => (
              <input
                key={tab.id}
                type="radio"
                name="menu-tab"
                id={`tab-${tab.id}`}
                className="css-tab-input"
                defaultChecked={i === 0}
              />
            ))}

            <div className="menu-tabs">
              {menuCategories.map((tab) => (
                <label key={tab.id} htmlFor={`tab-${tab.id}`} className="menu-tab css-tab-label">
                  {tab.label}
                </label>
              ))}
            </div>

            {menuCategories.map((tab) => (
              <div key={tab.id} className={`css-tab-panel panel-${tab.id}`}>
                <div className="menu-grid">
                  {tab.items.map((item) => (
                    <article key={item.name} className="menu-item">
                      <div className="menu-item-img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="menu-item-body">
                        <div className="menu-item-header">
                          <h3>{item.name}</h3>
                          <span className="price">{item.price}</span>
                        </div>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/order" className="btn btn-primary">
              Order Online / Reserve
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}