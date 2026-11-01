'use client';

import { useState } from 'react';
import { Consent, errorProps, FieldError, Honeypot } from './FormBits';
import Modal from './Modal';
import { GUEST_OPTIONS } from '@/lib/form-options';
import MenuItemPicker, { SelectedItem } from './MenuItemPicker';
import { useFormSubmit } from './useFormSubmit';
import { reservationSlots, site } from '@/lib/site';

export default function OrderForms() {
  const [items, setItems] = useState<SelectedItem[]>([]);
  const [type, setType] = useState<'pickup' | 'delivery'>('pickup');
  const [today] = useState(() => new Date().toISOString().split('T')[0]);

  const order = useFormSubmit({
    endpoint: '/api/order',
    success: {
      title: 'Order received',
      message:
        'Thank you. We’ll call or email you shortly to confirm your order and the pickup or delivery time.',
    },
    extend: () => ({ items }),
    onSuccess: () => {
      setItems([]);
      setType('pickup');
    },
  });

  const reserve = useFormSubmit({
    endpoint: '/api/reservation',
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
            <Honeypot />

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
              <FieldError id="order-search" message={order.errors.items} />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="order-name">Name</label>
                <input id="order-name" name="name" required autoComplete="name" placeholder="Your full name" {...errorProps('order-name', order.errors.name)} />
                <FieldError id="order-name" message={order.errors.name} />
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
                {...errorProps('order-phone', order.errors.phone)} />
                <FieldError id="order-phone" message={order.errors.phone} />
              </div>
            </div>

            <div className="field">
              <label htmlFor="order-email">
                Email <span className="opt">(optional)</span>
              </label>
              <input id="order-email" name="email" type="email" autoComplete="email" placeholder="name@example.de" {...errorProps('order-email', order.errors.email)} />
                <FieldError id="order-email" message={order.errors.email} />
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
                {...errorProps('order-address', order.errors.address)} />
                <FieldError id="order-address" message={order.errors.address} />
                <p className="field-hint">We deliver within Schweinfurt.</p>
              </div>
            )}

            <div className="field">
              <label htmlFor="order-notes">
                Notes <span className="opt">(optional)</span>
              </label>
              <textarea id="order-notes" name="notes" rows={2} placeholder="Allergies, spice level, preferred time" />
            </div>

            <Consent id="order-consent" error={order.errors.consent} />
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
              <Honeypot />
              <div className="field-row">
                <div className="field">
                  <label htmlFor="res-date">Date</label>
                  <input id="res-date" name="date" type="date" required min={today} {...errorProps('res-date', reserve.errors.date)} />
                <FieldError id="res-date" message={reserve.errors.date} />
                </div>
                <div className="field">
                  <label htmlFor="res-time">Time</label>
                  <select id="res-time" name="time" required defaultValue="" {...errorProps('res-time', reserve.errors.time)}>
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
                  {GUEST_OPTIONS.filter((n) => n !== '9+').map((n) => (
                    <option key={n} value={n}>
                      {n} {n === '1' ? 'guest' : 'guests'}
                    </option>
                  ))}
                  <option value="9+">9 or more (we’ll call you)</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="res-name">Name</label>
                <input id="res-name" name="name" required autoComplete="name" placeholder="Your full name" {...errorProps('res-name', reserve.errors.name)} />
                <FieldError id="res-name" message={reserve.errors.name} />
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="res-phone">Phone</label>
                  <input id="res-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+49 151 2345 6789" {...errorProps('res-phone', reserve.errors.phone)} />
                <FieldError id="res-phone" message={reserve.errors.phone} />
                </div>
                <div className="field">
                  <label htmlFor="res-email">Email</label>
                  <input id="res-email" name="email" type="email" required autoComplete="email" placeholder="name@example.de" {...errorProps('res-email', reserve.errors.email)} />
                <FieldError id="res-email" message={reserve.errors.email} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="res-notes">
                  Occasion or requests <span className="opt">(optional)</span>
                </label>
                <textarea id="res-notes" name="notes" rows={2} placeholder="Birthday, high chair, window table" />
              </div>
              <Consent id="res-consent" error={reserve.errors.consent} />
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
