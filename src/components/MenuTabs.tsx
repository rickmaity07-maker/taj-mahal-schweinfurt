'use client';

import { useState } from 'react';
import { menuCategories } from '@/lib/menu-data';

export default function MenuTabs() {
  const [active, setActive] = useState('breakfast');

  return (
    <div>
      <div className="menu-tabs">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={active === cat.id ? 'menu-tab active' : 'menu-tab'}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {menuCategories
        .filter((cat) => cat.id === active)
        .map((cat) => (
          <div key={cat.id} className="menu-panel active" style={{ display: 'block' }}>
            <div className="menu-grid">
              {cat.items.map((item) => (
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
  );
}