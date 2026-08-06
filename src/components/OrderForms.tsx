'use client';

import { FormEvent, useState } from 'react';
import Modal from './Modal';

const ORDER_ENDPOINT = 'https://formspree.io/f/YOUR_ORDER_FORM_ID';
const RESERVE_ENDPOINT = 'https://formspree.io/f/YOUR_RESERVE_FORM_ID';

export default function OrderForms() {
  const [modal, setModal] = useState({ open: false, title: '', message: '' });
  const [loading, setLoading] = useState<'order' | 'reserve' | null>(null);

  async function submit(
    e: FormEvent<HTMLFormElement>,
    endpoint: string,
    type: 'order' | 'reserve',
    successTitle: string,
    successMsg: string
  ) {
    e.preventDefault();
    setLoading(type);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      if (endpoint.includes('YOUR_')) {
        await new Promise((r) => setTimeout(r, 600));
        setModal({ open: true, title: successTitle, message: successMsg });
        form.reset();
      } else {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          setModal({ open: true, title: successTitle, message: successMsg });
          form.reset();
        } else {
          setModal({
            open: true,
            title: 'Something went wrong',
            message: 'Please try again or call us directly.',
          });
        }
      }
    } catch {
      setModal({
        open: true,
        title: 'Connection error',
        message: 'Please check your connection or call us.',
      });
    } finally {
      setLoading(null);
    }
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <div className="order-grid">
        <div className="order-card">
          <h3>Place an Order</h3>
          <form
            onSubmit={(e) =>
              submit(
                e,
                ORDER_ENDPOINT,
                'order',
                'Order Received!',
                'Thank you for your order. We will contact you shortly to confirm details and estimated time.'
              )
            }
          >
            <input type="hidden" name="_subject" value="New Order – La Maison" />
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="order-name">Full Name *</label>
                <input id="order-name" name="name" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="order-phone">Phone *</label>
                <input id="order-phone" name="phone" type="tel" required placeholder="+1 234 567 890" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="order-email">Email</label>
              <input id="order-email" name="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="order-type">Order Type *</label>
              <select id="order-type" name="type" required defaultValue="">
                <option value="" disabled>
                  Select...
                </option>
                <option value="pickup">Pickup</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="order-address">Delivery Address</label>
              <input id="order-address" name="address" placeholder="Only if delivery" />
            </div>
            <div className="form-group">
              <label htmlFor="order-items">Your Order *</label>
              <textarea
                id="order-items"
                name="items"
                rows={4}
                required
                placeholder="e.g. 1x Avocado Toast, 2x Cappuccino..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="order-notes">Special Requests</label>
              <textarea id="order-notes" name="notes" rows={2} placeholder="Allergies, preferred time..." />
            </div>
            <button type="submit" className="btn btn-primary btn-full" disabled={loading === 'order'}>
              {loading === 'order' ? 'Sending...' : 'Submit Order'}
            </button>
            <p className="form-note">We will confirm by phone or email shortly.</p>
          </form>
        </div>

        <div className="order-card" id="reservation">
          <h3>Book a Table</h3>
          <form
            onSubmit={(e) =>
              submit(
                e,
                RESERVE_ENDPOINT,
                'reserve',
                'Reservation Requested!',
                'Thank you! Your table reservation request has been received. We will confirm availability soon.'
              )
            }
          >
            <input type="hidden" name="_subject" value="Table Reservation – La Maison" />
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="res-name">Full Name *</label>
                <input id="res-name" name="name" required placeholder="Jane Smith" />
              </div>
              <div className="form-group">
                <label htmlFor="res-phone">Phone *</label>
                <input id="res-phone" name="phone" type="tel" required placeholder="+1 234 567 890" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="res-email">Email *</label>
              <input id="res-email" name="email" type="email" required placeholder="jane@example.com" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="res-date">Date *</label>
                <input id="res-date" name="date" type="date" required min={today} />
              </div>
              <div className="form-group">
                <label htmlFor="res-time">Time *</label>
                <input id="res-time" name="time" type="time" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="res-guests">Number of Guests *</label>
              <select id="res-guests" name="guests" required defaultValue="">
                <option value="" disabled>
                  Select...
                </option>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} Guest{n > 1 ? 's' : ''}
                  </option>
                ))}
                <option value="7+">7+ Guests (we will call you)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="res-notes">Special Requests</label>
              <textarea id="res-notes" name="notes" rows={2} placeholder="Birthday, window seat..." />
            </div>
            <button type="submit" className="btn btn-primary btn-full" disabled={loading === 'reserve'}>
              {loading === 'reserve' ? 'Sending...' : 'Reserve Table'}
            </button>
            <p className="form-note">Large parties may require a deposit.</p>
          </form>
        </div>
      </div>

      <Modal
        open={modal.open}
        title={modal.title}
        message={modal.message}
        onClose={() => setModal((m) => ({ ...m, open: false }))}
      />
    </>
  );
}