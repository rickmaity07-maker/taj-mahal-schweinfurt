'use client';

import { FormEvent, useState } from 'react';
import Modal from './Modal';

const ENDPOINT = 'https://formspree.io/f/YOUR_LOYALTY_FORM_ID';

export default function LoyaltyForm() {
  const [modal, setModal] = useState({ open: false, title: '', message: '' });
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      if (ENDPOINT.includes('YOUR_')) {
        await new Promise((r) => setTimeout(r, 600));
        setModal({
          open: true,
          title: 'Welcome to the Club!',
          message:
            'You are now part of Maison Rewards. Check your email for your member details and first offer.',
        });
        form.reset();
      } else {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          setModal({
            open: true,
            title: 'Welcome to the Club!',
            message: 'Check your email for your member details.',
          });
          form.reset();
        } else {
          setModal({ open: true, title: 'Error', message: 'Please try again.' });
        }
      }
    } catch {
      setModal({ open: true, title: 'Error', message: 'Connection problem. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="order-card">
        <h3>Join Maison Rewards</h3>
        <form onSubmit={onSubmit}>
          <input type="hidden" name="_subject" value="New Loyalty Member – La Maison" />
          <div className="form-group">
            <label htmlFor="loy-name">Full Name *</label>
            <input id="loy-name" name="name" required placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="loy-email">Email *</label>
            <input id="loy-email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="loy-phone">Phone *</label>
            <input id="loy-phone" name="phone" type="tel" required placeholder="+1 234 567 890" />
          </div>
          <div className="form-group">
            <label htmlFor="loy-birthday">Birthday (month &amp; day)</label>
            <input id="loy-birthday" name="birthday" placeholder="e.g. March 15" />
          </div>
          <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
            {loading ? 'Sending...' : 'Join Free'}
          </button>
          <p className="form-note">No spam. Unsubscribe anytime.</p>
        </form>
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