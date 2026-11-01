'use client';

import { useState } from 'react';
import Modal from './Modal';
import MenuItemPicker, { SelectedItem } from './MenuItemPicker';
import { useFormSubmit } from './useFormSubmit';
import { findMenuItem, formatPrice, parsePrice } from '@/lib/menu-data';
import { reservationSlots, site } from '@/lib/site';

const ORDER_ENDPOINT = 'https://formspree.io/f/YOUR_ORDER_FORM_ID';
const RESERVE_ENDPOINT = 'https://formspree.io/f/YOUR_RESERVE_FORM_ID';

export default function OrderForms() {
  const [items, setItems] = useState<SelectedItem[]>([]);
  const [type, setType] = useState<'pickup' | 'delivery'>('pickup');
  const [today] = useState(() => new Date().toISOString().split('T')[0]);

  const order = useFormSubmit({
    endpoint: ORDER_ENDPOINT,
    success: {
      title: 'Order received',
      message:
        'Thank you. We’ll call or email you shortly to confirm your order and the pickup or delivery time.',
    },
    extend: (data) => {
      const total = items.reduce((s, i) => s + parsePrice(findMenuItem(i.name)?.price ?? '0') * i.qty, 0);
      data.set('items', items.map((i) => `${i.qty}x ${i.name}`).join(', '));
      data.set('subtotal', formatPrice(total));
    },
    onSuccess: () => {
      setItems([]);
      setType('pickup');
    },
  });

  const reserve = useFormSubmit({
    endpoint: RESERVE_ENDPOINT,
    success: {
      title: 'Request received',
      message: 'Thank you. We’ll confirm your table by email or phone as soon as we can.',
    },
  });

  return (
    <>
      <div className="form-layout">
        <div className="panel" id="order" data-reveal>
          <div className="panel-head">
            <span className="panel-step">Order online</span>
            <h2>Pickup or delivery</h2>
            <p>Choose your dishes, tell us where to bring them, and we’ll confirm by phone.</p>
          </div>
          <form onSubmit={order.onSubmit} noValidate={false}>
            <input type="hidden" name="_subject" value="New order – Taj Mahal Schweinfurt" />

            <div className="field">
              <span className="label" id="type-label">
                How would you like it?
              </span>
              <div className="segmented" role="radiogroup" aria-labelledby="type-label">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="pickup"
                    checked={type === 'pickup'}
                    onChange={() => setType('pickup')}
                  />
                  <span>
                    Pickup <small>about 30 min</small>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="delivery"
                    checked={type === 'delivery'}
                    onChange={() => setType('delivery')}
                  />
                  <span>
                    Delivery <small>about 45 min · free</small>
                  </span>
                </label>
              </div>
            </div>

            <div className="field">
              <label htmlFor="order-search">Your dishes</label>
              <MenuItemPicker value={items} onChange={setItems} />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="order-name">Name</label>
                <input id="order-name" name="name" required autoComplete="name" placeholder="Your full name" />
              </div>
              <div className="field">
                <label htmlFor="order-phone">Phone</label>
                <input
                  id="order-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+49 151 2345 6789"
                  pattern="[0-9+()\s\-]{6,}"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="order-email">
                Email <span className="opt">(optional)</span>
              </label>
              <input id="order-email" name="email" type="email" autoComplete="email" placeholder="name@example.de" />
            </div>

            {type === 'delivery' && (
              <div className="field">
                <label htmlFor="order-address">Delivery address</label>
                <input
                  id="order-address"
                  name="address"
                  required
                  autoComplete="street-address"
                  placeholder="Street, number, postcode"
                />
                <p className="field-hint">We deliver within Schweinfurt.</p>
              </div>
            )}

            <div className="field">
              <label htmlFor="order-notes">
                Notes <span className="opt">(optional)</span>
              </label>
              <textarea id="order-notes" name="notes" rows={2} placeholder="Allergies, spice level, preferred time" />
            </div>

            <button type="submit" className="btn btn-accent btn-full" disabled={order.loading || items.length === 0}>
              {order.loading ? 'Sending…' : items.length === 0 ? 'Add a dish to continue' : 'Send order'}
            </button>
            <p className="form-note">Payment on pickup or delivery. We’ll confirm by phone.</p>
          </form>
        </div>

        <div className="side-stack">
          <div className="panel" id="reservation" data-reveal style={{ ['--d' as string]: 1 }}>
            <div className="panel-head">
              <span className="panel-step">Dine with us</span>
              <h2>Book a table</h2>
              <p>Send a request and we’ll confirm availability.</p>
            </div>
            <form onSubmit={reserve.onSubmit}>
              <input type="hidden" name="_subject" value="Table reservation – Taj Mahal Schweinfurt" />
              <div className="field-row">
                <div className="field">
                  <label htmlFor="res-date">Date</label>
                  <input id="res-date" name="date" type="date" required min={today} />
                </div>
                <div className="field">
                  <label htmlFor="res-time">Time</label>
                  <select id="res-time" name="time" required defaultValue="">
                    <option value="" disabled>
                      Choose
                    </option>
                    {reservationSlots().map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="res-guests">Guests</label>
                <select id="res-guests" name="guests" required defaultValue="2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n > 1 ? 'guests' : 'guest'}
                    </option>
                  ))}
                  <option value="9+">9 or more (we’ll call you)</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="res-name">Name</label>
                <input id="res-name" name="name" required autoComplete="name" placeholder="Your full name" />
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="res-phone">Phone</label>
                  <input id="res-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+49 151 2345 6789" />
                </div>
                <div className="field">
                  <label htmlFor="res-email">Email</label>
                  <input id="res-email" name="email" type="email" required autoComplete="email" placeholder="name@example.de" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="res-notes">
                  Occasion or requests <span className="opt">(optional)</span>
                </label>
                <textarea id="res-notes" name="notes" rows={2} placeholder="Birthday, high chair, window table" />
              </div>
              <button type="submit" className="btn btn-ink btn-full" disabled={reserve.loading}>
                {reserve.loading ? 'Sending…' : 'Request table'}
              </button>
            </form>
          </div>

          <div className="info-card" data-reveal style={{ ['--d' as string]: 2 }}>
            <h3>Prefer to call?</h3>
            <ul className="hours">
              <li>
                <span>Phone</span>
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
              {site.hours.map((h, i) => (
                <li key={h.open}>
                  <span>{i === 0 ? 'Lunch' : 'Dinner'}</span>
                  <span>
                    {h.open} – {h.close}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Modal {...order.modal} onClose={order.close} />
      <Modal {...reserve.modal} onClose={reserve.close} />
    </>
  );
}
